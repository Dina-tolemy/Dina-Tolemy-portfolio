var img1 = $('<img src="https://user-images.githubusercontent.com/55872249/79184636-13a4a300-7e58-11ea-9f36-05b7587665e0.png" alt="Project photo " style="width:500px; hieght=500px;">');
var img6 = $('<img src="https://user-images.githubusercontent.com/55872249/79184618-04255a00-7e58-11ea-9b60-18cff7278539.png" alt=" Project photo" style="width:500px; hieght=500px;">');
var img3 = $('<img src="https://user-images.githubusercontent.com/55872249/70845940-8a309480-1ea8-11ea-8368-95d737dc55ce.png" alt="weather2" style="width:500px; hieght=600px;"></img>');
var img2 = $('<img src="https://user-images.githubusercontent.com/55872249/70368243-3fd57380-18fc-11ea-91f5-2a26903189b8.png" alt="Annotation 2019-12-07 141045"style="width:500px; hieght=600px; ">');
var img5 = $('<img src="https://user-images.githubusercontent.com/55872249/81644687-90cd3300-946b-11ea-924e-cc0a19a5ff85.png" alt="stronger Community" style="width:500px; hieght=500px;".>')
var img4 = $('<img src="https://user-images.githubusercontent.com/55872249/69898061-4b7ae480-13a8-11ea-8d23-25adb9a0c01e.png" alt="correct" style="width:500px; hieght=400px;">');


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function project1() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Day Planner";
    var myroleText = document.getElementById('myrole');
    myroleText.innerHTML = "";
    var proDescription = document.getElementById("description");
    proDescription.innerHTML = "It's a site that allows the user to save all his important meetings and tasks during the work day" + "</br>" + " from 9 AM till 5 PM";
    $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Day-planner">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Day-planner/">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img2);
}

function project2() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Simple Coding Quiz";
    var proDescription = document.getElementById("description");
    var myroleText = document.getElementById('myrole');
    myroleText.innerHTML = "";
    proDescription.innerHTML = "It's a simple Java script quiz with a timer and the score is the time left." + "</br>" + "it shows the score at the end and it keeps the scores and shows the highest";
    $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Coding-quiz">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Coding-quiz/">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img4);
}

function project3() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Stronger Community";
    var myroleText = document.getElementById('myrole');
    myroleText.innerHTML = "";
    var proDescription = document.getElementById("description");
    proDescription.innerHTML = "An app built with MERN to let the vulnerable and in-need people get the help they want in these difficult times"+" and let the people know what they need and help them if they can.";
    $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Stronger-Community">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://stronger-community.herokuapp.com/">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img5);
}

function project6() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Weather Dashboard";
    var myroleText = document.getElementById('myrole');
    myroleText.innerHTML = "";
    var proDescription = document.getElementById("description");
    proDescription.innerHTML = "It's a site that allows the user to know the weather in details for 5 days depending on the city he searchs for," + " also it saves the cities that has been searched for, so you can return to it any time "
    $('.projectGitLink').html('<a href="https://github.com/Dina-tolemy/Weather-Dashboard">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://dina-tolemy.github.io/Weather-Dashboard/.">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img3);
}


function project4() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Arena Collection";
    var proDescription = document.getElementById("description");
    var myroleText = document.getElementById('myrole');
    proDescription.innerHTML = "An app that allows the players of the magic gathering game to search the cards depending on a variety of search methods and build their own card deck and import it to the game";
    myroleText.innerHTML = "My Role: ' Front-End'"
    $('.projectGitLink').html('<a href="https://github.com/Jasper8628/GroupProjectOne">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://jasper8628.github.io/GroupProjectOne/">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img1);

}

function project5() {

    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("title");
    captionText.innerHTML = "Proficiency Education";
    var myroleText = document.getElementById('myrole');
    var proDescription = document.getElementById("description");
    myroleText.innerHTML = "My Role: 'Creating Data Base with sequlize, Html routes and student side of the site'"
    proDescription.innerHTML = "It's a site for an education centers that allows the students to Enroll to the center with the courses they want" + "</br>" +
        ",and then then use thier acount to sign in and see their grades and details" + "</br>" + "And for the stuff to view all students details and enter the grades for the sudent's homework";
    $('.projectGitLink').html('<a href="https://github.com/tak-9/project2">GiHub Page</a>');
    $('.projectDeployedLink').html('<a href="https://proficiency.herokuapp.com/">Project link</a>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append('</br>');
    $('.projectDeployedLink').append(img6);
}

