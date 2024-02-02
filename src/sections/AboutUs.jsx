//Importing aos library for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutUs = () => {
  return (
    <div className="padding flex flex-col gap-10 mt-[120px] mb-0" id="about-us">
      <h1
        className="font-heading text-6xl font-bold"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        Welcome to My Perro
      </h1>
      <p
        className="w-full h-[180px] text-2xl font-medium font-palanquin leading-relaxed text-justify"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="600"
      >
        Where passion meets pet care excellence. At My Perro, we understand the
        profound bond between humans and their furry companions, and we are
        dedicated to enhancing the well-being of your pets. As a leading name in
        the realm of pet care activities, we offer a comprehensive range of
        services tailored to cater to the unique needs of your beloved animals.
        From professional grooming and nutritious dietary plans to engaging
        activities and specialized healthcare, our team of experienced and
        compassionate experts is committed to ensuring that your pets lead
        happy, healthy lives.
      </p>
      <p
        className="w-full h-[180px] text-2xl font-medium font-palanquin mt-8 leading-relaxed text-justify"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        At My Perro, we don't just provide services; we create an environment of
        love and care for your pets, making us the trusted choice for pet
        enthusiasts seeking top-notch care for their four-legged family members.
      </p>
    </div>
  );
};

export default AboutUs;
