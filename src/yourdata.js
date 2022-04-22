// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import profile from "./images/headshot.png"

import finetuned from "./images/finetuned.png"
import valeo from "./images/valeo.png"
import scopenote from "./images/scopenote.png"
import sudoku from "./images/sudoku.png"
import five from "./images/five.png"
import carousel from "./images/carousel.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Bradley",
  headerTagline: [
    //Line 1 For Header
    "Bradley",
    //Line 2 For Header
    "Herrera Contreras",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm a trilingual student who enjoys programming, data science, & mathematics!",

  //Contact Email
  contactEmail: "b2herrer@uwaterloo.ca",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Valeo", 
      techs: "REACT, EXPRESS, MONGODB, NODE, AZURE",
      // date: "AUG 2020 | Hack Against Covid",
      para:
        "(HackAgainstCovid Top 15/115) A tool to support small businesses in building digital presence to expand market reach. A progress tracker visualizes data through weekly income and digital progress inputs.",
      imageSrc: valeo,
      url: "https://github.com/HAC-2020/LOO41",
    },
    {
      title: "ScopeNote", 
      techs: "REACT, FLASK, AZURE, AXIOS",
      // date: "AUG 2020 | Hack the 6ix",
      para:
        "A full-stack chrome extension study tool that extracts key words and phrases from articles through an API and custom filter, employing CRUD functions. Both an onsite note-taker and allows for the exporting of printable flashcards.",
      imageSrc: scopenote,
      url: "https://github.com/aamyli/ScopeNote",
    },
    {
      title: "Sudoku Visualizer", 
      techs: "ANGULAR",
      // date: "JUL 2020 | Personal",
      para:
        "A backtracking algorithm visualizer that shows the random generation and solving of a sudoku board. Leverages asynchronous functions and state changes to display the algorithm's steps.",
      imageSrc: sudoku,
      url: "https://aamyli.github.io/sudoku-visualizer/",
    },
    {
      title: "FineTuned", 
      techs: "FLASK, AZURE, PYTHON PIL",
      // date: "JAN 2021 | Hack The North 2020++",
      para:
        "Full-stack web app that edits uploaded images based on audio and lyrical analysis of chosen songs, leveraging Azure's sentiment analysis and Python's PIL library.",
      imageSrc: finetuned,
      url: "https://github.com/aamyli/finetuned",
    },
    {
      title: "five", 
      techs: "JAVASCRIPT, HTML, CSS",
      // date: "JUL 2020 | Set Hacks",
      para:
        "Front-end chrome-extension that uses NY Times’ API to display real-time news spanning 5 industrial subtopics. Published on Chrome Store.",
      imageSrc: five,
      url: "https://devpost.com/software/learnnow",
    },
    {
      title: "3-Panel Carousel", 
      techs: "REACT",
      // date: "JUN 2020 | Personal",
      para:
        "A reusable React carousel component. Published on NPM.",
      imageSrc: carousel,
      url: "https://www.npmjs.com/package/react-3-carousel",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    profile,
  //"https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
