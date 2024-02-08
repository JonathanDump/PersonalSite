import cl from "./tech.module.scss";

const Tech = ({ tech }: { tech: string }) => {
  return <div className={cl.tech}>{tech}</div>;
};

export default Tech;
