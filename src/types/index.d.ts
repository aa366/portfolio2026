type SKILL = {
  name: string;
  image: string;
  tip: string;
};
type SKILLGROUP = {
  category: string;
  skills: SKILL[];
};

type PROJECT = {
  name: string;
  image: string;
  techstack: string;
  category: string;
  summary?: string;

  links: {
    visit?: string;
    code: string;
    video?: string;
  };
};
type PROJECTGROUP = {
  category: string;
  items: PROJECT[];
};

type experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

interface TIMELINEITEM {
  timelineType: "work" | "education";
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

type education = {
  institute: string;
  degree: string;
  startDate: string;
  endDate: string;
};

type main = {
  name: string;
  titles: string[];
  heroImage: string;
  shortDesc: string;
  techStackImages: string[];
};

type about = {
  aboutImage: string;
  aboutImageCaption: string;
  title: string;
  about: string;
  resumeUrl: string;
  callUrl: string;
};

type social = {
  name: string;
  icon: string;
  link: string;
};
