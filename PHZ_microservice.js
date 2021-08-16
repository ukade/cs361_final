document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
document.getElementById('zipSubmit').addEventListener('click', function(event){
var req = new XMLHttpRequest();
var zipCode = document.getElementById('zip').value;
if (typeof zipCode === 'string'){
req.open("GET", "https://phzmapi.org/" + zipCode +".json", true);
} 
req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
             var response = JSON.parse(req.responseText);
          document.getElementById('zone').textContent = response.zone;
        } else {
             console.log("Error in network request: " + req.statusText);
        }});
req.send(null);

event.preventDefault();
})
}
