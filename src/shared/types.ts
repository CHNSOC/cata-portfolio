export enum SelectedPage {
  Home = "home",
  Experiences = "experiences",
  Skills = "skills",
  AboutMe = "aboutme",
  Contact = "contact",
}

export interface SkillCardType {
  icon: JSX.Element;
  image?: JSX.Element;
  title: string;
  description: JSX.Element;
}

export enum Language {
  CHS = "chs",
  CHT = "cht",
  ENG = "eng",
}

export interface ArticleType {
  header: string;
  quote: string;
  content : JSX.Element
  image?: JSX.Element;
  date?: string;
}