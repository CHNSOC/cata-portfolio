export enum SelectedPage {
  Home = "home",
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