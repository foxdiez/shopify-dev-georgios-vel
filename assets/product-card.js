class ProductCard extends HTMLElement {
    constructor() {
        super();

        this.productSwatches = this.querySelectorAll('button[product-swatch]');
        this.variantImages = this.querySelectorAll('a[variant-image]');

        this.productSwatches.forEach(productSwatch => {
            productSwatch.addEventListener('click', this.variantSelector.bind(this));
        });
    }

    variantSelector(event) {
        if (event.target.hasAttribute('product-swatch') && event.target.hasAttribute('variant-id')) {
            this.variantImages.forEach(variantImage => {
                variantImage.classList.remove('selected-product');

                if (event.target.getAttribute('variant-id') == variantImage.getAttribute('variant-id')) {
                    variantImage.classList.add('selected-product');
                    
                    this.productSwatches.forEach(productSwatch => {
                        productSwatch.classList.remove('selected-swatch');
                    });
                    
                    event.target.classList.add('selected-swatch');
                }
            }); 
        }
    }
}

customElements.define('product-card', ProductCard);