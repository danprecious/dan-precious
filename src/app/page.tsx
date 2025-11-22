import AboutMe from "./_components/sections/aboutMe";
import CtaSection from "./_components/sections/ctaSection";
import Faq from "./_components/sections/faq";
import Hero from "./_components/sections/hero";
import { GSAPHorizontalScroll } from "./_components/sections/horizontalScroll";

import Technologies from "./_components/sections/technologies";

const Home = () => {
  return (
    <main className="">
      <Hero />

      <AboutMe />

      <GSAPHorizontalScroll />

      {/* <FRAMERHorizontalScroll /> */}

      {/* <MoreProjects /> */}

      <CtaSection />

      <Technologies />

      <Faq />

      {/* <PhotoGallery /> */}
    </main>
  );
};

export default Home;
