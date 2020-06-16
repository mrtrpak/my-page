# My Portfolio Page

## About Me

Full stack web developer certified through the UNCC coding bootcamp with a degree in communication studies. Developed skills in HTML5, CSS3, Javascript, ES6, MySql and React. A problem solver that works well in a group and helps with conflict resolution and creativity to achieve a goal in a given time frame. With each project I push the boundaries of my capabilities to give the best possible experience for the user. A recent project I worked on in a group of four I was the backend developer for a free to use business card creator. I setup the database with MySql and Sequelize as well as working with a third party API that generates a QR code based on the website the user wishes to link too. Excited to continue my learning in an ever growing expanding field to create more progressive applications and web experiences.

## Links

[To My Portfolio](https://mrtrpak-portfolio.herokuapp.com/)

[To My LinkedIn](https://www.linkedin.com/in/michael-trpak/)

## Table of Contents

- [Tools Used](#Tools-Used)
- [Photos Used](#Photos-Used)
- [Gifs](#Gifs)
- [Portfolio Page Breakdown](#Portfolio-Breakdown)
  * [Navbar](#Navbar)
  * [About Me](#About-Me-Section)
  * [My Links andd Divider](#My-Links-Divider)
  * [Projects](#Projects-Section)
  * [Footer](#Footer)
- [For the Future](#Future)
- [Difficulties](#Difficulties)

## Tools Used

- [axios](https://www.npmjs.com/package/axios)
- [Flexbox](https://yoksel.github.io/flex-cheatsheet/#align-items)
- [football-data.org](https://www.football-data.org/documentation/api)
- [GIMP](https://www.gimp.org/)
- [Material-ui](https://material-ui.com/)
- [RAWG](https://rawg.io/apidocs)
- [React](https://reactjs.org/)
- [react-card-flip](https://www.npmjs.com/package/react-card-flip)
- [react-parallax](https://www.npmjs.com/package/react-parallax)
[react-player](https://www.npmjs.com/package/react-player)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)

## Photos Used

- [Bayern Munich Badge](https://img.fcbayern.com/image/upload/f_auto,q_auto/t_productstage/eCommerce/produkte/20550/aufnaeher-logo.png)
- [Bridge Parallax](https://unsplash.com/photos/q0AtbGIOb5k)
- [Bundesliga Logo](https://lh3.googleusercontent.com/proxy/ink1CpRH4fLbp5jaM7JM-5lNNupXg2VtA7Mu50dJAFMr_MOPFBvtgDGbEe5UKjaUa31fYp4QhBLed3BBothYA9C2N2Myh6vkO4BXtJ7IJVdvK8U9VlB8d9EOBdn_H6qIlmqP_168VOTBiEo)
- [Castle Parallax](https://unsplash.com/photos/IZunjrb3soo)
- [Header](https://unsplash.com/photos/5fIoyoKlz7A)
- [Mario on Games Throne](https://i.kym-cdn.com/photos/images/original/000/423/515/f35.jpg)

## Gifs

- [Business Card Creator](./src/gifs/businessCard.gif)
- [Budget Tracker](./src/gifs/budgetTracker.gif)
- [Retro Game](./src/gifs/game.gif)
- [Switch Gifs](./src/gifs/switchGifs.gif)

# Portfolio Breakdown

### Navbar

In the navbar I used flexbox to push my links to github and linkedIn to the right and used media queries to adjust my name for all different screen sizes. With material ui icons I was able to set the buttons using the icons associated to github and linkedIn.

### About Me Section

This section is using a parallax effect using react-parallax. The image is of Neuschwanstein Castle located in Schwangu, Germany. A great image that speaks to my german roots being born in Germany. This section is a class component which made it easy for me to be able to adjust the length and strength of the image to make it responsive across different screen sizes.

  - Me Card: I created a card with react-card-flip so the card will flip over on the button click to show about the "backside" of the card. Using this npm made it easy to implement this feature and customize in which direction it flips as well as the speed of the flip.

  - Blockquote: For the quote most of the work was done with CSS. Using box-shadow helps it to pop out more. Using the ::before selector I was able to add in the quote marker and the author line which gives it a clean styled look. 

  - Video Game Top 10: Using the RAWG api I am able to get a list of games that are the best overall rated. With using a function to sort the games in order by highest rated I can see the top ten games rated through the RAWG api formula on load of the page. The user can either scroll one by one forward or backward through the games or click on a specific number. 

  - Bundesliga Standings: My favorite team is Bayern Munich and on the click of their logo will redirect to a new page. This page displays the current standings for all teams in the Bundesliga with pertinent information. I decided to save each team's stats in state which then made it much easier to call that information so I get the most updated stats for all teams with only making one api call. I am using football-data.org to get the information on the Bundesliga.

### My Links Divider

This section is for easy reference for the user to be able to see my github or linkedIn without needing to scroll back to the top and click the links in the header. I also added in a link to my resume for those that would be interested. Using material ui made it easy to use a button to show a menu list for all the links I wanted to add here.

### Projects Section

This section is using a parallax effect with an image of the Charles Bridge in Prague, Czech Republic. One of the best cities to visit and a favorite of mine. I used the same system as with the about me section to get the parallax to be responsive over all different screen sizes.

  - Player: I added a video screen section to show gifs of the different projects that I have worked on so the user can get a preview of what that particular project involves and how it works.

  - Player Links: Next to each project name's button is an icon from material ui icons that is linked to the player. When the icon is clicked the text below the player is replaced with a short snippet that explains the corresponding project. Also the player is replaced with the appropriate gif that shows that specific project. Once the project name is clicked it will redirect to that project.

### Footer

I wanted to match the header with the footer to have that uniform complete look, but still wanted to add in something that could be practical. I added in a button that will immediately scroll back to the top of the page so the user can then easily get back to my github and linkedIn links if they would like to get in contact with me.

## Future 

- I would like to add a theme switch for my portfolio page to be able to add more options and diversity to be able to change with my moods.

- I would like to have options for games to also get the worst games and to try to get game trailers or clips of the games to view.

- I would like to add individual stats in the Bundesliga such as top scorer.

- I want to add a slight delay between games rendered so it is a smoother process. 

## Difficulties

- When working with the both RAWG and football-data.org I had to get creative with how to able to render all of the information. When starting to design the page I was hard coding the stats for each game or team. After changing the state names that I was saving the information into from the API call I was able to have a work around to render without it being hard coded. 

- When setting out making this portfolio I made an outline of how I wanted it look and work. Some features would of proven to be time consuming but thanks to npm packages made some features easy to implement. Using both react-card-flip and react-parallax helped bring together the page.
