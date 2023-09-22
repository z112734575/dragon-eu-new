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

    // 处理第三方悬浮层级
    function handleIndex() {
        const shopifyChat = document.getElementById('dummy-chat-button-iframe') ?? document.getElementById('ShopifyChat');
        const smileFrame = document.getElementById('smile-ui-lite-container')

        if (isMobile()) {
            smileFrame.style.zIndex = '189';
            shopifyChat.style.zIndex = '189';
        } else {
            smileFrame.style.zIndex = '1000';
            shopifyChat.style.zIndex = '1000';
        }
    }

    setTimeout(() => {
        handleIndex()
    }, 5000)
})
