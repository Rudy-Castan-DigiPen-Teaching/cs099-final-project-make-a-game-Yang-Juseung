
class Knife
{
    constructor(x,y)
    {
        this.X = x
        this.Y = y
    }

    show()
    {
        this.show = function()
        {
            image(knife_r, this.X, this.Y, 50, 50);
        }
    }

    move()
    {
        this.move = function()
        {
            this.X = this.X + 5;
        }
    }
}