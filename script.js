const images = document.querySelectorAll('.image');
const randomImage = document.getElementById('random-image');

// Add a click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Toggle the blur effect on/off
    if (image.style.filter === 'blur(5px)') {
      image.style.filter = 'blur(0px)';
    } else {
      image.style.filter = 'blur(5px)';
    }
  });
});

// Add a click event listener to the "Show Random Image" button
document.getElementById('randomize-button').addEventListener('click', () => {
  // Choose a random image from the list of images
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomSrc = images[randomIndex].getAttribute('src');
  
  // Update the source of the "random-image" element to display the chosen image
  randomImage.setAttribute('src', randomSrc);
});