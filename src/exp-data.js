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
};
