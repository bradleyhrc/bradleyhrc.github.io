import React from "react"
import Fade from "react-reveal/Fade"
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Experience = () => {
  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="experience-container">
          <div className="content">
            <Fade bottom cascade>
              <h1>Experience</h1>
            </Fade>
            <Timeline lineColor={'#ccc'} id="tl">
              <TimelineItem
                key="1"
                dateText="Jan. 2022 - Apr. 2022"
                style={{ color: '#00609C' }}
                dateInnerStyle={{ background: '#00609C' }}
              >
                <h3>Performance Analyst</h3>
                <h4> <span role="img" aria-label="Emoji">👨‍💻</span> Desjardins |<i> Remote</i></h4>
                <p>
                As a Performance Analyst, I had the opportunity to perform some really interesting exploratory data analysis, manipulate large datasets, write automated programs in SQL and SAS, & communicate quantifiable insights to directors directly aiding business decision-making. 
                </p>
              </TimelineItem>
              <TimelineItem
                key="2"
                dateText="Aug. 2021 - Jan. 2022"
                dateInnerStyle={{ background: '#006DB2' }}
              >
                <h3>Vice President of Finance</h3>
                <h4><span role="img" aria-label="Emoji">📊</span> UWaterloo Data Science Club | <i>Waterloo, ON</i></h4>
                <p>
                I'm passionate about data science and was really excited to contribute back to my community as part of this club! In this role, I strategically reallocated over $2,500 in budgeting while ensuring that club finances were organized & transparent.
                </p>
              </TimelineItem>
              <TimelineItem
                key="3"
                dateText="May 2021 - Aug. 2021"
                dateInnerStyle={{ background: '#4E97D1' }}
              >
                <h3>Office Associate</h3>
                <h4><span role="img" aria-label="Emoji">📌</span> Desjardins Insurance | <i>Kitchener, ON</i></h4>
                <p>
                Human connection is invaluable to me. In this role, I acquired & personally managed over $40,000 in revenue among new business relationships. I took care of client needs & contributed long-term profitability. I also began working here part-time as a high school student in 2018.
                </p>
              </TimelineItem>
              <TimelineItem
                key="4"
                dateText="Sep. 2021 - Apr. 2021"
                dateInnerStyle={{ background: '#7BB4E3' }}
              >
                <h3>Corporate Executive</h3>
                <h4><span role="img" aria-label="Emoji">🧑‍💼</span> Laurier Insurance & Risk Association | <i>Waterloo, ON</i></h4>
                <p>
                Throughout my first year of university, I managed all contact with the Insurance Institute, a key sponsor for our student association, and secured over $1,000 in sponsorship revenue.
                </p>
              </TimelineItem>
              <TimelineItem
                key="5"
                dateText="May 2018 - Aug. 2019"
                dateInnerStyle={{ background: '#A3CEEF' }}
              >
                <h3>Soccer Referee & Head Coach</h3>
                <h4><span role="img" aria-label="Emoji">⚽️</span> Kitchener Soccer Club | <i>Kitchener, ON</i></h4>
                <p>
                I'm proud to have lead my own soccer team of U4 boys. During this time, I also worked as a soccer referee to positively direct soccer games with all parties.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
