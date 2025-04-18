if (window.history.replaceState) {
    window.history.propertyIsEnumerable(null, null, window.location.href)
}
document.onreadystatechange = function() {
    var a = document.readyState
    if (a == 'complete') {}
}
$(document).ready(function() {
    $('.xn-reviews').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            670: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                margin: 40,
            },
        },
    })
    $('.navbar-r .navbar-link.s, .header-btp, .footer-link.s').click(function() {
        let c = $(this).attr('href').replace('/', '')
        $('html, body').animate({
            scrollTop: $(c).offset().top
        }, 600)
        return false
    })
    $('.faq-box').click(function() {
        if ($(this).hasClass('fopen')) {
            $('.faq-box').removeClass('fopen')
        } else {
            $('.faq-box').removeClass('fopen')
            $(this).toggleClass('fopen')
        }
    })
    $('.faq-cate').click(function() {
        $('.faq-cate').removeClass('active')
        $(this).toggleClass('active')
    })
    $(`${'.faq-cate[for="faq-one"]'}`).click(function() {
        $('.faq-container').removeClass('active')
        $(`${'.faq-container[data="faq-one"]'}`).addClass('active')
    })
    $(`${'.faq-cate[for="faq-two"]'}`).click(function() {
        $('.faq-container').removeClass('active')
        $(`${'.faq-container[data="faq-two"]'}`).addClass('active')
    })
    $(`${'.faq-cate[for="faq-three"]'}`).click(function() {
        $('.faq-container').removeClass('active')
        $(`${'.faq-container[data="faq-three"]'}`).addClass('active')
    })
    $(`${'.faq-cate[for="faq-four"]'}`).click(function() {
        $('.faq-container').removeClass('active')
        $(`${'.faq-container[data="faq-four"]'}`).addClass('active')
    })
    $(`${'.faq-cate[for="faq-five"]'}`).click(function() {
        $('.faq-container').removeClass('active')
        $(`${'.faq-container[data="faq-five"]'}`).addClass('active')
    })
    $('.region-card-in').click(function() {
        $('.region-card-in').parent().removeClass('active')
        $(this).parent().toggleClass('active')
    })
    $('.package-in').click(function() {
        $('.package-in').parent().removeClass('active')
        $(this).parent().toggleClass('active')
    })
    $(`${'.region-card-in[for="euw"]'}`).click(function() {
        $('.package-holder').removeClass('active')
        $(`${'.package-holder[region="euw"]'}`).addClass('active')
    })
	$(`${'.region-card-in[for="ap"]'}`).click(function() {
        $('.package-holder').removeClass('active')
        $(`${'.package-holder[region="ap"]'}`).addClass('active')
    })
    $(`${'.region-card-in[for="na"]'}`).click(function() {
        $('.package-holder').removeClass('active')
        $(`${'.package-holder[region="na"]'}`).addClass('active')
    })
    $(`${'.region-card-in[for="eune"]'}`).click(function() {
        $('.package-holder').removeClass('active')
        $(`${'.package-holder[region="eune"]'}`).addClass('active')
    })
    $(`${'.region-card-in[for="oce"]'}`).click(function() {
        $('.package-holder').removeClass('active')
        $(`${'.package-holder[region="oce"]'}`).addClass('active')
    })
    var b = {
        one: {
            be: '40,000',
            price: '5.19',
            description: 'x',
        },
        two: {
            be: '50,000',
            price: '7.19',
            description: 'x',
        },
        three: {
            be: '60,000',
            price: '11.19',
            description: 'x',
        },
        four: {
            be: '100,000',
            price: '23.99',
            description: 'x',
        },
    }
    $('.trigger-contact').click(function() {
        $('body').append(
            `${'<div class="contact-modal">\r\n            <i class="contact-modal-close fas fa-times"></i>\r\n            <div class="contact-modal-in">\r\n                <div class="contact-popup">\r\n                    <div class="contact-body">\r\n                        <h1>Get in touch with us</h1>\r\n                        <p>One of our top priorities is your satisfaction while using our service, which includes customer support. Please do not hesitate to get in touch with us if you have any issues or questions.</p>\r\n                    </div>\r\n                    <div class="contact-holder">\r\n                        <a class="contact-card" target="_blank" href="https://discord.gg/undefined">\r\n                            <i class="fab fa-discord"></i>\r\n                            <h1>Connect through Discord</h1>\r\n                            <p>Join our Discord and create a ticket, or send a direct message to our Staff.</p>\r\n                        </a>\r\n                        <a class="contact-card" target="_blank" href="mailto:admin@awayproducts.us">\r\n                            <i class="fad fa-envelope"></i>\r\n                            <h1>Drop us an email</h1>\r\n                            <p>Prefer the good old ways? So do we, send us an email to contact us.</p>\r\n                        </a>\r\n                        <a class="contact-card" target="_blank" href="">\r\n                            <i class="fad fa-comments-alt"></i>\r\n                            <h1>Lets have a chat</h1>\r\n                            <p>Why not try our livechat? We will respond within minutes if we are online!</p>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <script>\r\n             $(".contact-modal-close, .contact-modal").click(function () {\r\n                 $(".contact-modal").removeClass("active");\r\n                 setTimeout(function () {\r\n                     $(".contact-modal").remove();\r\n                 }, 150);\r\n             });\r\n             $(".contact-modal-in").click(function(e){\r\n               e.stopPropagation();\r\n             });\r\n             </script>\r\n        </div>'}`
        )
        setTimeout(function() {
            $('.contact-modal').addClass('active')
        }, 100)
    })
    $('.package-button').click(function() {
        if (!$('input[name=account]:checked').val()) {
            return
        }
        $('.modal').remove()
        var d, f, g
        switch ($('input[name=region]:checked').val()) {
            case 'euw':
                d = 'Global'
                break
			case 'ap':
                d = 'Global'
                break
			case 'na':
                d = 'Global'
                break
            case 'oce':
                d = 'Global'
                break
            default:
                d = ''
        }
        switch ($('input[name=account]:checked').val()) {
            case '1':
                f = '1 Week'
                g = 35
                break
            case '2':
                f = '1 Month'
                g = 85
                break
            case '3':
                f = '3 Month'
                g = 230
                break
            case '4':
                f = 'Lifetime'
                g = 900
                break
			case '5':
                f = '1 Week'
                g = 50
                break
            case '6':
                f = '1 Month'
                g = 130
                break
            case '7':
                f = '3 Month'
                g = 310
                break
            case '8':
                f = 'Lifetime'
                g = 1300
                break
			case '9':
                f = '1 Week'
                g = 40
                break
            case '10':
                f = '1 Month'
                g = 100
                break
            case '11':
                f = '3 Month'
                g = 250
                break
            case '12':
                f = 'Lifetime'
                g = 1000
                break
			case '13':
                f = 'One Time'
                g = 25
                break
            default:
                f = ''
                g = 0
        }
        $('body').append(
            `${'<div class="modal">\r\n        <i class="modal-close fas fa-times"></i>\r\n        <div class="modal-in">\r\n            <div class="product-popup active">\r\n                <h1 class="product-pop-t">'}` +
            f +
            `${'</h1>\r\n                <div class="product-pop-features">\r\n                    <p><i class="fas fa-circle"></i>Till: <span>'}` +
            f +
            `${'</span></p>\r\n                    <p><i class="fas fa-circle"></i>Region: <span>'}` +
            d +
            `${'</span></p>                   \r\n                </div>               \r\n                <div class="error"></div>\r\n                <a class="product-pop-btn a">Proceed to checkout<span class="pn-prc"></span></a>\r\n            </div>\r\n            <div class="payment-popup">\r\n                <div class="payment-popup-modes">\r\n                    <div class="payment-mode-card active vallet">\r\n                        <input type="radio" name="method" id="vallet" value="vallet" checked>\r\n                        <label class="payment-mode-in" for="vallet">\r\n                            <img src="assets/images/m_logo.png">\r\n                        </label>\r\n                    </div>                                     \r\n                </div>\r\n                <form class="payment-popup-form" action="#" accept-charset="UTF-8" method="post">\r\n                <div class="error"></div>\r\n                <input type="hidden" name="raw_be" value="'}` +
            f +
            `${'">\r\n                <input type="hidden" name="raw_region" value="'}` +
            d +
            `${'">\r\n                <input type="hidden" name="raw_price" value="'}` +
            g +
            `${'">\r\n                <input type="text" name="name" class="flp-input delivery-username" required="" placeholder="Name" autofocus="" autocomplete="off" required>\r\n                <div class="error"></div>\r\n                <input type="text" name="surname" class="flp-input delivery-surname" required="" placeholder="Surname" autofocus="" autocomplete="off" required>\r\n                    <input type="text" name="email" class="flp-input delivery-email" required="" placeholder="Your Email" autofocus="" autocomplete="off" required>\r\n                    <div class="error"></div>\r\n                    <div class="payment-popup-checkbox">\r\n                        <div class="payment-popup-checkbox-c">\r\n                           <input type="checkbox" id="confirm_tos" name="terms" value="accepted" required>\r\n                           <label for="terms">I confirm that all the information I provide is accurate and I accept your <a target="_blank" href="https://awayproducts.us/terms.php">Terms of Service</a></label>\r\n                        </div>\r\n                    </div>\r\n                    <div class="payment-popup-footer">\r\n                       <a class="product-pop-btn back">Go back</a>            \r\n                       <button class="product-pop-btn go" type="submit">Checkout</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    <script>\r\n        var main_info = \r\n{\r\n\t"one": {\r\n\t\t"be": "40,000",\r\n\t\t"price": "5.19",\r\n\t\t"description": "Contains an Unranked Account with 40.000+ BE"\r\n\t},\r\n\t"two": {\r\n\t\t"be": "50,000",\r\n\t\t"price": "7.19",\r\n\t\t"description": "Contains an Unranked Account with 50.000+ BE"\r\n\t},\r\n\t"three": {\r\n\t\t"be": "60,000",\r\n\t\t"price": "11.19",\r\n\t\t"description": "Contains an Unranked Account with 60.000+ BE"\r\n\t},\r\n\t"four": {\r\n\t\t"be": "100,000",\r\n\t\t"price": "23.99",\r\n\t\t"description": "Contains an Unranked Account with 100.000+ BE"\r\n\t}\r\n};\r\n\r\n        var raw_price;\r\n\r\n        switch ($("input[name=account]:checked").val()) {\r\n            case "1":\r\n                raw_price = 20.00\r\n                break;\r\n            case "2":\r\n                raw_price = 50.00\r\n                break;\r\n            case "3":\r\n                raw_price = 120.00\r\n                break;\r\n            case "4":\r\n                raw_price = 99999.99\r\n                break;\r\n            case "5":\r\n                raw_price = 400.00\r\n                break;\r\n            case "6":\r\n                raw_price = 700.00\r\n                break;\r\n            case "7":\r\n                raw_price = 1500.00\r\n                break;\r\n            case "8":\r\n                raw_price = 99999.99\r\n                break;\r\n            default:\r\n                raw_price = 0.00;\r\n        }\r\n    var discount = 0;\r\n    $("input[name=quantity]").change(function() {\r\n    var calculated_price = ($("input[name=quantity]:checked").val())*raw_price;\r\n    var final_price = calculated_price - (calculated_price * (discount / 100));\r\n    $(".pn-prc").html("$"+final_price.toFixed(2));\r\n    });\r\n\r\n    $(".modal-close, .modal").click(function () {\r\n        $(".modal").removeClass("active");\r\n        setTimeout(function () {\r\n            $(".modal").remove();\r\n        }, 150);\r\n    });\r\n    $(".modal-in").click(function(e){\r\n      e.stopPropagation();\r\n    });\r\n    $(".product-pop-btn.a").click(function () {\r\n        $(".product-popup, .payment-popup").removeClass("active");\r\n        $(".payment-popup").addClass("active");\r\n    });\r\n    $(".product-pop-btn.back").click(function () {\r\n        $(".product-popup, .payment-popup").removeClass("active");\r\n        $(".product-popup").addClass("active");\r\n    });    \r\n    </script>\r\n    </div>\r\n'}`
        )
        setTimeout(function() {
            $('.modal').addClass('active')
        }, 100)
    })
})
