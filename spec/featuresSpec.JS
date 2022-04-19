// describe("addPlayer", () => {

// })

describe("swimData", () => {
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
      let graphPoints = [];
      let graphPoints1 = [];
      swimData("nemoFish", "100 Freestyle", graphPoints);
      
    it("adds points correctly", () => {
        expect(graphPoints[1][0]).toBe('3/8/2022');
    });
    
    it("correct size when data present", () => {
        expect(graphPoints.length).toBe(3);
    });

    swimData("nemoFish", "200 Freestyle", graphPoints1);
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
