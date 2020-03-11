var img1=$('<img src="./assets/Images/Arena.jpg" style="width:300px; hieght=300px;">');
var img3=$('<img src="https://user-images.githubusercontent.com/55872249/70845940-8a309480-1ea8-11ea-8368-95d737dc55ce.png" alt="weather2" style="width:400px; hieght=600px;"></img>');
var img2=$('<img src="https://user-images.githubusercontent.com/55872249/70368243-3fd57380-18fc-11ea-91f5-2a26903189b8.png" alt="Annotation 2019-12-07 141045"style="width:400px; hieght=600px; ">');
var img5=$('<img src="https://user-images.githubusercontent.com/55872249/74914360-6b093280-5416-11ea-8a7f-fe7fd11a8a09.png"> alt="Eat-Da-Burger" style="width:400px; hieght=600px;')
var img4=$('<img src="https://user-images.githubusercontent.com/55872249/69898061-4b7ae480-13a8-11ea-8d23-25adb9a0c01e.png" alt="correct" style="width:300px; hieght=400px;">');


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
   
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  
  // Modal Image Gallery
  function onClick(element) {
      if("#project1"){
        $('#projectModal').append(img4);
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML ="project1";
      }
    document.getElementById("img01").src = element.src;
   
 
  }