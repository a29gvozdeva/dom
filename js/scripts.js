"use strict";

const state = {
    slides: [
        {
            src:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg",
            description: "space #1",
        },
        {
            src:
                "https://www.scitecheuropa.eu/wp-content/uploads/2019/07/ClaudioVentrella.jpg",
            description: "space #2",
        },
        {
            src:
                "https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/backgrounds/ngk_spacehub3_2.adapt.1900.1.jpg",
            description: "space #3",
        }],
    _currentIndex: 0,
}
 const btnPrev = document.getElementById("prev-btn");

console.log(btnPrev);
// btnPrev.addEventListener('click', changeImg);
//
//
//
// function changeImg (event) {
//     const item = state.slides[Math.floor(Math.random() * state.slides.length)];
//     const imgData = document.querySelector('img');
//     imgData.setAttribute('src', item.src);
//     imgData.setAttribute('alt', item.description);
//
// }

