const imageSelector = '[data-image="target"]';
const imageTitleSelector = '[data-image="title"]';
const thumbnailsSelector = '[data-image-role="trigger"]';

function setBigImage(url, title) {
    'use strict';
    let bigImage = document.querySelector(imageSelector);
    let imageText = document.querySelector(imageTitleSelector);
    bigImage.setAttribute('src', url);
    imageText.textContent = title;
}

const getImageFromThumb = thumbnail => {
    'use strict';
    return thumbnail.dataset.imageUrl;
}

const getTitleFromThumb = thumbnail => {
    'use strict';
    return thumbnail.dataset.imageTitle;
}

function setDetailFromThumb(thumbnail) {
    'use strict';
    setBigImage(getImageFromThumb(thumbnail), getTitleFromThumb(thumbnail));
}

function addClickEvent(thumbnail) {
    'use strict';

    thumbnail.addEventListener('click', e => {
        e.preventDefault();
        setDetailFromThumb(thumbnail);
    })
}

function start() {
    'use strict';
    let thumbnails = Array.from(document.querySelectorAll(thumbnailsSelector));
    thumbnails.forEach(thumb => {
        addClickEvent(thumb);
    })
}

start();