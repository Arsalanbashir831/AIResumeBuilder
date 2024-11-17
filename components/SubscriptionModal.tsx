import { Button } from "./ui/button";

const SubscriptionModal = ({ onClose }: { onClose: () => void }) => (
	<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20'>
		<div className='bg-white p-6 rounded-md shadow-lg max-w-sm w-full'>
			<h3 className='text-xl font-semibold mb-4'>Subscribe to Download</h3>
			<p className='mb-4'>
				To download your resume, please subscribe to our service.
			</p>
			<div className='flex justify-end space-x-4'>
				<Button variant='secondary' onClick={onClose}>
					Close
				</Button>
				<Button variant='default'>Subscribe Now</Button>
			</div>
		</div>
	</div>
);

export default SubscriptionModal;
