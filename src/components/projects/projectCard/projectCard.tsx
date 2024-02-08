import Image from "next/image";
import { IProject } from "../projectsDesc";
import cl from "./projectCard.module.scss";
import Tech from "@/components/tech/tech";
import { getValidClassNames } from "@/helpers/getValidClassNames";
import Link from "next/link";

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div className={cl.projectCard}>
      <div className={cl.imageWrapper}>
        <Image
          alt=""
          src={project.image}
          className={cl.image}
          width={1920}
          height={1080}
        />
        <div className={cl.buttons}>
          <Link className="linkButton" href={project.git}>
            Code
          </Link>
          <Link className="linkButton" href={project.demo}>
            Demo
          </Link>
        </div>
      </div>

      <div className={cl.info}>
        <div className={cl.infoBlock}>
          <div className={cl.label}>Name:</div>
          <div className={cl.value}>{project.name}</div>
        </div>

        <div className={cl.infoBlock}>
          <div className={cl.label}>Type:</div>
          <div className={cl.value}>{project.type}</div>
        </div>

        <div className={cl.infoBlock}>
          <div className={cl.label}>Created with:</div>
          <div className={getValidClassNames(cl.value, cl.tech)}>
            {project.techStack.map((tech, i) => (
              <Tech key={i} tech={tech} />
            ))}
          </div>
        </div>

        <div className={cl.infoBlock}>
          <div className={cl.label}>Description:</div>
          <div className={cl.value}>{project.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
