let images = ["pic1.jpg","pic2.jpg","pic3.jpg"];
let index = 0; 

console.log(document.getElementById('slideshow'));
function forward()
{
    if (index != 2)
    {
        index = index+1;
    }
    else
    {
        index = 0; 
    }
    change();
}

function backward() 
{
    if (index != 0)
    {
        index = index-1; 
    }
    else
    {
        index = 2; 
    }
    change();
}

function change()
{
    document.getElementById("slideshow").src = images[index];

}