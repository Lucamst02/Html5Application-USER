var pageCounter = 1;
var userContainer = document.getElementById("user-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + "ID = " + data[i].id 
                + '</p>' + "NOME = " + data[i].name 
                + '</p>' + "EMAIL = " + data[i].email  
                + '</p>' + "CITTA' = " + data[i].address.city + "</p>";
    }

  userContainer.insertAdjacentHTML('beforeend', htmlString);
}