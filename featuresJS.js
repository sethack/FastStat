<<<<<<< HEAD
let dict = {}
const players = new Map();
=======

>>>>>>> 29cebb4b800af58b79eadbbf1bbd6679cefc20f4
document.addEventListener('DOMContentLoaded', () => {
 console.log(document)
 addplayer()
 removeplayer()


JSC.Chart('myChart', {
    type: 'line',
    title_label_text: 'Line Series Types',
    legend_visible: false,
    xAxis: { scale_type: 'time' },
    series: [
      { 
        name: 'Date',
        points: [
          ['1/1/2022', 29.9],
          ['1/2/2022', 71.5],s
          ['1/3/2022', 106.4],
          ['2/6/2022', 129.2],
          ['3/7/2022', 144.0],
          ['4/8/2022', 176.0]
        ]
      }
    ]
});

function addplayer (){
  const adding = document.getElementById("addtoroster");
  adding.addEventListener('click', () => {
    let player = prompt("Input player");
    console.log(player)
    //Search for player in database
    //Add that player to the players dictionary !!
    
    //If false return error
    //Else add the player to the table
  })
}
function removeplayer(){

  const removing = document.getElementById("remove");
  removing.addEventListener('click', ()=>{
    let player = prompt("Input player");
    if(players.has(player)){
      alert("already have player in table!")
        }
    else{
      console.log("searching......") // look for the players in this data base ig?
    }
  })
}
<<<<<<< HEAD
function createaccounttojson(username,password){ // give a username and a password
    dict[username] = password  // hopefully like the password value can be an object?
}

/***Create Account HTML functions***/

//form validator (name, username, and email are required elements so only profile type and password need to be checked)
let profType = false;
let profTypeWidget = document.querySelector("select");
profTypeWidget.addEventListener("input", () => { //check that radio is checked
  if(profTypeWidget.checked){
    profType = true;
  }
});

let password = false;
let passwordWidget = document.querySelector("#password");
let cPasswordWidget = document.querySelector("#cPassword");
cPasswordWidget.addEventListener("input", () => { //check that password is filled in and matches
  if(cPasswordWidget.value.length !== 0 && cPasswordWidget.value === passwordWidget.value){
    password = true;
  }
});

let nameWidget = document.querySelector("#name");
let usernameWidget = document.querySelector("#username");
let emailWidget = document.querySelector("#email"); 
let formWidget = document.querySelector("#caButton");
formWidget.addEventListener("click", () => {
  if (!profType || !password) {
    event.preventDefault();
  }
  players.set(usernameWidget.value, {
    name: nameWidget.value, 
    profile: profTypeWidget.options[profTypeWidget.selectedIndex].value,
    email: emailWidget.value,
    password: passwordWidget.value});
});

})
=======

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
>>>>>>> 29cebb4b800af58b79eadbbf1bbd6679cefc20f4
