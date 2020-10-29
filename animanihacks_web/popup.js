// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementByClassName('closeBtn')[0];

// Listen for Click
modalBtn.addEventListener('click', openModal);
// Listen for close Click
closeBtn.addEventListener('click', closeModal);
// Listen for outside Click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal(){
  modal.style.display = 'block';
}

// Function to close modalBtn
function closeModal(){
  modal.style.display = 'none'
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}
