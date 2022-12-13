import React from "react";

type gitProps = {
  src: string;
};

export const GitButton: React.FC<gitProps> = ({ src }) => {
  console.log(src);
  

  return(
    <a href={src} target="_blank" rel="noreferrer">
    <div className="githubButton">
      <img className="gitImg" src="/images/git.png" alt="github" />
  </div>
  </a>
  )
}