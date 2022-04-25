let players = new Map();
document.addEventListener('DOMContentLoaded', () => {
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

/***Create Account HTML functions***/
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
  let player = {
      name: nameWidget.value, 
      profile: profTypeWidget.options[profTypeWidget.selectedIndex].value,
      email: emailWidget.value,
      password: passwordWidget.value
  }
  localStorage.setItem(usernameWidget.value, JSON.stringify(player));
  window.alert("Account created successfully. Please log in.");
  window.location.href = "logIn.html";
}

});
  



function player(name,username,email,password,times) {  // so im aware we have a map going rn to store these things,
                                                      // would it be easier if we have a map wich points to this obj?
  this.name = name;
  this.username = username;
  this.email = email;
  this.password = password;
  this.times = times;


}
function coach(name,username,email,password){
  this.name = name;
  this.username = username;
  this.email = email;
  this.password = password;
}


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
function swimDates(username, races, points) {
  let swim = swimmer[username];
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      points.push(swim.entries[num].date);
    }
  }
  return points;
}

function swimTimes(username, races, points) {
  let swim = swimmer[username];
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      points.push(parseInt(swim.entries[num].time))
    }
  }
  return points;
}

function swimTable(username, races) {
  let swim = swimmer[username];
  html = '<table id = "statTable" style="width:100%"><tr class = "two"><th>Date</th><th>Event</th><th>Time (s)</th><th style="width:70%">Comments</th></tr>';
  let count = 0;
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      html += '<tr>';
      html += '<th>' + swim.entries[num].date + '</th>';
      html += '<td>' + swim.entries[num].race + '</td>';
      html += '<td>' + swim.entries[num].time + '</td>';
      html += '<td>' + swim.entries[num].comment + '</td>';
      html += '</tr>';
      count ++;
    }
  }
  if(count === 0){
    html += '<tr>';
    html += '<td colspan = "4" style = "font-size: 16pt">No Recorded Times For '+ races + '</td>';
    html += '</tr>';
  }
  html += '</table>';
  if(document.getElementById("statTable") !=null){
    document.getElementById("statTable").innerHTML = html;
  }
  return html;
}

 function swimGraph(username, dates, times, event){
  html = '<canvas id="myChart" style="width:100%;max-width:700px"></canvas>';
  document.getElementById("chart").innerHTML = html;
  new Chart("myChart", {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: "Times",
        borderColor: "black",
        data: times,
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
console.log("here!!!!!!!");
var username1 = "nemoFish";
if(document.getElementById("eventsResults") != null){
  var username1 = "nemoFish";
  let events = document.getElementById("eventsResults");
  console.log("here!!!!!!!");
  events.addEventListener("change", () => { 
    console.log("click");
    let datePoints = [];
    let timePoints = [];
    datePoints = swimDates(username1, events.value, datePoints);
    timePoints = swimTimes(username1, events.value, timePoints);
    //console.log(graphPoints);
    swimTable(username1, events.value);
    swimGraph(username1, datePoints, timePoints, events.value)
  });
}

function putplayer(){
  document.getElementById("addtoroster").addEventListener("click", () =>{
      input = prompt("Enter player username");
      table = document.getElementById("tbl");
      if(players.has(input) && !(findinput(input,table))){
        console.log("in");
        var row = table.insertRow(1);
        row.insertCell(0).innerHTML = players.get(input).name;
        //row.insertCell(1).innerHTML = findbestevent(input);
      }
      else{
        alert("Username not found in database, or this player already exists on your table!")
      }
  })
}
function findbestevent(usrname){
  try{
    bestevent = null;
    x = 0;
    for(let i = 1;i<=Object.keys(players.get(usrname).entries).length;i++){ 
      if(parseFloat(players.get(usrname).entries[i].time)>x){
        bestevent = players.get(usrname).entries[i].race;
      }
    }
    return bestevent;
  }
  catch (error){
    alert("player has no race data!");
    return null;
  }
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
};
