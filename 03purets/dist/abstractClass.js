"use strict";
// Diferença das classes abstratas para interfaces
// Classe abstrata só pode exterder outras classes, não pode ser instanciada direto nela
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // se quiser dar às suas classes alguns comportamentos padrão, pode adicionar métodos sem problemas
    getReelTime() {
        // calculo
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const lb = new Instagram("test", "Test", 3);
