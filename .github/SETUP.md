# GitHub Actions Setup for Shopify Theme Deployment

## 🚀 Automated Deployment Setup

This repository uses GitHub Actions to automatically deploy your Shopify theme whenever you push changes.

## 📋 Required Secrets

Set these secrets in your GitHub repository:

### 1. Go to Repository Settings
- Navigate to: **Settings** → **Secrets and variables** → **Actions**
- Click **"New repository secret"**

### 2. Add Required Secrets

#### `SHOPIFY_STORE`
- **Value**: `6pj4zm-c1` (your store handle without .myshopify.com)

#### `SHOPIFY_CLI_THEME_TOKEN`  
- **How to get**: 
  1. Go to Shopify Admin → **Apps** → **Develop apps**
  2. Click **"Create an app"** → Name it "GitHub Actions"
  3. **Configuration** → **Admin API access** → **Configure**
  4. Enable: `themes`, `read_themes`, `write_themes`
  5. **Install app** → Copy the **Access token**

#### `SHOPIFY_PASSWORD` (Alternative method)
- **How to get**:
  1. Shopify Admin → **Apps** → **Manage private apps**
  2. **Create private app** → Enable **Theme templates and theme assets**
  3. Copy the **Password**

## 🔧 How It Works

### Development Workflow
1. **Create feature branch**: `git checkout -b feature/new-design`
2. **Make changes** to theme files
3. **Push branch**: `git push origin feature/new-design`
4. **Create Pull Request** → Deploys to development theme
5. **Review changes** on development site
6. **Merge to main** → Automatically deploys to live site

### File Watching
Actions trigger on changes to:
- `assets/**` (CSS, JS, images)
- `config/**` (settings, data)
- `layout/**` (theme structure)
- `sections/**` (page sections)
- `snippets/**` (reusable components) 
- `templates/**` (page templates)

## 📁 Project Structure

```
roboink-shopify-theme/
├── .github/workflows/          # GitHub Actions
├── assets/                     # CSS, JS, images
├── config/                     # Theme settings
├── layout/                     # Main layout files
├── sections/                   # Reusable sections
├── snippets/                   # Small reusable components
├── templates/                  # Page templates
└── locales/                    # Translation files
```

## 🎯 Deployment Targets

- **Pull Requests** → Development theme (for testing)
- **Main branch** → Live theme (production)

## 🛠️ Local Development

### Setup Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
shopify auth login --store=6pj4zm-c1.myshopify.com
```

### Development Commands
```bash
# Start local development server
shopify theme dev --store=6pj4zm-c1.myshopify.com

# Push to development theme
shopify theme push --development

# Push to live theme (careful!)
shopify theme push --live

# Pull latest from Shopify
shopify theme pull
```

## 🔍 Monitoring Deployments

1. **GitHub Actions tab** → View deployment status
2. **Shopify Admin** → **Online Store** → **Themes** → Check deployment
3. **Store URL**: https://shop.roboinktees.com

## 🚨 Troubleshooting

### Common Issues:
1. **Invalid token**: Regenerate `SHOPIFY_CLI_THEME_TOKEN`
2. **Permission denied**: Check app permissions in Shopify
3. **Theme not found**: Verify store handle in secrets

### Debug Steps:
1. Check **Actions** tab for error logs
2. Verify all required secrets are set
3. Test CLI locally: `shopify theme list`

## 🔐 Security Notes

- **Never commit** API tokens to the repository
- **Use repository secrets** for all sensitive data
- **Limit app permissions** to only what's needed
- **Regular token rotation** recommended

---

**Need help?** Check the Actions logs or Shopify CLI documentation.