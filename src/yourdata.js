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

import portfolio from "./images/portfolio.png"

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
    "I'm a trilingual student who enjoys programming, data science, & computers!",

  //Contact Email
  contactEmail: "b2herrer@uwaterloo.ca",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Interactive Glucose Visualization Dashboard", 
      techs: "PYTHON, PANDAS, PANEL, HEROKU",
      para:
        "Created an interactive dashboard visualizing my glucose monitoring health results to share my Type 1 Diabetes journey with loved ones. Built & processed data with Python and deployed through Heroku.",
      imageSrc: "https://user-images.githubusercontent.com/50122955/163625314-68819691-9047-4dd3-a8de-e614afba247c.png",
      url: "https://github.com/bradleyhrc/glucose-dashboard",
    },
    {
      title: "Portfolio Website", 
      techs: "JAVASCRIPT, REACT, GATSBY",
      para:
        "Redesigned my personal website using React JS & Gatsby to deploy a simple, beautiful, & fast website.",
      imageSrc: portfolio,
      url: "https://www.bradleyhc.com",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutImage: profile,
  
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
