/* eslint-disable react/jsx-key */
import Projects from '@/data/projectData';

import { ProjectCard } from './ProjectCard';

const ProjectSection = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-start">
      {Projects.map((project) => (
        <div key={project.id} className="">
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
