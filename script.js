var currentPhoto = "";
var currentCaption = "";
  function HandleClickEvent() {
			var theDiv = document.getElementById("content");
			theDiv.style="text-align:center;color:red";
		}
		function DisplayPhoto() {
		var thePhoto = document.getElementById("photo");
    var theCaption = document.getElementById("caption");
		var n = Math.random();
		if (n <= 0.33) {
			thePhoto.src = "https://cdn.glitch.com/46d2409e-8a7d-4b6b-8bca-5e4645a48724%2Frls-1.jpg?v=1569243226979";
      theCaption.innerHTML = " with his new Purdue Fort Wayne polo"
    }
		else if (n <= 0.66) {
			thePhoto.src = "https://cdn.glitch.com/46d2409e-8a7d-4b6b-8bca-5e4645a48724%2Frls-2.jpg?v=1569243237993";
      theCaption.innerHTML = " at the Fanny Freezer 5K"
    }
		else {
			thePhoto.src = "https://cdn.glitch.com/46d2409e-8a7d-4b6b-8bca-5e4645a48724%2Frls-4.jpg?v=1569242880979";
      theCaption.innerHTML = " with two Saints of the D at the Fanny Freezer 5K"
    }
		}
		function HandleMouseOverEvent() {
		var thePhoto = document.getElementById("photo");
    var theCaption = document.getElementById("caption");
		currentPhoto = thePhoto.src;
    currentCaption = theCaption.innerHTML;
		thePhoto.src = "https://cdn.glitch.com/46d2409e-8a7d-4b6b-8bca-5e4645a48724%2Frls-3.jpg?v=1569243269599";
    theCaption.innerHTML = " with cast members of a Guardians of the Galaxy retreat skit";
		}
		
		function HandleMouseOutEvent() {
		var thePhoto = document.getElementById("photo");
    var theCaption = document.getElementById("caption");
		thePhoto.src = currentPhoto;
    theCaption.innerHTML = currentCaption;
		}
