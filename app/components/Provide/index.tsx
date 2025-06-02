"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface datatype {
  imgSrc: string;
  country: string;
  paragraph: string;
  hasWorkflow?: boolean;
  hasTabs?: boolean;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/provide/uidesign.svg",
    country: "AI Voice Agent",
    paragraph: "Intelligent voice solutions for your business",
    hasTabs: true,
  },
];

const Provide = () => {
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        {/* Automation Workflow Link - Top Right */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                Transform Your Business with AI Voice Agents.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                Revolutionize your customer experience with intelligent AI voice
                agents for inbound and outbound calls, plus comprehensive
                automation solutions that streamline your operations, boost
                efficiency, and drive growth through cutting-edge artificial
                intelligence technology
              </h4>
              {/* <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more{" "}
                <Image
                  src={"/assets/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link> */}
            </div>
          </div>
          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 gap-y-10 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => (
                <div key={i}>
                  <div className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl">
                    <Image
                      src={item.imgSrc}
                      alt={item.imgSrc}
                      width={64}
                      height={64}
                      className="mb-5"
                    />
                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                    <h4 className="text-lg font-normal text-bluegray my-2">
                      {item.paragraph}
                    </h4>

                    {/* Workflow Automation Link */}
                    {item.hasWorkflow && (
                      <Link
                        href="/automation-workflow"
                        className="inline-flex items-center gap-2 mt-3 text-blue hover:text-blue-700 font-medium"
                      >
                        View Workflows
                        <Image
                          src={"/assets/provide/arrow.svg"}
                          alt={"arrow"}
                          width={16}
                          height={16}
                        />
                      </Link>
                    )}

                    {/* AI Voice Agent Tabs */}
                    {item.hasTabs && (
                      <div className="mt-4">
                        {/* Tab Navigation */}
                        <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-4">
                          <button
                            onClick={() => setActiveTab("inbound")}
                            className={`px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-t-lg font-medium transition-colors ${
                              activeTab === "inbound"
                                ? "bg-blue text-white border-b-2 border-blue"
                                : "text-gray-600 hover:text-blue hover:bg-gray-50"
                            }`}
                          >
                            Inbound Calls
                          </button>
                          <button
                            onClick={() => setActiveTab("outbound")}
                            className={`px-4 py-2 mb-2 sm:mb-0 rounded-t-lg font-medium transition-colors ${
                              activeTab === "outbound"
                                ? "bg-blue text-white border-b-2 border-blue"
                                : "text-gray-600 hover:text-blue hover:bg-gray-50"
                            }`}
                          >
                            Outbound Calls
                          </button>
                        </div>

                        {/* Tab Content */}
                        <div className="min-h-[80px]">
                          {activeTab === "inbound" && (
                            <>
                              <div className="text-sm text-gray-700">
                                <p className="font-medium mb-2">
                                  Inbound Call Features:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                  <li>24/7 customer support</li>
                                  <li>Smart call routing</li>
                                  <li>Natural conversation flow</li>
                                </ul>
                              </div>
                              <div className="mt-6 flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                  <h2 className="font-bold">
                                    Sakura Izakaya Resturant Reservation Demo
                                  </h2>

                                  <audio
                                    controls
                                    className="w-full max-w-md mt-2"
                                  >
                                    <source
                                      src="/assets/audio/res.mp3"
                                      type="audio/mpeg"
                                    />
                                    Your browser does not support the audio
                                    element.
                                  </audio>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <h2 className="font-bold">
                                    MedSpa Skin Clinic Demo
                                  </h2>

                                  <audio
                                    controls
                                    className="w-full max-w-md mt-2"
                                  >
                                    <source
                                      src="/assets/audio/med.mp3"
                                      type="audio/mpeg"
                                    />
                                    Your browser does not support the audio
                                    element.
                                  </audio>
                                </div>
                              </div>
                            </>
                          )}
                          {activeTab === "outbound" && (
                            <>
                              <div className="text-sm text-gray-700">
                                <p className="font-medium mb-2">
                                  Outbound Call Features:
                                </p>
                                <ul className="list-disc list-inside space-y-1">
                                  <li>Automated sales calls</li>
                                  <li>Follow-up campaigns</li>
                                  <li>Lead qualification</li>
                                </ul>
                              </div>

                              <p className="mt-6 w-full text-center bg-lightgrey p-2 shadow-lg p-2 rounded-lg">
                                Demos Cooming soon
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="flex justify-end mb-6">
          <Link
            href="/automation-workflow"
            className="bg-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            Check AI Automation Previews
            <Image
              src={"/assets/provide/arrow.svg"}
              alt={"arrow"}
              width={16}
              height={16}
              className="filter invert"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Provide;
