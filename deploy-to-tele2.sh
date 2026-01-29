#!/bin/bash

# iPhone Comparison App - Tele2 Deployment Script
# 
# Usage: ./deploy-to-tele2.sh [staging|production]
# 
# This script prepares the app for deployment to Tele2.se CDN
# 
# Prerequisites:
# - npm dependencies installed: npm install
# - AWS CLI configured with Tele2 credentials
# - Appropriate permissions for target S3 bucket

set -e  # Exit on error

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
ENVIRONMENT=${1:-staging}
BUILD_DIR="dist"
S3_BUCKET_STAGING="tele2-cdn-staging"
S3_BUCKET_PROD="tele2-cdn"
S3_PREFIX="iphone-comparison"
CDN_URL_STAGING="https://staging-cdn.tele2.se/$S3_PREFIX/"
CDN_URL_PROD="https://cdn.tele2.se/$S3_PREFIX/"

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    echo -e "${RED}Error: Invalid environment. Use 'staging' or 'production'${NC}"
    exit 1
fi

echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"
echo -e "${YELLOW}iPhone Comparison App - Tele2 Deployment${NC}"
echo -e "${YELLOW}Environment: ${ENVIRONMENT}${NC}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"

# Step 1: Type check
echo -e "\n${YELLOW}[1/6] Running type check...${NC}"
npm run typecheck
echo -e "${GREEN}✓ Type check passed${NC}"

# Step 2: Lint
echo -e "\n${YELLOW}[2/6] Running linter...${NC}"
npm run lint
echo -e "${GREEN}✓ Lint check passed${NC}"

# Step 3: Build
echo -e "\n${YELLOW}[3/6] Building for ${ENVIRONMENT}...${NC}"
npm run build:iframe
echo -e "${GREEN}✓ Build complete${NC}"

# Step 4: Verify build
echo -e "\n${YELLOW}[4/6] Verifying build output...${NC}"
if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Error: Build directory not found${NC}"
    exit 1
fi

BUILD_SIZE=$(du -sh "$BUILD_DIR" | cut -f1)
echo -e "${GREEN}✓ Build size: $BUILD_SIZE${NC}"

# Count files
JS_COUNT=$(find "$BUILD_DIR" -name "*.js" | wc -l)
CSS_COUNT=$(find "$BUILD_DIR" -name "*.css" | wc -l)
echo -e "${GREEN}✓ Files: $JS_COUNT JS, $CSS_COUNT CSS${NC}"

# Step 5: Validate HTML
echo -e "\n${YELLOW}[5/6] Validating index.html...${NC}"
if ! grep -q '<div id="root"></div>' "$BUILD_DIR/index.html"; then
    echo -e "${RED}Error: Root element not found in index.html${NC}"
    exit 1
fi
echo -e "${GREEN}✓ HTML validation passed${NC}"

# Step 6: Deploy to CDN
echo -e "\n${YELLOW}[6/6] Deploying to CDN (${ENVIRONMENT})...${NC}"

if [ "$ENVIRONMENT" = "staging" ]; then
    S3_BUCKET=$S3_BUCKET_STAGING
    CDN_URL=$CDN_URL_STAGING
    CACHE_CONTROL="max-age=3600"  # 1 hour for staging
else
    S3_BUCKET=$S3_BUCKET_PROD
    CDN_URL=$CDN_URL_PROD
    CACHE_CONTROL="max-age=31536000"  # 1 year for production
fi

# Upload with appropriate cache headers
echo "Uploading to s3://${S3_BUCKET}/${S3_PREFIX}/"

aws s3 sync "$BUILD_DIR" "s3://${S3_BUCKET}/${S3_PREFIX}/" \
    --delete \
    --cache-control "$CACHE_CONTROL" \
    --exclude ".git/*" \
    --exclude "node_modules/*" \
    --exclude ".DS_Store" \
    --metadata-directive COPY

# Set proper content types
aws s3 cp "s3://${S3_BUCKET}/${S3_PREFIX}/" "s3://${S3_BUCKET}/${S3_PREFIX}/" \
    --recursive \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --metadata-directive REPLACE \
    --cache-control "$CACHE_CONTROL"

aws s3 cp "s3://${S3_BUCKET}/${S3_PREFIX}/" "s3://${S3_BUCKET}/${S3_PREFIX}/" \
    --recursive \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --metadata-directive REPLACE \
    --cache-control "$CACHE_CONTROL"

aws s3 cp "s3://${S3_BUCKET}/${S3_PREFIX}/" "s3://${S3_BUCKET}/${S3_PREFIX}/" \
    --recursive \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html" \
    --metadata-directive REPLACE \
    --cache-control "max-age=3600"  # Shorter cache for HTML

echo -e "${GREEN}✓ Deployment complete${NC}"

# Summary
echo -e "\n${YELLOW}═══════════════════════════════════════════════════════════${NC}"
echo -e "${GREEN}Deployment Summary${NC}"
echo -e "${YELLOW}═══════════════════════════════════════════════════════════${NC}"
echo "Environment: $ENVIRONMENT"
echo "CDN URL: $CDN_URL"
echo "Build size: $BUILD_SIZE"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Test the deployment:"
echo "   curl -I ${CDN_URL}index.html"
echo ""
echo "2. Verify on staging website:"
echo "   https://staging.tele2.se/mobiler/"
echo ""
echo "3. If all looks good, run production deployment:"
echo "   ./deploy-to-tele2.sh production"
echo ""
echo -e "${YELLOW}Integration code:${NC}"
echo ""
echo '<iframe'
echo "  src=\"${CDN_URL}\""
echo '  title="iPhone comparison"'
echo '  style="width: 100%; height: 2000px; border: none;"'
echo '></iframe>'
echo ""
echo -e "${GREEN}✓ Ready to integrate!${NC}"
