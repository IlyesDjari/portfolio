
type ProgramProps = {
  src: string;
  text: string;
};

export const ProgramSubtitle: React.FC<ProgramProps> = ({ src, text }) => {
  return (
    <div className="program">
      <img src={src} alt="Logo" />
      <h2 className="programText">{text}</h2>
    </div>
  );
}