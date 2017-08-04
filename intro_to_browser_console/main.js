//manipulate the Dom using javascript
//add the date to the to the html

//we define the date variable
var date = new Date()

//we add one to the month because it counts from 0 to 11. 
document.body.innerHTML = "<h1> The date today is "+ date.getDate()+ "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "</h1>"