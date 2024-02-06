import cl from "./about.module.scss";

const About = () => {
  return (
    <div className={cl.about}>
      <div className={cl.bio}>
        <div className={cl.imageContainer}></div>
        <div className={cl.description}></div>
      </div>
    </div>
  );
};

export default About;
