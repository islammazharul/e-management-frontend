
const Blur = () => {
  return (
    <div className="relative w-[180px] h-[230px] sm:w-[200px] sm:h-[300px] md:w-[280px] md:h-[300px] lg:w-[400px] lg:h-[300px] 2xl:w-[500px] 2xl:h-[400px]  z-10">
      <div className="absolute top-0 left-0 w-full h-full before:content-[0] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 pointer-events-none bg-gradient-to-bl from-[#ffffff] via-[#f9af0b] to-[#ffffff] blur-[100px] sm:blur-[120px] lg:blur-[200px] opacity-20 xl:opacity-30 2xl:opacity-20"></div>
    </div>
  );
};

export default Blur;


/* 

    background-color: rgb(96, 165, 250);
    background-image: radial-gradient(at 100% 100%, rgb(191, 219, 254) 0, transparent 100%), radial-gradient(at 100% 0%, rgb(254, 240, 138) 0, transparent 100%), radial-gradient(at 0% 100%, rgb(233, 213, 255) 0, transparent 100%), radial-gradient(at 25% 36%, rgb(253, 186, 116) 0, transparent 100%);
  
*/