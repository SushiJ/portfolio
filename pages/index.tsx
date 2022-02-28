import type { NextPage } from 'next';

import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
// import Projects from '@/components/Projects';
// import Social from '@/components/Socials';

const Home: NextPage = () => {
  return (
    <div className="bg-background text-accent-50 relative font-poppins">
      <Navbar />
      <Layout>
        <Hero />
      </Layout>
      {/* <Layout>
        <Projects />
      </Layout> */}
    </div>
  );
};

export default Home;
