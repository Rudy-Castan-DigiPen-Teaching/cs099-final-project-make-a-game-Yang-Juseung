function Knife(x,y)
{
    this.X = x;
    this.Y = y;

    this.show = function()
    {
        image(knife_r, this.X, this.Y, 50, 50);
    }

    this.move = function()
    {
        this.X = this.X + 1;
    }
}