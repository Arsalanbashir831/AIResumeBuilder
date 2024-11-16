import React from "react";
import { AtSign, Link, MapPin, Phone } from "lucide-react";
import ProfileImage from "./ProfileImage";

interface HeaderProps {
	profileImage: string;
	name: string;
	email: string;
	phone: string;
	link: string;
	tagline: string;
	location: string;
}

const Header: React.FC<HeaderProps> = ({
	profileImage,
	name,
	email,
	phone,
	link,
	tagline,
	location,
}) => {
	return (
		<section className='bg-template px-8 pt-12 grid grid-cols-12 gap-8'>
			<div className='text-white col-span-8'>
				<h1 className='text-3xl font-bold'>{name}</h1>
				<p className='font-bold'>{tagline}</p>
				<div className='flex items-center justify-between mt-1'>
					<div className='flex flex-col flex-wrap text-sm'>
						<div className='flex items-center gap-1 text-sm'>
							<Phone className='w-4 h-4' />
							{phone}
						</div>
						<div className='flex items-center gap-1 text-sm'>
							<Link className='w-4 h-4' />
							{link}
						</div>
					</div>
					<div className='flex flex-col flex-wrap text-sm'>
						<div className='flex items-center gap-1 text-sm'>
							<AtSign className='w-4 h-4' />
							{email}
						</div>
						<div className='flex items-center gap-1 text-sm mt-1'>
							<MapPin className='w-4 h-4' />
							{location}
						</div>
					</div>
				</div>
			</div>
			<div className='col-start-10 col-span-3'>
				<ProfileImage imageUrl={profileImage} alt={name} />
			</div>
		</section>
	);
};

export default Header;
