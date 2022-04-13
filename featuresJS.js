
document.addEventListener('DOMContentLoaded', () => {
 console.log(document)
 addplayer()
 removeplayer()
})

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
          ['1/2/2022', 71.5],
          ['1/3/2022', 106.4],
          ['2/6/2022', 129.2],
          ['3/7/2022', 144.0],
          ['4/8/2022', 176.0]
        ]
      }
    ]
});
function createaccount (){

 // how are we acessing differnt files?
}
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
