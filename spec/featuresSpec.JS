describe("addPlayer", () => {
    beforeEach(() =>{
        players = new Map();
        pt = document.querySelector("select");
        p = document.querySelector("#password");
        n = document.querySelector("#name");
        u = document.querySelector("#username");
        e = document.querySelector("#email"); 
        pt.value = "Swimmer";
        p.value = "abc123";
        n.value = "Joe";
        u.value = "SwimmerJoe77";
        e.value = "SwimmerJoe@gmail.com";
    })
    
    it("adds player correctly", () => {
        addPlayer();
        expect(players.get("SwimmerJoe77").name).toBe("Joe");
        expect(players.get("SwimmerJoe77").password).toBe("abc123");
        expect(players.get("SwimmerJoe77").profileType).toBe("Swimmer");
        expect(players.get("SwimmerJoe77").email).toBe("SwimmerJoe@gmail.com")
    });

    it("updates player information correctly", () => {
        addPlayer();
        n.value = "Joseph";
        addPlayer();
        expect(players.get("SwimmerJoe77").name).toBe("Joseph");
    });

})

describe("swimDates", () => {
    
  
  
it("adds points correctly", () => {
  let graphPoints = [];
  
  swimDates("nemoFish", "100 Freestyle", graphPoints);
    expect(graphPoints[1]).toBe('3/8/2022');
});

it("correct size when data present", () => {
  let graphPoints = [];
  
  swimDates("nemoFish", "100 Freestyle", graphPoints);
    expect(graphPoints.length).toBe(2);
});


it("correct size when data not present", () => {
  let graphPoints1 = [];
  swimDates("nemoFish", "50 Freestyle", graphPoints1);
    expect(graphPoints1.length).toBe(0);
});
});

describe("swimTimes", () => {

let graphPoints = [];
let graphPoints1 = [];
swimTimes("nemoFish", "100 Freestyle", graphPoints);

it("adds points correctly", () => {
  expect(graphPoints[1]).toBe(144);
});

it("correct size when data present", () => {
  expect(graphPoints.length).toBe(2);
});

swimTimes("nemoFish", "50 Freestyle", graphPoints1);
it("correct size when data not present", () => {
  expect(graphPoints1.length).toBe(0);
});
});

describe("swimTable", () => {
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
it("No table initially", () => {
    expect(document.querySelector("#statTable") === null).toBe(true);
});
});