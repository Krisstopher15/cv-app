import { useState } from "react";
import { CVPreview } from "./components/CVPreview";
import { GeneralInfo } from "./components/GeneralInfo";
import { Educational } from "./components/Educational";
import { PracticalExp } from "./components/PracticalExp";
import "./styles/app.css";

function App() {
  const [general, setGeneral] = useState({
    name: "Chris P",
    email: "default@email.com",
    phone: "1-234-567-890",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porttitor lobortis nunc, eu porta mi scelerisque vel. Nam sapien lacus, fringilla in faucibus in, faucibus quis tortor. Praesent vulputate auctor ligula ac consequat. Etiam non lacus purus. Aliquam id auctor tortor. Quisque nec pellentesque est, tempor cursus arcu.",
  });

  const [educational, setEducational] = useState({
    school: "Hardvard",
    titleStudy: "Software Engineer",
    dateStudy: "04-23-2014",
  });

  const [practical, setPractical] = useState({
    companyName: "Facebook",
    positionTitle: "Junior Front End",
    mainTasks: "Building and maintaining web applications",
    startDate: "03-11-2015",
    endDate: "05-10-2022",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setGeneral((prevState) => ({ ...prevState, [name]: value }));
    setEducational((prevState) => ({ ...prevState, [name]: value }));
    setPractical((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="App">
      <section className="forms-container">
        <GeneralInfo generalInfo={general} handleNameChange={handleChanges} />
        <Educational
          educationalInfo={educational}
          handleEducationalChange={handleChanges}
        />
        <PracticalExp
          practicalExpInfo={practical}
          handlePracticaChange={handleChanges}
        />
      </section>
      <section className="cvpreview-container">
        <CVPreview
          general={general}
          educational={educational}
          practical={practical}
        />
      </section>
    </div>
  );
}

export default App;
