class Game {
    constructor() {
        this.tanganBatuAnda = new Tangan(".tangan-player-section .batu-player");
        this.tanganKertasAnda = new Tangan(".tangan-player-section .kertas-player");
        this.tanganGuntingAnda = new Tangan(".tangan-player section .gunting-player");
        this.tanganBatuRobot = new Tangan(".tangan-robot-secetion .batu-robot");
        this.tanganKertasRobot = new Tangan(".tangan-robot-section .kertas-robot");
        this.tanganGuntingRobot = new Tangan(".tangan-roboto-section .gunting-robot");
        this.giliran = "anda";
    }
}