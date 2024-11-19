import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TrashIcon, PlusIcon } from "lucide-react";
import { Project } from "@/types/global";

interface ProjectStepProps {
	projects: Project[];
	onChange: (projects: Project[]) => void;
	fieldsIncluded?: {
		title?: boolean;
		position?: boolean;
		description?: boolean;
	};
}

const ProjectStep: React.FC<ProjectStepProps> = ({
	projects,
	onChange,
	fieldsIncluded,
}) => {
	// Add a new project
	const handleAddProject = () => {
		const newProject: Project = {
			title: "",
			position: "",
			description: "",
		};
		onChange([...projects, newProject]);
	};

	// Remove a project
	const handleRemoveProject = (index: number) => {
		onChange(projects.filter((_, i) => i !== index));
	};

	// Handle changes to the project fields
	const handleProjectFieldChange = (
		index: number,
		field: keyof Project,
		value: string
	) => {
		const updatedProjects = projects.map((project, i) =>
			i === index ? { ...project, [field]: value } : project
		);
		onChange(updatedProjects);
	};

	return (
		<div>
			<div className='flex justify-between items-center mb-3'>
				<h3 className='text-lg font-semibold mb-2'>Projects</h3>
				<Button
					type='button'
					size='sm'
					className='mt-4 px-4 py-2 text-white rounded-lg'
					onClick={handleAddProject}>
					<PlusIcon className='mr-1' />
					Add Project
				</Button>
			</div>

			{/* List of Projects */}
			<div className='space-y-4'>
				{projects.map((project, index) => (
					<Card key={index} className='shadow-md p-4'>
						<CardContent>
							{/* Title */}
							{fieldsIncluded?.title !== false && (
								<div className='mb-4'>
									<label
										htmlFor={`title-${index}`}
										className='block text-sm font-semibold text-gray-700'>
										Title
									</label>
									<Input
										id={`title-${index}`}
										value={project.title}
										onChange={(e) =>
											handleProjectFieldChange(index, "title", e.target.value)
										}
										className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
									/>
								</div>
							)}

							{/* Position */}
							{fieldsIncluded?.position !== false && (
								<div className='mb-4'>
									<label
										htmlFor={`position-${index}`}
										className='block text-sm font-semibold text-gray-700'>
										Position
									</label>
									<Input
										id={`position-${index}`}
										value={project.position}
										onChange={(e) =>
											handleProjectFieldChange(
												index,
												"position",
												e.target.value
											)
										}
										className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
									/>
								</div>
							)}

							{/* Description */}
							{fieldsIncluded?.description !== false && (
								<div className='mb-4'>
									<label
										htmlFor={`description-${index}`}
										className='block text-sm font-semibold text-gray-700'>
										Description
									</label>
									<Textarea
										id={`description-${index}`}
										value={project.description}
										onChange={(e) =>
											handleProjectFieldChange(
												index,
												"description",
												e.target.value
											)
										}
										className='w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2'
									/>
								</div>
							)}

							<Button
								type='button'
								size='sm'
								variant='destructive'
								className='mt-2'
								onClick={() => handleRemoveProject(index)}>
								<TrashIcon size={16} className='mr-1' />
								Delete
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default ProjectStep;
