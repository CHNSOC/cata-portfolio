export enum SelectedPage { 
    Home = "home",
    Skills = "skills",
    AboutMe = "aboutme",
    Contact = "contact",
  }

  export interface BenefitType {
    icon:JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }