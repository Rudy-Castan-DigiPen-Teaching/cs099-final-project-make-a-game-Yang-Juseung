// Name       : Yang juseung
// Assignment : Final project
// Course     : CS099
// Spring 2021

1. Shapes

I usually used rects to test a flatform, player, Mobs, collisions and hitbox
ex)
rect(width/2, 450, width, 100)
rect(width/2, height/2, width, height);
rect(b1X, b1Y, bWidth, bHeight);
rect(bossX, bossY, bossWidth, bossHeight);
rect(p1X + 60, p1Y, pWidth + 30, pHeight - 30)
rect(width/2, 450, width, 100)
rect(width/2, height/2, width, height);
rect(b1X, b1Y, bWidth, bHeight);
rect(bossX, bossY, bossWidth, bossHeight);

2. Colors

I usually use white to explain how to play the game. And use red to write my name.
ex)
fill('red');
fill('white')

3. Variables
ex)
//game control
var stage = 0; //keeps track of which function to run


-player's x coordinate, y coordinate, width, height
var p1X = 400; //p1 for player1
var p1Y = 375;
var pWidth = 50;
var pHeight = 50;

-walking mode = help change player's picture
var step = 0;
var lookingright = true;
var lookingleft = false;


-drug = make player to go to next stage
var drug
var d1X = 420;
var d1Y = 250;
var dWidth = 50;
var dHeight = 50;


-boxes = platform
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


-wall = wall
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

-MAD = level 1's Mob
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

-Boss = level 2's Mob
var bossX = 400;
var bossY = 375
var bossWidth = 100;
var bossHeight = 100;

-moving BOSS = make boss move right and left
var bossPosition = 400; //center positions
var bossSpeed = 5; // how fast
var bossDirection = -1; // 1 move right and -1 move left
var bossDistance = 350; // how far can boss go

-moving MAD = make MAD move right and left
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
var m4Distance = 80;

-count = control player and Mob's life and help to go another stage
var lives = 4;
var madlives = 3;
var score  = 0;
var how_many_knife = 40
var knife_start_position 


-gravity = help to make a gravity
var jump = false;
var direction = 1; //the force of gravity in the y direction
var velocity = 2; //speed of player
var jumpPower = 13; //strength of player
var fallingSpeed = 5; //same as vel
var minHeight = 360; //height of ground
var maxHeight = 0; //height of sky
var jumpCounter = 0;//keep track of how much jump

-health = express how many health do you have
var RY = 30
var AY = 30
var GY = 30
var EY = 30

-media = about picture & audio
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
var hitted
var MAD2
var bosswalk_r1
var knife_r
var knife_l
var background_music

-countres = help to count player's life and Mob's life
var lives = 100
var madlife = 200
var madlife_1 = 200
var madlife2 = 300
var madlife2_1 = 300
var bosshealth = 800


-animation = help to make animation
var boss_r_walkData
var boss_r_walkImage
let Animations = {};
let CurrentAnimation = "Idle";
let animation_names = ["Boss - r - walk"]
let animation_names2 = ["main - r - atk"]
let FrameIndex = 0;
let EllapsedTime = 0;
let AnimationSpeed = (1/2) * 500;
var main_r_atkData
var main_r_atkImage

4. Conditional Statements

I used for, if and else if as a Conditional statements
ex)
    if(bossX >= (p1X + 60) - (pWidth + 30) && bossX <= (p1X + 60) + (pWidth + 30) && bossY >= p1Y - (pHeight - 30) && bossY <= p1Y + (pHeight - 30))
    {
        //hitting MAD
        bosshealth = bosshealth - 5;
        if(bosshealth <= 0)
        {
            stage = 7
        }
    }

5. Loops

used a loop to throwing knife
ex)
let frames = [];
        for(let info of boss_r_walkData.frames)
        {
            if(!info.filename.includes(name))
                continue;
            frames.push(info.frame);
        }
        Animations[name] = frames;

6. Functions

used a lots of functions like game, MAD1, BOSS, level1, etc
ex)
function health()
{
    textSize(10)
    fill('RED');
    stroke(0);  
    //text("HEALTH", 200, 50);
    // text(lives, 170, 40);
    image(R, 20, RY, 40, 40)
    image(A, 60, AY, 40, 40)
    image(G, 100, GY, 40, 40)
    image(E, 140, EY, 40, 40)

    if(lives <= 75)
    {
        RY = -1000
    }

    if(lives <= 50)
    {
        AY = -1000
    }

    if(lives <= 25)
    {
        GY = -1000
    }
}

7. Classes

made knife_bullet.js as a class
ex)
class Knife
{
    constructor(x,y)
    {
        this.X = x + 20
        this.Y = y
    }

    show()
    {
        image(knife_r, this.X, this.Y, 50, 50);
    }

    move()
    {
        this.X = this.X + 5; //knife speed
    }
}

8. Arrays

used arrays as moving boss animation and throwing knife animation
ex)
    for (var i = 0; i < throwing_knife.length; i++)
    {
        throwing_knife[i].show();
        throwing_knife[i].move();

        if(throwing_knife[i].X >= knife_start_position + 100)
        {
            throwing_knife.splice(i,1)
        }
    }