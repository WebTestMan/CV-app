export default function AddWorkHistory() {
  return (
    <div className="work-history-form">
      <form className="form">
        <label id="JobTitle">Job Title</label>
        <input id="JobTitle"></input>

        <label id="EmployerName">Employer Name</label>
        <input id="EmployerName"></input>

        <label id="DateStarted">Date Started</label>
        <input id="Date Started" type="date"></input>

        <label id="DateEnded">Date Ended</label>
        <input id="DateEnded" type="date"></input>

        <label id="Description">Description</label>
        <textarea
          id="Description"
          defaultValue={"Please describe your duties in this role..."}
        ></textarea>

        <button>Submit</button>
      </form>
    </div>
  );
}
