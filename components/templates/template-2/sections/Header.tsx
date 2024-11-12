import React from "react";

interface HeaderProps {
	name: string;
	email: string;
	phone: string;
	link: string;
	tagline: string;
}

const Header: React.FC<HeaderProps> = ({
	name,
	email,
	phone,
	link,
	tagline,
}) => {
	return (
		<div className='text-center mb-6'>
			<div className='w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200' />
			<h1 className='text-2xl font-bold mb-1'>{name}</h1>
			<p className='text-gray-600 mb-2'>{tagline}</p>
			<div className='flex justify-center items-center gap-4 text-sm text-gray-600'>
				<span>{phone}</span>
				<span>•</span>
				<span>{email}</span>
				<span>•</span>
				<span>{link}</span>
			</div>
		</div>
	);
};

export default Header;
