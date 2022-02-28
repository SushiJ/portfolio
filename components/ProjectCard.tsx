import React from 'react';

import { ProjectsData } from '@/data/projectData';

export const ProjectCard: React.FC<ProjectsData> = (props) => {
  return (
    <div className="">
      <h1>{props.name}</h1>
      <p className="flex">{props.icons}</p>
    </div>
  );
};
