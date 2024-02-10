let home_slider = new Swiper('.home-slider .swiper', {
    slidesPerView: 1,
})

let home_slider_navigation = document.querySelectorAll('.home-slider__navigation button');
if (home_slider_navigation.length) {
    home_slider_navigation.forEach((btn, idx) => {
        btn.onclick = () => {
            home_slider_navigation.forEach(el => {
                el.classList.remove('active');
            })
            btn.classList.add('active')
            home_slider.slideTo(idx);
        }
    })
}

let card_slider = document.querySelectorAll('.product-slider__card .swiper');
if (card_slider.length) {
    card_slider.forEach(el => {
        let swiper = new Swiper(el, {
            slidesPerView: 3,
            spaceBetween: 20,
        })

        // let cards = el.querySelectorAll('.swiper-slide');

        // swiper.on('slideChange', function () {
        //     cards.forEach((card, idx) => {
        //         if (idx < swiper.realIndex) {
        //             card.classList.add('hidden');
        //         } else {
        //             card.classList.remove('hidden');
        //         }
        //     })
        //     console.log(swiper.realIndex);
        // });
    })

}