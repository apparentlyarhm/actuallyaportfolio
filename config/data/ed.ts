export interface educationItem {
    graduatedIn: String;
    title: String;
    body: String;
    school: String;
    location: String;
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
        school: "Delhi Public School",
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
