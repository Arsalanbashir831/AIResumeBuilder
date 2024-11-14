import React from "react";
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
		<div className='text-center mb-6'>
			<ProfileImage imageUrl={profileImage} alt={name} />
			<h1 className='text-2xl font-bold mb-1'>{name}</h1>
			<p className='text-gray-600 mb-2'>{tagline}</p>
			<div className='flex justify-center items-center gap-4 text-sm text-gray-600'>
				<span>{phone}</span>
				<span>•</span>
				<span>{email}</span>
				<span>•</span>
				<span>{link}</span>
				<span>•</span>
				<span>{location}</span>
			</div>
		</div>
	);
};

export default Header;
