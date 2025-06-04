export default function CVapp() {
  return (
    <div>
      <div>
        <h3>Start you CV here...</h3>
        <AddWorkHistory />
      </div>
    </div>
  );
}

// take form input and add it to the workHistoryArray
// id: crypto.randomUUID()
// job title
// employer name
// date started
// date ended
// description

function AddWorkHistory() {
  return (
    <div className="work-history-form">
      <form>
        <WorkHistoryForm />
        {/* <label>Job Title</label>
        <input /> */}
      </form>
    </div>
  );
}

function WorkHistoryForm() {
  const WorkHistoryFormFields = [
    "Job Title",
    "Employer Name",
    "Date Started",
    "Date Ended",
    "Description",
  ];

  return (
    <>
      {WorkHistoryFormFields.map((work) => {
        return (
          <div>
            <label>{work}</label>
            <input />
          </div>

          //     <ListItem
          //     key={work.id}
          //     jobTitle={work.jobTitle}
          //     startDate={work.startDate}
          //     jobDesc={work.jobDesc}
          //   />
        );
      })}
    </>
  );
}
