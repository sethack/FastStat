
let swimmer = {
  nemoFish: {
    password: "hello",
    name: "Nemo",
    email: "luckyfin@fish.com",
    entries: {
      1:{
        race: "100 Freestyle",
        date: "3/7/2022", 
        time: "144",
        comment: "Touched the butt"
      },
      2:{
        race: "100 Freestyle",
        date: "3/8/2022", 
        time: "144",
        comment: "Touched the butt"
      },
      3:{
        race: "200 Freestyle",
        date: "3/9/2022", 
        time: "164",
        comment: "Touched the butt"
      }
    }
  }
}

let players = new Map();
document.addEventListener('DOMContentLoaded', () => {
  console.log("test");
  if(document.getElementById("profileName")!== null){
    console.log("on homepage");
    document.getElementById("profileName").textContent = "Welcome "+JSON.parse(localStorage.getItem(localStorage.Current)).name;
  }
  if(document.getElementById("eTime") !== null){
    timeStore();
  }
  
  if(document.querySelector("#addtoroster") !== null){
    putplayer();
  if(document.querySelector("#remove") !== null){
    removeplayer();
  }
  players.set(
    'nemoFish', {
      password: "hello",
      name: "Nemo",
      email: "luckyfin@fish.com"
    })
}

if(document.querySelector("#caButton") !== null){
let formWidget = document.querySelector("#caButton");
formWidget.addEventListener("click", addPlayer); 
}
function addPlayer(){
let profTypeWidget = document.querySelector("select");
let passwordWidget = document.querySelector("#password");
let nameWidget = document.querySelector("#name");
let usernameWidget = document.querySelector("#username");
let emailWidget = document.querySelector("#email"); 
// if (!profType || !password) {
  //   event.preventDefault();
  // }
  let entryArr = []
  let player = {
      name: nameWidget.value, 
      profile: profTypeWidget.options[profTypeWidget.selectedIndex].value,
      email: emailWidget.value,
      password: passwordWidget.value,
      entries: entryArr
}

  function addPlayer(){
  //get form inputs
  let profTypeWidget = document.querySelector("select");
  let passwordWidget = document.querySelector("#password");
  let cPasswordWidget = document.querySelector("#cPassword");
  let nameWidget = document.querySelector("#name");
  let usernameWidget = document.querySelector("#username");
  let emailWidget = document.querySelector("#email"); 
  
  if (profTypeWidget.options[profTypeWidget.selectedIndex].value === "Please choose an account type") { //profile type validator
    window.alert("Please select an account type.")
    return;
  }
  
  if (nameWidget.value.length === 0) { //name validator
    window.alert("Please enter a name.")
    return;
  }
  
  if (usernameWidget.value.length === 0) { //username validator
    window.alert("Please enter a username.")
    return;
  }
  
  if (emailWidget.value.length === 0 || !emailWidget.value.includes("@")) { //email validator
    window.alert("Please enter a valid email.")
    return;
  }
  
  if (passwordWidget.value.length ===0) { //password validator
    window.alert("Please enter a password.")
    return;
  }
  
  if (cPasswordWidget.value.length ===0) { //confirm password validator
    window.alert("Please confirm password.")
    return;
  }
  
  if (passwordWidget.value !== cPasswordWidget.value) { //passwords match validator
    window.alert("Passwords must be the same.")
    return;
  }

//create temporary player object 
let player = {
  name: nameWidget.value, 
  profile: profTypeWidget.options[profTypeWidget.selectedIndex].value,
  email: emailWidget.value,
  password: passwordWidget.value
}
localStorage.setItem(usernameWidget.value, JSON.stringify(player)); //convert player object to JSON and store in local storage with username as key
window.alert("Account created successfully. Please log in.");
window.location.href = "logIn.html";
}
};
function swimDates(username, races, points) {//returns array of date points
  let swim = JSON.parse(localStorage.getItem(username));//current swimmer object
  for(num in swim.entries){//look through all event entries
    if(swim.entries[num].race === races){//only use desired race data
      points.push(swim.entries[num].date);//push date to array
    }
  }
  return points;//retrun array of dates for desired event
}


 


if(document.getElementById("eventsResults") != null){//check to see if element is in current DOM

  var username1 = localStorage.getItem('Current');//find current user's username
  let events = document.getElementById("eventsResults");//create variable for events pull down
  
  events.addEventListener("change", () => { //add event listener for when event is changed
    
    let datePoints = [];//initailize date array
    let timePoints = [];//initialize time array
    datePoints = swimDates(username1, events.value, datePoints);//find date point
    timePoints = swimTimes(username1, events.value, timePoints);//fine time points
    
    swimTable(username1, events.value);//create HTML table
    swimGraph(username1, datePoints, timePoints, events.value);//create graph
  });
}

function putplayer(){
  document.getElementById("addtoroster").addEventListener("click", () =>{
      input = prompt("Enter player username");
      data = JSON.parse(localStorage.getItem(input))
      console.log(data)
      table = document.getElementById("tbl");
      if(players.has(input) && !(findinput(input,table))){
        var row = table.insertRow(1);
        x = (Object.entries(data))
        row.insertCell(0).innerHTML = x[0][1]["name"];
      }
      else{
        alert("Username not found in database, or this player already exists on your table!")
      }
  })
}
function removeplayer(){
  let table = document.getElementById("tbl")
  document.getElementById("remove").addEventListener("click", ()=>{
    let input = prompt("Enter player username");
    holder = findinput(input,table);
    if(holder != false){  // players in table exist 
      table.deleteRow(holder);
      //remove player
    }
    else{
      alert("Player not found in table");
    }
  })
}
function findinput(input,table){
  for(var r = 0, n = table.rows.length; r < n; r++) {
      if(table.rows[r].cells[0].innerHTML === input){
        return(r);
      }
    }
  return false;
}



function timeStore(){
  document.getElementById("eTime").addEventListener("click", ()=>{
    let event = document.getElementById("events");
    let time = document.querySelector(".time");
    let date = document.querySelector(".date");
    let comments = document.querySelector(".comments");
    console.log(localStorage.Current);
    let currentUser = JSON.parse(localStorage.getItem(localStorage.Current));
    let count=1;
    for (let i in currentUser.entries){
      count++;
    }
    console.log(count);
    let submission = {
        "race": event.value,
        "date": date.value, 
        "time": time.value,
        "comment": comments.value
    }
    currentUser.entries[count] = submission;
    console.log(currentUser);
    localStorage.setItem(localStorage.Current,JSON.stringify(currentUser));
    console.log(JSON.parse(localStorage.bsawyer));
    count++;
  })
}

document.addEventListener("DOMContentLoaded", ()=>{
  if(document.getElementById("formLg") !== null){
  console.log("hi")
  let lgin = document.getElementById("lg");
  console.log(lgin)
  console.log(localStorage)
  console.log(JSON.parse(localStorage.getItem("jim")))
  lgin.addEventListener("click", ()=>{
    console.log("hi")
    username = document.getElementById("usernamelg").value;
    password = document.getElementById("passwordlg").value;
      data = JSON.parse(localStorage.getItem(username))
      console.log(data)
      if(data === null){
        alert("account dosent exist!")
      }
      else if(!(password === data["password"])){
        alert("Username or Password incorrect!")
      }
      else{
        localStorage.setItem("Current", username);
        console.log(localStorage)
        if(data["profile"] === "Coach"){
          window.location.href = "coachPg.html"; 
        }
        else{
          window.location.href = "home.html"; 
        }
      }
    })
  }
})
})

function swimDates(username, races, points) {//returns array of date points
  let swim = JSON.parse(localStorage.getItem(username));//current swimmer object
  for(num in swim.entries){//look through all event entries
    if(swim.entries[num].race === races){//only use desired race data
      points.push(swim.entries[num].date);//push date to array
    }
  }
  return points;//retrun array of dates for desired event
}

function swimTimes(username, races, points) {//returns an array of time points
  let swim = JSON.parse(localStorage.getItem(username));//current swimmer object
  for(num in swim.entries){//look through all event entries
    if(swim.entries[num].race === races){//only use desired race data
      points.push(parseInt(swim.entries[num].time));//push time to array
    }
  }
  return points;//return array of times for desired event
}

function swimTable(username, races) {//create HTML table for desired race, times, date, and comments
  let swim = JSON.parse(localStorage.getItem(username));//current swimmer object
  //create HTML table 
  html = '<table id = "statTable" style="width:100%"><tr class = "two"><th>Date</th><th>Event</th><th>Time (s)</th><th style="width:70%">Comments</th></tr>';
  let count = 0;//keep track of how many entries athlete has entered the desire race
  for(num in swim.entries){//look through all entries
    if(swim.entries[num].race === races){//only use desired race data
      html += '<tr>';
      html += '<th>' + swim.entries[num].date + '</th>';//enter date data
      html += '<td>' + swim.entries[num].race + '</td>';//enter race data
      html += '<td>' + swim.entries[num].time + '</td>';//enter time data
      html += '<td>' + swim.entries[num].comment + '</td>';//enter comments
      html += '</tr>';
      count ++;//update count
    }
  }
  if(count === 0){//if no events matching desired race are found
    //table will show message saying "No Recorded Times For" the desired race
    html += '<tr>';
    html += '<td colspan = "4" style = "font-size: 16pt">No Recorded Times For '+ races + '</td>';
    html += '</tr>';
  }
  html += '</table>';//end HTML table format
  if(document.getElementById("statTable") !=null){//check to make see if there is a prevous table
    document.getElementById("statTable").innerHTML = html;//insert table into HTML document through DOM
  }
}

 function swimGraph(username, dates, times, event){//creates a graphical representation of user race data
  html = '<canvas id="myChart" style="width:100%;max-width:700px"></canvas>';//HTML code for graph
  document.getElementById("chart").innerHTML = html;//add graph code to HTML through DOM
  new Chart("myChart", {//create new graph
    type: "line",
    data: {
      labels: dates,//horizontal axis will be dates 
      datasets: [{
        label: "Times",
        borderColor: "black",
        data: times,//vertical axis will be times
        fill: false
      }]
    },
    options: {
      title: {
        display: true,
        position: "top",
        text: event + "Progression",
        fontSize: 18,
        fontColor: "#111"
      }
    }
})};