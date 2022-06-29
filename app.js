const pinTopBar = document.querySelector('.fa-thumbtack');
const topBar = document.querySelector('#top-bar');
const pinColor = document.querySelector('.fa-thumbtack');




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


const recipeContainer = document.querySelector('div#recipe-card-container');
const linkIcon = document.querySelectorAll('.fa-link');


document.addEventListener('click',function(event){
    if(event.target.classList.contains('food-img') || event.target.classList.contains('food-hover')){
        if(event.target.classList.contains('active')==false) {
            event.target.classList.remove('food-img');
            event.target.classList.add('active');
            const recipeImg = event.target.parentElement;
            const aTag = recipeImg.nextElementSibling;
            const recipeLink = aTag.firstElementChild;
            const linkIcon = recipeLink.firstElementChild;
            recipeLink.classList.remove('recipe-link');
            recipeLink.classList.add('click');
            linkIcon.classList.remove('white-link');
            linkIcon.classList.add('blue-link');



            if(!event.target.classList.contains('food-hover')){
                event.target.classList.add('food-hover'); 
            }
        } else {
            event.target.classList.remove('active');
            event.target.classList.remove('food-hover');
            event.target.classList.add('food-img');
            const recipeImg = event.target.parentElement;
            const aTag = recipeImg.nextElementSibling;
            const recipeLink = aTag.firstElementChild;
            const linkIcon = recipeLink.firstElementChild;
            linkIcon.classList.add('white-link');
            linkIcon.classList.remove('blue-link');
            recipeLink.classList.add('recipe-link');
            recipeLink.classList.remove('click');
            }

    }
});

