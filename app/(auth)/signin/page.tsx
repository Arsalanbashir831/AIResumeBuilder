"use client";

import AuthForm from "@/components/AuthForm";
import RandomQuote from "@/components/RandomQuote";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SigninPage() {
	const router = useRouter();

	const handleSignUpClick = () => {
		router.push("/signup");
	};

	return (
		<div className='min-h-screen flex flex-col md:flex-row'>
			{/* Left Side */}
			<div className='flex-1 bg-[#0B1437] text-white hidden md:flex flex-col justify-between p-8'>
				<div className='flex items-center space-x-2'>
					<Image src='/logo.png' alt='GetSetCV' width={180} height={100} />
				</div>
				<RandomQuote />
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
					<Button onClick={handleSignUpClick}>Sign Up</Button>
				</div>
				<AuthForm
					heading='Welcome back!'
					description='Enter your email and password to sign in'
					buttonText='Sign In'
				/>
			</div>
		</div>
	);
}
