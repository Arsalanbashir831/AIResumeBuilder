import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrashIcon, PlusCircleIcon } from "lucide-react";
import InputField from "@/components/InputField";
import TextAreaField from "@/components/TextAreaField";
import AiButton from "@/components/AiButton";
import { Certificate } from "@/types/global";

interface CertificatesProps {
	certificates: Certificate[];
	onChange: (certificates: Certificate[]) => void;
}

export default function CertificatesStep({
	certificates,
	onChange,
}: CertificatesProps) {
	const [newCertificate, setNewCertificate] = useState<Certificate>({
		name: "",
		organization: "",
	});

	const handleAddCertificate = () => {
		if (newCertificate.name && newCertificate.organization) {
			onChange([...certificates, newCertificate]);
			setNewCertificate({ name: "", organization: "" });
		}
	};

	const handleRemoveCertificate = (index: number) => {
		onChange(certificates.filter((_, i) => i !== index));
	};

	return (
		<div className='p-6 space-y-6'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-2xl font-semibold mb-4 text-gray-700'>
					certificates
				</h3>
				<AiButton />
			</div>

			{/* Add New Certificate Form */}
			<Card className='shadow-md'>
				<CardContent className='p-6'>
					<div className='mb-4'>
						<InputField
							label='Certificate Name'
							value={newCertificate.name}
							onChange={(value) =>
								setNewCertificate({ ...newCertificate, name: value as string })
							}
							placeholder='e.g., Creative Excellence Award'
						/>
					</div>
					<div className='mb-4'>
						<TextAreaField
							label='Organization'
							value={newCertificate.organization}
							onChange={(value) =>
								setNewCertificate({
									...newCertificate,
									organization: value,
								})
							}
							placeholder='Describe the certificate'
						/>
					</div>
					<Button
						onClick={handleAddCertificate}
						className='w-full text-white flex items-center justify-center'>
						<PlusCircleIcon className='mr-2' size={18} />
						Add Certificate
					</Button>
				</CardContent>
			</Card>

			{/* Display List of certificates */}
			<div className='space-y-4'>
				{certificates.map((certificate, index) => (
					<Card key={index} className='shadow-md'>
						<CardContent className='p-6 flex justify-between items-start'>
							<div className='flex-grow'>
								<Badge variant='outline' className='text-primary mb-2'>
									{certificate.name}
								</Badge>
								<p className='text-gray-700'>{certificate.organization}</p>
							</div>
							<Button
								variant='ghost'
								className='text-red-500 hover:text-red-700 ml-4'
								onClick={() => handleRemoveCertificate(index)}>
								<TrashIcon size={18} />
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
