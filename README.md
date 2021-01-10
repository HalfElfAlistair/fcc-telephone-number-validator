# FCC Project: Telephone Number Validator

A JavaScript function that checks whether or not a string looks like a valid US phone number.

## Contents

- [Introduction](#Introduction)

- [Technologies](#Technologies)

- [Launch](#Launch)

- [Built With](#Built-With)

- [Author](#Author)

- [Acknowledgments](#Acknowledgments)

- [Author Notes](#Author-Notes)


## Introduction

Made as part of the JavaScript Algorithms and Data Structures course on FreeCodeCamp.

### Course Aim

Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

- 555-555-5555
- (555)555-5555
- (555) 555-5555
- 555 555 5555
- 5555555555
- 1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


### Personal Aims

Succesfully solve the JavaScript challenge.

Convert the code from my completed challenge so that it works with a HTML page.

Improve my knowledge and understanding of JavaScript.

Have a project I can go back and refactor as I progress, for shorter code that's easier to understand and solves problems more efficiently.


## Technologies

- HTML5
- JavaScript
- CSS3

## Launch

Running this project locally should be nice and easy! Either download the repository from Github or use the viewer on Codepen.

### Prerequisites

None

### Running

Once you've downloaded and unzipped the repo file, simply open up the index.html in your browser.


## Built With

- Visual Studio Code

- Chrome Devtools

- FCC Console

I developed the JS code in on FCC for the challenge, then used VSC to amend it and add it to HTML.

## Author

Alistair Sinclair-Smith

Email: [alistairjss90@gmail.com](alistairjss90@gmail.com)

Github: [HalfElfAlistair](https://github.com/HalfElfAlistair)


## Acknowledgments

### [FreeCodeCamp](https://www.freecodecamp.org/)
The educational and practical opportunity to develop my coding skills.

### [The Modern JavaScript Tutorial](https://javascript.info/)
I've found myself using multiple learning resources for JavaScript and this has been a very useful one.

### [w3schools](https://www.w3schools.com/)
A really useful source for learning JavaScript.

### [Useful Programmer](https://www.youtube.com/channel/UCAocVBB14ixYUfdhKaSrvNQ)
A brilliant resource to assist with learning to code.

### [WebAIM.org](https://webaim.org/)
Their colour contrast checker is a go to for me every time so I can ensure my work is readable.

### [Coolors.co](https://coolors.co/)
I use their 'create a palette' tool to help me select a colour scheme.


## Author Notes

As you can see from the projects I've completed so far, the JS knowledge that has mainly sunk in for me is 'if statements', 'for loops' and some of the string and array methods. I've managed to complete them so far but obviously I still have a ways to go with improving my solutions.

Having finished this task I looked at how other people had completed it and there was an almost uniform consensus that it should be done with a single RegExp object. This makes complete sense, it's short and only took up about three or four lines, as well as iterating through once so will be faster than what I've done. Once knowledgeable on RegExp (which most programmers will be) it's probably easy to understand too. That said, novices like myself (at the time of writing) are likely only familiar with basic RegExp so arguably what I've done could be easier to understand.

What have I learned? I definitely need to go back and immerse myself in RegExp so I can properly understand using it. Once I've done that I'll go back and improve this code but I'm also thinking of adding another function for UK phone numbers, that'll be a great test of what I've learned.
