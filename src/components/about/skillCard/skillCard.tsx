import Tech from "@/components/tech/tech";
import cl from "./skillCard.module.scss";

interface Props {
  title: string;
  skills: string[];
}

const SkillCard: React.FC<Props> = ({ title, skills }) => {
  return (
    <div className={cl.skillCard}>
      <div className={cl.title}>{title}</div>
      <div className={cl.skillsContainer}>
        {skills.map((skill, i) => (
          <Tech key={i} tech={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
