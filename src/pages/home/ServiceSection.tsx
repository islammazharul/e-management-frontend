import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import image1 from "../../assets/image/service-image/img-01.png"
import image2 from "../../assets/image/service-image/img-02.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ServiceSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Container>
      <div className="relative px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
      <div className="absolute w-[694px] h-[694px] rounded-full bg-[#01E5D7] z-1 top-[60%] -right-[30%] translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-20">
        </div> 
        <SectionTitle
          heading="Our Services"
          subHeading="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />
        <div className="mt-8 p-2 space-y-4 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
          <div data-aos="fade-right" data-aos-duration="3000" className="flex w-full bg-[#000000] bg-opacity-[5%] z-10">
            <div className="flex flex-col p-4 lg:p-6 space-y-3 lg:space-y-4 xl:space-y-6 w-full rounded shadow">
              <img
                src={image1}
                alt=""
                className="object-cover object-center w-full rounded-md"
              />

              <h3 className="mt-3 text-[24px] lg:text-[28px] xl:text-[32px] font-bold">Corporate event</h3>
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="flex w-full bg-[#000000] bg-opacity-[5%] z-10">
            <div className="flex flex-col w-full p-4 lg:p-6 space-y-3 lg:space-y-4 xl:space-y-6 rounded shadow sm:p-8">
              
                <img
                  src={image2}
                  alt=""
                  className="object-cover object-center w-full rounded-md"
                />
              
              <h3 className="mt-3 text-[24px] lg:text-[28px] xl:text-[32px] font-bold">Organization event</h3>
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="flex w-full bg-[#000000] bg-opacity-[5%] z-10">
            <div className="flex flex-col p-4 lg:p-6 space-y-3 lg:space-y-4 xl:space-y-6 w-full rounded shadow sm:p-8">
              <h3 className="mt-3 text-[24px] lg:text-[28px] xl:text-[32px] font-bold">Wedding event</h3>

              <p className="text-[16px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur consequuntur, officiis minus ratione in quia iure
                totam ullam, reiciendis numquam laboriosam ipsam iusto at facere
                magnam animi ea laborum cum?
              </p>

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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
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
                  <span className="text-[18px]">
                    One day pas access all lecture
                  </span>
                </li>
              </ul>
              <Button>Check it out</Button>
            </div>
          </div>
        </div>
        <div className="absolute w-[694px] h-[694px] rounded-full bg-[#D14CF2] z-1 top-[70%] left-[10%] translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-20">
        </div>
      </div>
    </Container>
  );
};

export default ServiceSection;
