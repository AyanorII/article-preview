const shareButton = document.getElementsByClassName("share-btn");

const shareScreen = document.querySelector(".share-screen"); //Check if after "d-none" is removed, this line works;

const shareScreenButton = shareScreen.querySelector(".share-btn");

const mainUserDiv = document.querySelector(".main__user");

const mainUserDivButton = mainUserDiv.querySelector(".share-btn");



mainUserDivButton.addEventListener("click", function(){
    shareScreen.classList.toggle("share-screen--active");
})

shareScreenButton.addEventListener("click", function(){
    shareScreen.classList.toggle("share-screen--active");
})


const mediaQuery = window.matchMedia("(min-width: 1024px)");
console.log(shareScreen.children);

// const button = document.createElement("button")

// if (mediaQuery.matches) {
//     shareScreen.appendChild(shareScreen.children[2]);
// }




