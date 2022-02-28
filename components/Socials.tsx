// import Link from 'next/link';

import { socials } from '@/data/socials';

const Social = () => {
  return (
    <span className="bottom-14 text-xl w-0 text-accent-100 hidden sm:inline-block sm:right-12 2xl:left-12 fixed z-10">
      {socials.map((s) => (
        <a key={s.id} href={s.href} target="_blank" rel="noreferrer">
          <div className="my-6 cursor-pointer right-12 2xl:left-6">
            <a target="_blank">{s.icon}</a>
          </div>
        </a>
      ))}
    </span>
  );
};

export default Social;
