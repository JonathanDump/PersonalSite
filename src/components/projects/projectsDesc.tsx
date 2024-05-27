import Link from "next/link";

export interface IProject {
  name: string;
  image?: string;
  type: "Commercial" | "Pet";
  techStack: string[];
  description: string | React.ReactNode;
  git?: string;
  demo?: string;
}

export const projects: IProject[] = [
  {
    name: "NDA(IGaming)",
    type: "Commercial",
    techStack: ["Nest.js", "Typescript", "SCSS", "RxJs"],
    description: (
      <>
        Currently working on this competitive video game platform with the
        following responsibilities: Developing a comprehensive UI kit for the
        platform. Designing and implementing screens based on Figma prototypes.
        Integrating frontend interfaces with backend services to ensure seamless
        functionality.
      </>
    ),
  },
  {
    name: "TanPoPo",
    image: "/projects/tanPoPo.png",
    type: "Commercial",
    techStack: [
      "Next.js",
      "Typescript",
      "SASS",
      "Redux Toolkit",
      "MongoDB",
      "Mongoose",
      "DigitalOcean",
      "Payload CMS",
    ],
    git: "https://github.com/Tan-Po-Po/TanPoPo",
    demo: "https://tanpopo.com.ua/",
    description: (
      <>
        A commercial project for an online Japanese school, created in
        collaboration with{" "}
        <Link href="https://ptarho.github.io/homepage/">Paul Tarhonskyi</Link>.
        The site consists of 41 pages, including an online store and a library
        with dynamic content creation managed through Payload CMS. Additionally,
        there is an online test to determine language proficiency levels and a
        user-friendly process for prospective students, guiding them from course
        selection to scheduling preferences.
      </>
    ),
  },
  {
    name: "Cheer",
    image: "/projects/cheer.png",
    type: "Pet",
    techStack: [
      "React",
      "Typescript",
      "SASS",
      "React Hook Form",
      "React Query",
      "React Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Netlify",
      "Render",
    ],
    git: "https://github.com/JonathanDump/Cheer",
    demo: "https://main--stellular-youtiao-99653c.netlify.app/home",
    description: (
      <>
        This a la Twitter platform offers seamless user registration and
        authentication, including Google OAuth 2.0 sign-in and JWT token
        authentication, ensuring secure access. Users can enhance their profiles
        with customizations like profile pictures and bios. Share updates and
        thoughts in 300 characters or less with up to 3 images. Follow and
        unfollow users, view a timeline of tweets from followed users, and
        interact with tweets through likes and comments. Explore and discover
        new people to follow. Enjoy a responsive design that adapts flawlessly
        across desktop and mobile devices.
      </>
    ),
  },
  {
    name: "50gram",
    type: "Pet",
    image: "/projects/50gram.png",
    techStack: [
      "React",
      "Typescript",
      "SASS",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "Netlify",
      "Render",
    ],
    git: "https://github.com/JonathanDump/50gram",
    demo: "https://frabjous-cucurucho-ceeec1.netlify.app/",
    description: (
      <>
        This web messenger offers secure user registration and authentication,
        including Google OAuth 2.0 sign-in and two-factor authentication with
        OTP. Users can engage in real-time messaging with text and image support
        via WebSockets, with message history persisting across sessions.
        Profiles are customizable with profile pictures and usernames, and
        online status indicators show when contacts are available. Notifications
        ensure users stay updated, while emoji support adds expressive flair to
        conversations. Security measures include OTP and token validation, with
        the added convenience of Google account sign-in. The responsive design
        ensures seamless functionality across desktop and mobile devices.
      </>
    ),
  },

  {
    name: "ToDo",
    type: "Pet",
    image: "/projects/todo.png",
    techStack: ["Javascript", "HTML", "SASS"],
    git: "https://github.com/JonathanDump/Todo-list",
    demo: "https://jonathandump.github.io/Todo-list/",
    description: (
      <>
        Pure Javascript todo app, where you can manage projects and tasks.
        Create, edit, and delete projects and tasks. Customize tasks by setting
        priorities and date. Categorize them by &quot;Today,&quot; &quot;This
        Week,&quot; and &quot;All Tasks&quot;. With an adaptive interface, stay
        productive across devices.
      </>
    ),
  },

  {
    name: "The Office Memory Game",
    type: "Pet",
    image: "/projects/theOffice.png",
    techStack: ["React.js", "SASS"],
    git: "https://github.com/JonathanDump/Memory-card",
    demo: "https://jonathandump.github.io/Memory-card/",
    description: <>Simple and fun game to train memory.</>,
  },

  {
    name: "Battleships",
    type: "Pet",
    image: "/projects/battleship.png",
    techStack: ["Javascript", "HTML", "SASS"],
    git: "https://github.com/JonathanDump/Battleship",
    demo: "https://jonathandump.github.io/Battleship/",
    description: (
      <>Battleship game against bot. Place your ships manually or by random.</>
    ),
  },

  {
    name: "Weather App",
    type: "Pet",
    image: "/projects/wetherApp.png",
    techStack: ["Javascript", "SASS"],
    git: "https://github.com/JonathanDump/Weather-app",
    demo: "https://jonathandump.github.io/Weather-app/",
    description: (
      <>
        A weather app that displays current forecast data for a given location.
        Despite its user-friendly adaptive design, it also features a blob in
        the top left corner that changes color depending on the temperature: the
        warmer the temperature, the warmer the color; the colder the
        temperature, the cooler the color.
      </>
    ),
  },
];
