import React from "react";
import ProfileImage from "./ProfileImage";

interface HeaderProps {
	name: string;
	email: string;
	phone: string;
	link: string;
	// tagline: string;
}

const Header: React.FC<HeaderProps> = ({
	name,
	email,
	phone,
	link,
	// tagline,
}) => {
	return (
		<header className='grid grid-cols-12 gap-6'>
			<aside className='col-span-3 bg-gray-900 text-white px-6 pt-6'>
				<ProfileImage
					imageUrl='/images/avatar.jpg'
					alt={name
						.split(" ")
						.slice(0, 2)
						.map((part) => part.charAt(0))
						.join("")}
				/>
			</aside>
			<div className='col-span-9 py-6 px-2'>
				<h1 className='text-3xl font-bold mb-4'>{name}</h1>
				<address className='space-y-2 not-italic'>
					{/* <div className='flex'>
						<p className='font-semibold'>Address:</p>
						<p className='ml-2'>Your Address</p>
					</div> */}
					<div className='flex'>
						<p className='font-semibold'>Phone Number:</p>
						<p className='ml-2'>{phone}</p>
					</div>
					<div className='flex'>
						<p className='font-semibold'>Email Address:</p>
						<p className='ml-2'>{email}</p>
					</div>
					<div className='flex'>
						<p className='font-semibold'>Web:</p>
						<p className='ml-2'>{link}</p>
					</div>
				</address>
			</div>
		</header>
	);
};

export default Header;
