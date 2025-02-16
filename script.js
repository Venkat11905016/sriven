
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


// const hamburger = document.getElementById('hamburger-icon');
// const navLinks = document.getElementById('nav-links');

// // Toggle the "active" class on nav-links when hamburger icon is clicked
// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger-icon");
  const navLeft = document.querySelector(".nav-left");

  hamburger.addEventListener("click", function() {
      navLeft.classList.toggle("active");
  });
});



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
  sliderImg.src = images[currentImageIndex]?.src;
  imageTitle.textContent = images[currentImageIndex]?.title;
  imageSubtitle.textContent = images[currentImageIndex]?.subtitle;
  imageDescription.textContent = images[currentImageIndex]?.description;
  // imageParagraph.textContent = images[currentImageIndex]?.paragraph;
}

// Function to go to the next image
rightArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
});

// Function to go to the previous image
leftArrow.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateImage();
});

// Automatically change the image every 4 seconds
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateImage();
}, 4000); // 4000 milliseconds = 4 seconds

// Initialize the first image and text
updateImage();


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
  const walk = (x - startX1) * 2; 
  imageWrapper.style.transform = `translateX(${scrollLeft - walk}px)`;
});


let scrollInterval = setInterval(() => {
  let scrollWidth = imageWrapper.scrollWidth - scrollContainer.offsetWidth;
  if (imageWrapper.scrollLeft >= scrollWidth) {
    imageWrapper.scrollLeft = 0;
  } else {
    imageWrapper.scrollLeft += 2;
  }
}, 30);
