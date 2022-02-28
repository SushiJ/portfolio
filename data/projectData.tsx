/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import shortUUID, { generate } from 'short-uuid';

export interface ProjectsData {
  id: shortUUID.SUUID;
  name: string;
  icons: Array<JSX.Element>;
  url?: string;
}

const Projects: Array<ProjectsData> = [
  {
    id: generate(),
    name: 'Url Shortener',
    icons: [<FaNodeJs />],
  },
  {
    id: generate(),
    name: 'Portfolio',
    icons: [<SiNextdotjs />, <SiTailwindcss />],
    url: '',
  },
  { id: generate(), name: 'Hulu Clone', icons: [<SiNextdotjs />, <SiTailwindcss />], url: '' },
  { id: generate(), name: 'AirBnB Clone', icons: [<SiNextdotjs />, <SiTailwindcss />], url: '' },
];

export default Projects;
// {
//   id: generate(),
//   name: 'Github',
//   icon: <BsGithub />,
//   href: 'https://www.github.com/sushij',
// },
// {
//   id: generate(),
//   name: 'Twitter',
//   icon: <BsTwitter />,
//   href: 'https://www.twitter.com/su5hi',
// },
// {
//   id: generate(),
//   name: 'LinkedIn',
//   icon: <BsLinkedin />,
//   href: 'https://www.linkedIn.com/in/sushantsharma23',
// },
