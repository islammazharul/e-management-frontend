import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import companyLogo1 from "../../assets/image/company-logo/01.png";
import companyLogo2 from "../../assets/image/company-logo/02.png";
import companyLogo3 from "../../assets/image/company-logo/03.png";
import companyLogo4 from "../../assets/image/company-logo/04.png";
import companyLogo5 from "../../assets/image/company-logo/05.png";
import companyLogo6 from "../../assets/image/company-logo/06.png";
import companyLogo7 from "../../assets/image/company-logo/07.png";
import companyLogo8 from "../../assets/image/company-logo/08.png";
import companyLogo9 from "../../assets/image/company-logo/09.png";
import companyLogo10 from "../../assets/image/company-logo/10.png";

const SponsorSection = () => {
  return (
    <Container>
      <div className="relative bg-[#FAFAFA]">
      <div className="px-2 py-3 lg:px-10 lg:py-12 xl:px-16 xl:py-20">
        <SectionTitle heading="Our Valuable client"></SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-[50px] lg:gap-[80px] xl:gap-[130px] mt-10 lg:mt-16 xl:mt-20">
          <div>
            <img src={companyLogo1} alt="" />
          </div>
          <div>
            <img src={companyLogo2} alt="" />
          </div>
          <div>
            <img src={companyLogo3} alt="" />
          </div>
          <div>
            <img src={companyLogo4} alt="" />
          </div>
          <div>
            <img src={companyLogo5} alt="" />
          </div>
          <div>
            <img src={companyLogo6} alt="" />
          </div>
          <div>
            <img src={companyLogo7} alt="" />
          </div>
          <div>
            <img src={companyLogo8} alt="" />
          </div>
          <div>
            <img src={companyLogo9} alt="" />
          </div>
          <div>
            <img src={companyLogo10} alt="" />
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default SponsorSection;
