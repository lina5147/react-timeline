import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  console.log(props)
  return (
    <div>
      {props.events.map((timelineEvent, i) => {
        return (
          <TimelineEvent 
            key={i} 
            person={timelineEvent.person} 
            status={timelineEvent.status}
            timeStamp={timelineEvent.timeStamp}
          />
        );
      })}
    </div>
  );
};

export default Timeline;