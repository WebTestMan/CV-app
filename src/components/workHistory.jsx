import React from "react";
import { format } from "date-fns";
import "../styles/workHistory.css";

function ListItem(props) {
  const id = props.id;
  const jobTitle = props.jobTitle;
  const jobDesc = props.jobDesc;
  const startDate = props.startDate;

  return (
    <li key={id} className="work-history-list">
      <div>
        <h3>{jobTitle}</h3>
        <p>{startDate}</p>
        <p>{jobDesc}</p>
      </div>
      <br></br>
    </li>
  );
}

function List(props) {
  return (
    <ul>
      {props.workHistoryArray.map((work) => {
        return (
          <ListItem
            key={work.id}
            jobTitle={work.jobTitle}
            startDate={work.startDate}
            jobDesc={work.jobDesc}
          />
        );
      })}
    </ul>
  );
}

export default function WorkHistory() {
  const workHistoryIndexArray = [
    {
      id: crypto.randomUUID(),
      jobTitle: "More recent Job Title",
      jobDesc: "This was a job I did once, a long time ago.",
      startDate: format(new Date("2024", "10", "2"), "dd/MM/yyyy"),
      endDate: format(new Date("2025", "21", "09"), "dd/MM/yyyy"),
    },
    {
      id: crypto.randomUUID(),
      jobTitle: "Sample Job Title",
      jobDesc: "This was a job I did once, a long time ago.",
      startDate: format(new Date("2012", "0", "2"), "dd/MM/yyyy"),
      endDate: format(new Date("2024", "21", "09"), "dd/MM/yyyy"),
    },
  ];

  return (
    <div className=".work-history-form">
      <h2>Work History: </h2>
      <List workHistoryArray={workHistoryIndexArray} />
    </div>
  );
}
