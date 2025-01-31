'use client'
import AiCreditSection from "@/components/landing-page/AiCreditSection";
import BenefitsSection from "@/components/landing-page/BenefitsSection";
import EditorPreviewSection from "@/components/landing-page/EditorPreviewSection";
import Footer from "@/components/landing-page/Footer";
import HeroSection from "@/components/landing-page/HeroSection";
import LogoSlider from "@/components/landing-page/LogoSlider";
import MainSection from "@/components/landing-page/MainSection";
import OurStorySection from "@/components/landing-page/OurStorySection";
import PaymentSection from "@/components/landing-page/PaymentSection";
import PlansSection from "@/components/landing-page/PlansSection";
import StepsSection from "@/components/landing-page/StepsSection";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const LandingPage = () => {
  return (
    <div className="bg-fixed min-h-[200vh] w-full relative overflow-hidden bg-[url(/backgrounds/bg.svg)] bg-cover bg-top">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-100/80 z-0"></div>

      <Navbar />

      {/* Apply scroll animations to sections */}
      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <HeroSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <LogoSlider />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }}>
        <MainSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.6 }}>
        <OurStorySection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.8 }}>
        <BenefitsSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1 }}>
        <StepsSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.2 }}>
        <EditorPreviewSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.4 }}>
        <PlansSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.6 }}>
        <AiCreditSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1.8 }}>
        <PaymentSection />
      </motion.div>

      <motion.div variants={fadeInVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 2 }}>
        <Footer />
      </motion.div>
    </div>
  );
};

export default LandingPage;
