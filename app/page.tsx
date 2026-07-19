import BamNav from "./components/BamNav";
import BamHero from "./components/BamHero";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import Process from "./components/Process";
import Faq from "./components/Faq";
import Audit from "./components/Audit";
import BamFooter from "./components/BamFooter";

export default function Home() {
  return (
    <>
      <BamNav />
      <main>
        <BamHero />
        <Services />
        <Showcase />
        <Process />
        <Faq />
        <Audit />
      </main>
      <BamFooter />
    </>
  );
}
