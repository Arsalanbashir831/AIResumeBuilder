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
		<section className='mb-8 bg-template p-5 text-white'>
			<h1 className='text-3xl font-bold'>{name}</h1>
			<p className='mb-2'>{tagline}</p>
			<div className='flex justify-between flex-wrap gap-4 text-sm border-t border-white pt-2'>
				<div className='flex items-center gap-1 text-xs mt-1'>
					<MapPin className='w-4 h-4 text-white' />
					{location}
				</div>
				<div className='flex items-center gap-1'>
					<Phone className='w-4 h-4 text-white' />
					{phone}
				</div>
				<div className='flex items-center gap-1'>
					<AtSign className='w-4 h-4 text-white' />
					{email}
				</div>
			</div>
			<div className='flex items-center gap-1 mt-2 text-xs'>
				<Link className='w-4 h-4 text-white' />
				{link}
			</div>
		</section>
	);
};

export default Header;
