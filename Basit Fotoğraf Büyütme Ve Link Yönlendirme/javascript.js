// Popup açma
function openPopup(image) {
  // Popup modalını seçiyoruz (HTML'deki popup div'i)
  const modal = document.getElementById('popup-modal');

  // Popup içindeki resim elementini seçiyoruz
  const popupImage = document.getElementById('popup-image');
  popupImage.src = image.src; // Tıklanan görselin kaynağını al
  modal.style.display = 'flex'; // Modalı göster
}

// Popup kapama
function closePopup() {
  // Popup modalını tekrar seçiyoruz
  const modal = document.getElementById('popup-modal');
  modal.style.display = 'none'; // Modalı gizle
}
