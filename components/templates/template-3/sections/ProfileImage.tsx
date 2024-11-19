import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
	<div className='flex flex-col items-center mb-4'>
		<Avatar className='w-64 h-64 rounded-none mb-4 overflow-hidden text-black'>
			<AvatarImage src={imageUrl} alt='avatar' />
			<AvatarFallback className='rounded-none flex items-center justify-center w-full h-full bg-template text-white font-bold text-lg'>
				{alt
					.split(" ")
					.slice(0, 2)
					.map((part) => part.charAt(0))
					.join("")}
			</AvatarFallback>
		</Avatar>
	</div>
);

export default ProfileImage;
