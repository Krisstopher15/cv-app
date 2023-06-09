import "../styles/practicalExp.css";

export function PracticalExp({ practicalExpInfo, handlePracticaChange }) {
  const { companyName, positionTitle, mainTasks, startDate, endDate } =
    practicalExpInfo;

  return (
    <form className="practicalExp-form">
      <label htmlFor="companyName">Company Name: </label>
      <input
        type="text"
        name="companyName"
        id="companyName"
        placeholder="Company Name"
        onChange={handlePracticaChange}
      />
      <label htmlFor="positionTitle">Position title: </label>
      <input
        type="text"
        name="positionTitle"
        id="positionTitle"
        onChange={handlePracticaChange}
      />
      <label htmlFor="mainTasks">Main tasks: </label>
      <input
        type="text"
        name="mainTasks"
        id="mainTasks"
        onChange={handlePracticaChange}
      />
      <label htmlFor="startDate">Start date: </label>
      <input
        type="date"
        name="startDate"
        id="startDate"
        onChange={handlePracticaChange}
      />
      <label htmlFor="endDate">End date</label>
      <input
        type="date"
        name="endDate"
        id="endDate"
        onChange={handlePracticaChange}
      />
    </form>
  );
}
