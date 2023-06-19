function isMobile() {
    let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return flag;
}

$(function () {
    // discount information不存在处理
    if ($('.discount_information').children('ul').length > 0) {
        $(".ug-product-discount").addClass("discount_information_box");
    } else {
        $(".discount_information").hide();
    }
    // bundles不存在处理
    if ($('.ug-product-discount').length > 0) {
        $(".discount_information").addClass("discount_information_show");
    } else {
        $(".discount_information").removeClass("discount_information_show");
        $(".discount_information ul").addClass("discount_information_ul_show");
    }
    // bundles预设空值处理
    $(".discount_information li").each(function () {
        let discount_information_li = $(this).html();
        if (discount_information_li == null || discount_information_li.length == 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    $('.t4s-tab__title').on('click', function (event) {
        event.stopImmediatePropagation()
    })
    var t3Clipboard = new ClipboardJS('.ug-product-copy-btn');
    t3Clipboard.on('success', function (e) {
        $('.ug-product-copy-btn').hide()
        $('.ug-product-copy-btned').show()
        setTimeout(function () {
            $('.ug-product-copy-btn').show()
            $('.ug-product-copy-btned').hide()
        }, 3000)
        e.clearSelection();
    });
    var discountClipboard = new ClipboardJS('.ug-product-discount-btn');
    discountClipboard.on('success', function (e) {
        $('.ug-product-discount-btn').hide()
        $('.ug-product-discount-btned').show()
        setTimeout(function () {
            $('.ug-product-discount-btn').show()
            $('.ug-product-discount-btned').hide()
        }, 3000)
        e.clearSelection();
    });
    $('.t4s-product-form__variants').before($('.ug-product-discount').clone())
    $('.t4s-pr__custom-liquid .ug-product-discount').remove()

    // school
    new ClipboardJS('.ug-school-discount-box button');
    $('.ug-school-discount-box button').click(function () {
        let that = $(this)
        that.text('COPIED').addClass('active')
        setTimeout(function () {
            that.text('COPY').removeClass('active')
        }, 3000)
    })
    new ClipboardJS('.copy-box button');
    $('.copy-box button').click(function () {
        let that = $(this)
        that.text('COPIED').addClass('active')
        setTimeout(function () {
            that.text('COPY').removeClass('active')
        }, 3000)
    })

    // GitHub异常

    const jQueryFn = {}
    const addToCart = (productId) => {
        const BUNDLES_INFO = window.BUNDLES_INFO
        const data = {
            items: [{
                id: productId ?? new URLSearchParams(window.location.search).get('variant'),
                quantity: BUNDLES_INFO.quantity
            }]
        }
        if (BUNDLES_INFO?.selected_variant_id) {
            data.items.push({
                id: BUNDLES_INFO.selected_variant_id,
                quantity: 1
            })
        }
        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async response => {
                await T4SThemeSP.Cart.getToFetch()
                T4SThemeSP.Drawer.opend($("#t4s-mini_cart"))
                return response.json();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    $.extend({
        addToCart
    })
})
