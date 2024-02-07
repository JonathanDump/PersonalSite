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
          <Skill key={i} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skill = ({ skill }: { skill: string }) => {
  return <div className={cl.skill}>{skill}</div>;
};

export default SkillCard;
