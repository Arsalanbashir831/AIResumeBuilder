"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";

interface CarouselItem {
	id: number;
	imageUrl: string;
	title: string;
	focused: boolean;
}

const initialItems: CarouselItem[] = [
	{
		id: 0,
		imageUrl: "/templates/1.png",
		title: "Resume Template 1",
		focused: false,
	},
	{
		id: 1,
		imageUrl: "/templates/3.png",
		title: "Resume Template 2",
		focused: true,
	},
	{
		id: 2,
		imageUrl: "/templates/4.png",
		title: "Resume Template 3",
		focused: false,
	},
];

export default function FocusedCarousel() {
	const [items, setItems] = useState(initialItems);

	const handleClick = useCallback(
		(clickedId: number) => {
			setItems((prevItems) => {
				if (prevItems[1].id === clickedId) return prevItems;

				const clickedIndex = prevItems.findIndex(
					(item) => item.id === clickedId
				);

				const newItems = [...prevItems];
				[newItems[1], newItems[clickedIndex]] = [
					newItems[clickedIndex],
					newItems[1],
				];

				return newItems.map((item, index) => ({
					...item,
					focused: index === 1,
				}));
			});
		},
		[setItems]
	);

	return (
		<div className='relative w-full overflow-hidden py-8'>
			<div className='flex items-center justify-center gap-4'>
				<AnimatePresence mode='wait' initial={false}>
					{items.map((item) => (
						<motion.div
							key={`${item.id}-${item.focused}`}
							layoutId={String(item.id)}
							className='relative cursor-pointer'
							layout
							animate={{
								scale: item.focused ? 1 : 0.8,
								filter: item.focused ? "blur(0px)" : "blur(4px)",
							}}
							transition={{
								type: "spring",
								stiffness: 500,
								damping: 40,
							}}
							onClick={() => handleClick(item.id)}>
							<div className='relative w-[200px] h-[260px] overflow-hidden rounded-lg shadow-xl'>
								<Image
									src={item.imageUrl || "/placeholder.svg"}
									alt={item.title}
									layout='fill'
									objectFit='cover'
								/>
							</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}
