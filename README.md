
# VOCAB - MEMORIZE
A game to test visual memory and at the same time viewers ability to learn new vocabulary words. The rules are: look at the newly presented 6 vocabulary words that are in English and in Czech language. Try to memorize as many as you can. Observe the image presented and memorize location of each word. You will have 40 seconds for this, when the time is over, a new image appears with missing areas. There are 2 randomly picked words (from the previous 6) and you are supposed to say where does each of the words belong to the image. You can check your succes by clicking on "Check answer", you can also get new 2 randomly picked words (to test your memory again) or you can go back to the front page to read instructions again.

The aim of this game is to help people who are learning new languages develop their vocabulary in a playfull way. It is especially developed for people with visual memory who associate the learning material to images and later on are reminded of the actual image and the newly learned content. 

The interactions that is offered to the user are developed in two ways according to their device. First version is for larger screens - laptops and computers where the user is encouraged to actually grab the new words and find their correct location on presented image. For touch screen there is a "fill in" version. The main image contains numbers where items were erased and the user is supposed to write in a number, where the randomly picked word belongs.

The presented game is a trial, or an example of a possible more expanded version with many images and different vocabulary words.
The game is currently developed for learning vocabulary in Czech language but can be easily adapted to more languages.

## UX
As mentioned, the game is developed as an example of an expanded version so in that case there would be many more user´s expectations, or reasons why to use this game and come back to it. However in this ReadMe file I will be describing only the actual current version of website that now exists. 
### User stories:
  - Expected goals of first time page visitors:
    1. English speaking people who want to give a try to learning a new language.
    2. English speaking people who want to test their visual memory.
    3. English speaking people who are curious about difficulty of the Czech language and want to test if they are capable of learning a few words.
    4. English speaking people who already know the Czech language and only want to test or refresh their skills. 
    5. Czech speaking people who want to check their knowledge of few English words and mostly test their visual memory. 
    6. Anybody that wants to check the type of game there is. 

  - Expected goals of second (and more) time page visitors:
    1. English speaking people who want to check their progress in learning Czech language. 
    2. Anybody that wants to check the game.
  

### Design of the website:
#### Typography
- The text on website is on purpose as short as possible in order to lead focus on the actual game and actions there. Therefore there is one main font to provide unite effect: 'Allerta Stencil'.
- The main page contains also instructions (longer text) and to provide better user experience, for longer text is used font 'Roboto' ('Allerta Stencil' is kept only for headings, buttons and footer).
Both fonts are from [Google Fonts](https://fonts.google.com/ "Google Fonts").

#### Colors
There are two color schemes on the website. 
First is to provide certain branding of Vocab-Memorize and is represented on index.html page. The colors are based on turquise color in combination with white and red (mainly on images).
Branding color are:
- font: #04bc89, 
- background color supporting the overall brand look: #116661, 
- and white color of fonts and background: #FFFFFF. 
All other branding colors are variants of the above.

Second color scheme is developed to fit the main-hero house image and its colors. This color scheme might be changed if game is further developed and more images are added. There are also drops of the branding colors used on the game section pages in order to unify the overall look and remind the user it all belongs together to the same game.
Colors used for game sections are:
- instructions, buttons, timer: #0c93d1,
- cards font: #ea515b,
- action buttons - check, new words, try again: #f80707, #fda23e, #0a4b69.
- background colors are picked as variants of white in accordance to the page: #f5f5f5, #f5edee.
- check answers button triggers showing the results - font, areas showing correct answers - and is designed to support to branding of Vocab-Memorize, therefore it´s actions colors are based on #04bc89.
All other colors are variants of the above.

#### Imagery
Branding of Vocab-Memorize uses vector images that are styled to look they were "hand drawn". The main house picture uses vector image. 
All the images presented on the website were adapted from originally two images, purchased on [Shutterstock](https://www.shutterstock.com/).
- images on index.html were adapted from original image: https://www.shutterstock.com/cs/image-vector/set-vector-home-items-house-icons-1743959444
- main house image was adapted from original image: https://www.shutterstock.com/cs/image-vector/house-cut-detailed-modern-interior-many-282624269

All adaptation of pictures to fit the website and its purposes were made later on by me.

#### Wireframes


#### Mockups


## Features
The game is presented in a playfull yet simple look. There is as little items presented possible in order to lead the focus on the actual game part. 
### Existing Features

- **Main page - Index.html** 
  -  Introduces the playfull feeling of a game where there will be not only vocabulary words to be remembered but also visual items - therefore there are three areas important: main logo and name of game presented by logo Vocab-Memorize in large size, instructions already hinting the style of brand - use of colors and font and single images representing the need of memorize new words but also their area on website. 
  - There is no navbar on purpose in order to bring in "player mode", a little bit of "being led" feeling, loss of control. 
  - link to start the game on button "Let´s go" leads to new page get-ready.html
  - Footer to present links to social media - external resources of information about the game (fictional) and Copyright (fictional)

- **Get ready** 
  - Immeadiately after entering page there is timer that starts the countdown. There is no option to stop the countdown. 
  - There is the main image of a house where all items are shown. The image was chosen to present the images in context, not only a list of things, therefore I picked an image of a house where all items belong to certain category (and help the used connect them to other topics, memories, etc., simply to create better connections). The image of the house is on purpose with some areas on the sides which helps it to show correctly on different screen sizes.
  - Cards with vocabulary words are static, no interaction is available.
  - There is an option to skip the memorizing part and go directly to game (link to game.html). Reason for this is for second (or more) time users who believe they do not to refresh their memory of the game, or for people who wanted to go back to main page, read again instructions and go back to game. 
  - Footer on the bottom of page in branding colors and links to social media. Footer is hidden for smaller screens in order to provide more space for actual vocabulary words and image.

  
- **Game** 
  - As mentioned above, there are two versions of the game. One for computers, one for touch screens. Both versions start with randomly selecting two words from the vocabulary (2 out of 6) and presenting them to the user. Both versions show the same main image (from get-ready.html) but adapted accordingly.

  - **Computer version**
    - The computer version shows the main image with blank areas - places where on original versions were placed items listed in the vocabulary words. 
    - The user gets instruction: "Grab the missing items and place them where they belong."
    - Therefore the computer version uses drag and drop function where words can be dragged by mouse and moved around. On purpose there is no effect while the items are dragged so that it wouldn´t help the user to see where the correct location of word is. The words can be dragged all around the screen and dropped wherever the user decides without any design effect support.
    - Below the two words there are three buttons triggering some action: 
    1. **Check answers**
      - Clicking on button triggers function to check what words were placed correctly and a text (styled in branding colors) appears: "You got ´number of correct´ correct". At the same time, those words that were placed correctly show a turquise glow (branding color) in the area that accepts the word. The area that accepts the word is made on purpose much larger than the actual item was in order to provide some kind of flexibility in the game and also to clear the difference between the actual size of the erased item and the card with word.
      - As there is no official end to the game, 3 seconds after clicking on "Check answers" appears an alert with information: "This is the end of game for now. More coming soon! But..you can always practice this one again. :-)".  
    2. **New words** 
      - Button reloads the page and provides two new randomly picked words.
    3. **Try again**
      - Button links the user to main page - index.html

- **Touch screens version**
  - Touch screens are more complicated (if possible at all) to create such drag and drop functionality as I implemented to the large screens. Therefore to provide phone and tablet users the option to play the game anyway, a different version of the game is presented. The Touch screen version is implemented only on game.html site, the get-ready.html and index.html are the same for both versions.
  - Touch screens show different version of main house image - the items were erased but on the blank areas was added a sign - circle with a number in the middle marking a location of an erased item.
  - Two random words (from the previous list of 6) are also presented, but there is no drag and drop funcitonality, there is added an input field where user simply writes in number where this specific item belongs on the image.
  - The instruction is therefore different: "Where do the missing items belong? Write in the number."
  - The buttons are almost identical as on computer version (see above), only **Check answers** varies: after submiting the answers, the input background changes accordingly if the number filled in is correct or wrong. Colors of input background fit the branding style.

   
### Features Left to Implement
The game provides many creative future implementations such expansions with more images and words, adding other sections, new languages, more profound feedback of the progress of learning (statistics, hints what area to focus on, button at the end leading to next image etc.). 
The following features could be implemented on the current version of game:
- timer: 
  - user could decide how much time he/she needs to memore the words
  - timer could be added also to the actual game, either as a fixed time or user could decide how much time he/she needs

- words and their random appearance: there could be function that tracks words that were answered/fill in wrong and it could bring these wrong words back until the user answers their correct location
- alert functionality (after submit) should be added to touch screens
- change color in computer version - it would be nicer if after clicking on submit "Check answers" the actual words would change their background color according to if they were placed correctly or wrong
- button with detailed instructions on game section
- many more options in design - e.g. add movement to the lamp in index.html, add interactivity to item images: e.g. on hover they would shake/turn around etc.

## Technologies Used
(adapted accordingly by: https://github.com/Code-Institute-Solutions/SampleREADME)
- **Bootstrap v5.0** - Bootstrap was used to assist with the responsiveness and styling of the website.
- **Google Fonts** - Google fonts were used to import all fonts into the style.css file which is used on all pages throughout the project.
- **jQuery** - to provide support with javascript codes
- **Git** - used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- **GitHub** - used to store the projects code after being pushed from Git.

- technologies to adapt the images (crop, adding the number circles for touch screen version, removing background etc.): 
  -**Media Bang Paint Pro**
  - **Photoshop Editor**
  - **Painting**

- **MS Office Power Point** - used for creating wireframes
- ** ** for mockups


## Testing

**Bugs and problems in development:** 
- **Responsiveness**
  - Responsiveness created a rather big challenge in developing this game. Despite the simple look of the game, there is many small items that were "floating" around, not wanting to fall into the correct spot. Using Bootstrap was of help but also created unwanted "behaviour" of certain items that were time consuming to fix.
  - There is a bug with the two versions for tablet users - if a tablet is positioned vertically, the correct "input" version for touch screens appears but if positioned horizontally, the browser reads it as a large screen and presents the drag and drop version.
  - **Main image - The House** - It was rather difficult to style the size and position of the house to fit well on all screen sizes. Certain devices show the image differently, some of them cropped the image too much and the roof of the house was not visible, therefore the users couldn´t fill in their answers. Certain screen sizes also demand to scroll down to show the entire page. This was a rather challenging task to fix and unfortunately some devices do not show the image in full size.
  - **Drag and drop** - drag and drop was an issue as the touch screens do not support this function. Also it was a challenge for me how to show different colors of the correct/wrong answers - if the dropped position was correct. My original idea was to change color of the word cards - if they were place correctly or wrong. Unfortunately later on I realized it would demand more time to develop such functionality and as consulted with tutor, I decided to make this function simpler: only mark which words were placed correct on the droppable area. Those who are wrong are left without any change of color.
  - **Footer** - footer on main page was no issue, but when it came to the game and get-ready sites, it was causing some troubles. I wanted to place the footer under all text but not under the house image. Unfortunately Bootstrap was not helping well with this as it does not provide the tool of "fixed-md-bottom" but only "fixed-bottom" or nothing. Either the footer was shown under the house image or if it was positioned fixed-bottom was in the way of the cards in small screen sizes. In the end I decided to adapt the small screen sizes to show house image smaller and provide space for footer (and also secure the house to be always shown in full size,not being cropped), unfortunately on certain phones the footer can still interfere with the buttons after submitting "Check anwers" (then the score appears and buttons are pushed lower).
   - **Time** - testing showed there was needed to be longer time given to the users. Originally there was 30 seconds for memorizing the vocabulary, but the feedback showed the users needed some time to look at the page and understand the principle. Therefore 10 additional seconds were added to give 40 seconds for memorizing in total. 
  - **Level of skills** - testing showed that the users need to have some general experience with using computers and touch screens. Those (mainly of older age) were not that much familiar with scrolling the phone screen and therefore moving the image up and down to see the entire page. Also to some of them it was difficult to understand how to write in the numbers. According to this feedback I made the house image smaller so that it will be as visible in full size.

- alert is visible only on large screens.. 

#### Website has been tested and corrected by: 
- https://www.freeformatter.com/html-formatter.html 
- https://validator.w3.org/ 
  - error found: 
    index.html: Error: Stray end tag div on line 57
    get-ready.html - Warning: Section lacks heading - From line 14, column 7; to line 14, column 33 - This is on purpose.
    game.html - Warning: Section lacks heading - From line 14, column 7; to line 14, column 33 - This is on purpose.

- https://jshint.com/ 
- https://jigsaw.w3.org/css-validator/validator

#### Testing of features:
The website was opened in Chrome, Mozzilla Firefox, Safari and Microsoft Edge to test all features and their functions. Also cache was cleared every time before I loaded the page. All functions, links and buttons work well. 
Main concern was the functionality of the game and showing the results. It was tested on many devices, brands sent to family members in order to receive feedback.

#### Testing User Stories from User Experience (UX) Section: 
## Game walkthrough
**Start** - Index page: the user reads the instructions, possibly clicks on images to see if there is any interaction. In the end clicks on "Let´s go button" that leads him to the game. 
**Get ready** - User looks at the page, looks at the image and sees the timer is already counting. Then tries to remember as much as possible, timer off, new page loads. 
**Game**
  **Computer version** - Now he/she sees two words and missing areas on the image. The instruction encourages him to grab the words and place them correctly. He/she may try to grab them and move with the words around. Eventually tries to find the correct area and place it to the corect location on image. Clicks on "Check answer" and gets results in numbers and also green glow appears on locations that were filled in correctly. If understood well, he/she may want to try to get some new words, clicks on "New words", gets two new random words and plays again. After submitting "Check answer" again and probably waits for what to do next.
  **Touch screen version** - When getting to Game page, user sees image of the house with numbers on it instead of the original items. User is supposed to write in the correct number to the input area. When clicking on "Check answer", an information pops up with the number of correct answers, at the same time, background of input changes color: green/turquise if correct, red if wrong. 
  
  Three seconds submitting the answers an alert shows up saying this is the end of the game for now and more is coming. User either leaves the game or goes back and tries to memorize the words again.
  

##### First Time Visitor Goals

##### Second Time Visitor Goals

### Problems during testing and development


## Deployment
The website was developed on hosting page GitHub with a help of GitPod. Therefore the deployed page is hosted on Github Pages.
Now the website is published on: https://kamilahase.github.io/MS2-Vocab-Memorize/

### GitHub Pages
(credit: https://github.com/Code-Institute-Solutions/SampleREADME)
The project was deployed to GitHub Pages using the following steps:
1. Log in to GitHub and locate the GitHub Repository
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. Alternatively Click Here for a GIF demonstrating the process starting from Step 2.
4. Scroll down the Settings page until you locate the "GitHub Pages" Section.
5. Under "Source", click the dropdown called "None" and select "Master Branch".
6. The page will automatically refresh.
7. Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository
1. By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...
2. Log in to GitHub and locate the GitHub Repository
3. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
4. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone
1. Log in to GitHub and locate the GitHub Repository
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type git clone, and then paste the URL you copied in Step 3.
7. $ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
8. Press Enter. Your local clone will be created.



## Credits
The design of the web was my own creation. 
The javascript code was inspired by the following tutorials and advice, in case parts of code were copied, it is marked in the code section directly: 
- https://www.youtube.com/watch?v=_a4XCarxwr8&t=333s
- https://www.encodedna.com/javascript/redirect-page-after-a-delay-using-javascript.htm
- https://stackoverflow.com/questions/5489989/jquery-equivalent-for-window-document-write
- https://www.rapidtables.com/convert/color/hex-to-rgb.html
- https://www.youtube.com/watch?v=C7NsIRhoWuE

### Acknowledgements
Many thanks to my mentor who provided me with insprational feedback.
Many thanks to tutors of Code Institue who´s help was highly appreciated and saved my nerves.

### Media


## Full content

### Vocab-Memorize

Use visual memory to expand your vocabulary
Language available: Czech

You will be given two tasks. To memorize a picture that will appear AND to learn 6 new words in the Czech language. You will be given 40 seconds. When your time is up, some items on picture disappear. Can you tell what is missing and name it in Czech?

Let´s go!


**FOOTER**

Facebook, Youtube, Instagram, Copyright 2021: Vocab-Memorize

### Get Ready
Memorize these words and their image location.
Timer

crib: POSTÝLKA
cat: KOČKA
toilet: ZÁCHOD
vase: VÁZA
fridge: LEDNICE
window: OKNO

Skip and go to game

### Game

Grab the missing items and place them where they belong. / Where do the missing items belong? Write in the number.

- two random words only in Czech

Check answers - New words - Try again. 

Alert: This is the end of game for now. More coming soon! But..you can always practice this one again. :-)



