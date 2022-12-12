type circularProps = {
  src: string;
  text: string;
};

export const CircularElements: React.FC<circularProps> = ({ src, text }) => {

  return(
  <>
    <div className="circleDesign">
   <img src={src} alt="Logo" />  <h2>{text}</h2>
    </div>
  </>
  )
}