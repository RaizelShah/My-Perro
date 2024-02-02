
const NavBar = () => {
  return (
    <div className="flex w-full h-[6rem]">
      <div className="flex justify-center items-center mx-6">LOGO</div>
      <div className="flex gap-10 justify-center items-center w-full text-xl">
        <a
          className="font-montserrat font-medium cursor-pointer"
          href="#about-us"
        >
          About Us
        </a>
        <a
          className="font-montserrat font-medium cursor-pointer"
          href="#services"
        >
          Services
        </a>
        <a
          className="font-montserrat font-medium cursor-pointer"
          href="#reviews"
        >
          Reviews
        </a>
        <a
          className="font-montserrat font-medium cursor-pointer"
          href="#contact-us"
        >
          Contact Us
        </a>
      </div>
      <div className="flex justify-start items-center gap-2 mr-[20px]">
        <button className="gradient-button flex justify-center items-center w-[120px] h-[40px] rounded-lg text-white shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Login
        </button>
        <button className="flex justify-center items-center w-[120px] h-[40px] rounded-lg text-black border border-white hover:border-black shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
