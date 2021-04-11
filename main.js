var mouseEvent="empty";

var last_position_of_x;

var last_position_of_y;



var colors = ["red" , "orange" , "yellow" , "green" ,  "blue" ,  "indigo" ,  "violet" ,  "purple"]

function search_input(){

     color = document.getElementById("color").value;

}


canvas=document.getElementById('myCanvas');

ctx=canvas.getContext("2d");
 
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    mouseEvent="mouseDown";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;

    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("current position of x and y cordinates = ");        
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = Width_of_line;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0 , 2*Math.PI);
        ctx.stroke();

        color = document.getElementById("input2").value;
        radius = document.getElementById("input1").value;
        Width_of_line = document.getElementById("input3").value;  

    }
    last_position_of_x = current_position_of_mouse_x;

    last_position_of_y = current_position_of_mouse_y;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

     mouseEvent = "mouseUp";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

color = document.getElementById("input2").value;
radius = document.getElementById("input1").value;
Width_of_line = document.getElementById("input3").value;
mouseEvent = "mouseDown";

}

function remove(){

      GamepadButton = color = document.getElementById("input2").value;
      radius = document.getElementById("input1").value;
      Width_of_line = document.getElementById("input3").value;
           

}

