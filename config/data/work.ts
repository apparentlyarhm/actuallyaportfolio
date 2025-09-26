export interface careerItem {
    startTime: String;
    endTime?: String;
    orgName: String
    href: String
    title: String;
    body: String;
}

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
