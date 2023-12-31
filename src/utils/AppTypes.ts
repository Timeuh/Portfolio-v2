// theme for the app
export type theme = 'light' | 'dark';

// langage for the app
export type lang = 'fr' | 'en';

// work experience
export type experience = {
  company: string,
  logo: string,
  period: {
    fr: string,
    en: string
  },
  role: {
    fr: string,
    en: string
  }
}

// skill section icon
export type projectIcon = {
  dark: string,
  light: string,
  name: string
}

// project item
export type project = {
  name: string,
  gif: string,
  description: {
    fr: string,
    en: string
  },
  techs: Array<projectIcon>,
  views: Array<projectLinkIcon>
}

// project icon link
export type projectLinkIcon = {
  dark: string,
  light: string,
  name: string,
  link: string
}

// text for home section
export type homeText = {
  name: string,
  firstPart: string,
  firstSpan: string,
  secondPart: string,
  secondSpan: string
}

// different traductions for home section
export type homeTrad = {
  fr: homeText,
  en: homeText
}

// text for about section
export type aboutText = {
  title: string,
  firstPartOne: string,
  firstSpanOne: string,
  firstPartTwo: string,
  firstSpanTwo: string,
  secondPartOne: string,
  secondSpanOne: string,
  secondPartTwo: string,
  thirdPartOne: string,
  thirdSpanOne: string,
  thirdPartTwo: string,
  fourthPartOne: string,
  fourthSpanOne: string,
  fourthPartTwo: string,
  fourthSpanTwo: string,
  fourthPartThree: string,
  fourthSpanThree: string,
  fourthPartFour: string,
  fourthSpanFour: string
}

// different traductions for about section
export type aboutTrad = {
  fr: aboutText,
  en: aboutText
}

// text for experience section
export type experienceText = {
  title: string
}

// different traductions for experience section
export type experienceTrad = {
  fr: experienceText,
  en: experienceText
}

// text for skills section
export type skillsText = {
  title: string
}

// different traductions for skills section
export type skillsTrad = {
  fr: skillsText,
  en: skillsText
}

// text for projects section
export type projectsText = {
  title: string
}

// different traductions for projects section
export type projectsTrad = {
  fr: projectsText,
  en: projectsText
}

// text for contact section
export type contactText = {
  title: string
}

// different traductions for contact section
export type contactTrad = {
  fr: contactText,
  en: contactText
}

// text and name for a navbar link
export type navbarLink = {
  name: string,
  link: string
}

// text for navbar section
export type navbarText = {
  sections: Array<navbarLink>
}

// different traductions for navbar section
export type navbarTrad = {
  fr: navbarText,
  en: navbarText
}