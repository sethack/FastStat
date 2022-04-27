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

/***Create Account HTML functions***/
if(document.querySelector("#caButton") !== null){
  let formWidget = document.querySelector("#caButton");
  formWidget.addEventListener("click", addPlayer); 
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
  document.getElementById("statTable").innerHTML = html;
}

function swimGraph(username, point, event){
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
});

}
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
    swimGraph(username1, graphPoints, events.value)
  });
} 