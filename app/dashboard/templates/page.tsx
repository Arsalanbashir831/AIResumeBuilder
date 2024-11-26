"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { templates } from "@/data/templatesConfig";
import Image from "next/image";

export default function TemplatesPage() {
	const [snapshots, setSnapshots] = useState<Record<string, string>>({});

	// Listen for messages from iframes
	useEffect(() => {
		const handleSnapshotMessage = (event: MessageEvent) => {
			const { templateId, dataUrl } = event.data;
			if (templateId && dataUrl) {
				setSnapshots((prev) => ({ ...prev, [templateId]: dataUrl }));
			}
		};
		window.addEventListener("message", handleSnapshotMessage);

		// Clean up the event listener on unmount
		return () => {
			window.removeEventListener("message", handleSnapshotMessage);
		};
	}, []);

	return (
		<div className='container mx-auto my-24 px-4 '>
			<div className='mb-12'>
				<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 py-3'>
				Choose Your Template
				</h1>
				<p className='text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl text-justify'>
					Select from our professional templates to get started. Simply click on
					the template you like, and you’ll be able to customize it step-by-step
					in our editor.
				</p>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{templates.map((template) => (
					<Link key={template.id} href={`/dashboard/editor/${template.id}`}>
						<div className='hover:bg-[#FDF8F4] hover:shadow-lg transition-all pt-8 pb-4 px-2 rounded-lg cursor-pointer'>
							<div className='flex justify-center items-center w-full mx-auto'>
								{snapshots[template.id] ? (
									<Image
										src={snapshots[template.id]}
										width={300}
										height={400}
										alt={`Snapshot of ${template.name}`}
										className='rounded-lg shadow-md aspect-[2/3] w-full'
									/>
								) : (
									<div className='flex flex-col justify-center items-center space-y-4 h-[400px]'>
										<Image
											src='/logo.png'
											width={100}
											height={100}
											alt='GetSetCV Logo'
											className='animate-pulseOpacity'
										/>
									</div>
								)}
							</div>
							<p className='text-center text-gray-800 mt-6 font-bold'>
								{template.name}
							</p>
						</div>
					</Link>
				))}
			</div>

			{/* Hidden iframes to render each template snapshot */}
			{templates.map((template) => (
				<iframe
					key={template.id}
					src={`/dashboard/snapshot-renderer/${template.id}`}
					style={{ opacity: 0, height: 0, width: 0 }}
					aria-hidden='true'
					tabIndex={-1}
				/>
			))}
		</div>
	);
}
