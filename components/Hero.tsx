const Hero = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-start md:pl-32 ">
      <p className="md:text-lg my-2 font-sans text-accent-400 md:mb-4">Welcome, I'm</p>
      <h1 className="text-accent-50 my-2 text-6xl md:my-2 md:text-8xl">Sushant Sharma</h1>
      <h2 className="md:text-7xl text-4xl text-accent-400 ">I build web apps.</h2>
      <p className="text-lg md:my-4 text- font-sans text-accent-100 md:w-2/3">
        I'm a software developer based in Bengaluru IN, specializing in building exceptional web
        applications, both at the front and back end.
      </p>

      <div className="space-x-2 my-12">
        <a
          className="rounded-md border-accent-400 border-2 p-2 my-2"
          target="_blank"
          href="/sushant_sharma.pdf">
          Resume
        </a>
        <a
          className="rounded-md border-accent-400 border-2 p-2 my-2"
          target="_blank"
          href="https://www.github.com/sushij"
          rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};

export default Hero;
