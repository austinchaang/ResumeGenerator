import Header from "./components/Header";
import { useState, useRef } from "react";
import "./styles/App.css";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import AddExperienceSection from "./components/experience/AddExperienceSection";
import AddEducationSection from "./components/education/AddEducationSection";
import uniqid from "uniqid";
import exampleData from "./example-data";
import Resume from "./components/Resume";
import TemplateLoader from "./components/TemplateLoader";
import Sidebar from "./components/Sidebar";
import Customize from "./components/Customize";
import { useReactToPrint } from 'react-to-print'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [resumeLayout, setResumeLayout] = useState("top");
  // Store prevState to revert changes when user clicks "cancel"
  const [prevState, setPrevState] = useState(null);
  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    // Clone array to not push object to original
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("educations", {
      degree: "",
      fieldOfStudy: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const createExperienceForm = () =>
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: uniqid(),
    });

  const setOpen = (sectionName) => setSectionOpen(sectionName);
  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }

  function cancelForm(e) {
    // if no prevState found remove form
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          // Revert back to previous state
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }

        return form;
      }),
    });
  }

  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e) => toggleValue(e, "isHidden");

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${PersonalDetails.fullName}'s Resume`
  })

  return (
    <>
      <Header />
      <div className="app">
        <div className="edit-side">
          <Sidebar onGoToPage={setCurrentPage} page={currentPage} />
          <div className="form-container">
            <TemplateLoader
              onTemplateLoad={() => {
                setPersonalInfo(exampleData.personalInfo);
                setSections(exampleData.sections);
              }}
              onClear={() => {
                setPersonalInfo({
                  fullName: "",
                  title: "",
                  email: "",
                  phoneNumber: "",
                  address: "",
                  url: ""
                });
                setSections({ educations: [], experiences: [] });
                setPrevState(null);
              }}
              onPrint={handlePrint}
            />

            {currentPage === "content" && (
              <>
                <PersonalDetails
                  onChange={handlePersonalInfoChange}
                  fullName={personalInfo.fullName}
                  title={personalInfo.title}
                  email={personalInfo.email}
                  url={personalInfo.url}
                  phoneNumber={personalInfo.phoneNumber}
                  address={personalInfo.address}
                />
                <AddExperienceSection
                  experiences={sections.experiences}
                  isOpen={sectionOpen === "Experience"}
                  onChange={handleSectionChange}
                  createForm={createExperienceForm}
                  setOpen={setOpen}
                  onCancel={cancelForm}
                  toggleCollapsed={toggleCollapsed}
                  onHide={toggleHidden}
                  onRemove={removeForm}
                />
                <AddEducationSection
                  educations={sections.educations}
                  isOpen={sectionOpen === "Education"}
                  onChange={handleSectionChange}
                  createForm={createEducationForm}
                  setOpen={setOpen}
                  onCancel={cancelForm}
                  toggleCollapsed={toggleCollapsed}
                  onHide={toggleHidden}
                  onRemove={removeForm}
                />
              </>
            )}

            <Customize
              isShown={currentPage === "customize"}
              onColChange={setResumeLayout}
            />
          </div>
        </div>
        <Resume
          personalInfo={personalInfo}
          sections={sections}
          layout={resumeLayout}
          reference={componentRef}
        />

      </div>
    </>

  );
}

export default App;