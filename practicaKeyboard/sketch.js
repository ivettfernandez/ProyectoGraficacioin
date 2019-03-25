let bg=0;
let x=0;
let y=0;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	fill(bg)
	background('fff')
	if (keyIsDown(UP_ARROW))
		y-- 
	if (keyIsDown(DOWN_ARROW))
		y++
	if (keyIsDown(RIGHT_ARROW)) 
		x++
	if (keyIsDown(LEFT_ARROW))
		x--
	rect(x,y,200,200)
}

function keyPressed(){
	//if (keyCode == LEFT_ARROW)
	//x--
//
	//if (keyCode == RIGHT_ARROW)
	//x++
	//
	//if (keyCode == UP_ARROW)
	//y--
	//
	//if (keyCode == DOWN_ARROW)
	//y++
	//if (key==LEFT_ARROW) 
	//bg=bg==255?0:255
	//if (bg==255) {
	//	bg=0
	//}else{
	//	bg=255	}

}