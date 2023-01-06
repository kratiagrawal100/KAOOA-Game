KAOOA Game

#HTML folder
1. It contains index.HTML
2. to view the game ui open it using server only(visual code you can use live server othersise python3 server can also be use).
3. crow vulture are dynamically created in JS only
4. ui is adjustable to height and width of window size.

#JS folder

1. It contains three script

2. Drawlines.JS
2.1 to draw lines using d3 library


3. script.JS
3.1 which contains the logic of game and elements that are dynamically created

4. logs.JS
4.1 open terminnal inside JS folder
4.2 run this file using node logs.js in terminal opened in above step
4.3 logs.js contain express js code to create an api for writing log

#Logs folder
1. it will contain the file logevents.txt which will contain logs created during game.

#other folder
1. img folder contain gif appear at winning in alert box.

#SWAL 
used sweetalert for showing alert, alert has animation as well.

#How to start the game
1. Intially turn is set neither to crow nor to vulture
2. click on start button, turn will get set to crow
3. 2 player game turn will revert after every move(crow->vulture, vulture->crow)
4. Game rules are intact to traditional KAOOA game only.
