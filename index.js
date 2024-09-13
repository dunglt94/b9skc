let imgObj = null;
// imgObj = document.getElementById('myImage');
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0';
}
function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 50 + 'px';
}
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 50 + 'px';
}
window.onload = init;