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
  preview: string;

  links: {
    visit?: string;
    code: string;
    video?: string;
  };
};
type PROJECTGROUP = {
  category: string;
  projects: PROJECT[];
};

type experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  desc: string[];
};

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
