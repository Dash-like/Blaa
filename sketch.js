
var database, position;
var ball;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database();
    console.log(database);
    var ballPosRef = database.ref("ball/position");
    //read function is .on("", function1, function2)max2, min1`
    ballPosRef.on("value", readPosition, showError);
    //.set is the write function
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
    position = data.val();
    console.log(position);
    ball.x = position.x;
    ball.y = position.y;
}
function showError(){
    console.log("error")
}
function writePos(x, y){
   database.ref("ball/position").set({
    x: position.x + x, 
    y: position.y + y
   })
}