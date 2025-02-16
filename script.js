
const modal = document.getElementById("enquiry-modal");
const enquiryBtn = document.getElementById("enquiry-btn");
const closeBtn = document.getElementById("close-btn");

enquiryBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("enquiry-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Form submitted!"); // You can replace this with your actual submission logic
    modal.style.display = "none"; // Close the modal after form submission
};

// // Select elements
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// // const leftArrow = document.getElementById('left-arrow');
// // const rightArrow = document.getElementById('right-arrow');

// let currentIndex = 0; // Start from the first image

// // Function to move to the next slide
// function goToSlide(index) {
//     // Ensure index is within bounds
//     if (index >= slides.length) {
//         currentIndex = 0; // Go back to the first image
//     } else if (index < 0) {
//         currentIndex = slides.length - 1; // Go to the last image
//     } else {
//         currentIndex = index;
//     }
    
//     // Adjust slider position
//     slider.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Function for automatic slide change every 4 seconds
// function autoSlide() {
//     setInterval(() => {
//         goToSlide(currentIndex + 1);
//     }, 4000); // Change slide every 4 seconds
// }

// // Event listeners for the left and right arrows
// leftArrow.addEventListener('click', () => goToSlide(currentIndex - 1));
// rightArrow.addEventListener('click', () => goToSlide(currentIndex + 1));

// // Start the automatic sliding
// // autoSlide();







// let currentImageIndex = 0;
// const images = [
//   '/Images/aspen_leaf.webp',
//   './Images/Night.webp',
//   './Images/perspective view01.webp',
//   './Images/villa-ourServices.webp',
//   './Images/villament-ourServices.webp',
// ];

// const sliderImg = document.getElementById('slider-img');
// const leftArrow = document.getElementById('left-arrow');
// const rightArrow = document.getElementById('right-arrow');

// // Function to update the image based on the index
// function updateImage() {
//   sliderImg.src = images[currentImageIndex];
// }

// // Function to go to the next image
// rightArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   updateImage();
// });

// // Function to go to the previous image
// leftArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//   updateImage();
// });

// // Initialize the first image
// updateImage();











// let currentImageIndex = 0;
// const images = [
//   '/Images/aspen_leaf.webp',
//   './Images/Night.webp',
//   './Images/perspective view01.webp',
//   './Images/villa-ourServices.webp',
//   './Images/villament-ourServices.webp',
// ];
// const sliderImg = document.getElementById('slider-img');
// const leftArrow = document.getElementById('left-arrow');
// const rightArrow = document.getElementById('right-arrow');

// // Function to update the image based on the index
// function updateImage() {
//   sliderImg.src = images[currentImageIndex];
// }

// // Function to go to the next image
// rightArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   updateImage();
// });

// // Function to go to the previous image
// leftArrow.addEventListener('click', () => {
//   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//   updateImage();
// });

// // Automatically change the image every 4 seconds
// setInterval(() => {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   updateImage();
// }, 4000); // 4000 milliseconds = 4 seconds

// // Initialize the first image
// updateImage();













let currentImageIndex = 0;




const images = [
  {
    src: '/Images/aspen_leaf.webp',
    title: 'The Belvedere By UKN',
    subtitle: '3 BHK apartments',
    description: 'Navarthna Agrahara, North banglore',
    paragraph: 'Additional information for Image 1',
  },
  {
    src: './Images/Night.webp',
    title: 'Navami Landmark',
    subtitle: '2 & 3 BHK Apartments',
    description: 'Kenchenhalli,R.R. Nagar',
    paragraph: 'Additional information for Image 2',
  },
  {
    src: './Images/perspective view01.webp',
    title: 'Suraksha Springs',
    subtitle: '2 & 3 BHK Apartments',
    description: 'Begur Road',
    paragraph: 'Additional information for Image 3',
  },
  {
    src: './Images/villa-ourServices.webp',
    title: 'Ds Max Sky samurai',
    subtitle: '2 & 3 BHK Apartments',
    description: 'White field,Banglore',
    paragraph: 'Additional information for Image 4',
  },
  {
    src: './Images/villament-ourServices.webp',
    title: 'Ds Max SkyBlossom',
    subtitle: '2 & 3 BHK Apartments',
    description: 'Begur, Banglore',
    paragraph: 'Additional information for Image 5',
  }
];

const sliderImg = document.getElementById('slider-img');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const imageTitle = document.getElementById('image-title');
const imageSubtitle = document.getElementById('image-subtitle');
const imageDescription = document.getElementById('image-description');
const imageParagraph = document.getElementById('image-paragraph');

// Function to update the image and text based on the index
function updateImage() {
  sliderImg.src = images[currentImageIndex].src;
  imageTitle.textContent = images[currentImageIndex].title;
  imageSubtitle.textContent = images[currentImageIndex].subtitle;
  imageDescription.textContent = images[currentImageIndex].description;
  imageParagraph.textContent = images[currentImageIndex].paragraph;
}

// Function to go to the next image
rightArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});

// Function to go to the previous image
leftArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images1.length) % images1.length;
  updateImage();
});

// Automatically change the image every 4 seconds
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images1.length;
  updateImage();
}, 4000); // 4000 milliseconds = 4 seconds

// Initialize the first image and text
updateImage();








let currentIndex = 0;
let isDragging = false;
let startX;
let scrollStartX;
const images1 = document.querySelectorAll('.carousel img');
const totalImages = images1.length;
const carousel = document.getElementById('carousel');
const carouselContainer = document.getElementById('carousel-container');

// Function to update the carousel position
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Handle mouse down event (begin dragging)
carouselContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX; // Store the position when mouse is pressed
  scrollStartX = carousel.offsetLeft; // Store current position of carousel
  carousel.style.transition = 'none'; // Disable smooth transition during drag
});

// Handle mouse move event (during dragging)
carouselContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // If not dragging, do nothing

  const x = e.pageX; // Get the current mouse position
  const walk = (x - startX) * 1; // Calculate how far the mouse has moved
  carousel.style.transform = `translateX(${scrollStartX + walk}px)`; // Apply the movement
});

// Handle mouse up event (end dragging)
carouselContainer.addEventListener('mouseup', () => {
  isDragging = false;

  const maxScroll = (totalImages - 4) * 25; // Maximum scroll value
  let newIndex = Math.round(carousel.offsetLeft / -carousel.offsetWidth); // Round the index to the nearest whole number

  // Boundaries to keep the scrolling within the first and last image
  if (newIndex < 0) newIndex = 0;
  if (newIndex > totalImages - 4) newIndex = totalImages - 4;

  currentIndex = newIndex;
  updateCarousel();
});

// Automatically scroll the carousel to the left slowly when no mouse drag
function autoScroll() {
  if (!isDragging) {
    currentIndex = (currentIndex === totalImages - 4) ? 0 : currentIndex + 1; // Move right, loop to start
    updateCarousel();
  }
}

// Set an interval to auto-scroll the images slowly
setInterval(autoScroll, 50); // Scroll every 50 milliseconds for a smooth effect






const scrollContainer = document.querySelector('.scroll-container');
const imageWrapper = document.querySelector('.image-wrapper');
let isMouseDown = false;
let startX1;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX1 = e.pageX - scrollContainer.offsetLeft;
  scrollLeft = imageWrapper.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

scrollContainer.addEventListener('mouseup', () => {
  isMouseDown = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const walk = (x - startX1) * 2; // The number 2 controls the drag speed
  imageWrapper.style.transform = `translateX(${scrollLeft - walk}px)`;
});

// Automatic scrolling (right to left)
let scrollInterval = setInterval(() => {
  let scrollWidth = imageWrapper.scrollWidth - scrollContainer.offsetWidth;
  if (imageWrapper.scrollLeft >= scrollWidth) {
    imageWrapper.scrollLeft = 0;
  } else {
    imageWrapper.scrollLeft += 2;
  }
}, 30);
