export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.05;
        this.cur = index;
        this.max = Math.random() * 50 + 30;
    }

    update() {
        //캔버스는 60프레임을 목표로 함 speed가 0.1이면 1초에 한번 왕복.
        this.cur += this.speed;
        //고정된 Y값을 기준으로 위아래 max만큼 움직임.
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
    }
}
