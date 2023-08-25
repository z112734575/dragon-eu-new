class MegaMenu {
    constructor(el) {

        this.el = el;

        this.content = el.querySelector('.content');

        this.tabs = el.querySelector('.ug-menu-tab-wrap');

        this.activeTab = el.querySelector('.mega-menu-tab.active');

        this.tabs?.addEventListener('mouseover', (e) => {
            if (e.target?.classList.contains('mega-menu-tab')) {
                if(this.activeTab === e.target) return;
                this.activeTab = e.target;
                this.changeTab(e.target);
            }
        });
        el.querySelector('.ug-tab-product-item')?.addEventListener('webkitTransitionEnd', (e) => {
            console.log('end')
        });
        el.querySelector('.ug-tab-ug-tab-collection')?.addEventListener('webkitTransitionEnd', (e) => {
                console.log('end')
            }
        );
    }


    animationByProduct() {
        const tabContent = document.querySelector('.ug-tab-content.active')
        tabContent?.querySelectorAll('.ug-tab-product-item')?.forEach((product, index) => {
            product.style.transitionDelay = `${(index + 1) * 50}ms`;
        })
        tabContent?.querySelectorAll('.ug-tab-collection')?.forEach((collection, index) => {
            collection.style.transitionDelay = `${(index + 1) * 50}ms`;
        })
        tabContent?.classList.add('animate');
    }

    changeTab(e) {
        // 先移除动画
        document.querySelector('.ug-tab-content.active')?.classList.remove('animate');
        document.querySelector('.mega-menu-tab.active')?.classList.remove('active');
        e?.classList.add('active');
        const tabId = e.id;
        document.querySelector('.ug-tab-content.active')?.classList.remove('active');
        document.querySelector(`.ug-tab-content.${tabId}`)?.classList.add('active');
        setTimeout(() => {
            this.animationByProduct();
        }, 100)
        // window.requestAnimationFrame(() => this.animationByProduct());
    }

    isMobile() {
        return window.innerWidth < 768;
    }
}

document.querySelectorAll('.ug-menu-custom').forEach((el) => {
    new MegaMenu(el);
});