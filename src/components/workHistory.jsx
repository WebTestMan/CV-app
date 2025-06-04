import React from "react";

function ListItem(props) {
  return <li>{props.work}</li>;
}

function List(props) {
  return (
    <ul>
      {props.workHistoryArray.map((work) => {
        return <ListItem key={work} work={work} />;
      })}
    </ul>
  );
}

// take form input and add it to the workhistoryarray
// id: crypto.randomUUID()
// job title
// employer name
// date started
// date ended
// description


function AddWorkHistory() {
  return (
    <div>
      <form>
        <label>Job Title</label>
        <input />
      </form>
    </div>
  );
}

export default function WorkHistory() {
  const workHistoryIndexArray = ["a job"];

  return (
    <div>
      <h1>Work History: </h1>
      <List workHistoryArray={workHistoryIndexArray} />
      <AddWorkHistory />
    </div>
  );
}
