import uniqid from "uniqid";

const exampleData = {
    personalInfo: {
        fullName: "Bill Campbell",
        title: "Software Engineer",
        email: "bill.campbell@gmail.com",
        phoneNumber: "+1 778 543 1234",
        address: "Burnaby, BC",
        url: "bcampbell.com"
    },
    sections: {
        experiences: [
            {
                companyName: "Top Hat Software Inc.",
                positionTitle: "Full-Stack Software Engineer",
                employmentType: "Full-Time",
                location: "Toronto, Canada",
                startDate: "05/22",
                endDate: "present",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                companyName: "Providence Healthcare",
                positionTitle: "Software Engineer",
                employmentType: "Co-op",
                location: "Vancouver, Canada",
                startDate: "09/19",
                endDate: "05/20",
                description: "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            }
        ],

        educations: [
            {
                degree: "Bachelor in Science",
                fieldOfStudy: "Computer Science",
                schoolName: "Simon Fraser University",
                location: "Vancouver, BC",
                startDate: "07/2016",
                endDate: "07/2022",
                isCollapsed: true,
                isHidden: false,
                id: uniqid(),
            },
            {
                degree: "Master's Degree",
                fieldOfStudy: "Computer Science",
                schoolName: "University of Toronto",
                location: "Toronto, Ontario",
                startDate: "07/2023",
                endDate: "present",
                isCollapsed: true,
                isHidden: true,
                id: uniqid(),
            },
        ],
    }
}

export default exampleData;