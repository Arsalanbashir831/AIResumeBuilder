import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
	return (
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
	);
}
