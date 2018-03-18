// if file is not exported, just specify the path
// if it is not js file, specify extentions .css
import '../styles/image_viewer.css'

const image = document.createElement('img');
image.src = "http://lorempixel.com/400/400";
document.body.appendChild(image);
