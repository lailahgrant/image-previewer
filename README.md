## Image Previewer in plain HTML5, CSS3 and Vanilla JavaScript

### File Structure
- index.html
- style.css
- app.js 

### To Do
- Image previewed is displayed in a modal
- Upload an image in `.png`, `.jpg`, `.jpeg`
- Display uploaded filename
- Preview image button is *`inactive`* by default : if no image is uploaded.
- *image preview button is inactive by default till there's an uploaded image to preview*

### JavaScript logic
> Use DOM manipulation
- Upload an image
- Add the file name to the webpage
- Activate the preview image button
- Preview an image in the modal

> Upload Photo - fires an `event` called **change**.
> Use `addEventListener('change', ...)
> ```javascript
> file.addEventListener("change", () => {
>    console.log(file);
> });
> ```

> - To get more information on the uploaded file, use;
> ```javascript
> file.addEventListener("change", () => {
>    console.log(file.files[0]); //get an array of only one uploaded image
> });
> ```
>
> - Use more information to get file name and display it on the webpage

> ```javascript
> //displays file name on the webpage
> fileName.innerHTML = file.files[0].name;
> ```


#### JavaScript demo code 
> Return all information on uploaded image file like filename and other metadata.

``` javascript
const file = document.querySelector("#file");
const fileName = document.querySelector(".file-name");
const image = document.querySelector(".photo-preview");
const previewBTN = document.querySelector(".preview");
const modal = document.querySelector(".modal");
const closeBTN = document.querySelector(".close");

file.addEventListener("change", () => {
    console.log(file.files[0]);
});

```

##### Create URL for the photo (src)
- create a `fileURL` variable 
- Use the `URL.createObjectURL(file.files[0])`
- Turn the preview button to Active (activate the preview button)

```javascript
file.addEventListener("change", () => {
    //create a file url / src
    const fileURL = URL.createObjectURL(file.files[0]);
    //console.log(fileURL);
    image.src = fileURL;
    previewBTN.classList.remove("inactive");
});

```

##### Open modal when preview button is clicked
- Add event listener of click to the button
- Toggle the display of model
- Add another event listener to close the modal


#### Modal in index.html

```html
<!-- MODAL FOR IMAGE PREVIEW -->
     <div class="modal display-none">
        <div class="modal-content">
            <span class="close">X</span>
            <!-- src will be dynamically added using JavaScript -->
            <img class="photo-preview" src="" alt="">
        </div>
     </div>
```

#### Buttons and Filename in index.html

```html
<!-- UPLOAD, PREVIEW BUTTON AND FILENAME DISPLAY -->
     <div class="container">

    <!-- UPLOAD BUTTON -->
        <div class="file">
            <label for="file" class="btn"> Upload Photo</label>
            <input type="file" id="file" accept=".png,.jpg,.jpeg"> 
        </div>

    <!-- PREVIEW BUTTON -->
    <div class="file-preview">
        <!-- image preview button is inactive by default till there's an uploaded image to preview-->
         <button class="btn preview inactive">Preview Image</button>
    <!-- FILE NAME DISPLAY -->
        <p>File: <span class="file-name"></span></p>
    </div>
    
     </div>
```

<hr>



<hr>

#### HTML5 code in index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Image Previewer</title>
</head>
<body>
    
    <!-- MODAL FOR IMAGE PREVIEW -->
     <div class="modal display-none">
        <div class="modal-content">
            <span class="close">X</span>
            <!-- src will be dynamically added using JavaScript -->
            <img class="photo-preview" src="" alt="">
        </div>
     </div>

    <!-- UPLOAD, PREVIEW BUTTON AND FILENAME DISPLAY -->
     <div class="container">

    <!-- UPLOAD BUTTON -->
        <div class="file">
            <label for="file" class="btn"> Upload Photo</label>
            <input type="file" id="file" accept=".png,.jpg,.jpeg"> 
        </div>

    <!-- PREVIEW BUTTON -->
    <div class="file-preview">
        <!-- image preview button is inactive by default till there's an uploaded image to preview-->
         <button class="btn preview inactive">Preview Image</button>
    <!-- FILE NAME DISPLAY -->
        <p>File: <span class="file-name"></span></p>
    </div>
    
     </div>

    <script src="app.js"></script>
</body>
</html>
```

#### CSS3 code in style.css

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body{
    position: relative;
    min-height: 100vh;
}

/* MODAL */
.modal{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.6);
}

.modal-content{
    display: flex;
    justify-content: center;
    position: relative;
    min-width: 600px;
    height: 400px;
    padding: 60px;
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

.modal-content span{
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
}

.modal-content img{
    display: block;
    width: auto;
    height: 100%;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
}

.display-none{
    display: none;
}


/* BUTTONS */
.container{
    display: flex;
    padding: 60px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

button{
    border: none;
    margin-left: 14px;
}

.btn{
    cursor: pointer;
    padding: 12px 20px;
    background-color: rgba(0,0, 139, 1);
    color: #fff;
    border-radius: 12px;
    font-size: 14px;
    transition: 500ms ease-in-out all;
}

.btn:focus{
    outline: none;
}

.btn:hover{
    background-color: rgba(0,0, 139, 0.7);
    transform: scale(1.05);
}

.file, .file-preview{
    display: flex;

}

.file input{
    display: none;
}

.file-preview{
    align-items: center;
}

.file-preview p{
    margin-left: 16px;
    font-size: 14px;
}

.inactive{
    pointer-events: none;
    background-color: rgba(120, 120, 120, 0.5);
}

.file-name{
    margin-left: 4px;
}

```


#### JavaScript code in app.js

```javascript

```





