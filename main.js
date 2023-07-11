var mouseEvent = "Empty";
var LPOX, LPOY;
canvas.addEventListener("mousedown", MouseDown());
function MouseDown() {
    C = document.getElementById("color").value;
    WoL = document.getElementById("WoL").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", MouseLeave());
function MouseLeave() {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mouseup", MouseUp());
function MouseUp() 
{
    mouseEvent = "mouseUp";
}
ctx = canvas.getContext("2d");
canvas.addEventListener("mousemove", MouseMove());
function MouseMove() {
    CPOX = e.clientX - canvas.offsetLeft;
    CPOY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = C
        ctx.lineWidth = WoL;

        console.log("Last position of x and y coordinates. x = "+ LPOX + ", y = "+ LPOY );
        ctx.moveTo(LPOX, LPOY);

        console.log("Current position of x and y coordinates. x = "+ CPOX + ", y = "+ CPOY );
        ctx.moveTo(CPOX, CPOY);
    }
    LPOX = CPOX
    LPOY = CPOY
}
