import "../styles/cvPreview.css";
import avatar from "../assets/avatar-default.jpg";

export function CVPreview({ general, educational, practical }) {
  const { name, email, phone, description } = general;
  const { school, titleStudy, dateStudy } = educational;
  const { companyName, positionTitle, mainTasks, startDate, endDate } =
    practical;
  return (
    <div className="cvpreview">
      <header className="header">
        <p className="person-name">{name}</p>
        <p className="title-of-study">{titleStudy}</p>
      </header>
      <div className="educational-info">
        <p className="header-titles">Description</p>
        <div className="description-cont">
          <p>{description}</p>
        </div>
        <p className="header-titles">Education</p>
        <div className="experience-cont">
          <div>
            <p className="education">{school}</p>
            <p className="title-study">{titleStudy}</p>
          </div>
          <div>
            <span>{dateStudy}</span>
          </div>
        </div>
        <p className="header-titles">Practical Experience</p>
        <div className="practical-cont">
          <div>
            <p className="company-name">{companyName}</p>
            <p className="position-title">{positionTitle}</p>
            <p className="main-tasks">{mainTasks}</p>
          </div>
          <div>
            <p className="start-end-date">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
      </div>
      <div className="personal-info">
        <img src={avatar} alt="avatar profile" className="avatar-img" />
        <p className="header-titles">Personal Info</p>
        <div className="personal-info-b">
          <p className="personal-info-titles">Email</p>
          <p className="email">{email}</p>
          <p className="personal-info-titles">Phone Number</p>
          <p className="phone">{phone}</p>
        </div>
      </div>
    </div>
  );
}
