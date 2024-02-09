import Image from "next/image";
import cl from "./about.module.scss";
import SkillCard from "./skillCard/skillCard";
import { skills } from "./skills";

const About = () => {
  return (
    <div className={cl.about}>
      <div className="header" id="about">
        About
      </div>
      <div className={cl.info}>
        <div className={cl.bio}>
          <div className={cl.description}>
            As a committed and driven full stack junior web developer, I thrive
            on bringing creative ideas to life through elegant and efficient
            code. With a solid foundation in both front-end and back-end
            technologies, I&apos;m eager to contribute my skills to innovative
            projects and collaborate with like-minded professionals to craft
            engaging digital experiences.
          </div>

          <Image
            className={cl.img}
            priority={true}
            alt=""
            src="/me.jpg"
            width={500}
            height={1000}
          />
        </div>

        <div className={cl.skills}>
          <div className="header">Skills</div>
          <div className={cl.skillCardsContainer}>
            <SkillCard title="Front End" skills={skills.frontEnd}></SkillCard>
            <SkillCard title="Back End" skills={skills.backEnd}></SkillCard>
            <SkillCard title="Other" skills={skills.other}></SkillCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
