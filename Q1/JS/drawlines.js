
    // Making a line Generator
    var board = document.getElementById("board");
    var svg=document.getElementById("mycanvas");
    svg.style.height=board.offsetHeight;
    svg.style.width=board.offsetWidth;
    console.dir(svg);
    h=svg.scrollHeight;
    w=svg.scrollWidth;
    console.log(h,w);
    var Gen = d3.line();
    var points = [
        [0.35 * w, 0.15 * h],
        [0.85 * w, 0.85 * h],
        [0.05 * w, 0.5 * h],
        [0.85 * w, 0.25 * h],
        [0.25 * w, 0.95 * h],
        [0.35 * w, 0.15 * h]
   
         
    ];

    var pathOfLine = Gen(points);
    d3.select('path')
        .attr('d', pathOfLine);
