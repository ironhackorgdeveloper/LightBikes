# Light Bikes - Developed in one week at IronHack Miami - April 2018

Developed by [Ryan Craig Martin](https://github.com/ryanmartin)

Light Bikes was the first project that I put together as part of my portfolio during my third week at IronHack Miami. The goal was to challenge ourselves to put together a game in one week using what we had learned over the course of the first two weeks of our Full Stack Web Development Cohort.

It's a clone of a game called Tron which was a coin-operated arcade game developed by Bally Midway in 1982. The original game consisted of four minigames inspired by the Disney motion picture Tron which was released that same year. One of the four games included was an interesting take on the classic game Snake in which you played a character on a Light Bike, a futuristic motorcycle showcased in the movie.

**The rules of the game are simple:**

- Two players can play at the same time using the same keyboard.

- Player one uses the WASD keys and Player two uses the IJKL keys in order to move their LightBike around the map. 

- The Light Bikes race across the game grid, and as they move, they leave a trail of light behind them which generates a maze of walls the other player must avoid.

- Players use these obstacles to box in and destroy their opponent while trying to avoid hitting any walls put up by the other player.

## Challenges

The concept was far more complicated than it looked. Having more than one player using the same keyboard and tacking the movement of each players at the same time were some of the first challenges I encountered. Once I was able to figure that out, I worked on having each player leave behind their own colored trail. The one piece that I severely underestimated was how I was going to implement collision detection for the game. Not only for each of the players and the trails thy leave behind, but also for the map borders and having those collisions update the scores of each player accordingly.

I learned a lot while putting together this seemingly simple game and look forward to the next project that I'll be putting together in the upcoming weeks.

---

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

### Built With

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Bootstrap](https://getbootstrap.com/docs/4.1/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Deployment

- [Live Demo](https://ryancraigmartin.github.io/light-bikes/)

## License

- [MIT](./LICENSE)
