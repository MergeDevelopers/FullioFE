import { WaveGroup } from "./WaveGroup";

export class Canvas {
    constructor(canvas, container) {
        this.container = container;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.waveGroup = new WaveGroup();

        //브라우저의 크기가 변경될 때마다 canvas크기를 제조정합니다.
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = this.container.clientWidth;
        this.stageHeight = this.container.clientHeight;
        //레티나 디스플레이 대응으로 실제 크기는 동일하지만 내부 canvas크기는 2배로 설정합니다.
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.waveGroup.draw(this.ctx);
        const ani = requestAnimationFrame(this.animate.bind(this));
    }
}
