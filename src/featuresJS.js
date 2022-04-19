let players = new Map();
players.set("james", {
  name: "james",
  profile: "cool",
  email: "jamesgmail",
  password: "jj",
  entries: {
    1:{
      race: "100 Freestyle",
      date: "3/7/2022", 
      time: "144.0",
      comment: "Touched the butt"
    },
    2:{
      race: "100 Freestyle",
      date: "3/8/2022", 
      time: "144.0",
      comment: "Touched the butt"
    },
    3:{
      race: "100 Freestyle",
      date: "3/9/2022", 
      time: "164.0",
      comment: "Touched the butt"
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector("#addtoroster") !== null){
    putplayer();
  if(document.querySelector("#remove") !== null){
    removeplayer();
  }
}
/* JSC.Chart('myChart', {
    type: 'line',
    title_label_text: 'Line Series Types',
    legend_visible: false,
    xAxis: { scale_type: 'time' },
    series: [
      { 
        name: 'Date',
        points: [
          ['1/1/2022', 29.9],
          ['1/2/2022', 71.5],
          ['1/3/2022', 106.4],
          ['2/6/2022', 129.2],
          ['3/7/2022', 144.0],
          ['4/8/2022', 176.0]
        ]
      }
    ]
}); */
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
  players.set(usernameWidget.value, {
    name: nameWidget.value, 
    profile: profTypeWidget.options[profTypeWidget.selectedIndex].value,
    email: emailWidget.value,
    password: passwordWidget.value});
    console.log(players); 
  }
  console.log(players); // if I forget to remove this feel free to delete
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
        time: "144.0",
        comment: "Touched the butt"
      },
      2:{
        race: "100 Freestyle",
        date: "3/8/2022", 
        time: "144.0",
        comment: "Touched the butt"
      },
      3:{
        race: "100 Freestyle",
        date: "3/9/2022", 
        time: "164.0",
        comment: "Touched the butt"
      }
    }
  }
}
function swimData(username, races, points) {
  let swim = swimmer[username];
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      console.log([swim.entries[num].date, swim.entries[num].time])
      points.push([swim.entries[num].date, swim.entries[num].time])
    }
  }
  return points;
}
function swimTable(username, races) {
  let swim = swimmer[username];
  html = '<table id = "statTable"><tr class = "two"><th colspan="1">Date</th><th colspan="1">Event</th><th colspan="1">Time</th><th colspan="2">Comments</th></tr>';
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      html += '<tr>';
      html += '<th>' + swim.entries[num].date + '</th>';
      html += '<td>' + swim.entries[num].race + '</td>';
      html += '<td>' + swim.entries[num].time + '</td>';
      html += '<td>' + swim.entries[num].comment + '</td>';
      html += '</tr>';
    }
  }
  html += '</table>';
  if(document.getElementById("statTable") !=null){
    document.getElementById("statTable").innerHTML = html;
  }
}
/* function swimGraph(username, point, event){
  if(document.querySelector("canvas") != null){
    console.log("remove");
    let chart = document.querySelector("canvas");
    chart.parentNode.removeChild(chart);
  }
  html = "<canvas id='myChart'></canvas>";
document.getElementById("chart").innerHTML = html;
  JSC.Chart('myChart', {
    type: 'line',
    title_label_text: event,
    legend_visible: false,
    xAxis: { scale_type: 'time' },
    series: [
      { 
        name: 'Date',
        points: point
      }
    ]
}); */
//}
var username1 = "nemoFish";
if(document.getElementById("eventsResults") != null){
  var username1 = "nemoFish";
  let events = document.getElementById("eventsResults");
  console.log(events.value);
  events.addEventListener("change", () => { 
    console.log("yay");
    let graphPoints = [];
    graphPoints = swimData(username1, events.value, graphPoints);
    console.log(graphPoints);
    swimTable(username1, events.value);
    // swimGraph(username1, graphPoints, events.value)
  });
}
function putplayer(){
  document.getElementById("addtoroster").addEventListener("click", () =>{
      let input = prompt("Enter player username");
      table = document.getElementById("tbl");
      if(players.has(input) && !(findinput(input,table))){
        var row =  table.insertRow(1);
        row.insertCell(0).innerHTML = players.get(input).name;
        row.insertCell(1).innerHTML = findbestevent(input);
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
}
