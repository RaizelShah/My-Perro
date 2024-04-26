//Importing Service Card as a component
import ServiceCard from "../Components/ServiceCard";

//Importing aos library for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Services = () => {
  return (
    <section className="padding mt-[180px]" id="services">
      <h1
        className="font-heading text-6xl font-bold"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        What we offer?{" "}
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-[50px]">
        <ServiceCard
          title="Dog Walk"
          imgURL="src/assets/Dog-walk.webp"
          Description="Explore nature with your dog in our Paws and Paths Adventure. Tailored for all breeds, it's a joyful walk with play areas, fostering community, promoting exercise, and ensuring responsible pet ownership."
          w="200"
          h="200"
        />
        <ServiceCard
          title="Dog Bath"
          imgURL="src/assets/Dog-bath.jpg"
          Description="Dive into a refreshing experience at Suds and Scrubs Splash – a tailored dog bath event. Enjoy a hassle-free grooming session, fostering cleanliness, bonding, and canine well-being."
          w="200"
          h="400"
        />
        <ServiceCard
          title="Dog Check-up"
          imgURL="src/assets/Dog-Checkup.jpg"
          Description="Participate in our Canine Wellness Check, ensuring your pet's health and happiness. Expert veterinarians provide comprehensive check-ups, vaccinations, and advice, promoting a thriving and well-cared-for furry companion."
          w="200"
          h="400"
        />
        <ServiceCard
          title="Dog Grooming"
          imgURL="src/assets/Dog-grooming.webp"
          Description="Indulge your canine companion in the Paws and Pamper Spa, an exquisite grooming experience. Our skilled groomers offer personalized treatments, leaving your pet looking and feeling their best with care and style."
          w="200"
          h="600"
        />
      </div>
      <div className="mt-[50px] flex flex-col gap-2 justify-center items-center">
        <h2
          className="font-heading text-7xl font-medium my-5 py-2"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          Coming Soon...
        </h2>
        <ServiceCard
          title="Dog Training"
          imgURL="src/assets/Dog-training.avif"
          Description="Enroll your pup in TailWise Training Academy for a transformative learning experience. Our expert trainers use positive reinforcement techniques, fostering obedience, socialization, and a well-behaved, happy companion."
          w="220"
          h="600"
        />
      </div>
    </section>
  );
};

export default Services;
