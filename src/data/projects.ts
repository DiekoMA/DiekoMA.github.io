export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Third Party Osu! Launcher",
    techs: ["C#", "Dotnet", "WPF"],
    link: "https://github.com/DiekoMA/OsuLauncher",
  },
  {
    title: "Android Password Manager",
    techs: ["Dart", "Flutter"],
    link: "https://github.com/DiekoMA/PassVault",
  },
];

export default projects;
