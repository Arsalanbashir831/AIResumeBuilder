import React from "react";
import { Certificate } from "@/types/global";

interface CrtificatesProps {
	certificates: Certificate[];
}

const Certificates: React.FC<CrtificatesProps> = ({ certificates }) => {
	return (
		<section>
			<h2 className='text-lg heading-template font-bold border-b-2 border-template mb-2'>
				Certificates
			</h2>
			<div className='flex flex-col'>
				{certificates.map((certificate, index) => (
					<div
						key={index}
						className={`space-y-1 border-dashed pb-2 mb-1 ${
							index > 1 || index !== certificates.length - 1 ? "border-b" : ""
						}`}>
						<h3 className='font-semibold text-sm text-template'>
							{certificate.name}
						</h3>
						<p className='text-sm'>{certificate.organization}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Certificates;
