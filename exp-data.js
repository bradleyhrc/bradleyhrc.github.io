import dsc_logo from '/src/images/dsc.png';
import desjardins from '/src/images/desjardins.jpg';
import project1 from '/src/images/dsc_website.png';
import project2 from '/src/images/dashboard.png';
import project3 from '/src/images/personal.png';

export default {
    history: [
    {
        date: "May 2022 - Present",
        logo: dsc_logo,
        company: "Data Science Club",
        position: "Lead Developer",
        preview: "Founded the Development Team.",
        description: "I currently lead a team of 7 developers in the maintenance of our website, as well as building a Discord Bot for our community Discord server."
    },
    {
        date: "Jan. 2022 - Apr. 2022",
        logo: desjardins,
        company: "Desjardins",
        position: "Performance Analyst",
        preview: "Reporting intelligence from big data.",
        description: "I performed exploratory data analysis and got to play around with big company datasets to extract information using SQL and SAS. "
    },
    {
        date: "Aug. 2021 - Jan. 2022",
        logo: dsc_logo,
        company: "Data Science Club",
        position: "Vice President of Finance",
        preview: "Directed club finances.",
        description: "In this position, I ensured financial compliance with regulatory bodies and managed club spending for our events."
    },
    {
        date: "Jul. 2018 - Aug. 2021",
        logo: desjardins,
        company: "Desjardins",
        position: "Office Associate",
        preview: "Managed over $4,000 in revenue.",
        description: "I started as a high school co-op student, and built exception customer relationships and a deep understanding of the financial industry."
    },
    ],
    portfolio: [
        {
            title: "Data Science Club Website",
            skills: ["Next.js", "React", "Git", "JavaScript", "API"],
            description: "Built the official Data Science Club website at the University of Waterloo, leading a team of 5 developers.",
            link: "https://github.com/uw-datasci/uwdsc-website",
            screenshot: project1,
        },
        {
            title: "Glucose Visualization Dashboard",
            skills: ["Python", "Pandas", "Panel", "Jupyter"],
            description: "Created an interactive dashboard visualizing glucose health data. Automated data processing and built in a Jupyter notebook.",
            link: "https://github.com/bradleyhrc/glucose-dashboard",
            screenshot: project2,
        },
        {
            title: "Portfolio Website",
            skills: ["React", "Gatsby", "Material UI", "SASS"],
            description: "Updated website using Material UI and SASS. React application made static using Gatsby.",
            link: "https://github.com/bradleyhrc/bradleyhrc.github.io",
            screenshot: project3,
        },
    ]
}