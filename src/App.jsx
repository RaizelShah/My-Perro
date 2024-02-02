//Importing sections
import {
  AboutUs,
  Services,
  ContactUs,
  NavBar,
  Reviews,
  Title,
} from "./sections";

export default function App() {
  return (
    <>
      <div className=" gradient-background padding">
        <section className=" mt-0">
          <NavBar />
        </section>
        <section>
          <Title />
        </section>
        <section>
          <Services />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Reviews />
        </section>
        <div>
          <ContactUs />
        </div>
      </div>
    </>
  );
}
