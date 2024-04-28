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
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: 10, // Espacio entre las imágenes
  fitWidth: true // Ajustar el ancho de la cuadrícula al contenedor
});

var msnry = new Masonry( '.grid', {
    columnWidth: 200,
    itemSelector: '.grid-item'
  });

//eliminar botó dret
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

//menu lateral - sidebar
function openNav() {
  document.querySelector(".sidenav").style.width = "200px";
  //var button = document.querySelector(".openbtn");
  //button.style.display = "none";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  //var button = document.querySelector(".openbtn");
  //button.style.display = "block";
}