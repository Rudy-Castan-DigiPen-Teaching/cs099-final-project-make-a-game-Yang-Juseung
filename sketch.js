// Name       : Yang juseung
// Assignment : Final project
// Course     : CS099
// Spring 2021

//global

//game control
var stage = 0; //keeps track of which function to run


//player
var p1X = 400; //p1 for player1
var p1Y = 375;
var pWidth = 50;
var pHeight = 50;
//walking mode
var step = 0;
var lookingright = true;
var lookingleft = false;

//drug
var drug
var d1X = 420;
var d1Y = 250;
var dWidth = 50;
var dHeight = 50;


//boxes (platform)
var b1X = 200; //b1 for box 1
var b1Y = 300;
var bWidth = 200;
var bHeight = 40;
var b2X  = 200;
var b2Y = 170;
var b3X = 420;
var b3Y = 170;
var b4X = 640;
var b4Y = 170;
var b5X = 640;
var b5Y = 300;


//wall
var w1X = 90;
var w1Y = 235;
var wWidth = 20
var wHeight = 170
var w2X = 310;
var w2Y = 235;
var w3X = 530;
var w3Y = 235;
var w4X = 750;
var w4Y = 235;

//MAD
var m1X = 130; //m1 for MAD1
var m1Y = 260;
var mWidth = 50;
var mHeight = 50;
var m2X = 130;
var m2Y = 130;
var m3X = 570;
var m3Y = 130;
var m4X = 570;
var m4Y = 260;

//Boss
var bossX = 100;
var bossY = 375
var bossWidth = 100;
var bossHeight = 100;

//moving MAD
var m1position = 200; //center positions
var m2position = 550;
var mSpeed = 2; // how fast
var m1Direction = -1; // 1 move right and -1 move left
var m1Distance = 50; // how far can MAD go
var m2Direction = 1;
var m2Distance = 50;

//count
var lives = 4;
var madlives = 3;
var score  = 0;

//gravity
var jump = false;
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //speed of player
var jumpPower = 13; //strength of player
var fallingSpeed = 3; //same as vel
var minHeight = 360; //height of ground
var maxHeight = 0; //height of sky
var jumpCounter = 0;//keep track of how much jump


//media
let backpicture
let cutscene1
let cutscene2
let cutscene3
let main_character_R
let main_character_L
var platform;
var landscape; //cant use background because it exist
var wall
var R
var A
var G
var E
var MAD1
var hitted
var MAD2
var bosswalk_r1
var bosswalk_r2
var bosswalk_r3
var bosswalk_r4
var bosswalk_l


//countres
var lives = 100
var madlife = 30
var bosshealth = 200

//preload
function preload() 
{
    main_character_R = loadImage("image/main.r.png")
    main_character_L = loadImage("image/main.png")
    backpicture = loadImage("image/MetropolitanCity_1280x720.png")
    platform = loadImage("image/tyle - base.png")
    landscape = loadImage("image/10.MetropolitanCity_2560x1440 - City9.png") 
    wall = loadImage("image/tyle - wall.png")
    R = loadImage("image/live1.png")
    A = loadImage("image/live2.png")
    G = loadImage("image/live 3.png")
    E = loadImage("image/live 4.png")
    MAD1 = loadImage("image/villian.r.png")
    hitted = loadSound("audio/hit.wav")
    MAD2 = loadImage("image/villian2.r.png")
    cutscene1 = loadImage("image/cut scene 1.png")
    cutscene2 = loadImage("image/cut scene 2.png")
    cutscene3 = loadImage("image/cut scene 3.png ")
    drug = loadImage("image/drug.png")
    bosswalk_r1 = loadImage("move/Boss - r - walk1.png")
    bosswalk_r2 = loadImage("move/Boss - r - walk2.png")
    bosswalk_r3 = loadImage("move/Boss - r - walk3.png")
    bosswalk_r4 = loadImage("move/Boss - r - walk4.png")
    //bosswalk_l = 
}


//setup
function setup()
{
    createCanvas(800, 500);
    rectMode(CENTER);
    textAlign(CENTER);
    imageMode(CENTER);
}//close setup


//draw
function draw()
{
    //call functions
    keyPressed();
    keyTyped();
    gravity();

    if(stage == 0)
    {
        splash();
    }//close = 0

    /*if(stage == 1)
    {
        splash1();
    }

    if(stage == 2)
    {
        splash2();
    }

    if(stage == 3)
    {
        splash3();
    }*/

    if(stage == 1)
    {
        game();
    }//close = 4

    if(stage == 2)
    {
        loseScreen();
    }//close = 4

    if(stage == 3)
    {
        level2()
    }

    if(keyIsPressed && keyCode == 32)
    {
        stage = 1;
    }
}

//splash
function splash()
{
    image(backpicture, width / 2, height / 2, width, height)

    //title
    fill('red');
    stroke(0);
    strokeWeight(10);
    textSize(100);
    text('RAGE', width / 2, 150)
    textSize(15);
    text("Made By Yang juseung", 700, 480);

    //instructions
    fill('white')
    textSize(20);
    text("How to play", width / 2, 200);
    text("W = jump, A = go left, D = go right", width / 2, 300);
    text("Press K to attack", width / 2, 350);
    text("Press SPACE BAR to START", width / 2, 450);
}

function splash1()
{
    image(cutscene1, width / 2, height / 2, width, height)
}

function splash2()
{
    image(cutscene2, width / 2, height / 2, width, height)
}

function splash3()
{
    image(cutscene3, width / 2, height / 2, width, height)
}


//game
function game()
{
    //apperance of game
    //background("green")
    image(backpicture, width / 2, height / 2, width, height)
    //tyle
    rect(width/2, 450, width, 100)
    image(landscape, width / 2, 450, width, 100)
    //window frame
    noFill();
    stroke(0)
    strokeWeight(15);
    rect(width/2, height/2, width, height);

    //draw box
    stroke(0);
    strokeWeight(5);
    fill(255, 120, 0);
    //rect(b1X, b1Y, bWidth, bHeight);
    image(platform, b1X, b1Y, bWidth, bHeight)
    image(platform, b2X, b2Y, bWidth, bHeight)
    image(platform, b3X, b3Y, bWidth, bHeight)
    image(platform, b4X, b4Y, bWidth, bHeight)
    image(platform, b5X, b5Y, bWidth, bHeight)

    //draw wall
    image(wall, w1X, w1Y, wWidth, wHeight)
    image(wall, w2X, w2Y, wWidth, wHeight)
    image(wall, w3X, w3Y, wWidth, wHeight)
    image(wall, w4X, w4Y, wWidth, wHeight)

    //draw player
    stroke(0);
    fill(150, 0, 170);
    //rect(p1X, p1Y, pWidth, pHeight);
    //image(main_character_R, p1X, p1Y, pWidth, pHeight);

    player1();

    //draw MAD
    //MAD1
    image(MAD1, m1X, m1Y, mWidth, mHeight);
    if(p1X >= m1X - mWidth / 2 && p1X<= m1X + mWidth / 2 && p1Y >= m1Y - mHeight / 2 && p1Y <= m1Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    //MAD2
    image(MAD1, m2X, m2Y, mWidth, mHeight);
    if(p1X >= m2X - mWidth / 2 && p1X<= m2X + mWidth / 2 && p1Y >= m2Y - mHeight / 2 && p1Y <= m2Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    //MAD3
    image(MAD2, m3X, m3Y, mWidth, mHeight);
    if(p1X >= m3X - mWidth / 2 && p1X<= m3X + mWidth / 2 && p1Y >= m3Y - mHeight / 2 && p1Y <= m3Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    //MAD4
    image(MAD2, m4X, m4Y, mWidth, mHeight);
    if(p1X >= m4X - mWidth / 2 && p1X<= m4X + mWidth / 2 && p1Y >= m4Y - mHeight / 2 && p1Y <= m4Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    //moving MAD
    m1X = m1X + (mSpeed * m1Direction);
    if(m1X >= m1position + m1Distance || m1X <= m1position - m1Distance)
    {
        //exceed distance allowance
        m1Direction = m1Direction - 1// change direction
    }

    m2X = m2X + (mSpeed * m2Direction);
    if(m2X >= m2position + m2Distance || m2X <= m2position - m2Distance)
    {
        //exceed distance allowance
        m2Direction = m2Direction - 1// change direction
    }

    //lives
    //image(R, 30, 30, 30, 30)
    //image(A, 60, 30, 30, 30)
    //image(G, 90, 30 ,30, 30)
    //image(E, 120, 30, 30, 30)
    textSize(20)
    fill(255);
    stroke(0);
    text("HEALTH", 130, 50);
    text(lives, 200, 50);

    fill("red");
    textSize(10)
    stroke(0);
    text(madlife, m1X, m1Y - 30);
    text(madlife, m2X, m2Y - 30);
    text(madlife, m3X, m3Y - 30);
    text(madlife, m4X, m4Y - 30);

    //collisions
    //box1
    if(p1X >= b1X - bWidth / 2 && p1X <= b1X + bWidth / 2 && p1Y + pHeight >= b1Y - bHeight / 2 && p1Y + pHeight <= b1Y + bHeight / 2 && jump == false)
    {
        p1Y = b1Y - 40;
        velocity = 0;
        jumpCounter = 0; //allow to jump again
    }

    //box2
    if(p1X >= b2X - bWidth / 2 && p1X <= b2X + bWidth / 2 && p1Y + pHeight >= b2Y - bHeight / 2 && p1Y + pHeight <= b2Y + bHeight / 2 && jump == false)
    {
        p1Y = b2Y - 40;
        velocity = 0;
        jumpCounter = 0;
    }

    //box3
    if(p1X >= b3X - bWidth / 2 && p1X <= b3X + bWidth / 2 && p1Y + pHeight >= b3Y - bHeight / 2 && p1Y + pHeight <= b3Y + bHeight / 2 && jump == false)
    {
        p1Y = b3Y - 40;
        velocity = 0;
        jumpCounter = 0;
    }

    //box4
    if(p1X >= b4X - bWidth / 2 && p1X <= b4X + bWidth / 2 && p1Y + pHeight >= b4Y - bHeight / 2 && p1Y + pHeight <= b4Y + bHeight / 2 && jump == false)
    {
        p1Y = b4Y - 40;
        velocity = 0;
        jumpCounter = 0;
    }

    //box5
    if(p1X >= b5X - bWidth / 2 && p1X <= b5X + bWidth / 2 && p1Y + pHeight >= b5Y - bHeight / 2 && p1Y + pHeight <= b5Y + bHeight / 2 && jump == false)
    {
        p1Y = b5Y - 40;
        velocity = 0;
        jumpCounter = 0;
    }

    //wall1
    if(p1X >= w1X - wWidth / 2 && p1X <= w1X + wWidth / 2 && p1Y + pHeight >= w1Y - wHeight / 2 && p1Y + pHeight <= w1Y + wHeight / 2 && jump == false)
    {
        p1Y = w1Y - 105;
        velocity = 0;
        jumpCounter = 0;
    }

    //wall2
    if(p1X >= w2X - wWidth / 2 && p1X <= w2X + wWidth / 2 && p1Y + pHeight >= w2Y - wHeight / 2 && p1Y + pHeight <= w2Y + wHeight / 2 && jump == false)
    {
        p1Y = w2Y - 105;
        velocity = 0;
        jumpCounter = 0;
    }

    //wall3
    if(p1X >= w3X - wWidth / 2 && p1X <= w3X + wWidth / 2 && p1Y + pHeight >= w3Y - wHeight / 2 && p1Y + pHeight <= w3Y + wHeight / 2 && jump == false)
    {
        p1Y = w3Y - 105;
        velocity = 0;
        jumpCounter = 0;
    }

    //wall4
    if(p1X >= w4X - wWidth / 2 && p1X <= w4X + wWidth / 2 && p1Y + pHeight >= w4Y - wHeight / 2 && p1Y + pHeight <= w4Y + wHeight / 2 && jump == false)
    {
        p1Y = w4Y - 105;
        velocity = 0;
        jumpCounter = 0;
    }

    //trigger go to level 2
    if(score >= 1 )
    {
        stage = 3;
    }

    //trigger lose screen
    if(lives <= 0)
    {
        stage = 2;
    }

    //drug
    image(drug, d1X, d1Y, dWidth, dHeight)
    if(p1X >= d1X - dWidth / 2 && p1X <= d1X + dWidth / 2 && p1Y >= d1Y - dHeight && p1Y <= d1Y + dHeight / 2)
    {
        score = score + 1;
        d1X = -1000
    }

}//close game

function level2()
{
    //apperance of game
    //background("green")
    image(backpicture, width / 2, height / 2, width, height)
    //tyle
    rect(width/2, 450, width, 100)
    image(landscape, width / 2, 450, width, 100)
    //window frame
    noFill();
    stroke(0)
    strokeWeight(15);
    rect(width/2, height/2, width, height);

    //draw box
    stroke(0);
    strokeWeight(5);
    fill(255, 120, 0);
    //rect(b1X, b1Y, bWidth, bHeight);
    image(platform, b1X, b1Y, bWidth, bHeight)
    image(platform, b5X, b5Y, bWidth, bHeight)

    //draw player
    stroke(0);
    fill(150, 0, 170);
    //rect(p1X, p1Y, pWidth, pHeight);
    //image(main_character_R, p1X, p1Y, pWidth, pHeight);

    player1();

    textSize(20)
    fill(255);
    stroke(0);
    text("HEALTH", 130, 50);
    text(lives, 200, 50);

    fill("red");
    textSize(10)
    stroke(0);
    text(bosshealth, bossX, bossY - 30);

    //box1
    if(p1X >= b1X - bWidth / 2 && p1X <= b1X + bWidth / 2 && p1Y + pHeight >= b1Y - bHeight / 2 && p1Y + pHeight <= b1Y + bHeight / 2 && jump == false)
    {
        p1Y = b1Y - 40;
        velocity = 0;
        jumpCounter = 0; //allow to jump again
    }
    

    //box5
    if(p1X >= b5X - bWidth / 2 && p1X <= b5X + bWidth / 2 && p1Y + pHeight >= b5Y - bHeight / 2 && p1Y + pHeight <= b5Y + bHeight / 2 && jump == false)
    {
        p1Y = b5Y - 40;
        velocity = 0;
        jumpCounter = 0;
    }

    //trigger lose screen
    if(lives <= 0)
    {
        stage = 2;
    }

    Boss();
}

//lose screen
function loseScreen()
{
    image(backpicture, width / 2, height / 2, width, height)

    //title
    fill('red');
    stroke(0);
    strokeWeight(10);
    textSize(150);
    text('YOU LOSE', width / 2, height / 2)
}


//gravity
function gravity()
{
    if(p1Y >= minHeight && jump == false)
    {
        p1Y = p1Y; //don't fall
        jumpCounter = 0; //reset jump counter when land

    }else
    {
        p1Y = p1Y + (direction * velocity) //the code that makes gravity work

    }

    if(jump == true)
    {
        if(p1Y <= maxHeight || jumpCounter >= jumpPower)
        {
            if(p1Y >= minHeight)
            {
                p1Y = minHeight;
            }else{
            velocity = fallingSpeed;
            }

        }else
        {
            velocity = -jumpPower;
            jumpCounter = jumpCounter +1   
        }
        }else
        {
            velocity = fallingSpeed;
        
        }
    
     
    //horizontal barriers (left and right walls)
    if(p1X + pWidth / 2 >= width)
    {
        p1X = p1X - 3.5;
    }

    if(p1X - pWidth / 2 <= 0)
    {
        p1X = p1X + 3.5;
    }
}

function player1()
{
    //image(main_character_R, p1X, p1Y, pWidth, pHeight);
    if(lookingright == true)
    {
        lookingleft == false;
        step = step + 1 //walk right
        //right
        if(step = 0)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 1)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 2)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 3)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 4)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 5)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 6)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
            step = 0; //restart
        }
    }//end right
    
    //left
    if(lookingleft == true)
    {
        lookingright == false;
        step = step + 1 //walk left
        //right
        if(step = 0)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 1)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 2)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 3)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 4)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 5)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 6)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
            step = 0; //restart
        }
    }//end left


    if(lookingright == false && lookingleft ==false)
    {
        image(main_character_R, p1X, p1Y, pWidth, pHeight);
    }
}

function Boss()
{
    if(lookingright == true)
    {
        lookingleft == false;
        step = step + 1 //walk right
        //right
        if(step = 0)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 1)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 2)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 3)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 4)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 5)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 6)
        {
            image(main_character_R, p1X, p1Y, pWidth, pHeight);
            step = 0; //restart
        }
    }//end right
    
    //left
    if(lookingleft == true)
    {
        lookingright == false;
        step = step + 1 //walk left
        //right
        if(step = 0)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 1)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 2)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 3)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 4)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 5)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
        }
        else if(step = 6)
        {
            image(main_character_L, p1X, p1Y, pWidth, pHeight);
            step = 0; //restart
        }
    }//end left


    if(lookingright == false && lookingleft ==false)
    {
        image(main_character_R, p1X, p1Y, pWidth, pHeight);
    }
}

function keyPressed()
{
    if(key == "a" || key == "A" || keyCode == "37")
    {
        p1X = p1X - 3.5
        lookingleft = true;
    }else{
        lookingright = false;
    }

    if(key == "d" || key == "D" || keyCode == "39")
    {
        p1X = p1X + 3.5
        lookingright = true;
    }else{
        lookingright = false;
    }
}

function keyTyped()
{
    if(key == "w" || key == "W" || keyCode == "38")
    {
        jump = true;   
    }else{
        jump = false;
    }
}