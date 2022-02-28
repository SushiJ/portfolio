import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { generate } from 'short-uuid';

export const socials = [
  {
    id: generate(),
    name: 'Github',
    icon: <BsGithub />,
    href: 'https://www.github.com/sushij',
  },
  {
    id: generate(),
    name: 'Twitter',
    icon: <BsTwitter />,
    href: 'https://www.twitter.com/su5hi',
  },
  {
    id: generate(),
    name: 'LinkedIn',
    icon: <BsLinkedin />,
    href: 'https://www.linkedIn.com/in/sushantsharma23',
  },
];
