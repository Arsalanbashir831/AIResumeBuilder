"use client";

import { useEffect, useState } from "react";

// List of random quotes
const quotes = [
	"GetSetCV made building my resume so much easier. I can focus on what matters most: my skills and experience.",
	"With GetSetCV, I quickly turned my ideas into a professional, polished resume that stands out.",
	"I love how easy it is to customize and personalize my CV templates on GetSetCV. Highly recommend it!",
	"Creating a CV has never been so effortless. GetSetCV truly speeds up the process and improves the outcome.",
	"Thanks to GetSetCV, my resume looks great and is tailored to the job I'm applying for!",
];

// List of random people
const people = [
	"John Doe",
	"Alice Smith",
	"Mark Johnson",
	"Emily Brown",
	"Chris Williams",
];

const RandomQuote = () => {
	// State to store the random quote and person
	const [randomQuote, setRandomQuote] = useState<string>("");
	const [randomPerson, setRandomPerson] = useState<string>("");

	useEffect(() => {
		// Select a random quote and a random person when the component mounts
		const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
		const randomPersonIndex = Math.floor(Math.random() * people.length);

		setRandomQuote(quotes[randomQuoteIndex]);
		setRandomPerson(people[randomPersonIndex]);
	}, []);

	return (
		<div className='mt-auto'>
			<p className='text-xl italic'>“{randomQuote}”</p>
			<p className='mt-4 text-sm'>{randomPerson}</p>
		</div>
	);
};

export default RandomQuote;
