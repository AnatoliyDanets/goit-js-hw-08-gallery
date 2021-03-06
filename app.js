const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape'
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea'
    },
];


const collectionGallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.lightbox');
const imageModal = document.querySelector('.lightbox__image');
const onModalBtnClose = document.querySelector('.lightbox__button');
const linkImage = document.querySelector('.gallery__link')
const overlayModal = document.querySelector('.lightbox__overlay');

collectionGallery.addEventListener('click', onCollectionGalleryClick);
onModalBtnClose.addEventListener('click', onModalClose);
overlayModal.addEventListener('click', onOverlayClose);

const cardsMarkUp = addCollectionCards(galleryItems);
collectionGallery.insertAdjacentHTML("beforeend", cardsMarkUp);
function addCollectionCards(galleryItems) {
    return galleryItems.map(({preview, description,  original}) => {
        return `<li class='gallery__item'>
        <a class='gallery__link', href= '${original}' >
        <img class='gallery__image' src='${preview}', data-source='${original}', alt='${description}'/>
        </a>
        </li>`;
    }).join('');
}

function onCollectionGalleryClick(e) {
   
   const isGalleryImageEl = e.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
       return;
    }
    
    onModalImageClick();
    imageModalShow(e);
    e.preventDefault();
    // console.log(e.target.dataset.source)
   
    }

function onModalImageClick() {
    modal.classList.add('is-open');
    window.addEventListener('keydown', onEscKeyClose);
 

}


function onModalClose(e) {
    modal.classList.remove('is-open');
     window.removeEventListener('keydown', onEscKeyClose);
    imageModal.removeAttribute('src', `${e.target.dataset.source}`);
    imageModal.removeAttribute('alt', `${e.target.alt}`);
}

function imageModalShow(e) {
 
    imageModal.setAttribute('src', `${e.target.dataset.source}`);
    imageModal.setAttribute('alt', `${e.target.alt}`);
     
}

function onOverlayClose(e) {
    if (e.currentTarget===e.target) {
        onModalClose(e);
    }
}


function onEscKeyClose(e) {
    if (e.code === 'Escape') {
        onModalClose(e);
    }
   
}


// ???????????????????? ?????????????????? ????????????????????
let maxIndex =galleryItems.length;
let slideIndex=0;
 
function onArrowRigthClick(e) {
 
    if (e.code === 'ArrowRight') {
  
        rigthArrow()
   
    } 
}


function rigthArrow() {
  
         slideIndex += 1;
       if (slideIndex === maxIndex) {
        slideIndex = 0;
    }
      imageModal.src = galleryItems[slideIndex].original;
      imageModal.alt = galleryItems[slideIndex].description;
 
    console.log( slideIndex);
    
  
}

function onArrowLeftClick(e) {
     
    if (e.code === 'ArrowLeft') {
        leftArrow()
    }

}
function leftArrow() {

      slideIndex-=1;
    if (slideIndex < 0) {
        slideIndex =galleryItems.length - 1;
    } 
     imageModal.src = galleryItems[slideIndex].original;
      imageModal.alt = galleryItems[slideIndex].description;
 
   console.log( slideIndex);
}


window.addEventListener('keydown', onArrowRigthClick); 
window.addEventListener('keydown', onArrowLeftClick);

