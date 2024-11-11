"use client";

import { useRef, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import Link from "next/link";
import { templates } from "@/data/templatesConfig";
import Image from "next/image";

export default function TemplatesPage() {
	const [snapshots, setSnapshots] = useState<Record<number, string>>({});
	const templateRefs = useRef<Record<number, HTMLElement | null>>({});

	useEffect(() => {
		templates.forEach((template) => {
			if (templateRefs.current[template.id]) {
				toPng(templateRefs.current[template.id]!)
					.then((dataUrl) => {
						setSnapshots((prev) => ({ ...prev, [template.id]: dataUrl }));
					})
					.catch((err) => console.error("Failed to generate snapshot", err));
			}
		});
	}, []);

	return (
		<div className='container mx-auto my-24 px-4'>
			{/* Heading and Introduction */}
			<div className='mb-12'>
				<h1 className='text-4xl font-bold text-gray-800 mb-4'>
					Choose Your Template
				</h1>
				<p className='text-lg text-gray-600 max-w-3xl text-justify'>
					Select from our professional templates to get started. Each template
					is designed to highlight your skills, experience, and achievements.
					Simply click on the template you like, and you&#39;ll be able to
					customize it step-by-step in our editor.
				</p>
			</div>

			{/* Template Cards */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{templates.map((template) => (
					<Link key={template.id} href={`/dashboard/editor/${template.id}`}>
						<div className='hover:bg-[#FDF8F4] hover:shadow-lg transition-all pt-8 pb-4 px-2 rounded-lg cursor-pointer'>
							<div className='flex justify-center items-center w-full mx-auto'>
								<div
									ref={(el) => {
										templateRefs.current[template.id] = el;
									}}
									style={{
										display: snapshots[template.id] ? "none" : "block",
									}}>
									<template.component />
								</div>
								{snapshots[template.id] ? (
									<Image
										src={snapshots[template.id]}
										width={300}
										height={400}
										alt={`Snapshot of ${template.name}`}
										className='rounded-lg shadow-md aspect-[2/3] w-full'
									/>
								) : (
									<p className='text-gray-500 text-center'>Loading...</p>
								)}
							</div>
							<p className='text-center text-gray-800 mt-6 font-bold'>
								{template.name}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
