/* Global JavaScript for RoboInk Theme */

document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize all theme functionality
  initMobileMenu();
  initSearchModal();
  initCartDrawer();
  initProductVariants();
  initQuantitySelectors();
  initSizeCharts();
  initTabs();
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
      mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      });
    }
  }
  
  // Search Modal
  function initSearchModal() {
    const searchToggle = document.querySelector('.header-search-toggle');
    const searchModal = document.querySelector('.search-modal');
    const searchClose = document.querySelector('.search-modal-close');
    
    if (searchToggle && searchModal) {
      searchToggle.addEventListener('click', function() {
        searchModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (searchClose && searchModal) {
      searchClose.addEventListener('click', function() {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
        searchModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Cart Drawer
  function initCartDrawer() {
    const cartToggle = document.querySelector('.header-cart-toggle');
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartClose = document.querySelector('.cart-drawer-close');
    
    if (cartToggle && cartDrawer) {
      cartToggle.addEventListener('click', function() {
        cartDrawer.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (cartClose && cartDrawer) {
      cartClose.addEventListener('click', function() {
        cartDrawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
  
  // Product Variant Selection
  function initProductVariants() {
    const variantSelects = document.querySelectorAll('.variant-select');
    
    variantSelects.forEach(select => {
      select.addEventListener('change', function() {
        updateProductInfo();
      });
    });
  }
  
  function updateProductInfo() {
    // Get selected variant values
    const selectedOptions = {};
    document.querySelectorAll('.variant-select').forEach(select => {
      selectedOptions[select.name] = select.value;
    });
    
    // Find matching variant
    const productData = window.productVariants || [];
    const selectedVariant = productData.find(variant => {
      return Object.keys(selectedOptions).every(option => {
        return variant[option] === selectedOptions[option];
      });
    });
    
    if (selectedVariant) {
      // Update price
      const priceElement = document.querySelector('.product-price .price');
      if (priceElement && selectedVariant.price) {
        priceElement.textContent = formatMoney(selectedVariant.price);
      }
      
      // Update availability
      const availabilityElement = document.querySelector('.product-availability');
      if (availabilityElement) {
        availabilityElement.textContent = selectedVariant.available ? 'In Stock' : 'Out of Stock';
      }
    }
  }
  
  // Quantity Selectors
  function initQuantitySelectors() {
    const quantityMinusButtons = document.querySelectorAll('.quantity-button.minus');
    const quantityPlusButtons = document.querySelectorAll('.quantity-button.plus');
    
    quantityMinusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.parentNode.querySelector('.quantity-input');
        const currentValue = parseInt(input.value) || 1;
        if (currentValue > 1) {
          input.value = currentValue - 1;
        }
      });
    });
    
    quantityPlusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.parentNode.querySelector('.quantity-input');
        const currentValue = parseInt(input.value) || 1;
        input.value = currentValue + 1;
      });
    });
  }
  
  // Size Charts
  function initSizeCharts() {
    const sizeChartTriggers = document.querySelectorAll('[data-open-size-chart]');
    const sizeChartModal = document.querySelector('[data-size-chart-modal]');
    const sizeChartClosers = document.querySelectorAll('[data-close-size-chart]');
    
    sizeChartTriggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
        if (sizeChartModal) {
          sizeChartModal.removeAttribute('hidden');
          document.body.style.overflow = 'hidden';
        }
      });
    });
    
    sizeChartClosers.forEach(closer => {
      closer.addEventListener('click', function() {
        if (sizeChartModal) {
          sizeChartModal.setAttribute('hidden', '');
          document.body.style.overflow = '';
        }
      });
    });
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sizeChartModal && !sizeChartModal.hasAttribute('hidden')) {
        sizeChartModal.setAttribute('hidden', '');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Tab Functionality
  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const tabName = this.getAttribute('data-tab');
        const tabContainer = this.closest('.product-tabs') || document;
        
        // Update buttons
        tabContainer.querySelectorAll('.tab-button').forEach(btn => {
          btn.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update content
        tabContainer.querySelectorAll('.tab-pane').forEach(pane => {
          pane.classList.remove('active');
        });
        const targetPane = tabContainer.querySelector(`[data-tab-content="${tabName}"]`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }
  
  // Utility Functions
  function formatMoney(cents) {
    return (cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
  
  // Add to Cart functionality
  window.addToCart = function(form) {
    const formData = new FormData(form);
    
    fetch('/cart/add.js', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
        // Success - update cart count and show notification
        updateCartCount();
        showCartNotification('Product added to cart!');
      } else {
        // Error
        showCartNotification('Error adding to cart', 'error');
      }
    })
    .catch(error => {
      console.error('Cart error:', error);
      showCartNotification('Error adding to cart', 'error');
    });
    
    return false; // Prevent form submission
  };
  
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
          element.textContent = cart.item_count;
          element.style.display = cart.item_count > 0 ? 'flex' : 'none';
        });
      });
  }
  
  function showCartNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `cart-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'error' ? '#dc3545' : '#28a745'};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.25rem;
      z-index: 1000;
      opacity: 0;
      transform: translateX(100px);
      transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateX(100px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
  
  // Initialize cart count on page load
  updateCartCount();
});

// Theme utilities
window.theme = {
  formatMoney: function(cents) {
    return (cents / 100).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  }
};