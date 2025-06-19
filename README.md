# RoboInk Steampunk Shopify Theme

A custom Shopify theme for RoboInk Tees, featuring steampunk-inspired design elements and modern e-commerce functionality.

## 🎨 Theme Overview

This theme converts the React-based RoboInk site into a native Shopify theme while preserving the beautiful steampunk aesthetic and user experience.

### Design Features
- **Color Palette**: Navy (#1a1a2e), Parchment (#f4e8d0), Copper (#b87333), Brass (#d4a574), Teal (#5a7a7a)
- **Typography**: Roboto Slab for headings, Roboto for body text
- **Animations**: Gear spin effects, steam pulse animations, smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints at 750px and 990px

## 📁 Theme Structure

```
roboink-shopify-theme/
├── assets/              # CSS, JS, images
├── config/              # Theme settings (settings_schema.json)
├── layout/              # Base theme layout (theme.liquid)
├── locales/             # Translation files
├── sections/            # Reusable page sections
│   ├── header.liquid
│   ├── hero.liquid
│   ├── featured-products.liquid
│   ├── product-template.liquid
│   └── footer.liquid
├── snippets/            # Reusable code snippets
│   ├── product-card.liquid
│   ├── icon-*.liquid
│   └── meta-tags.liquid
├── templates/           # Page templates
│   ├── index.json       # Homepage
│   ├── product.liquid   # Product pages
│   ├── collection.liquid
│   └── cart.liquid
└── README.md
```

## 🚀 Installation

### Prerequisites
- Shopify Partner account or store
- Shopify CLI installed
- Theme Kit (optional)

### Steps

1. **Create a development store** (if needed):
   ```bash
   shopify store create --name="RoboInk Dev" --type="development"
   ```

2. **Install the theme**:
   ```bash
   cd roboink-shopify-theme
   shopify theme push --development
   ```

3. **Import products**:
   - Go to Shopify Admin > Products > Import
   - Upload `shopify_products.csv`
   - Review and confirm import

4. **Configure theme settings**:
   - Go to Online Store > Themes
   - Click "Customize" on your theme
   - Configure colors, fonts, and sections

## 🛠️ Customization

### Theme Settings
Access via Shopify Admin > Themes > Customize > Theme Settings:

- **Colors**: Primary colors (Navy, Parchment, Copper, etc.)
- **Typography**: Heading and body fonts
- **Header**: Logo, navigation menu, search settings
- **Footer**: Copyright text, newsletter settings
- **Product Cards**: Rating display, quick add buttons
- **Cart**: Drawer vs page style

### Section Settings
Each section has its own settings:

- **Hero**: Height, content position, images, text
- **Featured Products**: Collection, number of products, layout
- **Collections**: Display style, number per row
- **Product Page**: Share buttons, related products

## 📦 Product Import

The included `shopify_products.csv` contains:
- 31 steampunk-themed products
- Proper categorization and tags
- SEO-optimized titles and descriptions
- Image URLs from the original site

### Post-Import Tasks:
1. Review and adjust inventory levels
2. Add size/color variants as needed
3. Set up collections based on categories
4. Configure shipping rates
5. Set up payment providers

## 🎯 Key Features

### Converted from React
- ✅ Steampunk design preserved
- ✅ Responsive layout maintained
- ✅ Product showcase functionality
- ✅ Search and filtering capabilities
- ✅ Cart functionality

### Shopify Native Features
- ✅ Liquid templating
- ✅ Theme customizer support
- ✅ Multi-currency support
- ✅ SEO optimized
- ✅ Accessibility compliant

## 🔧 Development

### Local Development
```bash
shopify theme dev --store=your-store.myshopify.com
```

### Build Assets
```bash
# Compile SCSS (if using)
sass assets/base.scss assets/base.css --watch

# Minify JavaScript
uglifyjs assets/global.js -o assets/global.min.js
```

### Theme Commands
```bash
# Push to development theme
shopify theme push --development

# Pull latest changes
shopify theme pull

# Create new theme
shopify theme push --unpublished --theme="RoboInk v1.0"
```

## 🚨 Important Notes

1. **Image Hosting**: Product images use external URLs. Consider uploading to Shopify for better performance.

2. **Metafields**: Product ratings/reviews require metafield setup or review app integration.

3. **Custom Functionality**: Some React features (like complex filtering) may need apps or custom development.

4. **Performance**: Enable lazy loading and optimize images for best performance.

## 📝 Migration Checklist

- [ ] Theme installed and activated
- [ ] Products imported successfully
- [ ] Collections created and organized
- [ ] Navigation menus configured
- [ ] Payment providers set up
- [ ] Shipping zones configured
- [ ] Tax settings configured
- [ ] Store policies added
- [ ] Domain connected
- [ ] SSL certificate active

## 🆘 Support

For theme-specific issues:
- Check Shopify theme documentation
- Review Liquid template reference
- Contact Shopify Partner support

For design customization:
- Refer to the original React components in the backup
- Maintain steampunk aesthetic guidelines
- Test across devices and browsers

## 📄 License

This theme is created specifically for RoboInk Tees. All design elements and branding are proprietary.

---

**Theme Version**: 1.0.0  
**Last Updated**: June 2025  
**Compatible With**: Shopify Online Store 2.0