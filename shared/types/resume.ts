export type ResumeLink = {
    icon: string;
    href?: string;
    text: string;
};

export type EducationItem = {
    institution: string;
    dates: string;
    degree: string;
    location: string;
    courses: string[];
    certificates: CertificateItem[];
};

export type CertificateItem = {
    name: string;
    link: string;
}

export type ExperienceItem = {
    company: string;
    title: string;
    dates: string;
    location: string;
    responsibilities: string[];
};

export type SkillSet = {
    programmingLanguages: string[];
    frameworks: string[];
    technologies: string[];
    languages: string[];
};

export type ProjectLink = {
    icon: string;
    href: string;
};

export type ProjectItem = {
    name: string;
    links?: ProjectLink[];
    technologies: string[];
    dates: string;
    responsibilities: string[];
};

export type CommunityItem = {
    title: string;
    dates: string;
    responsibilities: string[];
};

export type Resume = {
    date: Date;
    title: string;
    links: ResumeLink[];
    education: EducationItem[];
    missionStatement: string;
    experience: ExperienceItem[];
    skills: SkillSet;
    projects: ProjectItem[];
    community: CommunityItem[];
};