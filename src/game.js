



// GAME SETTINGS
var debug = true;

var game = new Game();


function handlemousemotion(e) {
    game.mouseX = e.clientX;
    game.mouseY = e.clientY;
    game.render();
}

function Game() {


    this.player  = new Player(0, 0);

    var w = this.canvas.getWidth();
    var h = this.canvas.getHeight();
    this.cam = {
        x: player.pos.x - w / 2,
        y: player.pos.y - h / 2,
        width: w,
        height: h
    };

    this.mouseX = 0;
    this.mouseY = 0;

}

Game.prototype.render = function() {
    this.canvas = document.getElementById('game-canvas')
    this.context = canvas.getContext('2d');
    var xx = this.player.pos.x - this.cam.pos.x - mouseX;
    var yy = this.player.pos.y - this.cam.pos.y - mouseY;

    var alpha = Math.atan(yy / xx);

    this.context.fillStyle = "rgb(200,0,0)";
    ctx.rotate(alpha * Math.PI/180);
    this.context.fillRect(player.pos.x, player.pos.y, 30, 75);
}
