// Diferença das classes abstratas para interfaces
// Classe abstrata só pode exterder outras classes, não pode ser instanciada direto nela
abstract class TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
    ) {}

    // se algum método não for igual para todas as classes, pode criar assim e dentro de cada classe pode personalizar do jeito que quer
    abstract getSepia(): void
    // se quiser dar às suas classes alguns comportamentos padrão, pode adicionar métodos sem problemas
    getReelTime(): number {
        // calculo
        return 8
    }
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter:string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const lb = new Instagram("test", "Test", 3)
