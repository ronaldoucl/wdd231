document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timestamp').value = new Date().toISOString();
    
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');
    
    cards.forEach(card => {
      card.addEventListener('click', () => {
        document.getElementById(card.dataset.modal).style.display = 'block';
      });
    });
    
    modals.forEach(modal => {
      modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
      });
    });
  });