import AboutMe from "./_components/sections/aboutMe";
import CtaSection from "./_components/sections/ctaSection";
import Faq from "./_components/sections/faq";
import FeaturedProjects from "./_components/sections/featuredProjects";
import Hero from "./_components/sections/hero";
import {
  FRAMERHorizontalScroll,
  GSAPHorizontalScroll,
} from "./_components/sections/horizontalScroll";
import MoreProjects from "./_components/sections/moreProjects";
import PhotoGallery from "./_components/sections/photoGallery";
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

      <FeaturedProjects />
    </main>
  );
};

export default Home;
