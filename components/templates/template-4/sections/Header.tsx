import React from "react";
import { AtSign, Link, MapPin, Phone } from "lucide-react";

interface HeaderProps {
	name: string;
	email: string;
	phone: string;
	link: string;
	tagline: string;
	location: string;
}

const Header: React.FC<HeaderProps> = ({
	name,
	email,
	phone,
	link,
	tagline,
	location,
}) => {
	return (
		<section className='mb-8'>
			<h1 className='text-3xl font-bold'>{name}</h1>
			<p className='text-template text-lg font-bold mb-2'>{tagline}</p>
			<div className='flex justify-between flex-wrap gap-4 text-sm text-gray-600'>
				<div className='flex items-center gap-1'>
					<Phone className='w-4 h-4 text-template' />
					{phone}
				</div>
				<div className='flex items-center gap-1'>
					<AtSign className='w-4 h-4 text-template' />
					{email}
				</div>
				<div className='flex items-center gap-1'>
					<Link className='w-4 h-4 text-template' />
					{link}
				</div>
			</div>
			<div className='flex items-center gap-1 text-sm text-gray-600 mt-1'>
				<MapPin className='w-4 h-4 text-template' />
				{location}
			</div>
		</section>
	);
};

export default Header;
