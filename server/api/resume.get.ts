export default defineEventHandler(async (event) => {
    const resume: Resume = {
    "date": new Date(),
    "title": "Harry Hillsdownley",
    "links": [
        {
            "icon": "mdi:phone",
            "href": "tel:+19547701538",
            "text": "+1 (954)-770-1538"
        },
        {
            "icon": "mdi:envelope",
            "href": "mailto:hsh47@case.edu",
            "text": "hsh47@case.edu"
        },
        {
            "icon": "mdi:linkedin",
            "href": "https://www.linkedin.com/in/harry-hillsdownley/",
            "text": "linkedin.com/in/harry-hillsdownley"
        },
        {
            "icon": "mdi:github",
            "href": "https://github.com/HarryHills3588",
            "text": "github.com/HarryHills3588"
        },
        {
            "icon": "mdi:user",
            "text": "he/him/his"
        },
        {
            "icon": "mdi:map-marker",
            "text": "Cleveland, Quito"
        }
    ],
    "missionStatement": "",
    "education": [
        {
            "institution": "Case Western Reserve University (CWRU)",
            "dates": "Aug. 2022 — May 2026",
            "degree": "B.Sc./M.Sc. Computer Science (3.57 GPA); Minors: Mathematics",
            "location": "Cleveland, OH",
            "courses": [
                "Machine Learning",
                "Data Mining",
                "Databases",
                "Cloud Computing",
                "Algorithms",
                "Data Structures"
            ],
            "certificates": [
                {
                    "name": "LFD121: Developing Secure Software",
                    "link": "https://www.credly.com/badges/9cffea74-9dd9-4640-94e5-70aba8c26ef8/public_url"
                }
            ]
        },
        {
            "institution": "University College Dublin (UCD)",
            "dates": "Sept. 2024 — Dec. 2024",
            "degree": "Computer Science Study Abroad Program",
            "location": "Dublin, Ireland",
            "courses": [],
            "certificates": []
        }
    ],
    "experience": [
        {
            "company": "Union Home Mortgage Corp.",
            "title": "Artificial Intelligence Engineer Intern",
            "dates": "May 2025 — Aug. 2025",
            "location": "Cleveland, OH",
            "responsibilities": [
                "Designed tagging mechanisms based on vector embeddings and unsupervised learning to efficiently tag unstructured data",
                "Focused on containerization of services including creating APIs for interacting with ML and embedding models",
                "Collaborated on end-to-end system design for an automation project reducing 15hrs/week on human labor"
            ]
        },
        {
            "company": "ClearStaff Staffing Inc.",
            "title": "Data Entry Intern",
            "dates": "May 2023 — June 2023",
            "location": "Chicago, IL",
            "responsibilities": [
                "Remodeled the existing contracts database by implementing three front-end features to enhance data logging efficiency by 35% and streamline operations.",
                "Utilized staffing database software to validate entries for over 6,000 employees, ensuring accuracy based on their working status.",
                "Collaborated with data entry teams to integrate contracts into the database, improving data management."
            ]
        },
        {
            "company": "MC Interior Design",
            "title": "Project Manager",
            "dates": "Jan. 2023 — Mar. 2023",
            "location": "Quito, EC",
            "responsibilities": [
                "Performed data visualization on existing project data to forecast overhead expenses for future projects, enhancing budgeting efficiency.",
                "Analyzed sales data to identify key development areas within the business, driving decision-making processes.",
                "Developed a customized front-end website for the company, improving user experience."
            ]
        }
    ],
    "skills": {
        "programmingLanguages": [
            "Python (3.6+)",
            "SQL",
            "Java"
        ],
        "frameworks": [
            "Scikit-Learn",
            "TensorFlow",
            "Pandas",
            "Flask",
            "Scrapy"
        ],
        "technologies": [
            "SQL Workbench",
            "Supabase",
            "PostgreSQL",
            "Docker"
        ],
        "languages": [
            "English (Native)",
            "Spanish (Native)"
        ]
    },
    "projects": [
        {
            "name": "Volt Financial Newsletter",
            "links": [
                {
                    "icon": "mdi:globe",
                    "href": "https://voltvolatility.com"
                }
            ],
            "technologies": [
                "Python",
                "Flask",
                "PostgreSQL",
                "Supabase",
                "AWS EC2",
                "Pandas"
            ],
            "dates": "Sept. 2024 — Present",
            "responsibilities": [
                "Developed a web app using Flask for email collection and management, with PostgreSQL/Supabase for data storage.",
                "Automated Python scripts to scrape data, processed by AI models to generate content, with real-time data from market APIs.",
                "Deployed automation on AWS EC2 to run programmatically every Sunday, ensuring timely newsletter delivery."
            ]
        },
        {
            "name": "Algorithmic Trading Project",
            "links": [],
            "technologies": [
                "Python 3.10",
                "Pandas",
                "Scikit-Learn"
            ],
            "dates": "Dec. 2021 — Present",
            "responsibilities": [
                "Developed a stock trading algorithm using Python 3.10 and the Pandas library, incorporating statistical models to identify trading opportunities based on historical data.",
                "Currently implementing real-time market watching by integrating the algorithm with a WebSocket API.",
                "Conducted extensive backtesting to validate the algorithm’s performance across various market conditions."
            ]
        }
    ],
    "community": [
        {
            "title": "Data Society UCD",
            "dates": "",
            "responsibilities": [
                "Active member, participating in organization's workshops involving data mining, machine learning and data visualization."
            ]
        },
        {
            "title": "Investors & Entrepreneurship Society UCD",
            "dates": "",
            "responsibilities": [
                "Active member, attending networking events across financial services industries and workshops on financial technologies and startups"
            ]
        }
    ]
}

    return resume;
});