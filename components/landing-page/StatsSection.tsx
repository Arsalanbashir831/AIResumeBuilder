"use client";

import {
	animate,
	useInView,
	useMotionValue,
	useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers once when visible

	// Motion values for animated numbers
	const usersCount = useMotionValue(0);
	const timeCount = useMotionValue(0);

	// Local states to hold readable values
	const [users, setUsers] = useState(0);
	const [time, setTime] = useState(0);

	// Transforming motion values to rounded numbers
	const usersRounded = useTransform(usersCount, (latest) => Math.round(latest));
	const timeRounded = useTransform(timeCount, (latest) => Math.round(latest));

	useEffect(() => {
		if (isInView) {
			// Animate the numbers when in view
			animate(usersCount, 200, { duration: 2, ease: "easeOut" });
			animate(timeCount, 3, { duration: 1, ease: "easeOut" });

			// Sync motion values with state to trigger re-renders
			const usersUnsubscribe = usersRounded.on("change", (v) => setUsers(v));
			const timeUnsubscribe = timeRounded.on("change", (v) => setTime(v));

			// Cleanup listeners
			return () => {
				usersUnsubscribe();
				timeUnsubscribe();
			};
		}
	}, [isInView, usersCount, timeCount, usersRounded, timeRounded]);

	return (
		<div ref={ref}>
			<p className='text-sm text-muted-foreground mt-8 mb-2'>Our Stats</p>
			<div className='flex items-center gap-8'>
				<div>
					<h3 className='text-3xl font-bold'>{users}+</h3>
					<p className='text-xs text-muted-foreground'>Users</p>
				</div>
				<div className='border-r border-gray-800 h-14' />
				<div>
					<h3 className='text-3xl font-bold'>{time} mins</h3>
					<p className='text-xs text-muted-foreground'>
						Average resume building time
					</p>
				</div>
			</div>
		</div>
	);
}
