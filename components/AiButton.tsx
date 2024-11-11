// components/AiButton.tsx

import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

interface AiButtonProps {
	onClick?: () => void;
	label?: string;
}

const AiButton: React.FC<AiButtonProps> = ({
	label = "Write with AI",
	onClick,
}) => {
	return (
		<Button
			variant='default'
			onClick={onClick}
			className='flex items-center space-x-2'>
			<BrainCircuit size={16} />
			<span>{label}</span>
		</Button>
	);
};

export default AiButton;
