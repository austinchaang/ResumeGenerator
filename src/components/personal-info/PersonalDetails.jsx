import InputGroup from "../InputGroup";
import "../../styles/PersonalDetails.css";

function PersonalDetails({ onChange, fullName, title, email, phoneNumber, address, url }) {
    return (
        <form className="personal-details">
            <h2>Personal Details</h2>
            <InputGroup
                type="text"
                id="full-name"
                labelText="Full name"
                placeholder="First and Last Name"
                value={fullName}
                onChange={onChange}
                data-key="fullName"
            />

            <InputGroup
                type="text"
                id="title"
                labelText="Title"
                placeholder="Enter Title"
                value={title}
                onChange={onChange}
                data-key="title"
                optional
            />

            <InputGroup
                type="email"
                id="email"
                labelText="Email"
                placeholder="Enter your email"
                value={email}
                onChange={onChange}
                data-key="email"
                recommended
            />

            <InputGroup
                type="tel"
                id="phone-number"
                labelText="Phone number"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={onChange}
                data-key="phoneNumber"
                recommended
            />

            <InputGroup
                type="text"
                id="address"
                labelText="Address"
                placeholder="City, Country"
                value={address}
                onChange={onChange}
                data-key="address"
                optional
            />

            <InputGroup
                type="text"
                id="url"
                labelText="URL"
                placeholder="Enter any URLs"
                value={url}
                onChange={onChange}
                data-key="url"
                optional
            />

        </form>
    );
}

export default PersonalDetails