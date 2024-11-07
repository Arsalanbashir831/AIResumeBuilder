// components/AuthForm.tsx

"use client";

import { usePathname, useRouter } from "next/navigation"; // Hook to get the current pathname
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

interface AuthFormProps {
	heading: string;
	description: string;
	buttonText: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
	heading,
	description,
	buttonText,
}) => {
	// Get the current URL path
	const pathname = usePathname();
	const router = useRouter();

	// Check if the current URL is for signup (you can adjust this condition as per your routes)
	const isSignup = pathname.includes("signup");

	return (
		<div className='flex-1 flex flex-col items-center justify-center p-4 sm:p-12'>
			<Card className='w-full max-w-sm border-none shadow-none'>
				<h2 className='text-2xl font-bold mb-4 text-center'>{heading}</h2>
				<p className='text-sm text-gray-600 mb-6 text-center'>{description}</p>
				<Input
					type='email'
					placeholder='name@example.com'
					className='w-full mb-4'
				/>

				{/* Conditionally render password field based on URL */}
				{!isSignup && (
					<Input
						type='password'
						placeholder='*********'
						className='w-full mb-4'
					/>
				)}

				<Button
					onClick={() => {
						router.push("/dashboard");
					}}
					className='w-full mb-4 text-white'>
					{buttonText}
				</Button>

				<div className='flex items-center justify-between mb-4'>
					<span className='border-b border-gray-300 w-1/2' />
					<span className='px-2 text-gray-500 text-sm w-full text-center'>
						OR CONTINUE WITH
					</span>
					<span className='border-b border-gray-300 w-1/2' />
				</div>

				<div className='flex flex-col items-center justify-between space-y-2 mb-4'>
					<Button
						variant='outline'
						className='w-full flex items-center justify-center border border-gray-300 text-[#0B1437]'>
						<Image src='/google-icon.svg' alt='Google' width={16} height={16} />
						<span className='ml-2'>Google</span>
					</Button>
					<Button
						variant='outline'
						className='w-full flex items-center justify-center border border-gray-300 text-[#0B1437]'>
						<Linkedin size={16} />
						<span className='ml-2'>LinkedIn</span>
					</Button>
					<Button
						variant='outline'
						className='w-full flex items-center justify-center border border-gray-300 text-[#0B1437]'>
						<Github size={16} />
						<span className='ml-2'>GitHub</span>
					</Button>
				</div>

				<p className='text-xs text-gray-500 mt-6 text-center'>
					By clicking continue, you agree to our{" "}
					<a href='#' className='underline'>
						Terms of Service
					</a>{" "}
					and{" "}
					<a href='#' className='underline'>
						Privacy Policy
					</a>
					.
				</p>
			</Card>
		</div>
	);
};

export default AuthForm;
