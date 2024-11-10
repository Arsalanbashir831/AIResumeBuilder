import { AtSign, Link, Phone } from "lucide-react";

const Header = ({
	name,
	position,
	phone,
	email,
	link,
}: {
	name: string;
	position: string;
	phone: string;
	email: string;
	link: string;
}) => {
	return (
		<div className='bg-[#1e2a4a] text-white px-10 pb-6 pt-16'>
			<h1 className='text-3xl font-bold'>{name}</h1>
			<h2 className='mb-2'>{position}</h2>
			<div className='flex justify-between gap-6 text-sm'>
				<span className='flex gap-2 items-center'>
					<Phone size={16} />
					{phone}
				</span>
				<span className='flex gap-2 items-center'>
					<AtSign size={16} />
					{email}
				</span>
				<span className='flex gap-2 items-center'>
					<Link size={16} />
					{link}
				</span>
			</div>
		</div>
	);
};

export default Header;
