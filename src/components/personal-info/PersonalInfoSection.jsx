import "../../styles/PersonalInfoSection.css";

export default function PersonalInfoSection({ fullName, title, email, phoneNumber, address, url }) {
    return (
        <div className="personal-info">
            <h1 className="resume-name">{fullName}</h1>
            <div className="contact-info">
                {title && (
                    <div>
                        <i className="fa-solid fa-user" />
                        <span>{title}</span>
                    </div>
                )}

                {email && (
                    <div>
                        <i className="fa fa-solid fa-envelope" />
                        <span>{email}</span>
                    </div>
                )}

                {phoneNumber && (
                    <div>
                        <i className="fa-solid fa-phone" />
                        <span>{phoneNumber}</span>
                    </div>
                )}

                {address && (
                    <div>
                        <i className="fa-solid fa-location-dot" />
                        <span>{address}</span>
                    </div>
                )}

                {url && (
                    <div>
                        <i className="fa fa-solid fa-window-maximize" />
                        <span>{url}</span>
                    </div>
                )}


            </div>
        </div>

    );
}