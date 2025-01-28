import FocusedCarousel from "@/components/FocusedCarousel";
import LogoSlider from "@/components/LogoSlider";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
	const benefits = [
		{
			icon: "1.svg",
			title: "Easy to use",
			description:
				"The process of writing a resume is substantially sped up and simplified by using our resume builder.",
		},
		{
			icon: "2.svg",
			title: "Secure",
			description:
				"We respect your privacy and we dont store your data in any way nor your details are compromised, thanks to our in house Ai.",
		},
		{
			icon: "3.svg",
			title: "Cool Templates",
			description:
				"Our template designs help your resume standout in a pool of others.",
		},
		{
			icon: "4.svg",
			title: "Intelligent Design",
			description:
				"With us, you won't have to bother about the minute details of resume development, such as font choice, layout, etc.",
		},
		{
			icon: "5.svg",
			title: "HR-Approved & ATS-Friendly",
			description:
				"The core design of our resume templates are HR-Approved & accepted by leading organizations.",
		},
		{
			icon: "6.svg",
			title: "No Hidden Charges",
			description:
				"Build it for free, pay only when comfortable. No hidden charges, just a one time payment start at 250",
		},
	];

	const steps = [
		{
			number: 1,
			title: "Pick a Template",
			description: "Fill in the blanks and see results in real-time.",
		},
		{
			number: 2,
			title: "Generate Your Content using AI",
			description: "Use AI to improve your content which will be ATS friendly ",
		},
		{
			number: 3,
			title: "Hit 'Download!'",
			description: "Download your resume, apply, get more interviews.",
		},
	];

	const features = [
		{
			title: "Multi-theme & type face",
			description: "for personalization.",
		},
		{
			title: "Placeholder resume content",
			description: "to guide your filling.",
		},
		{
			title: "Multiple layouts & templates",
			description: "to choose from.",
		},
	];

	const plans = [
		{
			title: "Basic Plan",
			price: "₹250/20 Credits",
			description:
				"More than sufficient to create minimum 50 resumes hassle-free",
		},
		{
			title: "Standard Plan",
			price: "₹350/25 Credits",
			description:
				"More than sufficient to create minimum 100 resumes hassle-free",
		},
	];

	const aiCreditsFeatures = [
		{
			title: "Free Trial, No Strings Attached",
			description:
				"Sign up and get 2 free credits—enough to create and download up to 5 resumes! No questions asked.",
		},
		{
			title: "Affordable Top-Ups",
			description:
				"While we have ensured the plans provided are sufficient. If you do run out of credits, get a top-up for as low as ₹30.",
		},
		{
			title: "Simple & Transparent",
			description:
				"Pay only for what you need—no hidden fees, no confusion. With GetSetCV, you can build and download your dream resume without any worries. Start for free and upgrade only when you're ready!",
		},
	];

	return (
		<div className='min-h-[200vh] max-w-screen-2xl mx-auto relative overflow-hidden bg-[url(/backgrounds/bg.svg)] bg-scroll bg-contain bg-top '>
			{/* Add backdrop blur to the background image */}
			<div className='absolute inset-0 bg-gray-100/80 z-0'></div>

			{/* Navigation Bar */}
			<Navbar />

			{/* Hero Section */}
			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='mt-10 md:mt-0 max-w-xl'>
						<h1 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
							India's Own AI-Powered{" "}
							<span className='text-orange-500'>Resume Builder</span>
						</h1>
						<p className='text-gray-600 text-base sm:text-lg mb-8'>
							Build your perfect resume effortlessly with the power of
							Artificial Intelligence and beautifully customizable templates.
							Get that first interview with a professionally crafted resume
							tailored just for you.
						</p>

						<Link
							href='/signin'
							className='px-6 sm:px-12 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white'>
							Create Your First Resume For Free
						</Link>
					</div>

					<div className='flex justify-center mt-12 md:mt-0 z-10'>
						<Image
							src='/placeholder-dashboard.svg'
							alt='Hero'
							className='shadow-xl rounded-lg w-full max-w-xs sm:max-w-md md:max-w-full'
							width={400}
							height={200}
						/>
					</div>
				</div>
			</section>

			{/* Trusted Partners Section */}
			<LogoSlider />

			{/* Main Content */}
			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					<div className='flex flex-col items-start justify-between h-full gap-12 order-last md:order-first'>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mb-10'>
							You can always pick any template you like
						</h2>
						<p className='text-gray-600 text-base sm:text-lg'>
							Nike, Facebook — learn from resumes that helped our customers land
							jobs with the world's top companies. Explore 5 high-quality
							templates, each crafted from scratch to ensure maximum visibility.
							We prioritize the best quality, and more templates will be added
							soon!
						</p>

						<Link
							href='/signin'
							className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full'>
							Get Template of yours
						</Link>
					</div>

					<div className='order-first md:order-last'>
						<FocusedCarousel />
					</div>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					{/* Right Side - Template Editor Interface */}
					<div className='relative z-10'>
						<Image
							src='/backgrounds/dots-grid.svg'
							alt='Dots Grid'
							width={100}
							height={100}
							className='absolute top-0 left-2 transform -translate-y-5 -z-10'
						/>
						<Image
							src='/our-story.png'
							alt='Our Story'
							width={600}
							height={400}
							className='w-full max-w-lg mx-auto'
						/>
						<Image
							src='/backgrounds/dots-grid-2.svg'
							alt='Dots Grid'
							width={100}
							height={100}
							className='absolute bottom-0 right-2 transform translate-y-5 -z-10'
						/>
					</div>

					{/* Left Side - Content */}
					<div>
						<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4 mb-6'>
							Our Story
						</h2>
						<p className='text-gray-600 mb-8 text-base sm:text-lg'>
							Get Set CV was born from the struggles we’ve all faced—talented
							individuals with big dreams missing out on opportunities, not
							because they lacked potential, but because of the lack of genuine,
							affordable platforms. Like many, we’ve spent hours searching for
							free templates, copying content into them, and trying to make it
							work because expensive subscriptions just didn’t make sense for
							something we’d use so rarely.That’s why we created Get Set CV—a
							place where you can build ATS-friendly resumes effortlessly, all
							in one place, completely free. Pay only when you’re comfortable.We
							might not be able to help you crack the interview, but we can help
							you tell your story in a way that makes sure you’re seen!
						</p>

						<Link
							href='/signin'
							className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full'>
							Build your free Resume
						</Link>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-16 relative z-10'>
				<div className='container px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-6'>
						Benefits Of Using Our Product
					</h2>
					<h3 className='text-lg text-center text-orange-500 mb-12'>
						Why Choose Us?
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{benefits.map((benefit, index) => (
							<Card
								key={index}
								className='border-none shadow-sm hover:shadow-md transition-shadow'>
								<CardContent className='p-6'>
									<div className='flex items-start space-x-4'>
										<div className='mt-1'>
											<Image
												src={`/benefits/${benefit.icon}`}
												alt={benefit.title}
												width={250}
												height={250}
											/>
										</div>
										<div>
											<h3 className='font-semibold mb-2 text-lg'>
												{benefit.title}
											</h3>
											<p className='text-sm text-muted-foreground'>
												{benefit.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Process Steps */}
			<section className='py-16 relative z-10'>
				<div className='container mx-auto px-4 md:px-6'>
					<h2 className='text-3xl font-bold text-center mb-12'>
						Build your
						<span className='text-orange-500'> resume </span>
						in 3 steps
					</h2>
					<div className='flex flex-col max-w-6xl mx-auto'>
						{steps.map((step, index) => (
							<Card
								key={index}
								className={
									"relative border-none bg-transparent shadow-none " +
									(index % 2 !== 0 && "self-end")
								}>
								<CardContent className='p-6 flex items-center space-x-6'>
									<div className=''>
										<Image
											src={`/steps/step-${step.number}.svg`}
											alt={`Step ${step.number} illustration`}
											width={220}
											height={220}
											className='mx-auto'
										/>
									</div>
									<div className='flex items-end space-x-4'>
										<div className='text-orange-500 font-bold text-5xl'>
											{step.number}.
										</div>
										<div>
											<h3 className='font-bold text-xl text-orange-500'>
												{step.title}
											</h3>
											<p className='text-sm text-orange-400 -mt-1'>
												{step.description}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Editor Preview Section */}
			<section className='p-12 bg-gradient-to-t from-white to-[#f5651244] container mx-auto relative z-10'>
				<div className='container px-4 md:px-6'>
					{/* Header */}
					<h2 className='text-2xl md:text-3xl font-bold mb-6'>
						Snapshot of our simple-to-use editor
					</h2>

					<div className='grid md:grid-cols-2 gap-8 items-center'>
						{/* Left: Image */}
						<div className='relative'>
							<Image
								src='/placeholder-dashboard.svg'
								alt='Resume editor interface'
								width={500}
								height={300}
								className='shadow-lg rounded-lg'
							/>
						</div>

						{/* Right: Text & Features */}
						<div>
							<p className='text-sm text-muted-foreground mb-6'>
								All the flexibility & intuition you need to build a resume that
								stands out.
							</p>

							<ul className='space-y-4'>
								{features.map((feature, index) => (
									<li
										key={index}
										className='flex items-start space-x-2 text-orange-500'>
										<span className='font-bold text-xl'>●</span>
										<p className='leading-tight'>
											<span className='font-bold'>{feature.title}</span>
											<br />
											{feature.description}
										</p>
									</li>
								))}
							</ul>

							{/* CTA Button */}
							<Button
								variant='default'
								className='mt-12 bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8'>
								Create Resume For Free
							</Button>

							{/* Stats Section */}
							<p className='text-sm text-muted-foreground mt-8 mb-2'>
								Our Stats
							</p>
							<div className='flex items-center gap-8'>
								<div>
									<h3 className='text-3xl font-bold'>200+</h3>
									<p className='text-xs text-muted-foreground'>Users</p>
								</div>
								<div className='border-r border-gray-800 h-14' />
								<div>
									<h3 className='text-3xl font-bold'>3 mins</h3>
									<p className='text-xs text-muted-foreground'>
										Average resume building time
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Plans Section */}
			<section className='py-16 relative z-10'>
				<div className='container px-4 md:px-6 mx-auto text-center'>
					{/* Section Header */}
					<h2 className='text-3xl font-bold'>
						What Do You Get When You{" "}
						<span className='text-orange-500'>Buy a Plan?</span>
					</h2>
					<p className='text-muted-foreground mt-4 max-w-lg mx-auto'>
						When you buy a plan on GetSetCV, you’re getting everything you need
						to create and download professional resumes—simple, affordable, and
						hassle-free! Here’s the Deal:
					</p>

					{/* Plans Grid */}
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto'>
						{plans.map((plan, index) => (
							<Card
								key={index}
								className='border border-orange-500 rounded-lg shadow-sm bg-transparent'>
								<CardHeader>
									<CardTitle className='flex justify-between items-center'>
										<span className='text-xl font-bold'>{plan.title}</span>
										<span className='font-medium'>{plan.price}</span>
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm text-muted-foreground'>
										{plan.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* AI Credits Section */}
			<section className='py-16 relative z-10'>
				<div className='container px-4 md:px-6 mx-auto'>
					{/* Section Header */}
					<h2 className='text-3xl font-bold'>
						What are <span className='text-[#f97316]'>AI Credits?</span>
					</h2>
					<p className='text-muted-foreground mt-4'>
						Credits are like coins. You use them for AI Magic (like improving
						sections or generating new ones) and to download your resume.
					</p>
					<ul className='space-y-0 text-sm text-muted-foreground'>
						<li>1 Credit = 1,000 Tokens</li>
						<li>
							Small tasks, like improving a section using AI, may use 100 tokens
							and not a whole credit. Think of it like:
							<br />1 rupee = 100 paise (not in reality, of course).
						</li>
						<li>Every AI action = 100 paise.</li>
						<li>
							Imagine the flexibility you get with 20k paise (20 credits).
							Downloading resumes does not cost any credits; you can download as
							many resumes as you want (consider it a tax-free feature).
						</li>
					</ul>

					{/* Benefits Cards */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
						{aiCreditsFeatures.map((card, index) => (
							<Card
								key={index}
								className='border border-[#f97316] rounded-lg shadow-sm'>
								<CardHeader>
									<CardTitle className='text-xl font-bold text-[#f97316]'>
										{card.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className='text-sm text-muted-foreground'>
										{card.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* One-Time Payment Section */}
			<section className='bg-[#0B1437] text-white relative overflow-hidden z-10'>
				<div className='absolute top-0 left-0 w-full'>
					<svg
						viewBox='0 0 1440 100'
						className='w-full h-auto transform rotate-180'
						preserveAspectRatio='none'>
						<path
							fill='white'
							d='M0,0 C320,100 480,100 720,50 C960,0 1120,0 1440,100 L1440,100 L0,100 Z'
						/>
					</svg>
				</div>

				<div className='max-w-3xl mx-auto space-y-4 px-4 pt-28 pb-16 text-center'>
					<div className='font-medium mb-2 text-sm uppercase tracking-wide text-gray-300'>
						One-Time Payment
					</div>

					<h2 className='text-3xl sm:text-4xl md:text-5xl font-serif mt-4'>
						No subscriptions. No ads. Just a one-time payment.
					</h2>

					<p className='text-gray-300 mb-8 text-base sm:text-lg'>
						Enjoy lifetime access to all features with a simple, one-time fee.
						No recurring subscriptions, no hidden charges, and absolutely no
						ads. Get all the benefits of our AI-powered resume tools without the
						hassle.
					</p>

					<Link
						href='/signin'
						className='px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 text-sm rounded-full mt-6 inline-block'>
						Get Started with One-Time Access
					</Link>
				</div>
			</section>

			<footer className='bg-[#0B1437] py-8 text-white relative z-10'>
				<div className='container max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Logo and Description */}
					<div>
						<h2 className='text-xl font-bold text-orange-500'>GETSETCV</h2>
						<p className='text-sm mt-2 text-gray-400'>
							Create your resume in a minute, get your dream job in a blink.
						</p>
						<div className='flex gap-4 mt-4'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Facebook'>
								<Facebook className='h-5 w-5 text-gray-400 hover:text-orange-500' />
							</a>
							<a
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Twitter'>
								<Twitter className='h-5 w-5 text-gray-400 hover:text-orange-500' />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Instagram'>
								<Instagram className='h-5 w-5 text-gray-400 hover:text-orange-500' />
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'>
								<Linkedin className='h-5 w-5 text-gray-400 hover:text-orange-500' />
							</a>
						</div>
					</div>

					{/* Terms & Policies */}
					<div>
						<h3 className='text-lg font-semibold'>Terms & Policies</h3>
						<ul className='mt-2 space-y-2 text-sm'>
							<li>
								<a
									href='/terms-of-service'
									className='hover:underline text-gray-400 hover:text-orange-500'>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href='/privacy-policy'
									className='hover:underline text-gray-400 hover:text-orange-500'>
									Privacy Policy
								</a>
							</li>
						</ul>
					</div>

					{/* Company */}
					<div>
						<h3 className='text-lg font-semibold'>Company</h3>
						<ul className='mt-2 space-y-2 text-sm'>
							<li>
								<a
									href='/home'
									className='hover:underline text-gray-400 hover:text-orange-500'>
									Home
								</a>
							</li>
							<li>
								<a
									href='/about-us'
									className='hover:underline text-gray-400 hover:text-orange-500'>
									About Us
								</a>
							</li>
							<li>
								<a
									href='/contact-us'
									className='hover:underline text-gray-400 hover:text-orange-500'>
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h3 className='text-lg font-semibold'>Contact</h3>
						<ul className='mt-2 space-y-2 text-sm'>
							<li>
								<a
									href='tel:+2548089466435'
									className='text-gray-400 hover:text-orange-500'>
									(+254) 8089466435
								</a>
							</li>
							<li>
								<a
									href='mailto:agencyurl@gmail.com'
									className='text-gray-400 hover:text-orange-500'>
									agencyurl@gmail.com
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400 container max-w-screen-lg mx-auto'>
					&copy; GetSetCV {new Date().getFullYear()}. All rights reserved.
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
