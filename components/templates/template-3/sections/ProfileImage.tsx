import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileImage = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => (
	<div className='flex flex-col items-center mb-8'>
		<Avatar className='w-32 h-32 rounded-full mb-4 overflow-hidden text-black'>
			<AvatarImage src={imageUrl} alt='avatar' />
			<AvatarFallback className='flex items-center justify-center w-full h-full bg-gray-700 text-white font-bold text-lg'>
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
