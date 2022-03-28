class match {
    constructor() {
        this.batunyaPlayer = document.querySelector(".batunyaPlayer");
        this.kertasPlayer = document.querySelector(".kertasnyaPlayer");
        this.guntingnyaPlayer = document.querySelector(".guntingnyaPlayer");
        this.bgBatuPlayer = document.querySelector(".batuPlayer");
        this.bgKertasPlayer = document.querySelector(".kertasPlayer");
        this.bgGuntingPlayer = document.querySelector(".guntingPlayer");
        this.bgBatuComputer = document.querySelector(".batuComputer");
        this.bgKertasComputer = document.querySelector(".kertasComputer");
        this.bgGuntingComputer = document.querySelector(".guntingComputer");
        this.versus = document.querySelector(".vs");
        this.bgVersus = document.querySelector(".versus");
        this.refresh = document.querySelector(".refresh");
        this.playerChoice = "";
        this.computerChoice = "";
        this.result = "";
    }

    matchPlay() {
        this.batuMatch();
        this.kertasMatch();
        this.guntingMatch();
        this.refreshMatch();
    }

    refreshMatch() {
        this.refresh.addEventListener("click", () => {
            this.removeStyle();
        });
    }

    batuMatch() {
        this.batunyaPlayer.addEventListener("click", () => {
            this.playerChoice = "batu";
            console.log(`saya memilih ${this.pilihan}`);
            this.removeStyle();
            setTimeout(() => {
                this.matchFlow();
                this.chooseStyle();
            }, 300);
        });
    }

    kertasMatch() {
        this.kertasPlayer.addEventListener("click", () => {
            this.playerChoice = "kertas";
            console.log(`saya memilih ${this.pilihan}`);
            this.removeStyle();
            setTimeout(() => {
                this.matchFlow();
                this.chooseStyle();
            }, 300);
        });
    }

    guntingMatch() {
        this.guntingnyaPlayer.addEventListener("click", () => {
          this.playerChoice = "gunting";
          console.log(`saya memilih ${this.pilihan}`);
          this.removeStyle();
          setTimeout(() => {
            this.matchFlow();
            this.chooseStyle();
          }, 300);
        });
    }

    matchFlow()


    computerChoose() {
        const random = Math.floor(Math.random() * 3 + 1);
        if (random === 1) {
            this.computerChoice = "batu";
        } else if (random === 2) {
            this.computerChoice = "kertas";
        } else if (random === 3 ) {
            this.computerChoice = "gunting"
        }
    }

    winning() {
        if (this.playerChoice === this.computerChoice) {
            this.result = "draw";
        } else if (this.playerChoice === "batu") {
            this.computerChoice === "kertas"
            ? (this.result = "kalah")
            : (this.result = "menang");
        } else if (this.playerChoice === "kertas") {
            this.computerChoice === "gunting"
            ? (this.result = "kalah")
            : (this.result = "menang");
        } else if (this.playerChoice === "gunting") {
            this.computerChoice === "batu"
            ? (this.result = "kalah")
            : (this.result = "menang");    
        }
    }
}