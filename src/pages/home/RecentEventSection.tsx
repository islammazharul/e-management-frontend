import { Button } from "@/components/ui/button";
import image1 from "../../assets/image/service-image/img-01.png";
import image2 from "../../assets/image/service-image/img-02.png";
import Container from "@/components/Container";

const RecentEventSection = () => {
  return (
    <Container>
      <div className="w-full mx-auto px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <div className="lg:flex justify-between items-center gap-10 mx-auto">
          <div className="relative w-full flex justify-center items-center xl:w-[50%]">
          <div className="absolute lg:w-[749px] lg:h-[1070px] rounded-3xl bg-[#D45FAC] z-1 top-[90%] left-[60%] rotate-45 translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-20">
        </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8 z-10">
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-md lg:rounded-lg xl:rounded-3xl">
              <img className="w-full h-full object-cover object-center rounded-md lg:rounded-lg xl:rounded-3xl" src={image1} alt="" />
            </div>
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-md lg:rounded-lg xl:rounded-3xl">
              <img className="w-full h-full object-cover object-center rounded-md lg:rounded-lg xl:rounded-3xl" src={image2} alt="" />
            </div>
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-full">
              <img className="w-full h-full object-cover object-center rounded-full" src={image1} alt="" />
            </div>
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-full">
              <img className="w-full h-full object-cover object-center rounded-full" src={image2} alt="" />
            </div>
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-md lg:rounded-lg xl:rounded-3xl">
              <img className="w-full h-full object-cover object-center rounded-md lg:rounded-lg xl:rounded-3xl" src={image1} alt="" />
            </div>
            <div className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px] xl:h-[190px] xl:w-[190px] rounded-md lg:rounded-lg xl:rounded-3xl">
              <img className="w-full h-full object-cover object-center rounded-md lg:rounded-lg xl:rounded-3xl" src={image2} alt="" />
            </div>
            
          </div>
          </div>
          <div className="p-8 space-y-4 w-full xl:w-[50%] z-10">
            <h1 className="text-[32px] lg:text-[48px] xl:text-[64px] font-bold z-10">Recent Events</h1>
            <p className="text-[16px]">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RecentEventSection;
