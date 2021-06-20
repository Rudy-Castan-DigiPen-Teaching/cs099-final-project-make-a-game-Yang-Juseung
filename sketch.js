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
var b6X = 420
var b6Y = 300
var b6Width = 100


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
var m3X = 500;
var m3Y = 130;
var m4X = 730;
var m4Y = 260;
var madlookingright = true;
var madlookingleft = false;

//Boss
var bossX = 400;
var bossY = 375
var bossWidth = 100;
var bossHeight = 100;

//moving BOSS
var bossPosition = 400; //center positions
var bossSpeed = 5; // how fast
var bossDirection = -1; // 1 move right and -1 move left
var bossDistance = 350; // how far can boss go

//moving MAD
var m1position = 200; //center positions
var m2position = 215;
var mSpeed = 3; // how fast
var m1Direction = -1; // 1 move right and -1 move left
var m1Distance = 90; // how far can MAD go
var m2Direction = -1;
var m2Distance = 130;

var m3position = 400; //center positions
var m4position = 650;
var m3Direction = -1; // 1 move right and -1 move left
var m3Distance = 150; // how far can MAD go
var m4Direction = -1;
var m4Distance = 100;

//count
var lives = 4;
var madlives = 3;
var score  = 0;
var how_many_knife = 50

//class
var throwing_knife = [];

//gravity
var jump = false;
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //speed of player
var jumpPower = 13; //strength of player
var fallingSpeed = 5; //same as vel
var minHeight = 360; //height of ground
var maxHeight = 0; //height of sky
var jumpCounter = 0;//keep track of how much jump


//media
let backpicture
let cutscene1
let cutscene2
let cutscene3
let lastcutscene
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
var MAD1_l
var hitted
var MAD2
var bosswalk_r1
var bosswalk_r2
var bosswalk_r3
var bosswalk_r4
var bosswalk_l
var MAD1_atk
var MAD3
var MAD4
var knife_r
var knife_l


//countres
var lives = 100
var madlife = 50
var madlife_1 = 50
var madlife2 = 60
var madlife2_1 = 60
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
    MAD1_l = loadImage("image/villian.l.png")
    hitted = loadSound("audio/hit.wav")
    MAD2 = loadImage("image/villian2.r.png")
    cutscene1 = loadImage("image/cut scene 1.png")
    cutscene2 = loadImage("image/cut scene 2.png")
    cutscene3 = loadImage("image/cut scene 3.png ")
    lastcutscene = loadImage("image/last winning scene.png")
    drug = loadImage("image/drug.png")
    bosswalk_r1 = loadImage("move/Boss - r - walk1.png")
    bosswalk_r2 = loadImage("move/Boss - r - walk2.png")
    bosswalk_r3 = loadImage("move/Boss - r - walk3.png")
    bosswalk_r4 = loadImage("move/Boss - r - walk4.png")
    bosswalk_l1 = loadImage("move/Boss - l - walk1.png")
    bosswalk_l2 = loadImage("move/Boss - l - walk2.png")
    bosswalk_l3 = loadImage("move/Boss - l - walk3.png")
    bosswalk_l4 = loadImage("move/Boss - l - walk4.png")
    MAD1_atk = loadImage("move/villian - r - atk 1.png")
    MAD3 = loadImage("image/villian.l.png")
    MAD4 = loadImage("image/villian2.ll.png")
    knife_r = loadImage("image/knife r.png")
    knife_l = loadImage("image/knife l.png")
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
    keyTyped();
    gravity();

    if(stage == 0)
    {
        splash();
    }//close = 0

    else if(stage == 1)
    {
        splash1();
    }

    else if(stage == 2)
    {
        splash2();
    }

    else if(stage == 3)
    {
        splash3();
    }

    else if(stage == 4)
    {
        game();
    }//close = 4

    else if(stage == 5)
    {
        loseScreen();
    }//close = 5

    else if(stage == 6)
    {
        level2()
    }

    else if(stage == 7)
    {
        winning_scene()
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
    //rect(bossX, bossY, bossWidth, bossHeight);
    //image(main_character_R, bossX, bossY, bossWidth, bossHeight);

    player1();

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
        stage = 6;
    }

    //trigger lose screen
    if(lives <= 0)
    {
        stage = 5;
    }

    if(how_many_knife <= 0)
    {
        stage = 5;
    }

    //call MAD
    MOB_MAD1();
    MOB_MAD2();
    MOB_MAD3();
    MOB_MAD4();

    //call knife
    knife();

    if(m1Y == -1000 && m2Y == -1000 && m3Y == -1000 && m4Y == -1000)
    {
        DRUG();
    }

    for (var i = 0; i < throwing_knife.length; i++)
    {
        throwing_knife[i].show();
        throwing_knife[i].move();
    }
    
}//close game

function knife()
{
    fill("white");
    textSize(20)
    stroke(0);
    text("knife :", 700, 50)
    text(how_many_knife, 750, 50)
    push()
    noStroke();
    pop()
}

function MOB_MAD1()
{
    image(MAD1, m1X, m1Y, mWidth, mHeight);
    if(p1X >= m1X - mWidth / 2 && p1X<= m1X + mWidth / 2 && p1Y >= m1Y - mHeight / 2 && p1Y <= m1Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    m1X = m1X + (mSpeed * m1Direction);
    if(m1X >= m1position + m1Distance || m1X <= m1position - m1Distance)
    {
        m1Direction = m1Direction * -1;
        if(m1X >= 300)
        {
            image(MAD1_l, m1X, m1Y, mWidth, mHeight)
        }
    }
    
    //madlife
    fill("red");
    textSize(10)
    stroke(0);
    text(madlife, m1X, m1Y - 30);

    //hit mad 1
    if(m1X >= (p1X + 50) - (pWidth - 30) && m1X <= (p1X + 50) + (pWidth - 30) && m1Y >= p1Y - (pHeight - 30) && m1Y <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        madlife = madlife - 5;
        if(madlife <= 0)
        {
            m1Y = -1000
        }
    }   
}

function MOB_MAD2()
{
    //MAD2
    image(MAD1, m2X, m2Y, mWidth, mHeight);
    if(p1X >= m2X - mWidth / 2 && p1X<= m2X + mWidth / 2 && p1Y >= m2Y - mHeight / 2 && p1Y <= m2Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    m2X = m2X + (mSpeed * m2Direction);
    if(m2X >= m2position + m2Distance || m2X <= m2position - m2Distance)
    {
        m2Direction = m2Direction * -1;
    }
    
    fill("red");
    textSize(10)
    stroke(0);
    text(madlife_1, m2X, m2Y - 30);

    //hit mad 2
    if(m2X >= (p1X + 50) - (pWidth - 30) && m2X <= (p1X + 50) + (pWidth - 30) && m2Y >= p1Y - (pHeight - 30) && m2Y <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        madlife_1 = madlife_1 - 5;
        if(madlife_1 <= 0)
        {
            m2Y = -1000
        }
    }
}
function MOB_MAD3()
{
    //MAD3
    image(MAD2, m3X, m3Y, mWidth, mHeight);
    if(p1X >= m3X - mWidth / 2 && p1X<= m3X + mWidth / 2 && p1Y >= m3Y - mHeight / 2 && p1Y <= m3Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    m3X = m3X + (mSpeed * m3Direction);
    if(m3X >= m3position + m3Distance || m3X <= m3position - m3Distance)
    {
        m3Direction = m3Direction * -1;
    }
    
    fill("red");
    textSize(10)
    stroke(0);
    text(madlife2, m3X, m3Y - 30);

    //hit mad 3
    if(m3X >= (p1X + 50) - (pWidth - 30) && m3X <= (p1X + 50) + (pWidth - 30) && m3Y >= p1Y - (pHeight - 30) && m3Y <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        madlife2 = madlife2 - 5;
        if(madlife2  <= 0)
        {
            m3Y = -1000
        }
    }
}

function MOB_MAD4()
{
    //MAD4
    image(MAD2, m4X, m4Y, mWidth, mHeight);
    if(p1X >= m4X - mWidth / 2 && p1X<= m4X + mWidth / 2 && p1Y >= m4Y - mHeight / 2 && p1Y <= m4Y + mHeight / 2)
    {
        //hitting MAD
        lives = lives -1;
    }

    m4X = m4X + (mSpeed * m4Direction);
    if(m4X >= m4position + m4Distance || m4X <= m4position - m4Distance)
    {
        m4Direction = m4Direction * -1;
    }
    
    fill("red");
    textSize(10)
    stroke(0);
    text(madlife2_1, m4X, m4Y - 30);

    //hit mad 4
    if(m4X >= (p1X + 50) - (pWidth - 30) && m4X <= (p1X + 50) + (pWidth - 30) && m4Y >= p1Y - (pHeight - 30) && m4Y <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        madlife2_1 = madlife2_1 - 5;
        if(madlife2_1 <= 0)
        {
            m4Y = -1000
        }
    }
}

function DRUG()
{
    image(drug, d1X, d1Y, dWidth, dHeight)
    if(p1X >= d1X - dWidth / 2 && p1X <= d1X + dWidth / 2 && p1Y >= d1Y - dHeight && p1Y <= d1Y + dHeight / 2)
    {
        score = score + 1;
        d1X = -1000
        how_many_knife = how_many_knife + 50
        lives = lives + 30
    }
}

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
    image(platform, b1X, b1Y - 5, bWidth, bHeight)
    image(platform, b6X, b6Y - 5, b6Width, bHeight)
    image(platform, b5X, b5Y - 5, bWidth, bHeight)

    //draw player
    stroke(0);
    fill(150, 0, 170);
    //rect(bossX, bossY, bossWidth, bossHeight);
    //image(main_character_R, bossX, bossY, bossWidth, bossHeight);

    player1();

    textSize(20)
    fill(255);
    stroke(0);
    text("HEALTH", 130, 50);
    text(lives, 200, 50);

    fill("red");
    textSize(10)
    stroke(0);
    text(bosshealth, bossX - 50, bossY - 50);

    //box1
    if(p1X >= b1X - bWidth / 2 && p1X <= b1X + bWidth / 2 && p1Y + pHeight >= b1Y - bHeight / 2 && p1Y + pHeight <= b1Y + bHeight / 2 && jump == false)
    {
        p1Y = b1Y - 40;
        velocity = 0;
        jumpCounter = 0; //allow to jump again
    }

    //box6
    if(p1X >= b6X - b6Width / 2 && p1X <= b6X + b6Width / 2 && p1Y + pHeight >= b6Y - bHeight / 2 && p1Y + pHeight <= b6Y + bHeight / 2 && jump == false)
    {
        p1Y = b6Y - 40;
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

    //trigger loseScreen
    if(lives <= 0)
    {
        stage = 5;
    }

    if(how_many_knife <= 0)
    {
        stage = 5;
    }

    Boss();
    knife();
    
    for (var i = 0; i < throwing_knife.length; i++)
    {
        throwing_knife[i].show();
        throwing_knife[i].move();
    }
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

function winning_scene()
{
    image(lastcutscene, width / 2, height / 2, width, height)
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
    //image(main_character_R, bossX, bossY, bossWidth, bossHeight);
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
    image(bosswalk_r1, bossX, bossY, bossWidth, bossHeight);
    if(p1X >= bossX - bossWidth / 2 && p1X<= bossX + bossWidth / 2 && p1Y >= bossY - bossHeight / 2 && p1Y <= bossY + bossHeight / 2)
    {
        //hitting boss
        lives = lives -5;
    }

    //boss moving
    bossX = bossX + (bossSpeed * bossDirection);
    if(bossX >= bossPosition + bossDistance || bossX <= bossPosition - bossDistance)
    {
        bossDirection = bossDirection * -1;
    }

    if(bossX >= (p1X + 50) - (pWidth - 30) && bossX <= (p1X + 50) + (pWidth - 30) && bossY >= p1Y - (pHeight - 30) && bossY <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        bosshealth = bosshealth - 5;
        if(bosshealth <= 0)
        {
            stage = 7
        }
    }
}

function keyPressed()
{
    if(keyCode == "32" && stage <= 3)
    {
        console.log("cutsceen")
        stage++
    }

    if(key == "k" || key == "K" || keyCode == "75")
    {
        how_many_knife = how_many_knife - 1
        var knifes = new Knife (p1X, p1Y)
        throwing_knife.push(knifes)

        if(knifes.x = p1X + 50)
        {
            knifes.x = -1000 
        }
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

    if(key == "a" || key == "A" || keyCode == "37")
    {
        p1X = p1X - 3.5
        lookingleft = true;
    }else{
        lookingleft = false;
    }

    if(key == "d" || key == "D" || keyCode == "39")
    {
        p1X = p1X + 3.5
        lookingright = true;
    }else{
        lookingright = false;
    }

}