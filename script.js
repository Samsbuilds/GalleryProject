function upDate(previewPic) {
    // Modifier l'image d'arrière-plan et le texte
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = previewPic.alt;
  }
  
  function unDo() {
    // Remettre l'état initial
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = '';
    imageDiv.textContent = 'Survolez une image ci-dessous pour l\'afficher ici';
  }
  