import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PricingSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div className="relative px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <div className="absolute xl:w-[749px] xl:h-[1070px] rounded-3xl bg-[#D45FA5] z-1 top-[20%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-20"></div>
        <SectionTitle
          heading="Explore our pricing plans"
          subHeading="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies."
        />

        <div className="mt-8 lg:p-4 space-y-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-full rounded-2xl bg-white border border-t-4 border-[#F249C8] border-x-0 border-b-0 lg:p-4 z-10 shadow-lg"
          >
            <div className="flex flex-col p-4 space-y-6 rounded-2xl ">
              <div className="flex justify-between items-center ">
                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-[#F249C8] bg-opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F249C8"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[#F249C8] text-[48px] font-bold">
                    $21
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Standard</h3>
                <p className="text-lg">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white"
                >
                  Get this package
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="primary"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
              <hr />
              <div>
                <ul className="flex-1 mb-6">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px]">User Dashboard</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px]">Post 3 Ads per week</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px]">
                      Multiple images & videos
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px] line-through">
                      Basic customer support
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px] line-through">
                      Featured ads
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px] line-through">
                      Special ads badge
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px] line-through">
                      Call to Action in Every Ads
                    </span>
                  </li>
                  <li className="flex mb-2 space-x-2 opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#FFFFFF"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#6FCF97"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-[18px] line-through">
                      Max 12 team members
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-full rounded-2xl bg-white border border-t-4 border-primary border-x-0 border-b-0 lg:p-4 z-10 shadow-lg"
          >
            <div className="flex flex-col p-6 space-y-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-[#0B63E5] bg-opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#0B63E5"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[#0B63E5] text-[48px] font-bold">
                    $49
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Premium</h3>
                <p className="text-lg">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white"
                >
                  Get this package
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="primary"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
              <hr />
              <ul className="flex-1 mb-6">
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">User Dashboard</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Post 3 Ads per week</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Multiple images & videos</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Basic customer support</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Featured ads</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Special ads badge</span>
                </li>
                <li className="flex mb-2 space-x-2 opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px] line-through">
                    Call to Action in Every Ads
                  </span>
                </li>
                <li className="flex mb-2 space-x-2 opacity-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px] line-through">
                    Max 12 team members
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="flex w-full rounded-2xl bg-white border border-t-4 border-[#E54545] border-x-0 border-b-0 lg:p-4 z-10 shadow-lg"
          >
            <div className="flex flex-col p-6 space-y-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-12 h-12 rounded-md bg-[#E54545] bg-opacity-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#E54545"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-[#E54545] text-[48px] font-bold">
                    $124
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">Business</h3>
                <p className="text-lg">
                  Upgrade your social portfolio with a stunning profile &
                  enhanced shots.
                </p>
                <Button
                  variant={"outline"}
                  className="flex items-center gap-2 text-primary border border-primary rounded-md hover:bg-primary hover:text-white"
                >
                  Get this package
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="primary"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
              <hr />
              <ul className="flex-1 mb-6">
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">User Dashboard</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Post 3 Ads per week</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Multiple images & videos</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Basic customer support</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Featured ads</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Special ads badge</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">
                    Call to Action in Every Ads
                  </span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#6FCF97"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[18px]">Max 12 team members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PricingSection;
