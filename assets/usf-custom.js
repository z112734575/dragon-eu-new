// define templates for the Kalles-The4-4.0.0 theme
var isotopet4s = { "itemSelector": ".t4s-product", "layoutMode": "masonry" };
var _usfImageWidths;
var _usfProductImage = `
<div v-if="product.images.length" class="t4s-product-img t4s_ratio" :style="'--aspect-ratioapt:' + _usfGetImageRatio(selectedImage)">
    <img data-pr-img class="t4s-product-main-img lazyloadt4s" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" :data-src="_usfGetOriginImgWithSize(selectedImage.url,'1x1')" :data-widths="'[' + _usfImageWidths + ']'" data-optimumx="1.5" data-sizes="auto" :width="selectedImage.width" :height="selectedImage.height" :alt="selectedImage.alt">
    <span class="lazyloadt4s-loader"></span>
    <div data-replace-img2></div>
</div>
<div v-else class="t4s-product-img t4s_ratio" :style="'--aspect-ratioapt:' + 1">
    <img data-pr-img class="t4s-product-main-img lazyloadt4s" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" :data-src="selectedImageUrl" :data-widths="'[' + _usfImageWidths + ']'" data-optimumx="1.5" data-sizes="auto" :width="selectedImage.width" :height="selectedImage.height" :alt="selectedImage.alt">
    <span class="lazyloadt4s-loader"></span>
    <div data-replace-img2></div>
</div>`;
var _usfProductPrice = `
<div v-if="priceVaries && !product.selectedVariantId" class="t4s-product-price" v-html="displayMinDiscountedPrice + ' - ' + displayMaxDiscountedPrice"></div>
<div v-else-if="hasDiscount" class="t4s-product-price">
  <del v-html="displayPrice"></del><ins v-html="displayDiscountedPrice"></ins>
</div>
<div v-else class="t4s-product-price" v-html="displayDiscountedPrice"></div>`;
var _usfProductAtc = `
<a v-if="isExternal" :href="externalLink" class="t4s-pr-item-btn t4s-pr-addtocart" rel="nofollow" target="_blank"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-external"></use></svg></span><span class="t4s-text-pr" v-html="externalTitle"></span></a>
<a v-else-if="isSoldOut" :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" rel="nofollow"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-link"></use></svg></span><span class="t4s-text-pr" v-html="_usfReadMore"></span></a>
<a v-else-if="isGrouped" :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" rel="nofollow"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span><span class="t4s-text-pr" v-html="_usfViewText"></span></a>
<template v-else-if="isDefault">
      <div v-if="_usfGlobalSettings.show_qty" class="t4s-product-atc-qty"><div data-quantity-wrapper class="t4s-quantity-wrapper t4s-quantity-pr-item"> 
           <button data-quantity-selector data-decrease-qty type="button" class="t4s-quantity-selector is--minus"><svg focusable="false" class="icon icon--minus" viewBox="0 0 10 2" role="presentation"><path d="M10 0v2H0V0z" fill="currentColor"></path></svg></button>
           <input data-quantity-value type="number" class="t4s-quantity-input" step="1" min="1" max="{{cur_qty}}" name="quantity" value="1" size="4" pattern="[0-9]*" inputmode="numeric">
           <button data-quantity-selector data-increase-qty type="button" class="t4s-quantity-selector is--plus"><svg focusable="false" class="icon icon--plus" viewBox="0 0 10 10" role="presentation"><path d="M6 4h4v2H6v4H4V6H0V4h4V0h2v4z" fill="currentColor" fill-rule="evenodd"></path></svg></button>
         </div>
         <a :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" :data-variant-id="selectedVariantForPrice.id" data-action-atc rel="nofollow"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span>
          <span class="t4s-text-pr" v-html="isPreoder ? _usfPreoderText : loc.addToCart"></span>
        </a>
      </div>
   <a v-else :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" :data-variant-id="selectedVariantForPrice.id" data-action-atc rel="nofollow"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span>
    <span class="t4s-text-pr" v-html="isPreoder ? _usfPreoderText : loc.addToCart"></span>
  </a>
</template>
<a v-else-if="_usfGlobalSettings.use_quickshop" :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" rel="nofollow"><span class="t4s-svg-pr-icon" data-action-quickshop><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span><span class="t4s-text-pr" v-html="loc.quickView"></span></a>
<a v-else :href="productUrl" class="t4s-pr-item-btn t4s-pr-addtocart" rel="nofollow"><span class="t4s-svg-pr-icon"><svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-atc"></use></svg></span><span class="t4s-text-pr" v-html="usf.settings.translation.chooseOptions"></span></a>`;
var _usfFilterBodyTemplate = /*inc_begin_filter-body*/
`<!-- Range filter -->
<div v-if="isRange" class="usf-facet-values usf-facet-range">
    <!-- Range inputs -->
    <div class="usf-slider-inputs usf-clear">
        <span class="usf-slider-input__from">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[0]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[0], 0)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
        <span class="usf-slider-div">-</span>
        <span class="usf-slider-input__to">
            <span class="usf-slider-input__prefix" v-html="facet.sliderPrefix" v-if="facet.showSliderInputPrefixSuffix"></span>
            <input :readonly="!hasRangeInputs" :value="rangeConverter(range[1]).toFixed(rangeDecimals)" @change="e => onRangeInput(e, range[1], 1)">
            <span class="usf-slider-input__suffix" v-html="facet.sliderSuffix" v-if="facet.showSliderInputPrefixSuffix"></span>
        </span>
    </div>
	<!-- See API reference of this component at https://docs.sobooster.com/search/storefront-js-api/slider-component -->
    <usf-slider :color="facet.sliderColor" :symbols="facet.sliderValueSymbols" :prefix="facet.sliderPrefix" :suffix="facet.sliderSuffix" :min="facet.min" :max="facet.max" :pips="facet.range[0]" :step="facet.range[1]" :decimals="rangeDecimals" :value="range" :converter="rangeConverter" @input="onRangeSliderInput" @change="onRangeSliderChange"></usf-slider>
</div>
<!-- List + Swatch filter -->
<div v-else ref="values" :class="'usf-facet-values usf-scrollbar usf-facet-values--' + facet.display + (facet.navigationCollections ? ' usf-navigation' : '') + (facet.valuesTransformation ? (' usf-' + facet.valuesTransformation.toLowerCase()) : '') + (facet.circleSwatch ? ' usf-facet-values--circle' : '')" :style="!usf.isMobileFilter && facet.maxHeight ? { maxHeight: facet.maxHeight } : null">
    <!-- Filter options -->                
    <usf-filter-option v-for="o in visibleOptions" :facet="facet" :option="o" :key="o.label"></usf-filter-option>
</div>

<!-- More -->
<div v-if="isMoreVisible" class="usf-more" @click="onShowMore" v-html="loc.more"></div>`
/*inc_end_filter-body*/;

var _usfSearchResultsSkeletonItemTpl = /*inc_begin_search-skeleton-item*/
`<div v-if="view === 'grid'" class="usf-sr-product usf-skeleton">
    <div class="usf-img"></div>
    <div class="usf-meta"></div>
</div>
<div class="usf-sr-product usf-skeleton" v-else>
    <!-- Image column -->
    <div class="usf-img-column">
        <div class="usf-img"></div>
    </div>

    <!-- Info column -->
    <div class="usf-info-column">
        <div class="usf-title"></div>
        <div class="usf-vendor"></div>
        <div class="usf-price-wrapper"></div>
    </div>
</div>`
/*inc_end_search-skeleton-item*/;

var _usfSearchResultsSummaryTpl = /*inc_begin_search-summary*/
`<span class="usf-sr-summary" v-html="loader === true ? '&nbsp;' : usf.utils.format(term ? loc.productSearchResultWithTermSummary : loc.productSearchResultSummary, result.total, usf.utils.encodeHtml(term))"></span>`
/*inc_end_search-summary*/;

var _usfSearchResultsViewsTpl = 
`<div class="usf-views">
    <div data-items="2.2.3" class="t4s-layout-switch-wrapper">
        <div class="t4s-layout__switch is--mobile t4s-d-md-flex t4s-d-md-none">
            <button data-btn-as-a="" data-breakpoint="mobile" data-col="list_t4s" :class="{'is--active': view === 'list'}"  @click.prevent.stop="onNewListViewClick"><span class="t4s_icon_viewlist"></span></button>
            <button data-btn-as-a="" data-breakpoint="mobile" data-col="1" :class="{'is--active': colMobile == 1 && view === 'grid'}" @click.prevent.stop="onMobileGridViewClick(1)"><span class="t4s_icon_view1"></span></button>
            <button data-btn-as-a="" data-breakpoint="mobile" data-col="2":class="{'is--active': colMobile == 2 && view === 'grid'}" @click.prevent.stop="onMobileGridViewClick(2)"><span class="t4s_icon_view2"></span></button>
        </div>
        <div class="t4s-layout__switch is--tablet t4s-d-none t4s-d-md-flex t4s-d-lg-none">
            <button data-btn-as-a="" data-breakpoint="tablet" data-col="list_t4s"  :class="{'is--active': view === 'list'}" @click.prevent.stop="onNewListViewClick"><span class="t4s_icon_viewlist"></span></button>
            <button data-btn-as-a="" data-breakpoint="tablet" data-col="2" :class="{'is--active': colTablet == 2 && view === 'grid'}" @click.prevent.stop="onTabletGridViewClick(2)"><span class="t4s_icon_view2"></span></button>
            <button data-btn-as-a="" data-breakpoint="tablet" data-col="3" :class="{'is--active': colTablet == 3 && view === 'grid'}" @click.prevent.stop="onTabletGridViewClick(3)"><span class="t4s_icon_view3"></span></button>
            <button data-btn-as-a="" data-breakpoint="tablet" data-col="4" :class="{'is--active': colTablet == 4 && view === 'grid'}" @click.prevent.stop="onTabletGridViewClick(4)"><span class="t4s_icon_view4"></span></button>
        </div>
        <div class="t4s-layout__switch is--desktop t4s-d-none t4s-d-lg-flex">
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="list_t4s"  :class="{'is--active': view === 'list'}" @click.prevent.stop="onNewListViewClick"><span class="t4s_icon_viewlist"></span></button>
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="2" :class="{'is--active': colDesktop == 2 && view === 'grid'}" @click.prevent.stop="onDesktopGridViewClick(2)"><span class="t4s_icon_view2"></span></button>
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="3" :class="{'is--active': colDesktop == 3 && view === 'grid'}" @click.prevent.stop="onDesktopGridViewClick(3)"><span class="t4s_icon_view3"></span></button>
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="4" :class="{'is--active': colDesktop == 4 && view === 'grid'}" @click.prevent.stop="onDesktopGridViewClick(4)"><span class="t4s_icon_view4"></span></button>
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="5" :class="{'is--active': colDesktop == 5 && view === 'grid'}" @click.prevent.stop="onDesktopGridViewClick(5)"><span class="t4s_icon_view5"></span></button>
            <button data-btn-as-a="" data-breakpoint="desktop" data-col="6" :class="{'is--active': colDesktop == 6 && view === 'grid'}" @click.prevent.stop="onDesktopGridViewClick(6)"><span class="t4s_icon_view6"></span></button>
        </div>
    </div>
</div>`
;

var _usfSearchResultsSortByTpl = /*inc_begin_search-sortby*/
`<usf-dropdown :placeholder="loc.sort" :value="sortBy" :options="sortByOptions" @input="onSortByChanged"></usf-dropdown>`
/*inc_end_search-sortby*/;

usf.templates = {
    // application
    app: 
`<div id="usf_container" class="usf-zone usf-clear" :class="{'usf-filters-horz': usf.settings.filters.horz}">
    <template v-if="hasFilters">
        <usf-filters class="usf-sr-filters"></usf-filters>
    </template>
    <usf-new-sr></usf-new-sr>
</div>`
,

    // search results
    searchResults: `
<div class="usf-sr-container" :class="{'usf-no-facets': noFacets, 'usf-empty': !loader && !hasResults, 'usf-nosearch': !showSearchBox,'usf-hide-sale': !usf.settings.search.showSale, 'usf-hide-soldout': !usf.settings.search.showSoldOut}">
    <!-- Search form -->
    <form v-if="showSearchBox" action="/search" method="get" role="search" class="usf-sr-inputbox">
        <button type="submit" class="usf-icon usf-icon-search usf-btn"></button>
        <input name="q" autocomplete="off" ref="searchInput" v-model="termModel">
        <button v-if="termModel" class="usf-remove usf-btn" @click.prevent.stop="clearSearch"></button>
    </form>

    <div class="usf-sr-config" v-if="usf.isMobile">
        <div class="usf-sr-config__mobile-filters-wrapper">
            <div class="usf-filters" :class="{'usf-has-filters': !!facetFilters}" @click="onMobileToggle">
                <button class="usf-btn" v-html="loc.filters"></button>
            </div>
            ` + _usfSearchResultsSortByTpl + `
        </div>
        
        ` + _usfSearchResultsSummaryTpl + _usfSearchResultsViewsTpl + `
    </div>
    <div class="usf-sr-config" v-else>
        ` + _usfSearchResultsViewsTpl + _usfSearchResultsSummaryTpl + _usfSearchResultsSortByTpl + `
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && !result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Load previous -->
    <div id="usf-sr-top-loader" :class="{'usf-with-loader':loader === 'prev'}" v-if="(loader === 'prev' || itemsOffset) && loader !== true && hasResults && usf.settings.search.more !== 'page'"></div>
    <div :data-isotopet4s-js="_usf_layout_des != '1' ? JSON.stringify(isotopet4s) : false" :class="(view === \'grid\' ? gridWrapClass : listWrapClass) + \' usf-results usf-clear usf-\' + view">
        <template v-if="loader===true">` + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl + _usfSearchResultsSkeletonItemTpl +
        `</template>
        <template v-else>
            <template v-if="hasResults">
                    <template v-for="p in result.items">
                        <usf-sr-griditem1 v-if="_usf_product_des == '1'" :product="p" :result="result" :key="p.id"></usf-sr-griditem1>
                        <usf-sr-griditem2 v-else-if="_usf_product_des == '2'" :product="p" :result="result" :key="p.id"></usf-sr-griditem2>
                        <usf-sr-griditem3 v-else-if="_usf_product_des == '3'" :product="p" :result="result" :key="p.id"></usf-sr-griditem3>
                        <usf-sr-griditem4 v-else-if="_usf_product_des == '4'" :product="p" :result="result" :key="p.id"></usf-sr-griditem4>
                        <usf-sr-griditem5 v-else-if="_usf_product_des == '5'" :product="p" :result="result" :key="p.id"></usf-sr-griditem5>
                        <usf-sr-griditem6 v-else-if="_usf_product_des == '6'" :product="p" :result="result" :key="p.id"></usf-sr-griditem6>
                    </template>
            </template>
            <template v-else>
                <!-- Empty result -->
                <div class="usf-sr-empty">
                    <div class="usf-icon"></div>
                    <span v-html="term ? usf.utils.format(loc.productSearchNoResults, term) : loc.productSearchNoResultsEmptyTerm"></span>
                    <button v-if="facetFilters" class="usf-btn usf-btn-action" v-html="loc.clearAllFilters" @click="usf.queryRewriter.removeAllFacetFilters"></button>
                </div>
            </template>
        </template>
    </div>

    <usf-sr-banner v-if="result && result.extra && result.extra.banner && result.extra.banner.isBottom" :banner="result.extra.banner"></usf-sr-banner>

    <!-- Paging & load more -->
    <div class="usf-sr-paging" v-if="loader !== true">
        <div class="usf-sr-more" v-if="hasResults && usf.settings.search.more === 'more'">
            <div class="usf-title" v-html="usf.utils.format(loc.youHaveViewed, itemsLoaded, result.total)"></div>
            <div class="usf-progress">
                <div :style="{width: (itemsLoaded * 100 / result.total) + '%'}"></div>
            </div>
            <button v-if="itemsLoaded < result.total" class="usf-load-more" :class="{'usf-with-loader': loader === 'more'}" @click="onLoadMore"><span v-html="loc.loadMore"></span></button>
        </div>
        <usf-sr-pages v-else-if="hasResults && usf.settings.search.more === 'page'" :page="page" :pages-total="pagesTotal" :pages-to-display="4" :side-pages-to-display="1"></usf-sr-pages>
        <div class="usf-sr-loader usf-with-loader" v-else-if="loader === 'more'"></div>
    </div>
</div>
`,
    // Grid view item
    searchResultsGridViewItem1: `
<div class="t4s-product t4s-pr-grid t4s-pr-style1 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
      <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
          `+_usfProductImage+`
        <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
        <div class="t4s-product-btns">
            <div data-replace-quickview></div>
            <div  data-replace-atc data-has-qty></div>
        </div>
        <div class="t4s-product-btns2">
          <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
          <div data-replace-wishlist data-tooltip="right"></div>
           <div data-replace-compare data-tooltip="right"></div>
        </div>
        <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
        <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
      </div>
      <div class="t4s-product-info">
        <div class="t4s-product-info__inner">
            <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
            </div>
           <h3 class="t4s-product-title">
            <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
        </h3>
           `+_usfProductPrice+`
           <!-- Product review -->
            <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
           <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
            <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
            </div>
            <!-- Swatch-->
            <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
           <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
        </div>
          <div class="t4s-product-btns t4s-product-info__btns">
             <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                <span class="t4s-svg-pr-icon">
                    <svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-qv"></use></svg>
                </span>
                <span class="t4s-text-pr" v-html="loc.quickView"></span>
            </a>
            <template v-if="_usfGlobalSettings.enable_atc">
            `+_usfProductAtc+`
            </template>
          </div>
      </div>
    </div>
  </div>
`,
searchResultsGridViewItem2: `
<div class="t4s-product t4s-pr-grid t4s-pr-style2 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
      <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
          `+_usfProductImage+`
        <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
        <div class="t4s-product-btns">
            <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
            <div class="t4s-pr-group-btns">
                <div data-replace-quickview data-tooltip="top"></div>
                <div data-replace-atc data-tooltip="top"></div>
                <div data-replace-wishlist data-tooltip="top"></div>
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <div data-replace-compare data-tooltip="top"></div>
            </div>
        </div>
        
  
        <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
      </div>
      <div class="t4s-product-info">
        <div class="t4s-product-info__inner">
            <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
            </div>
           <h3 class="t4s-product-title">
            <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
        </h3>
           `+_usfProductPrice+`
           <!-- Product review -->
            <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
           <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
            <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
            </div>
            <!-- Swatch-->
            <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
           <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
        </div>
          <div class="t4s-product-btns t4s-product-info__btns">
             <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                <span class="t4s-svg-pr-icon">
                    <svg viewBox="0 0 24 24"><use xlink:href="#t4s-icon-qv"></use></svg>
                </span>
                <span class="t4s-text-pr" v-html="loc.quickView"></span>
            </a>
            <template v-if="_usfGlobalSettings.enable_atc">
            `+_usfProductAtc+`
            </template>
          </div>
      </div>
    </div>
  </div>
`,
    searchResultsGridViewItem3: `
<div class="t4s-product t4s-pr-grid t4s-pr-style3 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
        <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
            `+_usfProductImage+`
            <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
            <div class="t4s-product-btns">
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
                <div data-replace-atc data-has-qty></div>
            </div>
            <div class="t4s-product-btns2">
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <div data-replace-wishlist data-tooltip="left"></div>
                <div data-replace-quickview data-tooltip="left"></div>
                <div data-replace-compare data-tooltip="left"></div>
            </div>

            <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
        </div>
        <div class="t4s-product-info">
            <div class="t4s-product-info__inner">
                <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
                </div>
                <h3 class="t4s-product-title">
                    <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
                </h3>
                `+_usfProductPrice+`
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
                <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
                <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                    <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
                </div>
                <!-- Swatch-->
                <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
            </div>
            <div class="t4s-product-btns t4s-product-info__btns">
                <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                    <span class="t4s-svg-pr-icon">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#t4s-icon-qv"></use>
                        </svg>
                    </span>
                    <span class="t4s-text-pr" v-html="loc.quickView"></span>
                </a>
                <template v-if="_usfGlobalSettings.enable_atc">
                    `+_usfProductAtc+`
                </template>
            </div>
        </div>
    </div>
</div>
`,
searchResultsGridViewItem4: `
<div class="t4s-product t4s-pr-grid t4s-pr-style4 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
        <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
            `+_usfProductImage+`
            <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
            <div class="t4s-product-btns">
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
                <div class="t4s-pr-group-btns">
                    <div data-replace-atc></div>
                    <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                    <div data-replace-wishlist data-tooltip="top-end"></div>
                    <div data-replace-quickview data-tooltip="top-end"></div>
                    <div data-replace-compare data-tooltip="top-end"></div>
                </div>
            </div>
            <div class="t4s-product-btns2">
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <div data-replace-quickview data-tooltip="right"></div>
                <div data-replace-compare data-tooltip="right"></div>
            </div>
            <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
        </div>
        <div class="t4s-product-info">
            <div class="t4s-product-info__inner">
                <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
                </div>
                <h3 class="t4s-product-title">
                    <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
                </h3>
                `+_usfProductPrice+`
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
                <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
                <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                    <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
                </div>
                <!-- Swatch-->
                <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
            </div>
            <div class="t4s-product-btns t4s-product-info__btns">
                <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                    <span class="t4s-svg-pr-icon">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#t4s-icon-qv"></use>
                        </svg>
                    </span>
                    <span class="t4s-text-pr" v-html="loc.quickView"></span>
                </a>
                <template v-if="_usfGlobalSettings.enable_atc">
                    `+_usfProductAtc+`
                </template>
            </div>
        </div>
    </div>
</div>
`,
searchResultsGridViewItem5: `
<div class="t4s-product t4s-pr-grid t4s-pr-style5 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
        <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
            `+_usfProductImage+`
            <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
            
            <div class="t4s-product-btns2">
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <div data-replace-wishlist data-tooltip="left"></div>
                <div data-replace-quickview data-tooltip="left"></div>
                <div data-replace-compare data-tooltip="left"></div>
            </div>
            <div class="t4s-product-btns">
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
                <div data-replace-atc data-has-qty></div>
            </div>

            <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
        </div>
        <div class="t4s-product-info">
            <div class="t4s-product-info__inner">
                <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
                </div>
                <h3 class="t4s-product-title">
                    <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
                </h3>
                `+_usfProductPrice+`
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
                <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
                <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                    <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
                </div>
                <!-- Swatch-->
                <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
            </div>
            <div class="t4s-product-btns t4s-product-info__btns">
                <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                    <span class="t4s-svg-pr-icon">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#t4s-icon-qv"></use>
                        </svg>
                    </span>
                    <span class="t4s-text-pr" v-html="loc.quickView"></span>
                </a>
                <template v-if="_usfGlobalSettings.enable_atc">
                    `+_usfProductAtc+`
                </template>
            </div>
        </div>
    </div>
</div>
`,
searchResultsGridViewItem6: `
<div class="t4s-product t4s-pr-grid t4s-pr-style6 t4s-col-item" :class="['t4s-pr-' + product.id]" :data-product-options="dataProductOptions" :product-selector="product.id" :data-usf-pid="product.id">
    <div @click="onItemClick" @mouseover="onItemHover" @mouseleave="onItemLeave" class="t4s-product-wrapper">
        <div data-cacl-slide class="t4s-product-inner t4s-pr t4s-oh">
            `+_usfProductImage+`
            <div data-product-badge data-sort="sale,new,soldout,preOrder,custom" class="t4s-product-badge"></div>
            
            <div class="t4s-product-btns2">
                <usf-plugin name="searchResultsProductWishList" :data="pluginData"></usf-plugin>
                <div data-replace-wishlist data-tooltip="left"></div>
                <div data-replace-quickview data-tooltip="left"></div>
                <div data-replace-compare data-tooltip="left"></div>
            </div>
            <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '1'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
            <a data-pr-href class="t4s-full-width-link" :href="'/products'+productUrl.split('/products')[1]"></a>
        </div>
        <div class="t4s-product-info">
            <div class="t4s-product-info__inner">
                <div v-if="product.vendor.length > 0 && _usfSectionSettings.show_vendor && usf.settings.search.showVendor" class="t4s-product-vendor">
                    <a :href="usf.platform.baseUrl + '/collections/vendors?q=' + encodeURIComponent(product.vendor)" v-html="product.vendor"></a>
                </div>
                <h3 class="t4s-product-title">
                    <a data-pr-href :href="'/products'+productUrl.split('/products')[1]" v-html="product.title"></a>
                </h3>
                `+_usfProductPrice+`
                <!-- Product review -->
                <usf-plugin name="searchResultsProductReview" :data="pluginData"></usf-plugin>
                <div v-html="descriptionExcerpt != '' ? descriptionExcerpt : _usfListDesc(product.description)" class="t4s-rte"></div>
                <div v-if="colorCount > 0" class="t4s-product-colors" :data-color-options="dataColorOptions">
                    <span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span><span class="t4s-pr-color__item"><span class="t4s-pr-color__value bg_color_ntloading"></span></span>
                </div>
                <!-- Swatch-->
                <usf-plugin name="searchResultsProductSwatch" :data="pluginData"></usf-plugin>
                <div v-if="sizeCount > 0 && _usfGlobalSettings.pr_size_pos == '2'" class="t4s-product-sizes"><span class="t4s-truncate t4s-d-block t4s-w-100" v-html="sizeVariants.join(', ')"></span></div>
                <div class="t4s-product-btns">
                    `+_usfProductAtc+`
                </div>
            </div>
            <div class="t4s-product-btns t4s-product-info__btns">
                <a v-if="_usfGlobalSettings.enable_quickview" :href="'/products'+productUrl.split('/products')[1]" :data-id="product.id" data-tooltip rel="nofollow" class="t4s-pr-item-btn t4s-pr-quickview" data-action-quickview>
                    <span class="t4s-svg-pr-icon">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#t4s-icon-qv"></use>
                        </svg>
                    </span>
                    <span class="t4s-text-pr" v-html="loc.quickView"></span>
                </a>
                <template v-if="_usfGlobalSettings.enable_atc">
                    `+_usfProductAtc+`
                </template>
            </div>
        </div>
    </div>
</div>
`,
    // Search result pages
    searchResultsPages: `
    <div class="t4s-pagination-wrapper t4s-text-center t4s-w-100">
    <nav class="t4s-pagination">
      <ul class="t4s-pagination__list list-unstyled">
          <template v-for="e in elements">
              <li v-if="e.type === 'prev'"><a href="javascript:void(0)" :title="loc.prevPage" @click="onPrev" class="t4s-pagination__item pagination__item--next pagination__item-arrow">←</a></li>
              <li v-else-if="e.type === 'dots'"><span class="t4s-pagination__item">...</span></li>
              <li v-else-if="e.type === 'page' && e.current"><span class="t4s-pagination__item pagination__item--current">{{e.page}}</span></li>
              <li v-else-if="e.type === 'page' && !e.current"><a href="javascript:void(0)" @click="ev=>onPage(e.page,ev)" :title="usf.utils.format(loc.gotoPage,e.page)" class="t4s-pagination__item link">{{e.page}}</a></li>
              <li v-else-if="e.type === 'next'"><a href="javascript:void(0)" :title="loc.nextPage" @click="onNext" class="t4s-pagination__item pagination__item--prev pagination__item-arrow">→</a></li>
          </template>
      </ul>
    </nav>
  </div>
`,
    // List view item
    searchResultsListViewItem: ``,
    // AddToCart Plugin	
    addToCartPlugin: ``,

    // Preview Plugin
    previewPlugin: ``,

    previewPluginModal: ``,

    searchResultsBanner: /*inc_begin_search-banner*/        
`<div class="usf-sr-banner">
    <a :href="banner.url || 'javascript:void(0)'" :alt="banner.description">
        <img :src="banner.mediaUrl" style="max-width:100%">
    </a>
</div>
`
/*inc_end_search-banner*/,

    ////////////////////////
    // Filter templates
    // facet filters breadcrumb
    filtersBreadcrumb: /*inc_begin_filters-breadcrumb*/
`<div v-if="usf.settings.filterNavigation.showFilterArea && root.facetFilters && root.facets && facetFilterIds.length" class="usf-refineby">
    <!-- Breadcrumb Header -->
    <div class="usf-title usf-clear">
        <span class="usf-pull-left usf-icon usf-icon-equalizer"></span>
        <span class="usf-label" v-html="loc.filters"></span>

        <!-- Clear all -->
        <button class="usf-clear-all usf-btn" v-html="loc.clearAll" @click.prevent.stop="root.removeAllFacetFilters" :aria-label="loc.clearAllFilters"></button>
    </div>

    <!-- Breadcrumb Values -->
    <div class="usf-refineby__body">
        <template v-for="facetId in facetFilterIds" v-if="(facet = root.facets.find(fc => fc.id === facetId)) && (f = root.facetFilters[facetId])">
            <template v-for="queryValStr in f[1]">
                <div class="usf-refineby__item usf-pointer usf-clear" @click.prevent.stop="root.removeFacetFilter(facetId, queryValStr)">
                    <button class="usf-btn"><span class="usf-filter-label" v-html="facet.title + ': '"></span><b v-html="root.formatBreadcrumbLabel(facet, f[0], queryValStr)"></b></button><span class="usf-remove"></span>
                </div>
            </template>
        </template>
    </div>
 </div>`
 /*inc_end_filters-breadcrumb*/,

    // facet filters    
    filters: /*inc_begin_filters*/
// Vert & Horz modes have different render order
`<div class="usf-facets usf-no-select usf-zone" :class="{'usf-facets--mobile':usf.isMobileFilter}">
<!-- Mobile view -->
<template v-if="usf.isMobile">
    <div class="usf-close" @click="onMobileBack(1)"></div>
    <div class="usf-facets-wrapper">
        <!-- Header. shows 'Filters', facet name, etc. -->
        <div class="usf-header">
            <!-- Single facet mode -->
            <template v-if="isSingleFacetMode">
                <div class="usf-title" @click="onMobileBack(0)" v-html="facets[0].title"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clear"></div>
            </template>

            <!-- When a filter is selected -->
            <template v-else-if="mobileSelectedFacet">
                <div class="usf-title usf-back" @click="onMobileBack(0)" v-html="mobileSelectedFacet.title"></div>
                <div v-if="facetFilters && facetFilters[mobileSelectedFacet.id]" class="usf-clear" @click="removeFacetFilter(mobileSelectedFacet.id)" v-html="loc.clear"></div>
                <div v-else-if="mobileSelectedFacet.multiple" class="usf-all" @click="selectFacetFilter(mobileSelectedFacet)" v-html="loc.all"></div>
            </template>

            <!-- When no filter is selected -->
            <template v-else>
                <div class="usf-title" @click="onMobileBack(0)" v-html="loc.filters"></div>
                <div v-if="facetFilters" class="usf-clear" @click="removeAllFacetFilters" v-html="loc.clearAll"></div>
            </template>
        </div>

        <div class="usf-body">
            <!-- Desktop-like filter in mobile -->
            <template v-if="usf.settings.filters.desktopLikeMobile">
                <usf-filter-breadcrumb></usf-filter-breadcrumb>
                
                <!-- Facets body -->
                <div class="usf-facets__body">
                    <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
                </div>
            </template>
            
            <!-- Mobile filter -->
            <template v-else>
                <!-- List all filter options, in single facet mode -->
                <usf-filter v-if="isSingleFacetMode" :facet="facets[0]"></usf-filter>

                <!-- List all filter options, when a filter is selected -->
                <usf-filter v-else-if="mobileSelectedFacet" :facet="mobileSelectedFacet"></usf-filter>

                <!-- List all when there are more than one facet -->
                <template v-else :key="f.id" v-for="f in facets">
                    <template v-if="canShowFilter(f)">
                        <div class="usf-facet-value" @click="onMobileSelectFacet(f)">
                            <span class="usf-title" v-html="f.title"></span>
                            <div v-if="(selectedFilterOptionValues = facetFilters && (ff = facetFilters[f.id]) ? ff[1] : null)" class="usf-dimmed">
                                <span v-for="cf in selectedFilterOptionValues" v-html="formatBreadcrumbLabel(f, f.facetName, cf)"></span>
                            </div>
                        </div>
                    </template>
                </template>
            </template>
        </div>

        <!-- View items -->
        <div class="usf-footer">
            <div @click="onMobileBack(1)" v-html="loc.viewItems"></div>
        </div>
    </div>
</template>

<!-- Desktop view -->
<template v-else>
    <usf-filter-breadcrumb></usf-filter-breadcrumb>
    <!-- Filters Loader -->
    <div v-if="!facets" class="usf-facets__first-loader">
        <template v-for="i in 3">
            <div class="usf-facet"><div class="usf-title usf-no-select"><span class="usf-label"></span></div>
                <div v-if="!usf.settings.filters.horz" class="usf-container"><div class="usf-facet-values usf-facet-values--List"><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div><div class="usf-relative usf-facet-value usf-facet-value-single"><span class="usf-label"></span><span class="usf-value"></span></div></div></div>
            </div>
        </template>
    </div>
    <!-- Facets body -->
    <div v-else class="usf-facets__body">
        <usf-filter :facet="f" :key="f.id" v-for="f in facets"></usf-filter>
    </div>
</template>
</div>`
/*inc_end_filters*/,

    // facet filter item
    filter: /*inc_begin_filter*/
`<div v-if="canShow" class="usf-facet" :class="{'usf-collapsed': collapsed && !usf.isMobileFilter, 'usf-has-filter': isInBreadcrumb}">
    <!-- Mobile filter -->
    <div v-if="usf.isMobileFilter" class="usf-container">
        <!-- Search box -->
        <input v-if="hasSearchBox" class="usf-search-box" :aria-label="loc.filterOptions" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

        <!-- Values -->
        ` + _usfFilterBodyTemplate +
    `</div>

    <!-- Desktop filter -->
    <template v-else>
        <!-- Filter title -->
        <div class="usf-clear">
            <div class="usf-title usf-no-select" @click.prevent.stop="onExpandCollapse">
                <button class="usf-label usf-btn" v-html="facet.title" :aria-label="usf.utils.format(loc.filterBy,facet.title)" :aria-expanded="!collapsed"></button>
                <usf-helptip v-if="facet.tooltip" :tooltip="facet.tooltip"></usf-helptip>            
                <!-- 'Clear all' button to clear the current facet filter. -->
                <button v-if="isInBreadcrumb" class="usf-clear-all usf-btn" :title="loc.clearFilterOptions" :aria-label="usf.utils.format(loc.clearFiltersBy,facet.title)" @click.prevent.stop="onClear" v-html="loc.clear"></button>
                <span class="usf-pm"></span>
            </div>
        </div>

        <!-- Filter body -->
        <div class="usf-container">
            <!-- Search box -->
            <input v-if="hasSearchBox" class="usf-search-box" :placeholder="loc.filterOptions" :value="term" @input="v => term = v.target.value">

            ` + _usfFilterBodyTemplate +
        `
        </div>
    </template>
</div>`
/*inc_end_filter*/,

    // facet filter option
    filterOption: /*inc_begin_filter-option*/
`<div v-if="children" :class="(isSelected ? 'usf-selected ' : '') + ' usf-relative usf-facet-value usf-facet-value-single usf-with-children' + (collapsed ? ' usf-collapsed' : '')">
    <!-- option label -->
    <button class="usf-pm usf-btn" v-if="children" @click.prevent.stop="onToggleChildren"></button>
    <button class="usf-label usf-btn" v-html="label" @click.prevent.stop="onToggle"></button>

    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>    

    <div class="usf-children-container" v-if="children && !collapsed">
        <button :class="'usf-child-item usf-btn usf-facet-value' + (isChildSelected(c) ? ' usf-selected' : '')" v-for="c in children" v-html="getChildLabel(c)" @click="onChildClick(c)"></span>
    </div>
</div>
<button v-else :class="(isSelected ? 'usf-selected ' : '') + (swatchImage ? ' usf-facet-value--with-background' : '') + ' usf-btn usf-relative usf-facet-value usf-facet-value-' + (facet.multiple ? 'multiple' : 'single')" :title="isSwatch || isBox ? label + ' (' + option.value + ')' : undefined" :style="usf.isMobileFilter ? null : swatchStyle" @click.prevent.stop="onToggle">
    <!-- checkbox -->
    <div v-if="!isBox && !isSwatch && facet.multiple" :class="'usf-checkbox' + (isSelected ? ' usf-checked' : '')">
        <span class="usf-checkbox-inner"></span>
    </div>

    <!-- swatch image in mobile -->
    <div v-if="swatchImage && usf.isMobileFilter" class="usf-mobile-swatch" :style="swatchStyle"></div>

    <!-- option label -->
    <span class="usf-label usf-btn" v-html="label"></span>
    
    <!-- product count -->
    <span v-if="!(!usf.settings.filterNavigation.showProductCount || (swatchImage && !usf.isMobileFilter)) && option.value !== undefined" class="usf-value">{{option.value}}</span>
</button>`
/*inc_end_filter-option*/,

    // Instant search popup
    instantSearch: /*inc_begin_instantsearch*/
`<div :class="'usf-popup usf-zone usf-is usf-is--compact usf-is--' + position + (shouldShow ? '' : ' usf-hide') + (isEmpty ? ' usf-empty' : '') + (hasProductsOnly ? ' usf-is--products-only' : '') + (firstLoader ? ' usf-is--first-loader': '')"  :style="usf.isMobile ? null : {left: this.left + 'px',top: this.top + 'px',width: this.width + 'px'}">
    <!-- Mobile search box -->
    <div v-if="usf.isMobile">
        <form class="usf-is-inputbox" :action="searchUrl" method="get" role="search">
            <span class="usf-icon usf-icon-back usf-close" @click="usf.utils.hideInstantSearch"></span>
            <input name="q" autocomplete="off" ref="searchInput" :value="term" @input="onSearchBoxInput">
            <span class="usf-remove" v-if="term" @click="onClear"></span>
        </form>
    </div>

    <!-- First loader -->
    <div class="usf-is-first-loader" v-if="firstLoader">
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
        <div class="usf-clear">
            <div class="usf-img"></div>
            <div class="usf-title"></div>
            <div class="usf-subtitle"></div>
        </div>
    </div>

    <!-- All JS files loaded -->
    <template v-else>
        <!-- Empty view -->
        <div v-if="isEmpty" class="usf-is-no-results">
            <div style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-items.png?t=2') center no-repeat;min-height:160px"></div>
            <div v-html="usf.utils.format(loc.noMatchesFoundFor, term)"></div>
        </div>
        <template v-else>
            <!-- Body content -->
            <div class="usf-is-content">
                <!-- Products -->
                <div class="usf-is-matches usf-is-products">
                    <div class="usf-title" v-html="queryOrTerm ? loc.productMatches : loc.trending"></div>
                    
                    <div class="usf-is-list" v-if="result.items.length">
                        <!-- Did you mean -->
                        <span class="usf-is-did-you-mean" v-html="usf.utils.format(loc.didYouMean, usf.utils.encodeHtml(term), result.query)" v-if="termDiffers"></span>

                        <!-- Product -->
                        <usf-is-item v-for="p in result.items" :product="p" :result="result" :key="p.id + '-' + p.selectedVariantId"></usf-is-item>
                    </div>
                    <div class="usf-is-list" v-else style="background:url('//cdn.shopify.com/s/files/1/0257/0108/9360/t/85/assets/no-products.png?t=2') center no-repeat;min-height:250px"></div>
                </div>

                <div class="usf-is-side">
                    <!-- Suggestions -->
                    <div class="usf-is-matches usf-is-suggestions" v-if="result.suggestions && result.suggestions.length">
                        <div class="usf-title" v-html="loc.searchSuggestions"></div>
                        <span v-for="s in result.suggestions" class="usf-is-match" v-html="usf.utils.highlight(s, result.query)" @click="search(s)"></span>
                    </div>

                    <!-- Collections -->
                    <div class="usf-is-matches usf-is-collections" v-if="result.collections && result.collections.length">
                        <div class="usf-title" v-html="loc.collections"></div>
                        <span v-for="c in result.collections" class="usf-is-match" v-html="usf.utils.highlight(c.title, result.query)" @click="selectCollection(c)"></span>
                    </div>

                    <!-- Pages -->
                    <div class="usf-is-matches usf-is-pages" v-if="result.pages && result.pages.length">
                        <div class="usf-title" v-html="loc.pages"></div>
                        <span v-for="p in result.pages" class="usf-is-match" v-html="usf.utils.highlight(p.title, result.query)" @click="selectPage(p)"></span>
                    </div>
                </div>
            </div>

            <!-- Footer -->
            <div class="usf-is-viewall">
                <span @click="search(queryOrTerm)" v-html="usf.utils.format(queryOrTerm ? loc.viewAllResultsFor : loc.viewAllResults, queryOrTerm)"></span>
            </div>
        </template>
    </template>
</div>`
/*inc_end_instantsearch*/
,

    // Instant search item
    instantSearchItem:/*inc_begin_instantsearch-item*/
`<span class="usf-is-product usf-clear" @click="onItemClick">
    <!-- Image -->
    <div class="usf-img-wrapper usf-pull-left">
        <img class="usf-img" :src="selectedImageUrl">
    </div>
    
    <div class="usf-pull-left">
        <!-- Title -->
        <div class="usf-title" v-html="usf.utils.highlight(product.title, result.query)"></div>

        <!-- Vendor -->
        <div class="usf-vendor" v-html="product.vendor" v-if="usf.settings.search.showVendor"></div>

        <!-- Prices -->
        <div class="usf-price-wrapper">
            <span class="usf-price" :class="{ 'usf-has-discount': hasDiscount }" v-html="displayPrice"></span>
            <span v-if="hasDiscount" class="usf-discount" v-html="displayDiscountedPrice"></span>
        </div>
    </div>
</span>`
/*inc_end_instantsearch-item*/,

};

usf.event.add('init', function () {    
	// register or override components
    // ...    
    /*var SearchResultsGridItem2 = {
        template: usf.templates.searchResultsGridViewItem,
    }
    usf.register(SearchResultsGridItem2, usf.components.SearchResultsGridItem, "usf-sr-griditem");*/
    _usfImageWidths = _usfIsDynamicImage ? [200, 400, 600, 700, 800, 900, 1000, 1200] : [usf.settings.search.imageSize];
    _usfSetDefaultThemeSettings();
    if(window._usf_enable_listing_default)
        usf.queryRewriter.view = 'list';
    var NewSearchResults = {
        mixins: [usf.components.SearchResults],
        template: usf.templates.searchResults,
        data(){
            return {
                colMobile: _usf_col_mobile,
                colTablet: _usf_col_tablet,
                colDesktop: _usf_col_desktop,
            }
        },
        methods:{
            onMobileGridViewClick(col){
                this.colMobile = col;
                this.onGridViewClick();
            },
            onTabletGridViewClick(col){
                this.colTablet = col;
                this.onGridViewClick();
            },
            onDesktopGridViewClick(col){
                this.colDesktop = col;
                this.onGridViewClick();
            },
            onNewListViewClick(){
                this.onListViewClick();
            },
        },
        computed:{
            gridWrapClass(){
                return _usf_wrap_class + ` t4s-row-cols-${this.colMobile} t4s-row-cols-md-${this.colTablet} t4s-row-cols-lg-${this.colDesktop}`
            },
            listWrapClass(){
                return _usf_wrap_class + ` t4s-row-cols-${this.colMobile} t4s-row-cols-md-${this.colTablet} t4s-row-cols-lg-${this.colDesktop} is--listview`
            }
        }
    }
    usf.register(NewSearchResults, null, "usf-new-sr");


    var NewSearchResultsGridItem = {
        mixins: [usf.components.SearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem,
        data(){
            var color_count = 0;
            var size_count = 0;
            var size_variants = [];
            var color_variants = [];
            var isExternal = false;
            var dataColorOptions = null;
            var arr_badge = null;
            var arr_badge_handle = null;
            var colorOption = {};
            var colorOptionIndex = 0;
            var custom_badge = usf.utils.getMetafield(this.product,'theme','custom_badge')
            var isGrouped = usf.utils.getMetafield(this.product,'theme','grouped') != '';
            var description_excerpt = usf.utils.getMetafield(this.product,'theme','description_excerpt')
            var external_title = usf.utils.getMetafield(this.product,'theme','external_title');
            var external_link = usf.utils.getMetafield(this.product,'theme','external_link');
            if(external_title != '' || external_link != ''){
                isExternal = true;
            }
            if(custom_badge != ''){
                arr_badge = custom_badge.replace(/ /g,'').replace(/ ;/g,';').replace(/; /g,';').split(';');
                arr_badge_handle = arr_badge.map(b => _usfHandlezie(b));
            }
            var isDefault = _usfProductHasOnlyDefaultVariant(this.product);
            if(!isDefault && (_usfGlobalSettings.enable_pr_color || _usfGlobalSettings.enable_pr_size)){
                for(let i = 0; i <  this.product.options.length;i++){
                    var o = this.product.options[i];
                    var name = o.name.toLowerCase();
                    if(_usf_get_color.includes(name) && _usfGlobalSettings.enable_pr_color){
                        color_variants = o.values;
                        colorOption = o;
                        colorOptionIndex = i;
                    }else if(_usf_get_size.includes(name) && _usfGlobalSettings.enable_pr_size){
                        if(_usfGlobalSettings.show_size_type == '1')
                            size_variants = o.values;
                        else{
                            for(let j = 0; j < this.product.variants.length; j ++){
                                var v = this.product.variants[j];
                                if(v.options[i] != undefined && !usf.utils.isVariantSoldOut(v)){
                                    size_variants.push(o.values[v.options[i]])
                                }
                            }
                        }
                    }
                }
                size_count = size_variants.length;
                color_count = color_variants.length;
            }
            if(color_count > 0){
                var id_variants = [];
                var img_options = [];
                var img_ratios = [];
                var img_variants = [];
                colorOption.values.filter(val => {
					for (let x = 0; x < this.product.variants.length; x++) {
						var v = this.product.variants[x];
						if (v.options[colorOptionIndex] != undefined && val == colorOption.values[v.options[colorOptionIndex]]) {
                            var img = this.product.images[v.imageIndex];
							if (img) {
								id_variants.push(v.id);
                                img_options.push(val);
                                img_ratios.push(_usfGetImageRatio(img));
                                img_variants.push(img.url);
							}
						}
					}
				})
                dataColorOptions = {
                    color_count: color_count,
                    color_variants: color_variants,
                    color_variants_handle: color_variants.map(c => _usfHandlezie(c)),
                    id_variants: id_variants,
                    img_options: img_options,
                    img_ratios: img_ratios,
                    img_variants: img_variants
                }
            }
            var d = new Date(this.product);
            var dateStart = d.getTime()/1000;
            return {
                isDefault: isDefault,
                dataColorOptions: JSON.stringify(dataColorOptions),
                sizeCount: size_count,
                sizeVariants: size_variants,
                colorCount: color_count,
                colorVariants: color_variants,
                descriptionExcerpt: description_excerpt,
                isExternal: isExternal,
                externalLink: external_link,
                externalTitle: external_title,
                isGrouped: isGrouped,
                arrBadge: arr_badge,
                arrBadgeHandle: arr_badge_handle,
                dateStart: dateStart
            }
        },
        
        computed:{
            dataProductOptions(){
                var obj = {
                    VariantFirstID: this.selectedVariantForPrice.id,
                    available: !this.isSoldOut,
                    compare_at_price: this.hasDiscount ? this.compareAtPrice : null,
                    customBadge: this.arrBadge,
                    customBadgeHandle: this.arrBadgeHandle,
                    dateStart: this.dateStart,
                    handle: this.product.urlName,
                    id: this.product.id,
                    image2: this.hoverImage ? _usfGetOriginImgWithSize(this.hoverImage.url,'1x1') : null,
                    isDefault: this.isDefault,
                    isExternal: this.isExternal,
                    isGrouped: this.isGrouped,
                    isPreoder: this.isPreoder,
                    maxQuantity: this.isDefault && !this.isPreoder ? this.available : 9999,
                    price: this.price
                };

                return JSON.stringify(obj)
            },
            isPreoder(){
                return this.product.tags.includes('isPreoder') || (this.selectedVariantForPrice.flags == 1 && this.selectedVariantForPrice.available <= 0)
            }
        },
    }
    usf.components.NewSearchResultsGridItem = usf.register(NewSearchResultsGridItem, null, "usf-new-griditem");

    // Inheritted component for grid view 1
    var SearchResultsGridItem1 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem1,
    }
    usf.register(SearchResultsGridItem1, null, "usf-sr-griditem1");

    // Inheritted component for grid view 2
    var SearchResultsGridItem2 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem2,
    }
    usf.register(SearchResultsGridItem2, null, "usf-sr-griditem2");

    // Inheritted component for grid view 3
    var SearchResultsGridItem3 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem3,
    }
    usf.register(SearchResultsGridItem3, null, "usf-sr-griditem3");

    // Inheritted component for grid view 4
    var SearchResultsGridItem4 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem4,
    }
    usf.register(SearchResultsGridItem4, null, "usf-sr-griditem4");

    // Inheritted component for grid view 5
    var SearchResultsGridItem5 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem5,
    }
    usf.register(SearchResultsGridItem5, null, "usf-sr-griditem5");

    // Inheritted component for grid view 5
    var SearchResultsGridItem6 = {
        mixins: [usf.components.NewSearchResultsGridItem],
        template: usf.templates.searchResultsGridViewItem6,
    }
    usf.register(SearchResultsGridItem6, null, "usf-sr-griditem6");


    usf.event.add(['sr_updated', 'sr_viewChanged', 'rerender'], function () {
        setTimeout(function () {
            if(window.T4SThemeSP && T4SThemeSP.ProductItem){
                T4SThemeSP.ProductItem.init();
                T4SThemeSP.Tooltip();
            }
        }, 300);
    });

});
function _usfListDesc(desc) {
    if (!desc)
        return '';
    var str = desc.replace(/<style[^>]*>.*<\/style>/gm, '')
        .replace(/<script[^>]*>.*<\/script>/gm, '')
        .replace(/<[^>]+>/gm, '')
        .replace(/([\r\n]+ +)+/gm, '')
        .replace(/\n/g, ' ');
    str = str.split(' ');
    var newArr = [];
    str.forEach(s => {
        if (s != "") {
            newArr.push(s)
        }
    })
    return newArr.slice(0, 30).join(' ') + '...'
}
function _usfOnAddToCartSuccess(rs, formSelector) {
    document.dispatchEvent(new CustomEvent('usfShowCartPanel'));
}
     
function _usfSetDefaultThemeSettings(){
    window._usf_layout_des = window._usf_layout_des || "1";
    window._usf_wrap_class = window._usf_wrap_class || "t4s_box_pr_grid t4s-products  t4s-text-default t4s_rationt  t4s_position_8 t4s_cover t4s-row  t4s-justify-content-center  t4s-gx-md-30 t4s-gy-md-30 t4s-gx-10 t4s-gy-30";
    window._usf_imgatt = window._usf_imgatt || "data-";
    window._usf_get_size = window._usf_get_size || ["", "size", "sizes", "größe"];
    window._usf_col_desktop = window._usf_col_desktop || "3";
    window._usf_col_mobile = window._usf_col_mobile || "2";
    window._usf_col_tablet = window._usf_col_tablet || "2";
    window._usfGlobalSettings = window._usfGlobalSettings || {
        pr_size_pos: "1",
        show_size_type: "1",
        enable_quickview: false,
        use_quickshop: null,
        show_qty: false,
        enable_atc: true,
        enable_pr_color: true,
        enable_pr_size: false,
    };
    window._usfSectionSettings = window._usfSectionSettings || {
        show_vendor: true,
    };
    window._usfReadMore = window._usfReadMore || "Read more";
    window._usfViewText = window._usfViewText || "View products";
    window._usfPreoderText = window._usfPreoderText || "Pre-order";
    window._usf_get_color = window._usf_get_color || ["", "color", "colors", "couleur", "colour"];
    window._usf_product_des = window._usf_product_des || "3";
}

/* Begin theme ready code */
if (usf.settings.instantSearch.online) {
    document.body.classList.add('usf-hide-theme-search');
    // click on search icon -> show our instant search
    if(usf.isMobile){
        var searchIcon = document.querySelector('.t4s-site-nav__search');
        if (searchIcon)
            searchIcon.addEventListener('click',function(){
                var target  = document.createElement('input');
                usf.utils.loadAndShowInstantSearch(target, true);
            });

        // still register to 'is_show' event to hide the drawer.
        usf.event.add('is_show', function () {
            setTimeout(() => {
                var closeSearch = document.querySelector('#t4s-search-hidden .t4s-drawer__close');
                if(closeSearch)
                    closeSearch.click();
                // refocus on our input box
                usf.instantSearch.focus();
            }, 300);
        })
    }
    
}
/* End theme ready code */