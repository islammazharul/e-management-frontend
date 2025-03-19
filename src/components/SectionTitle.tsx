import { ReactNode } from "react";

type TTitle = {
    heading: ReactNode
    subHeading?: ReactNode
}
const SectionTitle = ({heading, subHeading}: TTitle) => {
    return (
        <div className="text-center mx-auto space-y-4">
            <h1 className="text-[32px] lg:text-[48px] xl:text-[64px] font-bold">{heading}</h1>
            <p className="text-center lg:w-3/4 xl:w-1/2 mx-auto text-[18px] text-[#566B84]">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;