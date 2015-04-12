"use strict";
var lives = 3;
var score = 0;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // We've provided one for you to get started.

    // The image/sprite for our enemies, this uses
    // A helper we've provided to easily load images.
    this.sprite = 'images/enemy-bug.png';
    // Provides random x position for enemy reset.
    this.x = this.randomizer();
    this.y = y;
    // Speed is defined by speedyGozales method.
    this.speed = this.speedyGonzales();
};

// Random x position after reset for enemy.
Enemy.prototype.randomizer = function() {
        this.x = Math.floor((Math.random() * 175) + 50);
    };
    // Random enemy speed.
Enemy.prototype.speedyGonzales = function() {
    this.speed = Math.floor((Math.random() * 175) + 50);
    if (this.speed < 50) {
        allEnemies.push(new Enemy(-2, 125));
    }
    return this.speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 505) {
        this.x += (this.speed * dt);
    } else {
        this.x = -55;
    }
};

// Enemy rendering method
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Enemy reset method, reset's enemy and gives random speed.
Enemy.prototype.reset = function() {
        this.speed = this.speedyGonzales();
    };
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
var Player = function Player(x, y) {
    this.sprite = 'images/char-boy.png';
    this.x = x,
    this.y = y;
};


Player.prototype.update = function() {
    // When player reaches water, game will reset
    if (this.y < 25) {
        this.reset();
        score += 10;
        // console.log score
        console.log(score);
    }
    // If player collides or makes it across, these elements
    // are updated.
    document.getElementById('lives').innerHTML = "Lives:" + lives;
    document.getElementById('score').innerHTML = "Score:" + score;
};

// Implemented a simple measure of score and lives.
setTimeout(function() {
    if (score >= 110 && lives == 3) {
        alert(score + '!!! Flawless Victory!!!');
    } else if (score <= 110 && lives != 3) {
        alert(score + '-points' + ' Not good enough...!!!MORTAL...BUG...KOMBAT!!!!');
    } else console.log("A-OK!");

}, 60000);

// For a more theatrical Title-color
var bugger = '<div id = "open">! </div><div id = "open">B </div><div id = "open">- </div><div id = "open">U </div><div id = "open">- </div><div id = "open">G </div><div id = "open">- </div><div id = "open">G </div><div id = "open">- </div><div id = "open">E </div><div id = "open">- </div><div id = "open">R </div><div id = "open">!</div>';
$("#bugger").append(bugger);
var pre = document.querySelectorAll('#open');
var colors = ["red", "red", "orange", "yellow", "chartreuse", "cyan", "violet", "purple", "purple", "indigo"];
var tempColors = [];

setInterval(function() {

    for (var i = 0; i < pre.length; i++) {
        if (i == pre.length - 1) {
            tempColors[i] = colors[0];
            colors = tempColors;
        } else {
            tempColors[i] = colors[i + 1];
        }
        pre[i].style.color = tempColors[i];
    }

}, 60);
// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// When the player hits a bug, player resets to this position.
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;

};

// HandleInput moves player around canvas grid.
Player.prototype.handleInput = function(key) {
    if (key === 'left' && this.x > 0) {
        this.x -= 101;
    } else if (key === 'right' && this.x < 395) {
        this.x += 101;
    } else if (key === 'up' && this.y > 0) {
        this.y -= 83;
    } else if (key === 'down' && this.y < 400) {
        this.y += 83;
    }
};

// Made a gem following the same method as in player and enemy.
var Gems = function() {
// Added image for Gem, and set method for random placement
    this.sprite = 'images/Gem Orange.png';
    this.x = 50 + 100 * (Math.floor(Math.random() * 3));
    this.y = 100 + 50 * (Math.floor(Math.random() * 3));

};

Gems.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
};

// Draw the gems on the screen, required method for game
Gems.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset method for random placement of Gems.
Gems.prototype.reset = function() {
    this.x = Math.floor((Math.random() * 404) + 1);
    this.y = Math.floor((Math.random() * 4) + 1) * 83;
};

// Now instantiate your objects.
// Instantiating my player
var player = new Player(200, 400);

// Instantiating my gem object.
var gems = new Gems();

// Place all enemy objects in an array called allEnemies
// Instantiating my enemies &&
// pushing enemies into array with some fixed variable's until reset
var allEnemies = [];
(function enemyRoundUp() {
    allEnemies.push(new Enemy(-2, 60));
    allEnemies.push(new Enemy(-2, 110));
    allEnemies.push(new Enemy(-2, 160));
    allEnemies.push(new Enemy(-2, 220));
    allEnemies.push(new Enemy(-2, 290));

}());

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});