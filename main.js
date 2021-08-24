 var canvas = new fabric.Canvas ("golf");

holex=800
holey=400
ballx=0
bally=0


blockwidth = 5;
blockheight = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
        holeobj = Img;
        holeobj.scaleToWidth(50);
        holeobj.scaleToHeight(50);
        holeobj.set({
            top: holey,
            left: holex
        });
        canvas.add(holeobj);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {
        ballobj = Img;
        ballobj.scaleToWidth(50);
        ballobj.scaleToHeight(50);
        ballobj.set({
            top: bally,
            left: ballx
        });
        canvas.add(ballobj);
    });

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    
	if ((ballx==holex)&&(bally==holey)){
		canvas.remove(ballobj);
		document.getElementById("hd3").innerHTML="⛳😀YOU HIT THE GOAL!😀⛳";
		document.getElementById("golf").style.border="red";
	}
		else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (bally >= 0) {
			bally = bally - blockheight;
			console.log("blockheight = " + blockheight);
			console.log("When up arrow is pressed, X = " + ballx + ", X =" + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function down()
	{
		if (bally <= 450) {
			bally = bally + blockheight;
			console.log("blockheight = " + blockheight);
			console.log("When down arrow is pressed, X = " + ballx + ", Y =" + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}

	function left()
	{
		if(ballx >5)
		{
			
		ballx = ballx - blockwidth;
		console.log("blockwidth = " + blockwidth);
		console.log("When left arrow is pressed, X = " + ballx + ", Y =" + bally);
		canvas.remove(ballobj);
		new_image();
		
			
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			ballx = ballx + blockwidth;
			console.log("blockwidth = " + blockwidth);
			console.log("When right arrow is pressed, X = " + ballx + ", Y =" + bally);
			canvas.remove(ballobj);
			new_image();
		}
	}
	
}

