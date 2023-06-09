import { useState } from "react";
import { CVPreview } from "./components/CVPreview";
import { GeneralInfo } from "./components/GeneralInfo";
import { Educational } from "./components/Educational";
import { PracticalExp } from "./components/PracticalExp";
import "./styles/app.css";

function App() {
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educational, setEducational] = useState({
    school: "",
    titleStudy: "",
    dateStudy: "",
  });

  const [practical, setPractical] = useState({
    companyName: "",
    positionTitle: "",
    mainTasks: "",
    startDate: "",
    endDate: "",
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
