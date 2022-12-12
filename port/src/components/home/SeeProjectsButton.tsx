type projectsButtonProps = {
  src: string;
  text: string;
};

export const SeeProjectsButton: React.FC<projectsButtonProps> = ({ src, text }) => {
  return (
      <><h2>{text}</h2><img src={src} alt="Logo" /></>
  );
}