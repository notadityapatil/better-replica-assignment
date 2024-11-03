import React, { useState } from "react";
import Image from "next/image";

export default function Section2() {
  const [contentIndex, setContentIndex] = useState(0);

  const Content = [
    {
      sectionTitle: "Our Products",
      sectionContent: [
        {
          title: "Buying your first home with Better",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
          p: " ",
        },

        {
          title: "One Day Mortgage",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
          p: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks",
        },
        {
          title: "Better HELOC",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
          p: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
        },

        {
          title: "Insurance",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
          p: "",
        },
      ],
    },

    {
      sectionTitle: "Calculators",
      sectionContent: [
        {
          title: "Mortgage Calculator",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
          p: " ",
        },
        {
          title: "Affordibility Calculator",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
          p: "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
        },
        {
          title: "HELOC calculator",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
          p: "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
        },
        {
          title: "Fixed-rate loan comparison calculator",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
          p: "",
        },
      ],
    },

    {
      sectionTitle: "Guides & FAQs",
      sectionContent: [
        {
          title: "What is a good debt-to-income ratio for a home loan?",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
          p: " ",
        },
        {
          title: "Buying a house without realtor",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
          p: "Thinking about buying a house without a real estate agent? Read this first.",
        },
        {
          title: "Timeline for homebuying process",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
          p: "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
        },
        {
          title: "Conventional loan requirements",
          imageUrl:
            "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
          p: " ",
        },
      ],
    },
  ];

  const currentContent = Content[contentIndex].sectionContent;

  return (
    <div>
      <section className="section w-screen pb-base lg:pb-12">
        <div className="m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]">
          <div className="justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between">
            <h2 className="font-bold text-textPrimary leading-heading m-0 p-0  md:text-2xl md:tracking-tight w-full max-w-lg !text-3xl tracking-tight">
              Got questions?
              <br />
              We&apos;ve got answers

            </h2>
            <div className="flex gap-3  lg:gap-6  ">
              {Content.map((section, index) => (
                <div key={index} onClick={() => setContentIndex(index)}>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border border-strokeDivider text-interactiveForegroundInversePrimary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary hover:shadow-[0_0_0_4px_inset] hover:text-interactivePrimary h-12 px-6 py-3 w-auto">
                    {section.sectionTitle}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full gap-3 justify-center items-stretch">

            {/* card 1 and 2 */}
            <div className="flex md:flex-row  flex-col gap-3 w-full justify-center items-stretch">

                {/* card 1 */}
              <div className="flex md:flex-col flex-row justify-between md:w-1/4 w-full bg-successBackground rounded-lg gap-3 p-3">

              <div className="flex flex-col gap-3">
                <div className="font-bold">{currentContent[0].title}</div>

                <div className=" py-1">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] hover:stroke-white [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
                </div>
                <div className="flex items-center justify-center ">
                  <Image
                    src={currentContent[0].imageUrl}
                    alt="image"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
{/* card 2 */}
              <div className="flex flex-col md:w-3/4 bg-successBackground w-full rounded-lg">
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col w-1/2 p-3 gap-3">
                    <div className="text-md font-bold">
                      {currentContent[1].title}
                    </div>

                    <div className="text-sm">{currentContent[1].p}</div>

                    <div>
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 48 49"
                        fill="none"
                        className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] hover:stroke-white [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.843384"
                          width="47"
                          height="47"
                          rx="23.5"
                          stroke="#A4A8A4"
                        ></rect>
                        <path
                          d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                          fill="#004733"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-1/2 p-3">
                    <Image
                      src={currentContent[1].imageUrl}
                      alt="image"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
{/* card 3 and 4 */}

            <div className="flex md:flex-row  flex-col gap-3 w-full justify-center items-stretch">
{/* card 3 */}
              <div className="flex flex-col md:w-3/4 bg-successBackground w-full rounded-lg">
                <div className="flex flex-row gap-8">
                  <div className="flex flex-col w-1/2 p-3 gap-3">
                    <div className="text-md font-bold">
                      {currentContent[2].title}
                    </div>

                    <div className="text-sm">{currentContent[2].p}</div>

                    <div>
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 48 49"
                        fill="none"
                        className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] hover:stroke-white [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.843384"
                          width="47"
                          height="47"
                          rx="23.5"
                          stroke="#A4A8A4"
                        ></rect>
                        <path
                          d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                          fill="#004733"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-1/2 p-3">
                    <Image
                      src={currentContent[2].imageUrl}
                      alt="image"
                      width={200}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>

{/* card 4 */}

              <div className="flex md:flex-col flex-row justify-between md:w-1/4 w-full bg-successBackground rounded-lg gap-3 p-3">
              <div className="flex flex-col gap-3">
                <div className="font-bold">{currentContent[3].title}</div>

                <div className=" py-1">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48 49"
                    fill="none"
                    className="transition ease-universal duration-300 fill-transparent hover:fill-[#004733] hover:stroke-white [&amp;_path]:fill-[#004733] group-hover:[&amp;_path]:fill-white [&amp;_rect]:stroke-[#A4A8A4] group-hover:[&amp;_rect]:stroke-none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.843384"
                      width="47"
                      height="47"
                      rx="23.5"
                      stroke="#A4A8A4"
                    ></rect>
                    <path
                      d="M24 16.3434L22.59 17.7534L28.17 23.3434H16V25.3434H28.17L22.59 30.9334L24 32.3434L32 24.3434L24 16.3434Z"
                      fill="#004733"
                    ></path>
                  </svg>
                </div>
                </div>
                <div className="flex items-center justify-center ">
                  <Image
                    src={currentContent[3].imageUrl}
                    alt="image"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
