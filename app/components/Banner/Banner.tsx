import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <main className="md:pt-28 pt-20">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              AI-Powered Communication
              <br /> for Businesses.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              From smart voice agents to automated workflows everything your
              business needs to scale.
            </p>
          </div>

          <div className="text-center mt-5">
            <button
              type="button"
              className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
            >
              <Link href={"#contact"}>Get Started</Link>
            </button>
            {/* <button
              type="button"
              className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
            >
              More info
            </button> */}
          </div>

          <img
            src={"/assets/banner/dashboard.png"}
            alt="banner-image"
            width={1100}
            height={598}
            className="mx-auto mt-14 border-[#acc8f7] border-[6px] rounded-lg shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </main>
  );
};

export default Banner;
