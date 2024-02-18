$(document).ready(function () {
    let home_slider = new Swiper('.home-slider .swiper', {
        slidesPerView: 1,
    })

    home_slider.on('slideChange', function () {
        $('.home-slider__navigation button').not($('.home-slider__navigation button')[home_slider.realIndex]).removeClass('active');
        $($('.home-slider__navigation button')[home_slider.realIndex]).addClass('active');
    })

    $('.home-slider__navigation button').each(function (idx, el) {
        $(el).click(function () {
            home_slider.slideTo(idx);
        })
    })

    $('.product-slider__card').each(function (idx, el) {
        let swiper = new Swiper($(el).find('.swiper')[0], {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1000,
            navigation: {
                nextEl: $(el).find('.product-slider__card__btn_next')[0],
                prevEl: $(el).find('.product-slider__card__btn_prev')[0],
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                576: {
                    slidesPerView: 2
                }
            }
        })

    })

    $('.card_like').click(function () {
        $(this).toggleClass('active')
    })

    $('.discount_descriptions button').click(function () {
        $('.discount_descriptions').toggleClass('active');
        if ($(this).text() == "показать ещё") {
            $(this).text('свернуть')
        } else {
            $(this).text('показать ещё')
        }
    })

    $('.main_filter').each(function (idx, el) {
        $(el).find('.main_filter__list').slideUp(0);
        $(el).find('.main_filter__head_in').click(function () {
            if ($(el).hasClass('active')) {
                $(el).removeClass('active')
                $(el).find('.main_filter__list').slideUp(300);
            } else {
                $(el).addClass('active')
                $(el).find('.main_filter__list').slideDown(300);
            }
        })
        $(el).find('.main_filter__list button').each(function (btn_idx, btn) {
            $(btn).click(function () {
                $(el).removeClass('active')
                $(el).find('.main_filter__list').slideUp(300);
                $(el).find('.main_filter__list button').not(btn).removeClass('active');
                $(btn).addClass('active');
                $(el).find('.main_filter__head span').text($(btn).text())
            })
        })
    })

    $('.filter_modal__open').click(function () {
        $('.filter_modal').removeClass('end-active').addClass('active')
    })

    $('.filter_modal__close').click(function () {
        $('.filter_modal').removeClass('active').addClass('end-active');
    })

    $('.stars').each(function (idx, el) {
        $(el).find('button').each(function (btn_idx, btn) {
            $(btn).click(function () {
                $(el).find('button').each(function (btn_idx2, btn2) {
                    if (btn_idx >= btn_idx2) {
                        $(btn2).addClass('active');
                    } else {
                        $(btn2).removeClass('active');
                    }
                })
            })
        })
    })

    let product_child_slider = new Swiper('.product-card__child_slider', {
        slidesPerView: 3,
        spaceBetween: 8,
        // watchSlidesProgress: true,
    })

    let product_prent_slider = new Swiper('.product-card__parent_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        thumbs: {
            swiper: product_child_slider,
        },
        navigation: {
            nextEl: '.product-card__child_slider__btn_next',
            prevEl: '.product-card__child_slider__btn_prev',
        }
    })


    let auth_block_parent = new Swiper('.auth_block__parent_slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        allowTouchMove: false,
    })

    // auth_block_parent.slideTo(2)

    let auth_block_child = new Swiper('.auth_block__child_slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 600,
        allowTouchMove: false,
    })

    $('.auth_block__btn_group button').each(function (idx, el) {
        $(el).click(function () {
            $('.auth_block__btn_group button').not(el).removeClass('active');
            $(el).addClass('active');
            auth_block_child.slideTo(idx);
        })
    })

    $('.auth_block__login .form_btn').click(function () {
        auth_block_parent.slideTo(1)
    })

    $('.edit_password .form_btn').click(function () {
        auth_block_parent.slideTo(2)
    })

    $('.edit_password .edit_link').click(function () {
        auth_block_parent.slideTo(0)
    })

    $('.auth_block__continue').hide(0);


    $('.auth_block__register .form_btn').click(function () {
        $($('.auth_block__continue p')[0]).show(0);
        $($('.auth_block__continue p')[1]).hide(0);
        $('.auth_block__parent_slider').hide(0)
        $('.auth_block__continue').show(0);
    })

    $($('.edit_password .form_btn')[1]).click(function () {
        $($('.auth_block__continue p')[1]).show(0);
        $($('.auth_block__continue p')[0]).hide(0);
        $('.auth_block__parent_slider').hide(0)
        $('.auth_block__continue').show(0);
    })

    $('.auth_block__close').click(function () {
        if (window.innerWidth > 992) {
            $('.auth_block').removeClass('active').addClass('end-active')
        } else {
            $('.auth_block').slideUp(0);
        }
        $('body').css({ overflow: 'visible' })
        setTimeout(() => {
            $('.auth_block__parent_slider').show(0)
            $('.auth_block__continue').hide(0);
            auth_block_parent.slideTo(0)
            $($('.auth_block__btn_group button')[0]).click();
        }, 300);
    })

    $('.auth_block__open').click(function (e) {
        e.preventDefault();
        if (window.innerWidth > 992) {
            $('.auth_block').removeClass('end-active').addClass('active')
        } else {
            $('.auth_block').slideDown(0);
            $('.auth_block').css({ display: 'flex' });
            $('body').css({ overflow: 'hidden' })
        }
    })

    $('.auth_block__continue .form_btn').click(function () {
        $('.auth_block__close').click();
    })

    $('.media_btn').click(function () {
        $('.mobile_menu').css({display: 'flex'});
    })

    $('.mobile_menu__close').click(function () {
        $('.mobile_menu').css({display: 'none'});
    })

    $('.range-container').each(function(idx, el) {
        makeRange(el);

        $(el).find('input').on('input', function (e) {
            makeRange(el);
        })
    })

    function scale(num, in_min, in_max, out_min, out_max) {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }

    function makeRange (input_wrap) {
        const input = $(input_wrap).find('input')
        const value = +$(input_wrap).find('input').val();
        const label = $(input_wrap).find('label');

        const rangeWidth = +$(input).css("width").slice(0, -2);
        const labelWidth = +$(label).css("width").slice(0, -2);

        const max = +$(input).attr("max");
        const min = +$(input).attr("min");

        const left =
            value * (rangeWidth / max) -
            labelWidth / 2 +
            scale(value, min, max, 10, -10);

        $(label).css("left", left + "px");

        $(label).find('span').html(value);
    }

    $('.catalog_btn').click(function () {
        $('.filter_category').css({display: 'block'});
    })
    
    $('.filter_category__close').click(function () {
        $('.filter_category').css({display: 'none'});
    })

    // Code here
})
