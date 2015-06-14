"use strict";

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // We've provided one for you to get started.

    // The image/sprite for our enemies, this uses
    // A helper we've provided to easily load images.
    this.sprite = 'images/enemy-bug.png';
    // Provides random x position for enemy reset.
    this.x = this.randomXPos();
    this.y = y;
    // Speed is defined by getRandomSpeed method.
    this.speed = this.getRandomSpeed();
};

// Random x position after reset for enemy.
Enemy.prototype.randomXPos = function() {
    this.x = Math.floor((Math.random() * 175) + 50);
};
// Random enemy speed.
Enemy.prototype.getRandomSpeed = function() {
    var speed = 0;
    speed = Math.floor((Math.random() * 175) + 100);
    return speed;
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
    this.speed = this.getRandomSpeed();
    };
    // Now write your own player class
    // This class requires an update(), render() and
    // a handleInput() method.
var Player = function Player(x, y) {
    this.lives = 3;
    this.score = 0;
    this.sprite = 'images/char-boy.png';
    this.x = x,
    this.y = y;
};


Player.prototype.update = function() {
    // When player reaches water, game will reset
    if (this.y < 25) {
        this.reset();
        this.score += 10;
        // console.log score
        console.log(this.score);
    }
    // If player collides or makes it across, these elements
    // are updated.
    document.getElementById('lives').innerHTML = "Lives:" + this.lives;
    document.getElementById('score').innerHTML = "Score:" + this.score;
};

// Implemented a simple measure of score and lives.
var myKeeper;

function startKeeper() {
    myKeeper = setTimeout(function() {
    if (player.score >= 110 && player.lives == 3) {
        alert(player.score + '!!! Flawless Victory!!!');
        clearTimeout(startKeeper);
        startKeeper();
    } else if (player.score <= 110 && player.lives <= 3) {
        alert(player.score + '-points' + ' Not good enough...!!!MORTAL...BUG...KOMBAT!!!!');
        clearTimeout(startKeeper);
        startKeeper();
        player.keeperReset();
    } else
    console.log("Let's try this again!");
    startKeeper();
    player.keeperReset();
}, 120000);}
    startKeeper();

// Player game reset from keeper.
Player.prototype.keeperReset = function() {
    player.reset();
    player.score = 0;
    player.lives = 3;
};

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
var Gem = function() {
// Added image for Gem, and set method for random placement
    this.sprite = 'images/Gem Orange.png';
    this.x = Math.floor( (Math.random() * 404) + 1);
    this.y = Math.floor( (Math.random() * 4) + 1) * 83;
};

Gem.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x * (dt);
    this.y * (dt);
};

// Draw the Gem on the screen, required method for game
Gem.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset method for random placement of Gem.
Gem.prototype.reset = function() {
    this.x = Math.floor( ( Math.random() * 404 ) + 1 );
    this.y = Math.floor( ( Math.random() * 4 ) + 1 ) * 83;
};

// Now instantiate your objects.
// Instantiating my player
var player = new Player(200, 400);

// Instantiating my gem object.
var gem = new Gem();

// Place all enemy objects in an array called allEnemies
// Instantiating my enemies &&
// pushing enemies into array with some fixed variable's until reset
var allEnemies = [];
(function enemyArray() {
    allEnemies.push(new Enemy(-2, 53));
    allEnemies.push(new Enemy(-2, 145));
    allEnemies.push(new Enemy(-2, 230));
    allEnemies.push(new Enemy(-2, 315));
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