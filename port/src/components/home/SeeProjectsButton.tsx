import React from "react";
import {Link} from "react-router-dom"

type projectsButtonProps = {
  src: string;
  text: string;
};

export const SeeProjectsButton: React.FC<projectsButtonProps> = ({ src, text }) => {
  return (
      <>
      <Link to='/work'>
      <h2>{text}</h2><img src={src} alt="Logo" />
      </Link>
      </>
  );
}