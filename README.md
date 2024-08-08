# PG-Minigames

## Description
This game will be credited and inspired by Net Ninja (which will be credited later via citation). I wanted to created a simplistic game of memory cards with the change of matching the selected marvel character and finding its matching pair. This game also features a turn counter which keeps track telling the user how many turns it took them to find every character.

## Demo

https://github.com/slick-s/PG-Minigames/blob/kayla-branch/Screenshot%202024-08-08%20at%2001-31-33%20Memory%20Card%20Game.png
This demo shows a sample of what the game would look like when running before user starts.

## Technologies 
- Backend: Python, Flask

- Database: 
- Frontend: React, HTML, CSS

## Technical Information
- Routes

| Method        |       Path    | Purpose  |
| ------------- | ------------- | -------- |
| GET           |  /api/new_game| route to create a new game|
| POST          | /api/start    | creates the game when app is running|
| POST          | /api/new      | route used to create the new game|
| POST          |/api/initialize| Set up the game and creates the cards|


## Issues
 Some styling issues such as backimage isnt the same size as the front image of the card. In addition when clicking "new game" button you preview the spots of the two last two cards that were clicked and their placement.

 ## Documentation

 https://www.youtube.com/watch?v=XTLg6TLfy7M

 This documentation provided some insight of how to use routes via python

 https://www.pngwing.com/en/search?q=marvel+Animation#google_vignette

 Used this site to get the images of the marvel characters for the memory game. 

[ Photo by <a href="https://unsplash.com/@shoch?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Shovit Chettri</a> on <a href="https://unsplash.com/photos/a-red-and-white-sticker-with-the-word-marvel-on-it-IwcpiMuFAjM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>](https://unsplash.com/photos/a-red-and-white-sticker-with-the-word-marvel-on-it-IwcpiMuFAjM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash)

Credits of the unsplash image used to be the front of the card.

https://youtu.be/ZCKohZwGZMw?si=A9O7aLXM3p5W9O9H

A series of videos providing lessons by Net Ninja showing how to create a Memory Card game using React

https://youtu.be/PppslXOR7TA?si=CHJdiiKhVwA9Yxqx

Tutorial video by Tech with tim showing a full stack app using Python and Javascript

https://youtu.be/7LNl2JlZKHA?si=5tsJVZ_pp0nUBo45

Tutorial video by Arpan Neupane on how to create a Flask and React project

chatgpt.com

Used chatgpt to help with errors throughout the code especially with figuring out the routes to the game.

 ## Changelog
