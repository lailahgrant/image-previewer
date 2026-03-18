const file = document.querySelector("#file");
const fileName = document.querySelector(".file-name");
const image = document.querySelector(".photo-preview");
const previewBTN = document.querySelector(".preview");
const modal = document.querySelector(".modal");
const closeBTN = document.querySelector(".close");

file.addEventListener("change", () => {
    //console.log(file.files[0]);

    //displays file name on the webpage
    fileName.innerHTML = file.files[0].name;

    //create a file url / src
    const fileURL = URL.createObjectURL(file.files[0]);
    //console.log(fileURL);
    image.src = fileURL;
    previewBTN.classList.remove("inactive");
});


previewBTN.addEventListener("click", () => {
    modal.classList.toggle("display-none");
});

closeBTN.addEventListener("click", () => {
    modal.classList.toggle("display-none");
});









