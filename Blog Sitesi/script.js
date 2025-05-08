function Ac(image) {
    const modal = document.getElementById('popup-modal');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = image.src;
    modal.style.display = 'flex';
  }
  
function Kapat() {
    const modal = document.getElementById('popup-modal');
    modal.style.display = 'none';
}