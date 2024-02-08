import Link from "next/link";
import ProjectCard from "./projectCard/projectCard";
import cl from "./projects.module.scss";
import { projects } from "./projectsDesc";
import { getValidClassNames } from "@/helpers/getValidClassNames";

const Projects = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.projects} id="projects">
        <div className="header">Projects</div>
        <div className={cl.projectCardsContainer}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
      <Link
        href={"https://github.com/JonathanDump?tab=repositories"}
        target="_blank"
        className={getValidClassNames("linkButton", cl.allLink)}
      >
        See all 32 projects
      </Link>
    </div>
  );
};

export default Projects;
