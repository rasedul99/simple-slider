const image = [
  "./images/first.jpg",
  "./images/second.jpg",
  "./images/third.jpg",
];

const imageElement = document.getElementById("images");
let img = 0;
setInterval(() => {
  if (img >= image.length) {
    img = 0;
  }
  const imgUrl = image[img];
  imageElement.setAttribute("src", imgUrl);
  img++;
}, 2000);
