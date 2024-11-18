import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
	return (
		<div className='min-h-screen flex flex-col md:flex-row'>
			{/* Left Side */}
			<div
				className='flex-1 bg-[#0B1437] text-white hidden md:flex flex-col p-8'
				style={{
					backgroundImage: 'url("/auth-bg.jpg")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundBlendMode: "overlay",
				}}>
				<div className='flex items-center space-x-2'>
					<Image src='/logo.png' alt='GetSetCV' width={180} height={100} />
				</div>

				<div className='flex flex-col justify-center flex-1'>
					<p className='text-4xl font-semibold text-white'>
						Your Dream Job Starts with a Standout Resume
					</p>
					<p className='mt-4 text-sm text-gray-200 text-justify'>
						GetSetCV empowers you to craft a professional, eye-catching resume
						in minutes. With intuitive customization and sleek templates, focus
						on showcasing your skills while we bring your career story to life.
					</p>
				</div>
			</div>

			{/* Right Side */}
			<div className='flex-1 flex flex-col p-8 justify-center bg-white'>
				<div className='flex items-center justify-between md:justify-end space-x-2 mb-8 sm:mb-0'>
					<Image
						src='/logo.png'
						alt='GetSetCV'
						width={180}
						height={100}
						className='md:hidden'
					/>

					<Link
						href='/signin'
						className='px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-400 text-sm'>
						Sign In
					</Link>
				</div>

				<AuthForm
					heading='Create an account'
					description='Enter your email below to create your account'
					buttonText='Sign Up with Email'
				/>
			</div>
		</div>
	);
}
