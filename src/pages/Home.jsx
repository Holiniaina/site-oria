import Arrow from "@/components/Arrow/Arrow";
import FilialeHCM from "@/components/FilialeHCM/FilialeHCM";
import FilialeSCI from "@/components/FilialeSCI/FilialeSCI";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Actu from "@/components/Actu/Actu";

function Home() {
  return (
    <>
      <Hero />
      <FilialeHCM />
      <FilialeSCI />
      <Projects />
      <Actu />
      <Arrow />
    </>
  );
}

export default Home;
