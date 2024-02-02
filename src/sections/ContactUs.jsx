//Importing aos library for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactUs = () => {

  //Getting the year dynaically for automatic change
  const d = new Date().getFullYear();

  return (
    <div className="padding mt-2 mb-0" id="contact-us">
      <div
        className="flex justify-center items-center gap-10"
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
        <div className=" w-[20px] h-1 bg-black rounded-xl"></div>
      </div>
      <div className="grid place-content-center mt-[150px] mb-6">
        <h2
          className=" text-center font-heading text-6xl font-bold mb-2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Contact Us
        </h2>
        <div
          className="w-[500px] h-[220px] flex flex-col justify-evenly pt-0"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <input
            type="text"
            placeholder="First Name"
            className="w-full h-10 rounded-xl pl-2 border-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full h-10 rounded-xl pl-2 border-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-10 rounded-xl pl-2 border-none"
          />
        </div>
        <div
          className="flex justify-center items-center mt-4"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <button
            type="submit"
            className="gradient-button flex justify-center items-center w-[120px] h-[40px] rounded-lg text-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Submit
          </button>
        </div>
      </div>
      <h3
        className="text-center font-heading text-6xl mt-2 mb-10"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        Our Team will contact you shortly...
      </h3>
      <br />
      <h2 className="text-center font-montserrat text-xl font-bold mt-10">
        © Copyright {d}. All Rights Reserved.
      </h2>
    </div>
  );
};

export default ContactUs;
