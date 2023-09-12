import "../styles/Resume.css";
import PersonalInfoSection from "./personal-info/PersonalInfoSection";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ExperienceInfoSection from "./experience/ExperienceInfoSection";
import EducationInfoSection from "./education/EducationInfoSection";

function Resume({ personalInfo, sections, layout }) {
    return (
        <div className="resume-container">
            <div className={`resume ${layout}`}>
                <PersonalInfoSection
                    fullName={personalInfo.fullName}
                    title={personalInfo.title}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    address={personalInfo.address}
                    url={personalInfo.url}
                />
                <div>
                    <ExperienceInfoSection experiences={sections.experiences} />
                    <EducationInfoSection educations={sections.educations} />
                </div>
            </div>
        </div>
    );
}

export default Resume;