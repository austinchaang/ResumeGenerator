import "../styles/InputGroup.css";

function InputGroup({
    id,
    placeholder,
    type,
    labelText,
    onChange,
    value,
    optional,
    recommended,
    "data-key": dataKey,
}) {
    return (
        <div className="input-group">
            <label htmlFor={id}>
                <span className="label-text">{labelText}</span>
                {optional && <span className="optional-text">Optional</span>}
                {recommended && <span className="recommended-text">Recommended</span>}
            </label>

            {type === "textarea" ? (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    data-key={dataKey}
                />
            )}
        </div>
    );
}

export default InputGroup;
