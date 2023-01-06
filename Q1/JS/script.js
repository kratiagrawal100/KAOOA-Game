//  const fs = require('fs')
// import * as fs from 'fs';


// const m=require('./file')
// m.write("heelo dear");

// swal("Good job!", "You clicked the button!", "success");
 

var turn = -1;
var data = [];
var crow_inside = [0, 0, 0, 0, 0, 0, 0];
var no_of_crow_inside = 0;
var capture = 0;
var crow_die = 0;
var adjacentMoves = new Array(11);
var jumpMoves = new Array(11);
var inbetween = new Array(11);
for (var i = 0; i < adjacentMoves.length; i++) {
    adjacentMoves[i] = new Array(11);
    jumpMoves[i] = new Array(11);
    inbetween[i] = new Array(11);
}
for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
        adjacentMoves[i][j] = 0;
        jumpMoves[i][j] = 0;
        inbetween[i][j] = 0;
    }
}
adjacentMoves[1][2] = 1; adjacentMoves[1][3] = 1;
adjacentMoves[2][3] = 1; adjacentMoves[2][5] = 1; adjacentMoves[2][7] = 1; adjacentMoves[2][1] = 1;
adjacentMoves[3][4] = 1; adjacentMoves[3][2] = 1; adjacentMoves[3][8] = 1; adjacentMoves[3][1] = 1;
adjacentMoves[4][3] = 1; adjacentMoves[4][8] = 1;
adjacentMoves[5][2] = 1; adjacentMoves[5][7] = 1;
adjacentMoves[6][8] = 1; adjacentMoves[6][9] = 1; adjacentMoves[6][10] = 1; adjacentMoves[6][7] = 1;
adjacentMoves[7][2] = 1; adjacentMoves[7][5] = 1; adjacentMoves[7][6] = 1; adjacentMoves[7][10] = 1;
adjacentMoves[8][3] = 1; adjacentMoves[8][4] = 1; adjacentMoves[8][6] = 1; adjacentMoves[8][9] = 1;
adjacentMoves[9][6] = 1; adjacentMoves[9][8] = 1;
adjacentMoves[10][6] = 1; adjacentMoves[10][7] = 1;

jumpMoves[1][7] = 1; jumpMoves[1][8] = 1;
jumpMoves[2][4] = 1; jumpMoves[2][10] = 1;
jumpMoves[3][5] = 1; jumpMoves[3][9] = 1;
jumpMoves[4][2] = 1; jumpMoves[4][6] = 1;
jumpMoves[5][3] = 1; jumpMoves[5][6] = 1;
jumpMoves[6][4] = 1; jumpMoves[6][5] = 1;
jumpMoves[7][1] = 1; jumpMoves[7][9] = 1;
jumpMoves[8][1] = 1; jumpMoves[8][10] = 1;
jumpMoves[9][3] = 1; jumpMoves[9][7] = 1;
jumpMoves[10][2] = 1; jumpMoves[10][8] = 1;

inbetween[1][7] = 2; inbetween[1][8] = 3;
inbetween[2][4] = 3; inbetween[2][10] = 7;
inbetween[3][5] = 2; inbetween[3][9] = 8;
inbetween[4][2] = 3; inbetween[4][6] = 8;
inbetween[5][3] = 2; inbetween[5][6] = 7;
inbetween[6][4] = 8; inbetween[6][5] = 7;
inbetween[7][1] = 2; inbetween[7][9] = 6;
inbetween[8][1] = 3; inbetween[8][10] = 6;
inbetween[9][3] = 8; inbetween[9][7] = 6;
inbetween[10][2] = 7; inbetween[10][8] = 6;




var container = document.getElementById("container");
var c = document.getElementById("mycanvas");
// c.style.backgroundColor="rgba(255, 204, 213,0.8)";
var board = document.getElementById("board");
var ctx = c.getContext("2d");
var deadzone=document.getElementById("dead");
console.log(board.offsetHeight + " " + board.offsetWidth);
c.height = board.offsetHeight;
c.width = board.offsetWidth;
c.style.position = "absolute";
let h = c.height;
let w = c.width
ctx.lineWidth = 2;
ctx.strokeStyle = '#009933';
ctx.moveTo(0.35 * w, 0.15 * h);
ctx.lineTo(0.85 * w, 0.85 * h);
ctx.stroke();
ctx.moveTo(0.35 * w, 0.15 * h);
ctx.lineTo(0.25 * w, 0.95 * h);
ctx.stroke();
ctx.moveTo(0.85 * w, 0.85 * h);
ctx.lineTo(0.05 * w, 0.5 * h);
ctx.stroke();
ctx.moveTo(0.05 * w, 0.5 * h);
ctx.lineTo(0.85 * w, 0.25 * h);
ctx.stroke();
ctx.moveTo(0.85 * w, 0.25 * h);
ctx.lineTo(0.25 * w, 0.95 * h);
ctx.stroke();
var div = document.createElement('div');
div.id = "banner";
// div.style.backgroundColor = "white";
div.backgroundColor="green"
div.position = "absolute";
board.appendChild(div);
var p = document.createElement('p');
p.textContent = "KAOOA";
p.position = "relative";
p.style.marginLeft = "5%";
p.style.textAlign = "left";
p.style.fontWeight = "bold";
p.style.fontSize = 0.05 * w + "px";
p.style.fontFamily = "Times New Roman, Times, serif";
p.style.textDecorationLine = "underline";
div.appendChild(p);
// var btn=document.createElement("button");
// btn.innerHTML="RESET";
// btn.id="reset";
// btn.className="btn btn-danger";
// btn.position="absolute";
// btn.style.float="left";
// btn.style.marginTop="2%";
// btn.style.marginLeft="50%";
// // btn.style.height="50px";
// // btn.style.width="80px";
// btn.addEventListener("click",logdata);
// container.appendChild(btn);
// var btn1=document.createElement("button");
// btn1.innerHTML="START";
// btn1.id="start";
// btn1.className="btn btn-primary";
// btn1.position="absolute";
// btn1.style.float="left";
// btn1.style.marginTop="2%";
// btn1.style.marginLeft="5%";
// // btn.style.height="50px";
// // btn.style.width="80px";
// btn1.addEventListener("click",startgame);
// container.appendChild(btn1);
//create circular divs
for (i = 1; i <= 10; i++) {
    var div = document.createElement('div');
    div.id = "circle" + i;
    div.style.border = "2px solid green";
    div.style.height = 0.1 * h + "px";
    div.style.width = 0.1 * w + "px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "#fff";
    div.style.position = "absolute";
    div.addEventListener('dragenter', dragEnter)
    div.addEventListener('dragover', dragOver);
    div.addEventListener('dragleave', dragLeave);
    div.addEventListener('drop', drop);
    board.appendChild(div);
}
var div1 = document.getElementById("circle1");
div1.style.left = 0.31 * w + "px";
div1.style.top = 0.14 * h + "px";
var div2 = document.getElementById("circle2");
div2.style.left = 0.45 * w + "px";
div2.style.top = 0.30 * h + "px";
var div3 = document.getElementById("circle3");
div3.style.left = 0.25 * w + "px";
div3.style.top = 0.36 * h + "px";
var div4 = document.getElementById("circle4");
div4.style.left = 0.02 * w + "px";
div4.style.top = 0.44 * h + "px";
var div5 = document.getElementById("circle5");
div5.style.left = 0.76 * w + "px";
div5.style.top = 0.22 * h + "px";
var div6 = document.getElementById("circle6");
div6.style.left = 0.42 * w + "px";
div6.style.top = 0.63 * h + "px";
var div7 = document.getElementById("circle7");
div7.style.left = 0.55 * w + "px";
div7.style.top = 0.48 * h + "px";
var div8 = document.getElementById("circle8");
div8.style.left = 0.25 * w + "px";
div8.style.top = 0.55 * h + "px";
var div9 = document.getElementById("circle9");
div9.style.left = 0.22 * w + "px";
div9.style.top = 0.86 * h + "px";
var div10 = document.getElementById("circle10");
div10.style.left = 0.77 * w + "px";
div10.style.top = 0.76 * h + "px";

var vulturediv = document.createElement('div');
vulturediv.id = "vulturediv";
vulturediv.style.height = "20vh";
vulturediv.style.width = "20vh";
// vulturediv.style.border="1px solid blue";
vulturediv.style.position = "absolute";
vulturediv.style.right = "80%";
vulturediv.style.top = "20%";
var p = document.createElement('p');
p.textContent = "VULTURE";
p.style.fontWeight = "bold";
p.style.fontSize = 0.05 * w + "px";
p.style.fontFamily = "Times New Roman, Times, serif";
container.appendChild(vulturediv);
vulturediv.appendChild(p);


var crowdiv = document.createElement('div');
crowdiv.id = "crowdiv";
crowdiv.style.height = "50vh";
crowdiv.style.width = "20vh";
// crowdiv.style.border="1px solid blue";
crowdiv.style.position = "absolute";
crowdiv.style.left = "80%";
crowdiv.style.top = "20%";
var p = document.createElement('p');
p.textContent = "CROW";
p.style.fontWeight = "bold";
p.style.fontSize = 0.05 * w + "px";
p.style.fontFamily = "Times New Roman, Times, serif";
container.appendChild(crowdiv);
crowdiv.appendChild(p);


var vulture = document.createElement('div');
vulture.id = "vulture1";
vulture.style.border = "3px solid orangered";
vulture.style.height = 0.06 * h + "px";
vulture.style.width = 0.06 * w + "px";
vulture.style.position = "relative";
vulture.style.backgroundColor = "yellow";
vulture.style.top = "22%";
vulture.style.left = "20%";
vulture.style.borderRadius = "50%";
vulture.draggable = { revert: 'invalid' };
vulture.addEventListener('dragstart', dragstart);
// vulture.addEventListener('onclick',logmovementvulture);
vulturediv.appendChild(vulture);

for (i = 1; i <= 7; i++) {
    var crow = document.createElement('div');
    crow.id = "crow" + i;
    crow.style.border = "3px solid blue";
    crow.style.height = 0.06 * h + "px";
    crow.style.width = 0.06 * w + "px";
    crow.style.position = "relative";
    // crow.style.background="radial-gradient(circle at 100px 100px, #5cabff, #000)";

    crow.style.backgroundColor = "skyblue";
    crow.style.borderRadius = "50%";
    crow.style.marginTop = "5%";
    crow.style.marginLeft = "20%";
    crow.draggable = "true";
    crow.addEventListener('dragstart', dragstart);
    // crow.addEventListener('onclick',logmovementcrow);
    // crow.onmouseenter=logmovement();
    crowdiv.appendChild(crow);
}


function dragstart(e) {
    let id = e.target.id;
    // console.log("turn "+turn);
    // console.log("drag start");
    // console.log("crow inside=" + no_of_crow_inside);
    if ((turn == 0 && id.includes("vulture")) || (turn == 1 && id.includes("crow"))) {
        // console.log("drag condition fullfill " + turn + " " + id);
        // if(turn==0)
        // turn=1;
        // else
        // turn=0;
        var c = document.getElementById(id).parentElement.id;
        // console.log("drag from" + c);
        if (turn == 1 && (no_of_crow_inside == 7 && crow_inside[id.substring(4, id.length) - 1] == 1)) {
            e.dataTransfer.setData('target', e.target.id);
            e.dataTransfer.setData('dragfrom', c);
        }
        else if (turn == 1 && (no_of_crow_inside != 7 && crow_inside[id.substring(4, id.length) - 1] == 0)) {
            e.dataTransfer.setData('target', e.target.id);
            e.dataTransfer.setData('dragfrom', c);
        }
        else if (turn == 0) {

            e.dataTransfer.setData('target', e.target.id);
            e.dataTransfer.setData('dragfrom', c);
        }
        // e.dataTransfer.setData('text/plain', e.target.id);

        setTimeout(() => {
            // e.target.classList.add('hide');
        }, 0);
        // console.log(id+"inside drag start");
        data.push(format()+" "+e.target.id + " moving\n");
        // console.log("dragstart");
    }
}
function dragstartvulture(e) {
    e.dataTransfer.setData('target', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    //console.log("dragenter");

}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
    //console.log("dragover");
    // console.log(e.target.id);

}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
    // console.log("dragleave");
    //console.log("id"+e.target.id);

    // console.log("on drop"+e.target.id);


}


function drop(e) {
    const id = e.dataTransfer.getData('target');
    const dragfrom = e.dataTransfer.getData('dragfrom');
    const draggable = document.getElementById(id);
    // console.log("drop dragfrom" + dragfrom);
    var present = 0;
    var adjacentindex = 0;
    // console.log("dropping into"+draggable);
    // var c=document.getElementById(e.target.id).hasChildNodes();
    // console.log("no of child"+e.target.id+" "+c);
    if (draggable != null && e.target.id.includes("circle") && document.getElementById(e.target.id).hasChildNodes() == false) {
        // console.log(document.getElementById(e.target.id).hasChildNodes())
        //e.target.appendChild(draggable);
        data.push(format()+" Dragging "+ id+" from "+dragfrom+" to "+e.target.id+"\n");
        draggable.classList.remove('hide');

        if (id.includes("crow")) {
            // console.log("inside")
            var index = id.substring(4, id.length);
            crow_inside[index - 1] = 1;
            if (no_of_crow_inside < 7)
                no_of_crow_inside++;
            console.log(no_of_crow_inside);
        }

        if (dragfrom.includes("circle")) {
           data.push(format()+" checking for valid move\n");
           
            var from = dragfrom.substring(6, dragfrom.length);
            var to = e.target.id.substring(6, e.target.id.length);
            var moveallowed = false;
            var jumpingmove = false;
            if (adjacentMoves[from][to] == 1)
                moveallowed = true;

            if (id.includes("vulture")) {
                if (jumpMoves[from][to] == 1) {
                    if (inbetween[from][to] != 0) {
                        var crowdead = document.getElementById("circle" + inbetween[from][to]).childNodes[0].id;
                        
                        if (crowdead.includes("crow")) {
                            jumpingmove = true;
                           
                            moveallowed = true;
                        }
                    }
                }

            }
            // console.log("move allowed " + moveallowed + " jumping allowed " + jumpingmove);

            if (moveallowed) {
                e.target.appendChild(draggable);
                if (turn == 0)
                    turn = 1;
                else
                    turn = 0;
                if (jumpingmove) {
                    deadzone.style.visibility="visible";
                    document.getElementById(crowdead).style.marginTop="0%";
                    document.getElementById(crowdead).style.marginLeft="2%";
                    document.getElementById(crowdead).style.display="inline-block";
                    console.dir(document.getElementById(crowdead).style[23]);
                    deadzone.append(document.getElementById(crowdead));
                    //document.getElementById(crowdead).remove();
                    
                    // console.log(crowdead);
                    crow_die++;
                    // console.log(crow_die);
                    if (crow_die >= 4)
                        {
                            data.push(format()+" vulture win\n");
                            Swal.fire({
                                title: 'Vututre Win',
                                html: "<img src='"+'../img/c1.gif'+"' style='width:350px;'>",
                                showClass: {
                                  popup: 'animate__animated animate__backInDown'
                                  
                                },
                                hideClass: {
                                  popup: 'animate__animated animate__fadeOutUp'
                                }
                              }).then((result) => {
                                if (result.isConfirmed) {
                                   reset();
                                  } 
                              })
                      // location.reload();
                }
                }
            }
            else if(id.includes("vulture")&& !moveallowed && !jumpingmove){
                    for (i = 1; i < 12; i++) {
                        //console.log("crow wining drag from" + from);
                        if (adjacentMoves[from][i] == 1) {
                            adjacentindex++;
                            if (document.getElementById("circle" + i).hasChildNodes() == true) {
                                present++;
                            }
                        }
                    }
                    if (present == adjacentindex) {
                        data.push(format()+" crow win\n");
                        Swal.fire({
                            title: 'Crow Win',
                            html: "<img src='"+'../img/c1.gif'+"' style='width:350px;'>",
                            showClass: {
                              popup: 'animate__animated animate__backInDown'
                            },
                            hideClass: {
                              popup: 'animate__animated animate__fadeOutUp'
                            }
                          }).then((result) => {
                            if (result.isConfirmed) {
                               reset();
                              } 
                          })
                       //   location.reload();
                         
                    }
                
            }
        }
        else {
            e.target.appendChild(draggable);
            if (turn == 0)
                turn = 1;
            else
                turn = 0;
        }
       // data.push(id + "dropped to" + e.target.id);
    }
  else if (draggable != null && e.target.id.includes("circle")) {
        var from = dragfrom.substring(6, dragfrom.length);
        var adjacentindex=0;
        var present=0;
      //  console.log("crow winning else situation");
        if (id.includes("vulture")) {
            for (i = 1; i < 12; i++) {
                // console.log("crow wining drag from" + from+"array "+adjacentMoves[from][i]);
                if (adjacentMoves[from][i] == 1) {
                    adjacentindex++;
                    // console.log("read circle"+i+" properties");
                    if (document.getElementById("circle" + i).hasChildNodes() == true) {
                        present++;
                    }
                }
            }
            // console.log(adjacentindex+" "+present);
            if (present == adjacentindex) {
                data.push(format()+" crow win\n");
                Swal.fire({
                    title: 'Crow Win',
                    html: "<img src='"+'../img/c1.gif'+"' style='width:350px;'>",
                    showClass: {
                      popup: 'animate__animated animate__backInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  }).then((result) => {
                    if (result.isConfirmed) {
                      reset();
                      } 
                  })
                 // location.reload();
                 
                
            }
        }
    }
    else {
        data.push(format()+"wrong dropping either target is not circle or draggable item was not crow/vulture\n");
    }
    // console.log("drop");

    // console.log("turn now " + turn);
    data.push(format()+" turn of "+(turn==1?"crow":"vulture")+"\n");

}

function format(){
    var d=new Date();
    return d.getDate()+"-"+(d.getMonth()+1)+"-"+d.getFullYear()+"T"+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}

function logdata() {
    // alert("here");
    console.log(data);

}
function start() {

   turn=1;
   Swal.fire({
    title: 'Game will start in a moment click OK',
    
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  data.push(format()+" Game started turn set to crow\n");
   
    // if(turn%2==0){
    // console.log("crow turn");
    // turn=1;
    // }
    // else {
    //     console.log("vulture turn");
    //     turn =0;
    // }
}
function donothing(){
    
}
async function reset() {
data.push(format()+" Reset Game\n");
await Swal.fire({
    title: 'Game Reset',
   
    // 'You can use <b>bold text</b>, ' +
    // '<a href="//github.com">links</a> ' +
    // 'and other HTML tags',
    
    // content:true,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
location.reload();
logging();
     // if(turn%2==0){
     // console.log("crow turn");
     // turn=1;
     // }
     // else {
     //     console.log("vulture turn");
     //     turn =0;
     // }
 }
 function logging(){
    const xhr=new XMLHttpRequest();
    xhr.open('POST',"http://localhost:3000/file ",true);
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   // xhr.setRequestHeader("Content-type", "text/plain");
    // xhr.send("data="+JSON.stringify(data));
    xhr.send("data="+data.toString());
}
// var ci=document.getElementById("circle 1");
// console.log("parent is "+ci.parentNode);
//logdata();
// console.log(data);
// function logmovementvulture(e){

//     console.log(e.target.id+"mouse clicked ");
//     }


// function logmovementcrow(e){
//     console.log(e.target.id+"mouse clicked");
// // console.log(e.target.id+"mouse clicked"+this.id);
// }




