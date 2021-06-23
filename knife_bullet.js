// Name       : Yang juseung
// Assignment : Final project
// Course     : CS099
// Spring 2021

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