import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function BenefitsSection() {
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

	return (
		<section className='py-16 relative z-10'>
			<div className='container px-4 md:px-6 mx-auto'>
				<h2 className='text-3xl font-bold text-center mb-6'>
					Benefits Of Using Our Resume Builder
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
	);
}
