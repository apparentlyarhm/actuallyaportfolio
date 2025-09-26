export interface educationItem {
    graduatedIn: String;
    title: String;
    body: String;
    school: String;
    location: String;
}

export interface careerItem {
    startTime: String;
    endTime?: String;
    orgName: String
    href: String
    title: String;
    body: String;
}

export const education: educationItem[] = [
    {
        graduatedIn: "Batch of 2018",
        school: "Delhi Public School",
        title: "Secondary School, DPS (10th Grade)",
        body: "Aggregate of 94% in AISSE 2018",
        location: "Vidyut Nagar, Dadri"
    },
    {
        graduatedIn: "Batch of 2020",
        school: "Delhi Public School, Vidyut Nagar, Dadri",
        title: "Senior Secondary School, DPS (12th Grade)",
        body: "Aggregate of 91% in AISSCE 2020",
        location: "Vidyut Nagar, Dadri"

    },
    {
        graduatedIn: "Batch of 2024",
        school: "S.R.M Institute of Science and Technology",
        title: "Bachelor's of Technology, SRMIST",
        body: "Computer Science and Engineering; 8.46 CGPA",
        location: ", kattankulathur, Chennai Tamil Nadu"

    },
]

export const career: careerItem[] = [
    {
        startTime: "April 2024",
        endTime: "June 2024",
        orgName: "Random Walk AI",
        href: "https://randomwalk.ai",
        title: "Software Engineering Intern",
        body: "Worked on technologies like Flutter, Python, GCP, Java, and Spring Boot.",
    },
    {
        startTime: "July 2024",
        endTime: "June 2025",
        orgName: "Random Walk AI",
        href: "https://randomwalk.ai",
        title: "Junior Software Engineer",
        body: "Mostly involved in backend development, working with AWS, Spring Boot, Spring Batch, Terraform, and database management stuff. Also have experience working with LLMs and LangGraph.",
    },
];
