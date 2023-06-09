import "../styles/educationalInfo.css";

export function Educational({ educationalInfo, handleEducationalChange }) {
  const { school, titleStudy, dateStudy } = educationalInfo;
  return (
    <form className="educational-form">
      <label htmlFor="school">School: </label>
      <input
        type="text"
        name="school"
        id="school"
        value={school}
        onChange={handleEducationalChange}
      />
      <label htmlFor="titleStudy">Title of study: </label>
      <input
        type="text"
        name="titleStudy"
        id="titleStudy"
        value={titleStudy}
        onChange={handleEducationalChange}
      />
      <label htmlFor="dateStudy">Date of study: </label>
      <input
        type="text"
        name="dateStudy"
        id="dateStudy"
        value={dateStudy}
        onChange={handleEducationalChange}
      />
    </form>
  );
}
