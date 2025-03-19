import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import event1 from "../../assets/image/event-image/event-01.png";
import event2 from "../../assets/image/event-image/event-02.png";
import event3 from "../../assets/image/event-image/event-03.png";
import event4 from "../../assets/image/event-image/event-04.png";
import event5 from "../../assets/image/event-image/event-05.png";
import event6 from "../../assets/image/event-image/event-06.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const EventItemSection = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Container>
      <div className="px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <SectionTitle
          heading="Event Items"
          subHeading="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        />
        <div className="grid grid-cols-2 lg:grid-cols-6 items-center gap-3 mt-4 lg:mt-14">
          <div data-aos="fade-right" data-aos-duration="3000" className="col-span-2 p-4 bg-black bg-opacity-10 flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event1} alt="" />
            <h3>Event-1</h3>
          </div>
          <div data-aos="fade-down" data-aos-duration="3000" className="col-span-2 p-4 bg-black bg-opacity-10  flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event4} alt="" />
            <h3>Event-2</h3>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000" className="col-span-2 row-span-2 p-4 bg-black bg-opacity-10  flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event6} alt="" />
            <h3>Event-3</h3>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000" className="col-span-1 p-4 bg-black bg-opacity-10  flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event3} alt="" />
            <h3>Event-4</h3>
          </div>
          <div data-aos="fade-right" data-aos-duration="3000" className="col-span-1 p-4 bg-black bg-opacity-10 flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event2} alt="" />
            <h3>Event-5</h3>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="col-span-2 p-4 bg-black bg-opacity-10 flex flex-col justify-center rounded-md">
            <img className="object-cover object-center" src={event5} alt="" />
            <h3>Event-6</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventItemSection;
