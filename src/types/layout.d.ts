type data = {
  main: main;
  about: about;
  skills: skill[];
  projects: project[];
  experiences: experience[];
  educations: education[];
  socials: social[];
};

interface ColorConfig {
  primary: string;
  secondary: string;
  accent: string;
  destructive: string;
  [key: string]: string;
}

interface ColorPreset {
  name: string;
  colors: ColorConfig;
  backgroundLight: string;
  backgroundDark: string;
  cardLight: string;
  cardDark: string;
}
