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

const LandingPage = () => {
	return (
		<div className=' bg-fixed min-h-[200vh] w-full relative overflow-hidden bg-[url(/backgrounds/bg.svg)] bg-cover  bg-top '>
		
			<div className='absolute inset-0 bg-gray-100/80 z-0'></div>

			<Navbar />

			<HeroSection />
			<LogoSlider />
			<MainSection />
			<OurStorySection />
			<BenefitsSection />
			<StepsSection />
			<EditorPreviewSection />
			<PlansSection />
			<AiCreditSection />
			<PaymentSection />

			<Footer />
		</div>
		
	);
};

export default LandingPage;
