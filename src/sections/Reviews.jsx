//Importing Review Card component
import ReviewCard from "../Components/ReviewCard";

//Importing aos library for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Reviews = () => {
  return (
    <div className="padding my-[20px] flex flex-col" id="reviews">
      <h1
        className="font-heading text-6xl font-bold"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        Customer Testimonial's
      </h1>
      <div
        className="flex justify-between items-center gap-10"
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <ReviewCard
          imgURL="src/assets/Customer1.avif"
          Name="Khushi"
          Description="My Perro is an absolute gem in the pet care industry! The grooming services exceeded my expectations, leaving my furry friend looking and feeling fantastic. The staff's genuine love for animals and attention to detail truly sets them apart. My Perro is now our go-to for all things pet care"
        />
        <ReviewCard
          imgURL="src/assets/Customer2.avif"
          Name="Vaishnavi"
          Description="I can't thank My Perro enough for their outstanding care. The team went above and beyond to ensure my pet felt comfortable during grooming. The personalized approach and friendly atmosphere make them stand out. Five stars for their commitment to excellence. Definitely going here again."
        />
        <ReviewCard
          imgURL="src/assets/Customer3.avif"
          Name="Raizel"
          Description="Choosing My Perro was the best decision for my pet's well-being. The knowledgeable staff provided invaluable advice on nutrition and health. The genuine care they exhibit truly makes a difference. My pet and I are loyal customers, grateful for their exceptional service"
        />
        <ReviewCard
          imgURL="src/assets/Customer4.jpg"
          Name="Rahul"
          Description="My experience with My Perro has been nothing short of amazing. The team's professionalism and genuine love for animals are evident in every interaction. From grooming to healthcare advice, they've become my trusted partners in ensuring my pet's happiness and health. Highly recommended"
        />
      </div>
    </div>
  );
};

export default Reviews;
