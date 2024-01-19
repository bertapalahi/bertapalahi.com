function openLightbox(imageUrl) {
    var lightbox = document.querySelector('.lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageUrl;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

// jQuery
$('.grid').masonry({
    columnWidth: 100,
    itemSelector: '.grid-item'
  });

// vanilla JS
var msnry = new Masonry( '.grid', {
    columnWidth: 150,
    itemSelector: '.grid-item'
  });
