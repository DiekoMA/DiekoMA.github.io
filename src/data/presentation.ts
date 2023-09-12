type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "diekoakinseteuk@outlook.com",
  title: "Hey, I’m Dieko 👋",
  // profile: "/profile.webp",
  description:
    "I'm a software developer that has been creating windows apps, plugins and more using C# and am currently learning Dart and Swift for mobile development",
  socials: [
    // {
    //   label: "X",
    //   link: "https://twitter.com/itsstormzz_",
    // },
    {
      label: "Bento",
      link: "https://bento.me/diekoma",
    },
    {
      label: "Github",
      link: "https://github.com/DiekoMA`",
    },
  ],
};

export default presentation;
