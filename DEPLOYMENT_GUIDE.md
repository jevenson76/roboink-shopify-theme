# RoboInk Shopify Theme Deployment Guide

## 📋 Pre-Deployment Checklist

### 1. Shopify Store Setup
- [ ] Create Shopify store or use existing one
- [ ] Install Shopify CLI: `npm install -g @shopify/cli`
- [ ] Have store admin access credentials ready

### 2. Theme Files Ready
- [ ] All theme files in `/roboink-shopify-theme/` directory
- [ ] Product CSV file: `shopify_products.csv`
- [ ] Assets properly referenced

## 🚀 Step-by-Step Deployment

### Step 1: Authenticate with Shopify
```bash
shopify auth login --store=your-store-name.myshopify.com
```

### Step 2: Navigate to Theme Directory
```bash
cd /home/jevenson/roboink-shopify-theme
```

### Step 3: Push Theme to Shopify
```bash
# For development preview
shopify theme push --development

# For live theme (be careful!)
shopify theme push --live

# For unpublished theme
shopify theme push --unpublished --theme="RoboInk Steampunk v1.0"
```

### Step 4: Import Products

1. **Access Shopify Admin**
   - Go to: `your-store.myshopify.com/admin`
   - Navigate to: Products > All products

2. **Import Products**
   - Click "Import"
   - Upload `/home/jevenson/roboink.v1/shopify_products.csv`
   - Review mappings
   - Confirm import

3. **Verify Import**
   - Check all 31 products imported
   - Review images loaded correctly
   - Confirm prices and descriptions

### Step 5: Create Collections

Create these collections in Shopify Admin > Products > Collections:

1. **Featured** (Manual collection for homepage)
2. **Robots** (Automated: Tag contains "robots")
3. **Vehicles** (Automated: Tag contains "vehicles")
4. **Clockwork Creatures** (Automated: Tag contains "clockwork-creatures")
5. **Gadgetry & Gizmos** (Automated: Tag contains "gadgetry-gizmos")
6. **Typographic Treasures** (Automated: Tag contains "typographic-treasures")
7. **Victorian Vanguard** (Automated: Tag contains "victorian-vanguard")
8. **Retro Futurism** (Automated: Tag contains "retro-futurism")
9. **Skulls** (Automated: Tag contains "skulls")

### Step 6: Configure Navigation

1. **Main Menu** (Online Store > Navigation)
   ```
   - Home (/)
   - Collections (/collections)
     - Robots (/collections/robots)
     - Vehicles (/collections/vehicles)
     - Clockwork Creatures (/collections/clockwork-creatures)
     - More categories...
   - About (/pages/about)
   - Contact (/pages/contact)
   - Custom Designs (/pages/custom-requests)
   ```

2. **Footer Menu**
   ```
   - About Us
   - Contact
   - Shipping Policy
   - Return Policy
   - Privacy Policy
   - Terms of Service
   ```

### Step 7: Theme Customization

1. **Go to Theme Customizer**
   - Online Store > Themes
   - Click "Customize" on RoboInk theme

2. **Configure Global Settings**
   ```
   Theme Settings > Colors:
   - Navy: #1a1a2e
   - Parchment: #f4e8d0
   - Copper: #b87333
   - Brass: #d4a574
   - Teal: #5a7a7a
   
   Theme Settings > Typography:
   - Heading: Roboto Slab
   - Body: Roboto
   ```

3. **Homepage Sections**
   - Hero: Add background image, update text
   - Featured Products: Select "Featured" collection
   - Collections: Verify all showing correctly
   - Custom Section: Update CTA text

### Step 8: Essential Pages

Create these pages in Pages section:

1. **About Page**
   ```markdown
   # About RoboInk Tees
   
   Welcome to RoboInk, where Victorian elegance meets mechanical innovation...
   ```

2. **Custom Requests Page**
   ```markdown
   # Custom Design Requests
   
   Have a unique steampunk vision? We'll bring it to life...
   [Include contact form]
   ```

3. **Policies** (Settings > Policies)
   - Refund policy
   - Privacy policy
   - Terms of service
   - Shipping policy

### Step 9: Payment & Shipping

1. **Payment Providers** (Settings > Payments)
   - Enable Shopify Payments
   - Add alternative payment methods

2. **Shipping** (Settings > Shipping)
   - Set up shipping zones
   - Configure rates
   - Add processing times

3. **Taxes** (Settings > Taxes)
   - Configure based on location
   - Set up tax exemptions if needed

### Step 10: Final Checks

- [ ] Test checkout process
- [ ] Verify mobile responsiveness
- [ ] Check all links working
- [ ] Test search functionality
- [ ] Verify cart operations
- [ ] Review SEO settings
- [ ] Set up Google Analytics
- [ ] Configure email notifications

## 🎉 Go Live!

1. **Preview Your Store**
   ```
   Online Store > Themes > Preview
   ```

2. **Remove Password** (When ready)
   ```
   Online Store > Preferences > Password protection > Disable
   ```

3. **Launch Announcement**
   - Update social media
   - Send email to subscribers
   - Celebrate! 🚀

## 🆘 Troubleshooting

### Common Issues:

1. **Theme won't upload**
   - Check file permissions
   - Verify Shopify CLI is updated
   - Try `shopify theme push --force`

2. **Products missing images**
   - Re-upload images to Shopify
   - Update CSV with Shopify CDN URLs

3. **Styling looks wrong**
   - Clear browser cache
   - Check theme settings
   - Verify CSS file uploaded

### Getting Help:
- Shopify Partner Support: partners.shopify.com
- Theme Documentation: /roboink-shopify-theme/README.md
- Original React Backup: D:/Projects/Repo/RoboInkTees.v1

## 📈 Post-Launch

1. **Monitor Performance**
   - Use Shopify Analytics
   - Set up conversion tracking
   - Monitor page speed

2. **Optimize**
   - A/B test homepage sections
   - Optimize product descriptions
   - Improve site speed

3. **Marketing**
   - Set up email campaigns
   - Configure abandoned cart recovery
   - Launch social media ads

---

**Congratulations!** Your RoboInk Steampunk store is now live on Shopify! 🎩⚙️