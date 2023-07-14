/* eslint-disable import/no-anonymous-default-export */

import bubble3 from "./images/headshot.jpg";
import bubble2 from "./images/leaves.jpeg";
import bubble1 from "./images/cafe.jpeg";

import htn from "./images/htn.png";
import arcturus from "./images/arcturus.jpeg";
import techPlus from "./images/techplus.jpeg";
import dsc from "./images/dsc.jpeg";
import desjardins from "./images/desjardins.jpg";

export default {
  bubble1: {
    src: bubble1,
    alt: "img1",
  },
  bubble2: {
    src: bubble2,
    alt: "img2",
  },
  bubble3: {
    src: bubble3,
    alt: "img3",
  },
  exp: [
    {
      src: arcturus,
      pos: "Full Stack Developer",
      org: "Arcturus Networks",
      date: "Mar. 2023 - Present",
      descr: "&#128272; Building a machine vision security app",
    },
    {
      src: htn,
      pos: "Frontend Developer",
      org: "Hack the North",
      date: "Mar. 2023 - Present",
      descr: "&#9881; Creating beautiful platforms for hackers",
    },
    {
      src: techPlus,
      pos: "Tech Lead",
      org: "Tech+ UW",
      date: "Jan. 2023 - Present",
      descr: "&#127793; Leading dev to support an inclusive student environment",
    },
    {
      src: dsc,
      pos: "Lead Developer",
      org: "Data Science Club",
      date: "May 2022 - Jan. 2023",
      descr: "&#128218; Founded the Development team to create resources and boost engagement",
    },
    {
      src: desjardins,
      pos: "Performance Analyst",
      org: "Desjardins",
      date: "Jan. 2022 - Apr. 2022",
      descr: "&#128202; Exploratory data analysis on big data",
    },
  ],
  projects: [
    {
      img: htn,
      title: "Explore the STEM Gender Gap",
      descr: "A visual scroll article on the gender gap through research and data",
      skills: ["React", "TypeScript", "D3.js"],
      link: "https://www.bradleyhc.com/explore-the-stem-gender-gap/",
    },
    {
      img: htn,
      title: "Hack the North 2023",
      descr: "This year's website and hacker applications page serving 1,000+ hackers",
      skills: ["React", "TypeScript", "JavaScript", "GraphQL"],
      link: "https://hackthenorth.com/",
    },
    {
      img: htn,
      title: "Glucose Visualization Dashboard",
      descr: "Fully interactive dashboard for glucose analytics",
      skills: ["Python", "Pandas", "Jupyter", "Heroku"],
      link: "https://github.com/bradleyhrc/glucose-dashboard",
    },
    {
      img: htn,
      title: "Waterloo Data Science Club Website",
      descr: "Led a team of 5 to create our page and boost student engagement",
      skills: ["JavaScript", "React", "Next.js", "Material UI"],
      link: "https://github.com/uw-datasci/uwdsc-website",
    },
  ],
};
