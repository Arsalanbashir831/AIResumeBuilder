import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Loader2 } from "lucide-react";

interface AiButtonProps {
  onClick?: () => void;
  label?: string;
  loading?: boolean;
  isDisabled?: boolean;
}

const AiButton: React.FC<AiButtonProps> = ({
  label = "Improve with AI",
  onClick,
  loading = false,
  isDisabled = false,
}) => {
  return (
    <Button
      variant="default"
      onClick={onClick}
      disabled={loading || isDisabled} // Disable the button when loading or explicitly disabled
      className="flex items-center space-x-2"
    >
      {loading ? (
        <Loader2 className="animate-spin" size={16} />
      ) : (
        <BrainCircuit size={16} />
      )}
      <span>{loading ? "Generating..." : label}</span>
    </Button>
  );
};

export default AiButton;
