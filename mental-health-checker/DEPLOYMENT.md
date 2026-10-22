# Deployment Guide - Mental Health Checker

## Overview

This guide covers how to deploy the Mental Health Checker application to various platforms.

## Table of Contents

1. [Local Deployment](#local-deployment)
2. [Docker Deployment](#docker-deployment)
3. [Cloud Deployment](#cloud-deployment)
   - [Heroku](#heroku)
   - [AWS](#aws)
   - [Azure](#azure)
   - [Vercel](#vercel)
4. [Production Checklist](#production-checklist)

---

## Local Deployment

See `QUICKSTART.md` for detailed local setup instructions.

### Quick Summary
```bash
cd backend
npm install
npm start
```

Then visit `http://localhost:3000`

---

## Docker Deployment

### Prerequisites
- Docker installed on your machine
- Docker Compose (optional)

### Using Dockerfile

1. **Build the Docker image:**
```bash
docker build -t mental-health-checker .
```

2. **Run the container:**
```bash
docker run -p 3000:3000 mental-health-checker
```

3. **Access the application:**
Open `http://localhost:3000` in your browser

### Using Docker Compose

1. **Start the application:**
```bash
docker-compose up -d
```

2. **View logs:**
```bash
docker-compose logs -f
```

3. **Stop the application:**
```bash
docker-compose down
```

### Docker Commands Reference

```bash
# Build image
docker build -t mental-health-checker:1.0 .

# Run container
docker run -d -p 3000:3000 --name mhc mental-health-checker:1.0

# Stop container
docker stop mhc

# Remove container
docker rm mhc

# View logs
docker logs mhc

# Push to Docker Hub
docker tag mental-health-checker:1.0 yourusername/mental-health-checker:1.0
docker push yourusername/mental-health-checker:1.0
```

---

## Cloud Deployment

### Heroku

**Prerequisites:**
- Heroku account (https://www.heroku.com)
- Heroku CLI installed

**Deployment Steps:**

1. **Login to Heroku:**
```bash
heroku login
```

2. **Create a new Heroku app:**
```bash
heroku create your-app-name
```

3. **Create Procfile:**
```bash
echo "web: cd backend && npm start" > Procfile
```

4. **Deploy with Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku master
```

5. **View your app:**
```bash
heroku open
```

6. **View logs:**
```bash
heroku logs --tail
```

**Heroku Configuration:**

```bash
# Set environment variables
heroku config:set NODE_ENV=production

# View config
heroku config

# Scale dynos
heroku ps:type web=standard
```

### AWS Elastic Beanstalk

**Prerequisites:**
- AWS account
- AWS CLI configured

**Deployment Steps:**

1. **Initialize Elastic Beanstalk:**
```bash
eb init -p "Node.js 18 running on 64bit Amazon Linux 2" --region us-east-1
```

2. **Create environment:**
```bash
eb create mental-health-prod
```

3. **Deploy:**
```bash
eb deploy
```

4. **Open application:**
```bash
eb open
```

**Environment Configuration (`.ebextensions/nodecommand.config`):**
```yaml
option_settings:
  aws:autoscaling:launchconfiguration:
    IamInstanceProfile: aws-elasticbeanstalk-ec2-role
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "cd backend && npm start"
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
```

### Azure App Service

**Prerequisites:**
- Azure account
- Azure CLI

**Deployment Steps:**

1. **Login to Azure:**
```bash
az login
```

2. **Create resource group:**
```bash
az group create --name myResourceGroup --location eastus
```

3. **Create App Service plan:**
```bash
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux
```

4. **Create web app:**
```bash
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name mental-health-checker
```

5. **Deploy code:**
```bash
cd backend
az webapp deployment source config-zip --resource-group myResourceGroup --name mental-health-checker --src <path-to-zip>
```

6. **View logs:**
```bash
az webapp log tail --resource-group myResourceGroup --name mental-health-checker
```

### Vercel (Frontend Only)

**Prerequisites:**
- Vercel account
- Vercel CLI

**For hosting just the frontend:**

1. **Create `vercel.json`:**
```json
{
  "buildCommand": "npm install",
  "outputDirectory": ".",
  "public": true
}
```

2. **Deploy:**
```bash
vercel --prod
```

---

## Production Checklist

### Security
- [ ] Enable HTTPS/SSL certificate
- [ ] Set up environment variables
- [ ] Use secure cookies
- [ ] Add rate limiting
- [ ] Implement CORS properly
- [ ] Sanitize user inputs
- [ ] Use helmet.js for headers
- [ ] Set up firewall rules

### Performance
- [ ] Enable gzip compression
- [ ] Minify CSS and JavaScript
- [ ] Add caching headers
- [ ] Use CDN for static files
- [ ] Enable database indexing
- [ ] Set up load balancing
- [ ] Monitor response times

### Monitoring & Logging
- [ ] Set up error logging
- [ ] Configure access logs
- [ ] Set up monitoring alerts
- [ ] Track performance metrics
- [ ] Monitor server resources
- [ ] Set up uptime monitoring
- [ ] Create incident response plan

### Database
- [ ] Backup database regularly
- [ ] Test backup restoration
- [ ] Enable database encryption
- [ ] Set up database monitoring
- [ ] Implement data retention policies
- [ ] Use connection pooling

### Deployment
- [ ] Tag releases
- [ ] Document breaking changes
- [ ] Create rollback plan
- [ ] Test in staging environment
- [ ] Schedule maintenance windows
- [ ] Document deployment process

### Compliance
- [ ] HIPAA compliance (if in healthcare)
- [ ] GDPR compliance
- [ ] Privacy policy
- [ ] Terms of service
- [ ] Data deletion policies
- [ ] Accessibility (WCAG)

### Maintenance
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Performance profiling
- [ ] Code reviews
- [ ] User feedback collection
- [ ] Regular documentation updates

---

## Environment Setup

### Environment Variables

Create `.env` file:
```
NODE_ENV=production
PORT=3000
DATABASE_URL=your-database-url
MONGODB_URI=your-mongodb-uri
SESSION_SECRET=your-secret-key
```

### Production Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name yourdomain.com;
    
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript application/json;
    
    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    
    # Proxy to Node.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Rollback Procedure

If deployment fails or issues arise:

1. **Using Git:**
```bash
git revert <commit-hash>
git push origin main
```

2. **Using Docker:**
```bash
docker run -p 3000:3000 mental-health-checker:previous-version
```

3. **Using cloud services:**
```bash
# Heroku
heroku releases
heroku rollback v4

# AWS
eb swap CNAME-PreviousVersion
```

---

## Monitoring & Troubleshooting

### Check Server Status
```bash
curl http://yourdomain.com/api/health
```

### View Logs

**Local:**
```bash
npm start
```

**Docker:**
```bash
docker logs container-name
```

**Heroku:**
```bash
heroku logs --tail
```

**AWS:**
```bash
eb logs
```

### Common Issues

**Port Already in Use:**
```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Memory Issues:**
- Increase server RAM
- Enable memory monitoring
- Clear old logs

**Database Connection Issues:**
- Check database URL
- Verify network connectivity
- Check database credentials
- Review firewall rules

---

## Scaling Considerations

### Horizontal Scaling
- Use load balancer (nginx, HAProxy)
- Deploy multiple instances
- Implement session persistence
- Use message queue (Redis, RabbitMQ)

### Vertical Scaling
- Increase server resources (CPU, RAM)
- Optimize code
- Implement caching
- Database optimization

---

## Cost Optimization

- Use free tier for small deployments
- Set up auto-scaling policies
- Use CDN for static files
- Optimize database queries
- Monitor resource usage
- Schedule non-critical backups

---

## Support

For issues during deployment:
1. Check logs
2. Verify environment variables
3. Test connectivity
4. Review error messages
5. Contact cloud provider support

---

*Last Updated: April 9, 2026*
