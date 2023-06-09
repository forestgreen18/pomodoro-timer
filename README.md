# Podomoro Timer

## Description

Podomoro Timer is a web app that allows you to work efficiently using the proven technique of the Pomodoro timer. Work and rest in several intervals - '25-5-25-5-25-5-25-15' - to enhance your productivity and keep you concentrated.

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as "pomodoros", the plural in English of the Italian word pomodoro (tomato), after the tomato-shaped kitchen timer that Cirillo used as a university student.

The project is written in JavaScript using the OOP paradigm. Each separate entity has its own class. Styles are written in CSS and make use of variables for some style properties. Using CSS variables allows for easier maintenance and reusability of styles. Media queries and a `normalize.css` file are also used. The `normalize.css` file makes browsers render all elements more consistently and in line with modern standards.

## Project Structure

### HTML

- `index.html`: Contains all markup for the Pomodoro timer
- `404.html`: Page displayed for unfound pages

### CSS

- `fonts.css`: Contains font styles
- `media.css`: Contains media queries
- `variables.css`: Contains CSS variables
- `main.css`: Contains all custom styles for the page
- `normalize.css`: Used to make browsers render all elements more consistently

### JavaScript

- `Counter.js`: Class suitable for counting down time
- `Timer.js`: Class for the timer itself, uses methods from the Counter class to control the timer, set specific time, change timer modes, and show specific elements on the page
- `TimerDisplay.js`: Class responsible for displaying HTML elements on the page
- `TimerMode.js`: Class responsible for changing timer modes such as "work mode", "short break mode", and "long break mode"
- `SoundPlayer.js`: Class responsible for playing sounds and changing sound volume
- `ElementToggler.js`: Class responsible for showing, hiding, and enabling HTML elements. Mainly used for showing and hiding buttons according to the timer mode and state

#### Additional utility classes:

- `ModeFormatter.js`: Static class used for returning correct mode names in an easy-to-read form
- `TimeFormatter.js`: Static class that takes time in seconds and returns easy-to-read text for displaying on an HTML page

`index.js` is responsible for creating instances of the classes mentioned above and is the main entry point for the timer itself.

In development: Implementation of a Todo list.

## License

This project is licensed under the MIT License.
