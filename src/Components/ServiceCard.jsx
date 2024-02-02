//Importing aos library for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

//The Service Crad component takes title, Imgurl, Description, width and height as props
//The images have been selected at random and proper sizing can be done with proper images

const ServiceCard = ({ title, imgURL, Description, w, h }) => {
  return (
    <section className="flex flex-col gap-4" data-aos="zoom-in"data-aos-delay="500" data-aos-duration="1000">
      <div className="flex gradient-service w-[580px] h-[280px] rounded-xl z-10 shadow-xl">
        <div className="flex flex-col gap-4 w-[50%] justify-center items-center mt-1">
          <p className="text-black text-2xl">{title}</p>
          <p className="text-md text-justify px-4">{Description}</p>
        </div>
        <div className="flex justify-center items-center pl-6">
          <img
            src={imgURL}
            width={w}
            height={h}
            className="rounded-lg z-20 bg-contain"
          />
        </div>
      </div>
      <div className="flex w-[560px] h-[40px] justify-center items-center ">
        <button className="bg-[#fde74c] w-[100px] h-[40px] rounded-lg shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ServiceCard;
