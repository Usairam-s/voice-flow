import Image from "next/image";

interface cardDataType {
  imgSrc: string;
  heading: string;
  percent: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/assets/buyers/ourbuyers.svg",
    percent: "50+",
    heading: "AI Agents",
    subheading:
      "Voice agents deployed across industries handling thousands of calls daily.",
  },
  {
    imgSrc: "/assets/buyers/projectcompleted.svg",
    percent: "70+",
    heading: "Automations Built",
    subheading:
      "Custom AI systems developed for lead generation, order tracking and customer service.",
  },
  {
    imgSrc: "/assets/buyers/happybuyers.svg",
    percent: "100%",
    heading: "Client Satisfaction",
    subheading:
      "Every client reports increased efficiency and reduced operational costs.",
  },
  {
    imgSrc: "/assets/buyers/teammembers.svg",
    percent: "5+",
    heading: "AI Specialists",
    subheading:
      "Expert team dedicated to building cutting-edge voice agents and automation solutions.",
  },
];

const Buyers = () => {
  return (
    <div className="mx-auto max-w-7xl py-16 px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5">
        {cardData.map((items, i) => (
          <div className="flex flex-col justify-center items-center" key={i}>
            <div className="flex justify-center border border-border  p-2 w-10 rounded-lg">
              <Image
                src={items.imgSrc}
                alt={items.imgSrc}
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-4xl lg:text-6xl text-black font-semibold text-center mt-5">
              {items.percent}
            </h2>
            <h3 className="text-2xl text-black font-semibold text-center lg:mt-6">
              {items.heading}
            </h3>
            <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
              {items.subheading}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buyers;
