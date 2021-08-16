
fetch('http://flip1.engr.oregonstate.edu:3468/94015')
   .then(response => response.json())
  .then(data => console.log(data));


var req = new XMLHttpRequest();
req.open("GET", "http://flip1.engr.oregonstate.edu:3468/94015", true);
req.withCredentials = true;
req.addEventListener('load',function(){
    if(req.status >= 200 && req.status < 400){
        console.log("hi");
        var response = JSON.parse(req.responseText);
          
            } else {
                 console.log("Error in network request: " + req.statusText);
            }});
  req.send();
