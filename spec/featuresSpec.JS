
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