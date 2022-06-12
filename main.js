var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object="";
var block_image_object="";

function player_update()
{
  fabric.Image.fromURL("Player.png", function(Img)
  {
   player_object = Img;
    
    player_object.scaleToWidth(120);
    player_object.scaleToHeight(110);
    player_object.set({
    top:player_y,
    left:player_x
    });
    
    canvas.add(player_object);
    
  });
}

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img)
  {
   block_image_object = Img;
    
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
      top:player_y,
      right:player_x
    });
    
    canvas.add(block_image_object);
    
  });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == '69')
    {
        console.log("e pressed");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }

    if (keyPressed == '81')
    {
        console.log("q pressed");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }

    if (keyPressed == '87')
    {
        up();
        console.log("up");
    }

    if (keyPressed == '83')
    {
        down();
        console.log("down");
    }

    if (keyPressed == '65')
    {
        left();
        console.log("left");
    }

    if (keyPressed == '68')
    {
        right();
        console.log("right");
    }

    if (keyPressed == '66')
    {
        new_image("grassblock.png");
        console.log("b");
    }

    if (keyPressed == '76')
    {
        new_image("woodlog.png");
        console.log("l");
    }

    if (keyPressed == '71')
    {
        new_image("grass.png");
        console.log("g");
    }

    if (keyPressed == '84')
    {
        new_image("glowstone.png");
        console.log("t");
    }

    if (e.shiftKey == true && keyPressed == '71')
    {
        new_image("darkgrass.png");
        console.log("shift and g");
    }

    if (keyPressed == '79')
    {
        new_image("stone.png");
        console.log("o");
    }

    if (keyPressed == '78')
    {
        new_image("netherack.png");
        console.log("n");
    }

}

function up()
{

    if (player_y >= 0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When W is pressed, X = " + player_x + " , and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{

    if (player_y <= 500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When S is pressed, X = " + player_x + " , and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{

    if (player_x >0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When A is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{

    if (player_x <= 850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When D is pressed, X = " + player_x + " , and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}