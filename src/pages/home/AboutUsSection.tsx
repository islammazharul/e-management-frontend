import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AboutUsSection = () => {
  return (
    <Container>
      <div className="px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <SectionTitle heading="What Our Client Said about us" />
        <div className="flex justify-center mx-auto mt-4 lg:mt-6 xl:mt-10">
          <Carousel className="w-[60%] lg:w-3/4 2xl:w-3/4 mx-auto z-10">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-5 rounded-3xl shadow-md bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all">
                  <div className="space-y-4">
                    
                    <div className="flex gap-1">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                          alt="img"
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div>
                      <h5 className="font-bold">Michael james</h5>
                      <p className="text-sm">web developer</p>
                      </div>
                    </div>
                    <p className="text-[16px]">
                    My vision came alive effortlessly. Their blend of casual
                      and professional approach made the process a breeze.
                      Creativity flowed, and the results were beyond my
                      expectations.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-5 rounded-3xl shadow-md bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all">
                  <div className="space-y-4">
                    
                    <div className="flex gap-1">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                          alt="img"
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div>
                      <h5 className="font-bold">Amelia Joseph</h5>
                      <p className="text-sm">Chief Manager</p>
                      </div>
                    </div>
                    <p className="text-[16px]">
                    Embrace really nails it! Creative brilliance, approachable
                      style. They're the partners you want—artistry meets
                      strategy. Thrilled with what they achieved!"
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-5 rounded-3xl shadow-md bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all">
                  <div className="space-y-4">
                    
                    <div className="flex gap-1">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                          alt="img"
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div>
                      <h5 className="font-bold">Jacob Joshua</h5>
                      <p className="text-sm">web developer</p>
                      </div>
                    </div>
                    <p className="text-[16px]">
                    My vision came alive effortlessly. Their blend of casual
                      and professional approach made the process a breeze.
                      Creativity flowed, and the results were beyond my
                      expectations.
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-5 rounded-3xl shadow-md bg-[#F8F9FF] hover:bg-[#3461FF] hover:text-white transition-all">
                  <div className="space-y-4">
                    
                    <div className="flex gap-1">
                      <div className="w-12 h-12 overflow-hidden rounded-full">
                        <img
                          src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                          alt="img"
                          className="object-cover object-center w-full h-full"
                        />
                      </div>
                      <div>
                      <h5 className="font-bold">Michael james</h5>
                      <p className="text-sm">web developer</p>
                      </div>
                    </div>
                    <p className="text-[16px]">
                    Vivamus sit amet turpis leo. Praesent varius eleifend
                      elit, eu dictum lectus consequat vitae. Etiam ut dolor id
                      justo fringilla finibus.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="bg-purple-400 flex justify-end">
              <CarouselPrevious className="bg-[#F8F9FF] outline-0 hover:bg-[#3461FF] hover:text-white focus:bg-[#3461FF] focus:text-white" />
            </div>
            <CarouselNext className="bg-[#F8F9FF] outline-0 hover:bg-[#3461FF] hover:text-white focus:bg-[#3461FF] focus:text-white" />
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
