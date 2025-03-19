import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import bannerImg from "../../assets/image/banner-image.jpg";
import star1 from "../../assets/image/Soft Star.png";
import star2 from "../../assets/image/Star 6.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -350 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring" },
    },
  };
  const introChildren1 = {
    hidden: { opacity: 0, x: -350 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, type: "spring" },
    },
  };

  const bannerImage = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 10, type: "spring" },
    },
  };

  return (
    <Container>
      <section className="bg-banner-gradient px-2 py-3 lg:px-10 lg:py-14 xl:px-16 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center gap-8 mx-auto">
          <motion.div
            className="w-full"
            variants={intro}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={introChildren}
              className="uppercase text-[32px] lg:text-[48px] xl:text-[64px] font-bold"
            >
              <span>Brand New</span>
              <br />
              <span>event Packages</span>
              <br />
              <span className="text-[28px] lg:text-[40px] xl:text-[56px] bg-gradient-to-r from-[#FE8900] to-[#5E02D3] text-transparent bg-clip-text">
                {" "}
                For Winter
              </span>
            </motion.h1>
            <motion.p
              variants={introChildren}
              className="lg:text-[18px] xl:text-[20px] text-[#141414] mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel non.
            </motion.p>
            <motion.div variants={introChildren}>
              <Button>Explore</Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={bannerImage}
            initial="initial"
            animate="animate"
            className="relative w-full flex justify-center items-center mx-auto"
          >
            <img
              className="absolute w-[50px] lg:w-[80px] xl:w-[100px] xl:h-[100px] top-9 left-9 lg:top-3 lg:left-3 xl:top-7 xl:left-7"
              src={star2}
              alt=""
            />
            <div className="w-[320px] h-[380px] md:w-[350px] md:h-[390px] lg:w-[450px] lg:h-[550px] xl:w-[584px] xl:h-[754px] border border-black rounded-full flex justify-center items-center">
              <div className="w-[270px] h-[330px] md:w-[290px] md:h-[370px] lg:w-[360px] lg:h-[490px] xl:w-[490px] xl:h-[632px] rounded-full">
                <img
                  className="h-full w-full object-cover object-center rounded-full"
                  src={bannerImg}
                  alt=""
                />
              </div>
            </div>
            <img
              className="absolute w-[50px] lg:w-[80px] xl:w-[139px] xl:h-[150px] bottom-9 right-9 lg:bottom-3 lg:right-3 xl:bottom-3 xl:right-3"
              src={star1}
              alt=""
            />
          </motion.div>
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            className="flex justify-between items-center w-full gap-5 xl:-mt-20"
          >
            <motion.div
              variants={introChildren1}
              className="max-w-sm p-2 lg:p-3 xl:p-4 border-2 border-white drop-shadow-xl rounded-3xl"
            >
              <div className="flex justify-center items-center h-8 w-8 lg:w-10 lg:h-10 rounded-full bg-[#685FD4] bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#685FD4"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>

              <p className="text-[16px] text-xs text-[#333333] mt-4 xl:mt-8">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </motion.div>
            <motion.div
              variants={introChildren1}
              className="max-w-sm p-2 lg:px-3 lg:py-4 2xl:p-4 border-2 border-white drop-shadow-xl rounded-3xl"
            >
              <div className="flex justify-center items-center h-8 w-8 lg:w-10 lg:h-10 rounded-full bg-[#F2C94C] bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#F2C94C"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>

              <p className="text-[16px] text-xs text-[#333333] mt-4 xl:mt-8">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </motion.div>
            <motion.div variants={introChildren1} className=" p-2 lg:px-3 lg:py-4 xl:p-5 border-2 border-white drop-shadow-xl rounded-3xl">
              <div className="flex justify-center items-center h-8 w-8 lg:w-10 lg:h-10 rounded-full bg-[#8AB2DC] bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#8AB2DC"
                  viewBox="0 0 24 24"
                  strokeWidth={0}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>

              <p className="text-[16px] text-xs text-[#333333] mt-4 xl:mt-8">
                Lorem ipsum dolor sit amet, consectetu adipiscing elit. Cursus
                imperdiet sed id.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
