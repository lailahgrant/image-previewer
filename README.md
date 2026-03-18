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





