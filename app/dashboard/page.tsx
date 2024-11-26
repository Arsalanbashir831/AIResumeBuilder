"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserResume } from "../api/resume";
import { Resume } from "@/types/global";

export default function DashboardBody() {

	const router = useRouter();
	const [resumes, setResume] = useState<Resume[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem('accessToken')
			const data = await getUserResume(token)
			console.log(data);
			setResume(data)
		}

		fetchData()
	}, [])


	// Template Card Component for reusability
	const TemplateCard = ({
		title,
		description,
		index,
		templateId, id
	}: {
		templateId: string,
		id: string,
		title: string;
		description: string;
		index: number;
	}) => (
		<Card className="cursor-pointer" onClick={() => router.push(`/dashboard/editor/${templateId}?id=${id}`)}>
			<CardContent className='flex items-center justify-center p-4 bg-gray-100 rounded-t-xl'>
				<Image
					src= {`/templates/${templateId.split('-')[1]}.png`}
					alt={`Resume Template ${index + 1}`}
					width={300}
					height={200}
				/>
			</CardContent>
			<CardFooter className='flex flex-col items-center justify-center p-3 bg-white rounded-b-xl'>
				<CardTitle className='text-base md:text-lg font-bold'>
					{title}
				</CardTitle>
				<CardDescription className='text-sm'>{description}</CardDescription>
			</CardFooter>
		</Card>
	);

	return (
		<div className='relative '>
			<div className='container mx-auto px-4 py-16 md:py-24'>
			
				<header className='flex flex-col sm:flex-row justify-between sm:items-center my-8 sm:mt-0'>
					<div className='space-y-2 mb-3 sm:mb-0'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
							Resume Builder
						</h1>
						<p className='text-base sm:text-lg lg:text-xl text-gray-600'>
							Create your custom resume for job applications
						</p>
					</div>
					<Button
						variant='default'
						size='sm'
						onClick={() => router.push("/dashboard/templates")}>
						<PlusCircle size={24} />
						New Resume
					</Button>
				</header>

				{/* Templates Section */}
				<section>
					<h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-4'>
						My Resumes
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{/* Blank Resume Card */}
						<Card className='flex items-center justify-center'>
							<Link
								href='/dashboard/templates'
								className='flex justify-center w-full h-[400px]'>
								<CardContent className='flex flex-col items-center justify-center'>
									<PlusCircle size={24} className='mb-4' />
									<p className='text-sm md:text-base'>Create Blank Resume</p>
								</CardContent>
							</Link>
						</Card>

						{resumes?.map((template, index) => (
							<TemplateCard
								id={template.id}
								templateId={template.data.templateId}
								key={index}
								title={template.data.name}
								description={template.data.sections.personalInfo.title}
								index={index}
							/>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
