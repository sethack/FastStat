let players = new Map();
document.addEventListener('DOMContentLoaded', () => {


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

/* var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      //backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: yValues
    }]
  }
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
  console.log("dates");
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      console.log([swim.entries[num].date])
      points.push(swim.entries[num].date)
    }
  }
  return points;
}

function swimTimes(username, races, points) {
  let swim = swimmer[username];
  console.log("times");
  let minutes = "";
  let seconds = 0;
  for(num in swim.entries){
    if(swim.entries[num].race === races){
      console.log([swim.entries[num].time])
      minutes = swim.entries[num].time % 60;
      console.log(minutes);
      seconds = (swim.entries[num].time - minutes*60);
      
      //points.push([minutes + seconds])
      minutes = swim.entries[num].time
      seconds = parseInt(minutes);
      console.log(seconds);
      points.push(parseInt(swim.entries[num].time))
    }
  }
  return points;
}

function swimTable(username, races) {
  let swim = swimmer[username];
  html = '<table id = "statTable" style="width:100%"><tr class = "two"><th>Date</th><th>Event</th><th>Time (s)</th><th style="width:70%">Comments</th></tr>';
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
  return html;
}

 function swimGraph(username, dates, times, event){
  /* if(document.querySelector("canvas") != null){
    console.log("remove");
    let chart = document.querySelectorAll("canvas");

    chart[chart.length -1].style.display = "none";
  } */
  console.log(dates);
  console.log(times);
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
  });
}

var username1 = "nemoFish";
if(document.getElementById("eventsResults") != null){
  var username1 = "nemoFish";
  let events = document.getElementById("eventsResults");
  console.log(events.value);
  events.addEventListener("change", () => { 
    console.log("yay");
    let datePoints = [];
    let timePoints = [];
    datePoints = swimDates(username1, events.value, datePoints);
    timePoints = swimTimes(username1, events.value, timePoints);
    //console.log(graphPoints);
    swimTable(username1, events.value);
    swimGraph(username1, datePoints, timePoints, events.value)
  });
}