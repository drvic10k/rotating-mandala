function polar(base, angle, length) {

    var result = new Object();
    result.x = base.x + length * Math.cos(angle);
    result.y = base.y + length * Math.sin(angle);

    return result;

}

function distance(x1, y1, x2, y2) {

    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

}

function rotate(angle, difference) {

    angle = (angle + difference) % (2 * Math.PI);
    if (angle < 0) {
        return 2 * Math.PI + angle;
    }
    else return angle;

}

CanvasRenderingContext2D.prototype.clearCanvas = function () {

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

}

CanvasRenderingContext2D.prototype.drawLine = function (context, x1, y1, x2, y2, color) {

    var s = this.strokeStyle;

    this.strokeStyle = color;
    this.beginPath();
    this.moveTo(x1, y1);
    this.lineTo(x2, y2);
    this.stroke();
    this.strokeStyle = s;

}

CanvasRenderingContext2D.prototype.drawCircle = function (x1, y1, radius, color) {

    if (color == undefined) { color = "black"; }
    var s = this.strokeStyle;

    this.strokeStyle = color;
    this.beginPath();
    this.arc(x1, y1, radius, 0, 2 * Math.PI);
    this.stroke();

    this.strokeStyle = s;

}

var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;