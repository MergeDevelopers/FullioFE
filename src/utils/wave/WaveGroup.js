import COLOR from "../../assets/color";
import { Wave } from "./Wave";

export class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(93, 174, 206, 0.4)', 'rgba(140, 201, 225, 0.4)', 'rgba(59, 133, 163, 0.4)'];

        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for (let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}