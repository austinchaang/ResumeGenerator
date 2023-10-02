import InputGroup from "../InputGroup";
import Buttons from "../Buttons";

function EducationForm(props) {
    const { degree, fieldOfStudy, schoolName, location, startDate, endDate, id } = props.form;
    const { onChange, cancel, save, remove } = props;

    return (
        <form
            className="education-form section-form"
            id={id}
            data-array-name="educations"
            onSubmit={(e) => e.preventDefault()}
        >
            <InputGroup
                type="text"
                id="school-name"
                labelText="School"
                placeholder="Enter school / university"
                value={schoolName}
                onChange={onChange}
                data-key="schoolName"
            />
            <InputGroup
                type="text"
                id="degree"
                labelText="Degree"
                placeholder="Enter Degree / Field Of Study"
                value={degree}
                onChange={onChange}
                data-key="degree"
            />

            <InputGroup
                type="text"
                id="field-of-study"
                labelText="Field of Study"
                placeholder="Enter Field Of Study"
                value={fieldOfStudy}
                onChange={onChange}
                data-key="fieldOfStudy"
                optional
            />


            <div className="dates-group">
                <InputGroup
                    type="text"
                    id="education-start-date"
                    labelText="Start Date"
                    placeholder="Enter Start Date"
                    value={startDate}
                    onChange={onChange}
                    data-key="startDate"
                />
                <InputGroup
                    type="text"
                    id="education-end-date"
                    labelText="End Date"
                    placeholder="Enter End Date"
                    value={endDate}
                    onChange={onChange}
                    data-key="endDate"
                />
            </div>
            <InputGroup
                type="text"
                id="education-location"
                labelText="Location"
                placeholder="Enter Location"
                value={location}
                onChange={onChange}
                data-key="location"
                optional
            />

            <Buttons save={save} cancel={cancel} remove={remove} />
        </form>
    );
}

export default EducationForm;