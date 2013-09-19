function Definition(canvasID) {

    var self = this;
    var canvas = document.getElementById(canvasID);
    var context = canvas.getContext("2d");
    var $canvas = $(canvas);

    $canvas.mousedown(function (e) {

        if (e.offsetX == undefined) {

            e.offsetX = e.pageX - e.target.offsetLeft;
            e.offsetY = e.pageY - e.target.offsetTop;

        }

        if (self.center == undefined) {
            self.center = { x: e.offsetX, y: e.offsetY };
        }
        else if (self.circle == undefined) {

            self.radius = Math.round(distance(self.center.x, self.center.y, e.offsetX, e.offsetY));
            self.circle = { center: self.center, radius: self.radius };

        }
        else {

            self.posX = e.offsetX - self.center.x;
            self.posY = e.offsetY - self.center.y;

            $canvas.trigger("defined");

            self.center = undefined;
            self.circle = undefined;
        }

    });

    $canvas.mousemove(function (e) {

        if (e.offsetX == undefined) {

            e.offsetX = e.pageX - e.target.offsetLeft;
            e.offsetY = e.pageY - e.target.offsetTop;

        }

        if (self.center != undefined && self.circle == undefined) {

            context.clearCanvas();
            context.drawCircle(self.center.x, self.center.y, Math.round(distance(self.center.x, self.center.y, e.offsetX, e.offsetY)));

        }

        else if (self.circle != undefined) {

            context.clearCanvas();
            context.drawCircle(self.circle.center.x, self.circle.center.y, self.circle.radius);
            context.beginPath();
            context.moveTo(e.offsetX, self.center.y)
            context.lineTo(self.center.x, self.center.y)
            context.lineTo(self.center.x, e.offsetY)
            context.stroke();

        }

    });

}