import PropTypes from "prop-types";

export const Portfolio = ({ style }) => {
  const dataPortfolio = [
    {
      name: "GreatestBeam",
      imageName: "portfo4.png",
      type: "Design & Development",
      url: "https://www.figma.com/file/rTALiBTxsljPNJ0DZkhyYC/(Preview)Greatest-Beam-Fashion---Landing-Page?type=design&node-id=38%3A124&mode=design&t=zxJ7pyY1s374dCEq-1",
      year: 2023,
    },
    {
      name: "LuxRestaurant",
      imageName: "portfo1.png",
      type: "Design & Development",
      url: "https://luxrestaurant.vercel.app/",
      year: 2023,
    },
    {
      name: "NovaBakery",
      imageName: "portfo2.png",
      type: "Design & Development",
      url: "https://nova-bakery.vercel.app/",
      year: 2023,
    },
    {
      name: "Alena Web Portfolio",
      imageName: "portfo3.png",
      type: "Web Design",
      url: "https://www.figma.com/file/KDT7cuZ8uHW0vUIi99Ci2w/(Preview)Alena-Culhane---Website-Portfolio?type=design&node-id=13%3A2&mode=design&t=0fbYfmhWDtBVbujV-1",
      year: 2023,
    },
  ];

  return (
    <section
      id="portfolio"
      className="mx-auto px-5 py-24 md:px-32"
      style={style}
    >
      <div className="w-full flex flex-col text-white">
        <div className="border-white border-b-[0.4px] py-12">
          <h2 className="text-5xl font-extrabold mb-2">Portfolio</h2>
        </div>
        {dataPortfolio.map((portfo) => (
          <div
            key={portfo.name}
            className="flex items-start justify-between hover:bg-third border-white border-b-[0.4px] py-12"
          >
            <div className="flex flex-col gap-2">
              <p className="text-lg">{portfo.type}</p>
              <h2 className="text-4xl font-medium">{portfo.name}</h2>
              <p className="text-lg">{portfo.year}</p>
            </div>
            <div className="w-[30%] flex flex-wrap gap-5">
              <a
                href={portfo.url}
                target="_blank"
                className="card-item"
                rel="noreferrer"
              >
                <figure className="relative h-full overflow-hidden transition-all duration-500 ease-in-out rounded-lg">
                  <img
                    src={`./content/portfolio/${portfo.imageName}`}
                    alt={portfo.name}
                    className="object-cover w-full h-full transition-zoom"
                  />
                </figure>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  style: PropTypes.object.isRequired,
};
