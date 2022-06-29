const theFoodImg = document.querySelector('.food-img');
const recipeLink = document.querySelector('.recipe-link');
const linkIcon = document.querySelector('.fa-link');
const pinTopBar = document.querySelector('.fa-thumbtack');
const topBar = document.querySelector('#top-bar');
const pinColor = document.querySelector('.fa-thumbtack');


theFoodImg.addEventListener('click', function() {
    if(theFoodImg.classList.contains('active')){
            theFoodImg.classList.remove('active');
            theFoodImg.classList.remove('food-hover');
            theFoodImg.classList.add('food-img');
            recipeLink.classList.add('recipe-link');
        recipeLink.classList.remove('click');
        linkIcon.classList.add('white-link')
        linkIcon.classList.remove('blue-link')
    } else {
        theFoodImg.classList.remove('food-img');
        theFoodImg.classList.add('active');
        recipeLink.classList.remove('recipe-link');
        recipeLink.classList.add('click');
        linkIcon.classList.remove('white-link');
        linkIcon.classList.add('blue-link');

    }
})

theFoodImg.addEventListener('mouseenter', function(){
    if (theFoodImg.classList.contains('active') !== true) {
        theFoodImg.classList.add('food-hover');
    }
})


if(topBar.classList.contains('fix')) {
    pinColor.style.color = 'goldenrod';
}
pinTopBar.addEventListener('click', function() {
    if(topBar.classList.contains('fix') !== true) {
        topBar.classList.add('fix');
        pinColor.style.color = 'goldenrod';
  }
  else  {
    topBar.classList.remove('fix');
    pinColor.style.color = 'black';
    }
})
