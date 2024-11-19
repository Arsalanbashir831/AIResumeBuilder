import React from "react";
import { Certificate } from "@/types/global";

interface CrtificatesProps {
	certificates: Certificate[];
}

const Certificates: React.FC<CrtificatesProps> = ({ certificates }) => {
	return (
		<section>
			<h2 className='text-lg font-bold border-b-2 border-template mb-2'>
				Certificates
			</h2>
			<div className='flex flex-col'>
				{certificates.map((certificate, index) => (
					<div key={index} className={"space-y-1 border-dashed mb-3"}>
						<h3 className='font-semibold text-sm'>{certificate.name}</h3>
						<p className='text-sm text-gray-600'>{certificate.organization}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Certificates;
