"use strict";

let isUpKeyPressed = false; // to track if the up arrow key is pressed
let posY = 600;
let posX = 500;
const SPEED = 3;

function setup() {
    createCanvas(1000, 600);
}

function draw(){
    background(0);

    keyPressed();
    fill(255);
    ellipse(posX, posY + 50, 100);

    if(posY < -100){
        posY = 700 
    }
    
    if(posY > 700){
        posY = -100
    }

    if(posX > 1100){
        posX = -100
    }

    if(posX < -100){
        posX = 1100
    }

    if(mouseIsPressed){
        SPEED=0
    }

    }


function keyPressed() {
    if (!isUpKeyPressed) { // Check if the up arrow key is not already pressed
        if (keyCode == UP_ARROW) {
            isUpKeyPressed = true; // true when the up arrow key is pressed
        }
    }

    if (isUpKeyPressed) { // Allow to move only if the up arrow key has been pressed
        if (keyCode == UP_ARROW) {
            posY -= SPEED;
        } else if (keyCode == DOWN_ARROW) {
            posY += SPEED;
        } else if (keyCode == RIGHT_ARROW) {
            posX += SPEED;
        } else if (keyCode == LEFT_ARROW) {
            posX -= SPEED;
        }
    }
}