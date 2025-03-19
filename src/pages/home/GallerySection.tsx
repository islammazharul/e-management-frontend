import Container from "@/components/Container";
import image1 from "../../assets/image/gallery-image/g-01.png";
import image2 from "../../assets/image/gallery-image/g-02.png";
import image3 from "../../assets/image/gallery-image/g-03.png";
import image4 from "../../assets/image/gallery-image/g-04.png";
import image5 from "../../assets/image/gallery-image/g-05.png";
import image6 from "../../assets/image/gallery-image/g-06.png";
import image7 from "../../assets/image/gallery-image/g-07.png";
import image8 from "../../assets/image/gallery-image/g-08.png";
import image9 from "../../assets/image/gallery-image/g-09.png";
import image10 from "../../assets/image/gallery-image/g-10.png";
import star from "../../assets/image/gallery-image/Star.png";

const GallerySection = () => {
  return (
    <Container>
      <section className="relative px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
      <div className="absolute xl:w-[749px] xl:h-[1070px] rotate-90 rounded-3xl bg-[#5FA3D4] z-1 top-[20%] left-[70%] translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-20">
        </div>
        <div className="md:flex lg:flex justify-between items-center mx-auto gap-6 md:gap-12 lg:gap-14">
          <div className="w-full md:w-[40%] lg:w-[40%]">
            <div className="flex flex-col space-y-6 w-full mb-5">
              <h1 className="text-[32px] lg:text-[48px] xl:text-[64px] font-bold">Gallery</h1>

              <p className="text-[18px] text-[#566B84]">
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
                  Lunch and Snack
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
                  Meet Event Speaker
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
                  Front Seat
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Decorative image grid */}
          <div className="relative w-full md:w-[60%] lg:w-[60%]">
          
            <div className="absolute w-[80px] lg:w-[120px] xl:w-[191px] -top-6 left-10 lg:-top-10 lg:left-10 xl:-top-16 xl:left-10 z-10">
              <img src={star} alt="" />
            </div>
            <div className="flex space-x-2 lg:space-x-4">
              <div className="flex flex-col justify-center items-end lg:gap-4 z-10">
                <div className="rounded-lg">
                  <img
                    src={image1}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image2}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center lg:gap-4 z-10">
                <div className="rounded-lg">
                  <img
                    src={image3}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image4}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image5}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center lg:gap-4 z-10">
                <div className="rounded-lg">
                  <img
                    src={image6}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image7}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image8}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-start lg:gap-4 z-10">
                <div className="rounded-lg">
                  <img
                    src={image9}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
                <div className="rounded-lg">
                  <img
                    src={image10}
                    alt=""
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default GallerySection;
