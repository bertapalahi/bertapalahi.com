// mostrar imatges quan cliques
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

// galeria masonry
$('.grid').masonry({
    columnWidth: 100,
    itemSelector: '.grid-item'
  });

var msnry = new Masonry( '.grid', {
    columnWidth: 150,
    itemSelector: '.grid-item'
  });

//eliminar botó dret
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

//menu lateral - sidebar
function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
}