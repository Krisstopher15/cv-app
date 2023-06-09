import "../styles/cvPreview.css";

export function CVPreview({ general, educational, practical }) {
  const { name, email, phone } = general;
  const { school, titleStudy, dateStudy } = educational;
  const { companyName, positionTitle, mainTasks, startDate, endDate } =
    practical;
  return (
    <div className="cvpreview">
      <header>
        <p className="person-name">Christopher Pimentel</p>
        <p className="title-of-study">Senior Web Developer</p>
      </header>
    </div>
  );
}
