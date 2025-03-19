import AboutUsSection from "./AboutUsSection";
import ContactUsSection from "./ContactUsSection";
import EventItemSection from "./EventItemSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import RecentEventSection from "./RecentEventSection";
import ServiceSection from "./ServiceSection";
import SponsorSection from "./SponsorSection";

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <SponsorSection/>
            <ServiceSection/>
            <EventItemSection/>
            <PricingSection/>
            <GallerySection/>
            <AboutUsSection/>
            <RecentEventSection/>
            <FaqSection/>
            <ContactUsSection/>
        </div>
    );
};

export default Home;