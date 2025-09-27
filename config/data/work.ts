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
        body: "Worked on technologies like Flutter, Python, GCP, Java, and Spring Boot. First job, first time for everything",
    },
    {
        startTime: "July 2024",
        endTime: "June 2025",
        orgName: "Random Walk AI",
        href: "https://randomwalk.ai",
        title: "Junior Software Engineer",
        body: "Did backend stuff - AWS, Spring Boot, Spring Batch, Terraform, the whole alphabet soup. Kept the databases alive, wrangled some LLMs, even messed around with LangGraph; Python. I’m relatively new to this game, but I’m learning fast and breaking faster. That’s progress, people!",
    },
];
