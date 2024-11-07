"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardBody() {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState("completed");
	const username = "John Doe";

	const templates = [
		{
			title: "Software Engineer",
			description: "Sample description for Software Engineer resume",
		},
		{
			title: "Data Scientist",
			description: "Sample description for Data Scientist resume",
		},
		{
			title: "Product Manager",
			description: "Sample description for Product Manager resume",
		},
	];

	const draftResumes = [
		{
			title: "Draft Resume 1",
			description: "Last Updated: 2 days ago",
		},
		{
			title: "Draft Resume 2",
			description: "Last Updated: 5 days ago",
		},
	];

	const completedResumes = [
		{
			title: "Completed Resume 1",
			description: "Last Updated: 1 week ago",
		},
		{
			title: "Completed Resume 2",
			description: "Last Updated: 2 weeks ago",
		},
	];

	const resumesToDisplay =
		activeTab === "completed" ? completedResumes : draftResumes;

	return (
		<div>
			{/* Dashboard Header */}
			<header className='bg-[#FDF8F4]'>
				<div className='flex justify-between items-center mb-4 container mx-auto p-4'>
					<div className='flex items-center space-x-7'>
						<Image src='/logo.png' alt='Logo' width={180} height={180} />
						<p className='text-lg md:text-xl font-semibold'>
							<span className='text-gray-600'>Hi, </span>
							{username}
						</p>
					</div>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Avatar className='cursor-pointer'>
								<AvatarImage src='/avatar.jpg' alt='Avatar' />
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem onClick={() => router.push("/signin")}>
								Logout
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</header>

			<div className='container mx-auto p-4'>
				{/* Resume Section */}
				<div className='flex justify-between items-center mb-4'>
					<div className='flex flex-col space-y-2'>
						<h1 className='text-lg md:text-xl lg:text-2xl font-bold'>
							Resume Builder
						</h1>
						<p className='text-sm md:text-base text-gray-600'>
							Create your own custom resume to apply for jobs
						</p>
					</div>
					<Button variant='default'>
						<PlusCircle size={24} />
						New Resume
					</Button>
				</div>

				{/* Template Resumes */}
				<h2 className='text-lg md:text-xl lg:text-2xl font-bold'>
					Sample Resumes
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 items-stretch'>
					{/* Blank Resume Card */}
					<Card className='flex items-center justify-center'>
						<CardContent className='flex flex-col items-center justify-center'>
							<PlusCircle size={24} className='mb-4' />
							<p className='text-sm md:text-base'>Create Blank Resume</p>
						</CardContent>
					</Card>

					{/* Map over templates array */}
					{templates.map((template, index) => (
						<Card key={index}>
							<CardContent className='flex items-center justify-center p-4 bg-gray-100 rounded-t-xl'>
								<Image
									src='/placeholder-resume.png'
									alt={`Resume Template ${index + 1}`}
									width={300}
									height={200}
								/>
							</CardContent>
							<CardFooter className='flex flex-col items-center justify-center p-3 bg-white rounded-b-xl'>
								<CardTitle className='text-base md:text-lg font-bold'>
									{template.title}
								</CardTitle>
								<CardDescription className='text-sm'>
									{template.description}
								</CardDescription>
							</CardFooter>
						</Card>
					))}
				</div>

				{/* Tabs for Completed and Draft Resumes */}
				<h2 className='text-lg md:text-xl lg:text-2xl font-bold mt-8'>
					My Resumes
				</h2>
				<Tabs value={activeTab} onValueChange={setActiveTab}>
					<TabsList className='my-4'>
						<TabsTrigger value='completed' className='text-sm md:text-base'>
							Completed Resumes
						</TabsTrigger>
						<TabsTrigger value='draft' className='text-sm md:text-base'>
							Draft Resumes
						</TabsTrigger>
					</TabsList>

					{/* Map over resumesToDisplay array */}
					<TabsContent value={activeTab}>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 items-stretch'>
							{resumesToDisplay.map((resume, index) => (
								<Card key={index}>
									<CardContent className='flex items-center justify-center p-4 bg-gray-100 rounded-t-xl'>
										<Image
											src='/placeholder-resume.png'
											alt={`${resume.title}`}
											width={300}
											height={200}
										/>
									</CardContent>
									<CardFooter className='flex flex-col items-center justify-center text-left p-3 bg-white rounded-b-xl'>
										<CardTitle className='text-base md:text-lg font-bold'>
											{resume.title}
										</CardTitle>
										<CardDescription className='text-sm'>
											{resume.description}
										</CardDescription>
									</CardFooter>
								</Card>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
