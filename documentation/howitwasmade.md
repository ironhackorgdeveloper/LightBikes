# How I built Light Bikes using Canvas, BootStrap, JavaScript and JQuery.

## Project Breakdown: 

For my first project at IronHack, I decided to challenge myself by putting together my own version of a classic Tron game called **Light Bikes**. In this document I will be breaking down how I put the game together using what I've learned over the past two weeks at IronHack and will add links to any resources that I found helpful along the way. I hope that others find this documentation helpful. 

The concept behind the game is simple. The game will allow for two players to play against one another on the same screen. Player One will be able to move across the map which I will create using `canvas` using the arrow keys and Player Two will move using the WASD keys. As the players move accross the map, they will leave behind a trail which will not dissappear and cause a wall to be added to the screen. These trails as well as the borders of the `canvas` map will have collision detection implemented by `JavaScript`. The goal is to get the other player to run into the trail that is left behind in order to score a point. If the two bikes collide into one another, no points will be awarded. The first player to recieve three points will win.  

---

### Components / Features & Projected Timeline:

  - [X] **Canvas Map + Styling** - *1 Day*
  - [/] **Start button & 3 second countdown** - *1/4 of a day*
  - [ ] **Players + Movement (WASD & IJKL)** - *1/2 to 3/4 of a day*
  - [ ] **Player trails.** - *3/4 of a day*
  - [ ] **Win / Loss Tracker** **(First to 3 wins.)** - *1/2 a day*
  - [ ] **Collision detection.** - *1 & 1/4 of a day*

![WhiteBoard Breakdown of Code](/img/documentationimages/whiteboardbreakdown.jpg)
###### Above is a whiteboard breakdown that I put together with my TA, Marcos who will be helping me thoughout the process of building the game over the next week.

---

## Step 1: Creating and Resizing the Canvas:

I started by first adding JQuery and BootStrap to my index.html file, and linked both my CSS and BootStrap to the document. 

![Imports](/img/documentationimages/imports.jpeg)

