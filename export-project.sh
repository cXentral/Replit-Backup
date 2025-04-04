#!/bin/bash

# Create export directory
EXPORT_DIR="cxentral-export"
mkdir -p $EXPORT_DIR

# Create directory structure
mkdir -p $EXPORT_DIR/{client,server,db,config,docs}

# Copy source files with structure preservation
cp -r client/src $EXPORT_DIR/client/
cp -r server/* $EXPORT_DIR/server/
cp -r db/* $EXPORT_DIR/db/

# Copy configuration files
cp package.json package-lock.json tsconfig.json vite.config.ts $EXPORT_DIR/
cp drizzle.config.ts $EXPORT_DIR/
cp postcss.config.js tailwind.config.ts $EXPORT_DIR/

# Copy documentation
cp MIGRATION_GUIDE.md $EXPORT_DIR/docs/
cp README.md $EXPORT_DIR/docs/ 2>/dev/null || echo "# Enterprise Digital Marketplace Platform" > $EXPORT_DIR/docs/README.md

# Create clean .gitignore
cat > $EXPORT_DIR/.gitignore << EOL
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Production
build
dist

# Development
.vscode
.idea
*.swp
*.swo

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Cache
.cache
.npm
.eslintcache

# Build
dist
build
out
.next
EOL

# Create comprehensive environment template
cat > $EXPORT_DIR/.env.template << EOL
# Database Configuration
DATABASE_URL=postgresql://user:password@host:port/database
PGHOST=your-host
PGUSER=your-user
PGPASSWORD=your-password
PGDATABASE=your-database
PGPORT=5432

# Server Configuration
PORT=5000
NODE_ENV=development

# Security
SESSION_SECRET=your-session-secret
COOKIE_SECRET=your-cookie-secret

# API Configuration
API_RATE_LIMIT=100
API_RATE_WINDOW=900000

# Logging
LOG_LEVEL=info
LOG_FORMAT=combined

# Frontend Configuration
VITE_API_URL=http://localhost:5000
VITE_ENABLE_MOCK_API=false
EOL

# Create clean package scripts
cat > $EXPORT_DIR/package.json << EOL
{
  "name": "enterprise-marketplace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "npm run dev:server",
    "dev:client": "cd client && vite",
    "dev:server": "tsx watch server/index.ts",
    "build": "npm run build:client && npm run build:server",
    "build:client": "cd client && vite build",
    "build:server": "tsc -p tsconfig.server.json",
    "start": "node dist/server/index.js",
    "generate": "drizzle-kit generate:pg",
    "migrate": "tsx db/migrate.ts",
    "studio": "drizzle-kit studio",
    "type-check": "tsc --noEmit",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "jest",
    "clean": "rm -rf dist"
  }
}
EOL

# Remove Replit-specific files and development artifacts
rm -rf $EXPORT_DIR/.replit
rm -rf $EXPORT_DIR/.*history
rm -rf $EXPORT_DIR/.breakpoints
rm -rf $EXPORT_DIR/.upm
rm -rf $EXPORT_DIR/.config
rm -rf $EXPORT_DIR/.cache

# Create archive
tar -czf cxentral-export.tar.gz $EXPORT_DIR
rm -rf $EXPORT_DIR

echo "Project exported to cxentral-export.tar.gz"
echo "The export package includes:"
echo "- Complete source code"
echo "- Development and production configurations"
echo "- Database schema and migrations"
echo "- Comprehensive documentation"
echo "- Environment templates"
echo "- Clean project structure"