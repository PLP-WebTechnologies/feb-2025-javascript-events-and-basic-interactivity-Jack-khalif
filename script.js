// 1. Event Handling 🎈

// Button click event
const clickBtn = document.getElementById('clickBtn');
const clickResult = document.getElementById('clickResult');

clickBtn.addEventListener('click', () => {
  clickResult.textContent = 'Button was clicked!';
});

// Hover effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => {
  hoverBox.classList.add('hovered');
});
hoverBox.addEventListener('mouseleave', () => {
  hoverBox.classList.remove('hovered');
});

// Keypress detection
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Secret action: double-click or long press
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMsg');

secretBtn.addEventListener('dblclick', () => {
  secretMsg.textContent = 'Double-click detected! 🎉';
});

let pressTimer;
secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    secretMsg.textContent = 'Long press detected! 🤫';
  }, 1500);
});
secretBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});
secretBtn.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer);
});

// 2. Interactive Elements 🎮

// Button that changes text & color
const colorTextBtn = document.getElementById('colorTextBtn');
let toggled = false;
colorTextBtn.addEventListener('click', () => {
  toggled = !toggled;
  colorTextBtn.textContent = toggled ? 'Text & color changed!' : 'Change my text & color';
  colorTextBtn.style.backgroundColor = toggled ? '#76c7c0' : '#eee';
});

// Image gallery slideshow
const images = [
  'https://picsum.photos/id/1015/300/200',
  'https://picsum.photos/id/1016/300/200',
  'https://picsum.photos/id/1018/300/200',
];
let currentImageIndex = 0;

const galleryImg = document.getElementById('galleryImg');
const prevImgBtn = document.getElementById('prevImg');
const nextImgBtn = document.getElementById('nextImg');

function showImage(index) {
  galleryImg.src = images[index];
}

prevImgBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
});

nextImgBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
});

// Initialize gallery
showImage(currentImageIndex);

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// 3. Form Validation 📋✅

const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMsg = document.getElementById('formMsg');

// Real-time validation helper
function validateName() {
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    return false;
  } else {
    nameError.textContent = '';
    return true;
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Invalid email format.';
    return false;
  } else {
    emailError.textContent = '';
    return true;
  }
}

function validatePassword() {
  if (passwordInput.value.length < 
