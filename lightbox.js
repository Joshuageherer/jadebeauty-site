document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.lightbox').forEach(img => {
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.background = 'rgba(0,0,0,0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '9999';

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.style.maxWidth = '90%';
      fullImg.style.maxHeight = '90%';

      overlay.appendChild(fullImg);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });

      document.body.appendChild(overlay);
    });
  });
});
