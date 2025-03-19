import Container from "@/components/Container";
import faqImg from "../../assets/image/faq.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/SectionTitle";

const FaqSection = () => {
  return (
    <Container>
      <section className="bg-[#FAFAFA] px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <SectionTitle heading="Frequently ask your question"/>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-x-10 p-4 mt-8 lg:mt-12 xl:mt-16">
          <div className="">
            <img src={faqImg} alt="" />
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default FaqSection;
