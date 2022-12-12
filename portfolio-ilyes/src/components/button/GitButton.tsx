type gitProps = {
  src: string;
};

export const GitButton: React.FC<gitProps> = ({ src }) => {
  console.log(src);
  

  return(
    <a href={src} target="_blank">
    <div className="githubButton">
      <img className="gitImg" src="/images/git.png" alt="github" />
    <h2>Open repository</h2>
  </div>
  </a>
  )
}