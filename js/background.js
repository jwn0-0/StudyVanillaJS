const images = ["heart1.jpg", "nightsky.jpg", "rainyday.jpg", "sky1.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);