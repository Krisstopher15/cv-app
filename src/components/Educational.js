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
        placeholder={school}
        onChange={handleEducationalChange}
      />
      <label htmlFor="titleStudy">Title of study: </label>
      <input
        type="text"
        name="titleStudy"
        id="titleStudy"
        placeholder={titleStudy}
        onChange={handleEducationalChange}
      />
      <label htmlFor="dateStudy">Date of study: </label>
      <input
        type="date"
        name="dateStudy"
        id="dateStudy"
        placeholder={dateStudy}
        onChange={handleEducationalChange}
      />
    </form>
  );
}
