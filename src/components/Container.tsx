import { ReactNode } from "react";

const Container = ({children}: {children: ReactNode}) => {
    return (
        <div className='w-full h-full max-w-[1420px] xl:px-[20px] mx-auto mb-[5px]'>
           {children} 
        </div>
    );
};

export default Container;