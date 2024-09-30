interface IChildNav {
  title: string;
  href: string;
  isExternal: boolean;
}
interface INav {
  mainItem: string;
  mainHref: string;
  children: IChildNav[];
}
export const navData: INav[] = [
  {
    mainItem: "COMPANY",
    mainHref: "/company",
    children: [
      { title: "ABOUT SMILEGATE", href: "/about-smilegate", isExternal: false },
      { title: "ABOUT THE GROUP", href: "/about-the-group", isExternal: false },
      { title: "HISTORY", href: "/history", isExternal: false },
      { title: "ICON2020", href: "/icon2020", isExternal: false },
      {
        title: "DIVERSITY AND INCLUSION",
        href: "/diversity-and-inclusion",
        isExternal: false,
      },
    ],
  },
  {
    mainItem: "BUSINESS",
    mainHref: "/business",
    children: [
      {
        title: "GAME DEVELOPMENT <br/> /SERVICES",
        href: "/game-development-services",
        isExternal: false,
      },
      {
        title: "PUBLISH & TECH BUSINESS",
        href: "/publish-tech-business",
        isExternal: false,
      },
      { title: "INVESTMENT", href: "/investment", isExternal: false },
      { title: "PLATFORM", href: "/platform", isExternal: false },
    ],
  },
  {
    mainItem: "GAME",
    mainHref: "/game",
    children: [
      { title: "CROSSFIRE", href: "/crossfire", isExternal: false },
      { title: "EPIC SEVEN", href: "/epic-seven", isExternal: false },
      { title: "LOST ARK", href: "/lost-ark", isExternal: false },
    ],
  },
  {
    mainItem: "MEDIA",
    mainHref: "/media",
    children: [{ title: "NEWSROOM", href: "/newsroom", isExternal: true }],
  },
  {
    mainItem: "CAREER",
    mainHref: "/career",
    children: [
      { title: "KOREA", href: "/korea", isExternal: true },
      { title: "WEST", href: "/west", isExternal: false },
    ],
  },
  {
    mainItem: "CSR / CSV",
    mainHref: "/csr-csv",
    children: [
      {
        title: "FOR ENTREPRENEURSHIP",
        href: "/for-entrepreneurship",
        isExternal: false,
      },
      {
        title: "FOR FUTURE GENERATION",
        href: "/for-future-generation",
        isExternal: false,
      },
      {
        title: "FOR CREATIVITY & CREATION",
        href: "/for-creativity-creation",
        isExternal: false,
      },
    ],
  },
];
