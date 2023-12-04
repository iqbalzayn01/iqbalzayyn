export const Hero = () => {
  return (
    <section className="hero pt-24 mb-10 lg:mb-48">
      <div className="2xl:container mx-auto px-5 py-10 md:px-20">
        <hgroup className="mb-10 text-white">
          <h3 className="text-xl font-medium tracking-wider mb-5">
            Hello! I’m Iqbal.
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-widest">
            I’m a freelancer in Frontend Development and Web Design.
          </h1>
        </hgroup>
        <a href="#contacts" className="lg:mb-10">
          <button className="text-white hover:text-secondary font-semibold px-8 py-6 hover:bg-white border-2 border-white rounded-full tracking-wider">
            Let’s Connect!
          </button>
        </a>
      </div>
    </section>
  );
};