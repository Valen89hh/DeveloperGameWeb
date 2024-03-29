import AboutUs from "@/components/pages/home/AboutUs/AboutUs";
import ContactSection from "@/components/pages/home/Contact/ContactSection";
import MainSection from "@/components/pages/home/MainSection/MainSection";
import MajorSection from "@/components/pages/home/MajorSection/MajorSection";
import Portfolio from "@/components/pages/home/Portfolio/Portfolio";
import ServiceSection from "@/components/pages/home/ServiceSection/ServiceSection";
import Image from "next/image";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (<>

  <MainSection/>
  <MajorSection/>
  <ServiceSection/>
  <AboutUs/>
  <Portfolio/>
  <ContactSection/>
  </>
  );
}
