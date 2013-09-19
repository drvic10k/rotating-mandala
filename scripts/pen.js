function Pen(canvasID, radius, posX, posY, speed, color) {

    var self = this;
    var positionAngle = -Math.PI / 2;
    var increment = 0.005;
    var canvas = document.getElementById(canvasID);
    var context = canvas.getContext("2d");

    var distance = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
    var angle = Math.atan2(posY, posX);
    var stop = false;

    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    self.Draw = function () {

        for (var i = 0; i < speed; i++) {

            positionAngle = rotate(positionAngle, increment);
            angle = rotate(angle, -increment * 250 / radius);
            self.center = polar({ x: 250, y: 250 }, positionAngle, 250 - radius);
            var point = polar(self.center, angle, distance);
            if (color != undefined) { context.fillStyle = color; } else { context.fillStyle = "black"; }
            if (!stop) {
                context.fillRect(point.x, point.y, 1, 1);
            }
        }

        if (!stop) {
            requestAnimationFrame(self.Draw);
        }


    };

    self.Stop = function () {
        stop = true;
    };

    requestAnimationFrame(self.Draw);

}