import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/app/Constant";

interface ModalProps {
  type: "forget password" | "register";
  registerEmail: string;
  initialStep?: number;
  onClose: () => void;
}

const VerificationModal: React.FC<ModalProps> = ({ type, initialStep = 1, onClose, registerEmail }) => {
  const router = useRouter();
  const [step, setStep] = useState<number>(initialStep);
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [resendCount, setResendCount] = useState<number>(0);
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleApiCall = async (url: string, payload: object) => {
    setLoading(true); // Set loading state
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleRequestEmail = async () => {
    const result = await handleApiCall(`${BASE_URL}/api/users/request-password-reset/`, { email });
    if (result) {
      if (type === 'register') {
        setStep(3);
      } else { setStep(2) }
    }
  };

  const handleVerifyOtp = async () => {
    const otpCode = otp.join("");
    const result = await handleApiCall(`${BASE_URL}/api/users/verify-otp/`, { email: email !== "" ? email : registerEmail, otp: otpCode });
    if (result) {
      if (type === "register") {
        alert("Password reset successful");
        router.push("/auth");
      
      }
    }
  };

  const handleResendOtp = async () => {
    if (resendCount >= 5) {
      alert("You have reached the maximum number of resend attempts.");
      return;
    }
    const result = await handleApiCall(`${BASE_URL}/api/users/resend-otp/`, { email: email !== "" ? email : registerEmail });
    if (result) {
      setResendCount((prevCount) => prevCount + 1); // Increment resend count
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const otpCode = otp.join("");
    const result = await handleApiCall(`${BASE_URL}/api/users/reset-password/`, {
      email,
      otp: otpCode,
      new_password: newPassword,
    });
    if (result) {
      alert("Password reset successful");
      onClose();
    }
  };

  const renderLoading = () => (
    <div className="flex items-center justify-center my-4">
      <div className="w-6 h-6 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const renderStepContent = () => {
    if (loading) return renderLoading();

    if (type === "register") {
      return (
        <div>
          <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
          <p className="mb-4 text-gray-600">
            A one-time password (OTP) has been sent to your email. Please enter the 6-digit code below to verify your account.
          </p>
          <div className="flex gap-2 justify-center mb-4">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    const input = e.target.value;
                    if (!/^\d*$/.test(input)) return;

                    newOtp[idx] = input;
                    setOtp(newOtp);

                    // Automatically move to the next input box
                    if (input && idx < otp.length - 1) {
                      const nextSibling = document.getElementById(`otp-${idx + 1}`);
                      if (nextSibling) (nextSibling as HTMLInputElement).focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                      const prevSibling = document.getElementById(`otp-${idx - 1}`);
                      if (prevSibling) (prevSibling as HTMLInputElement).focus();
                    }
                  }}
                  id={`otp-${idx}`}
                  className="w-10 h-10 text-center border border-gray-300 rounded"
                />
              ))}
            </div>
          <button
            disabled={loading || resendCount >= 5}
            onClick={handleResendOtp}
            className={`text-orange-500 hover:underline mb-4 block ${resendCount >= 5 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Resend OTP ({5 - resendCount} attempts left)
          </button>
          <button
            onClick={  handleVerifyOtp}
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Verify OTP
          </button>
        </div>
      );
    }

    // For "forget password", show steps based on the current step.
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter Your Email</h2>
            <p className="mb-4 text-gray-600">
              Please enter the email associated with your account. We will send a verification code to reset your password.
            </p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleRequestEmail}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Send Verification Code
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
            <p className="mb-4 text-gray-600">
              A one-time password (OTP) has been sent to your email. Please enter the 6-digit code below to verify your identity.
            </p>
            <div className="flex gap-2 justify-center mb-4">
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp];
                    const input = e.target.value;
                    if (!/^\d*$/.test(input)) return;

                    newOtp[idx] = input;
                    setOtp(newOtp);

                    // Automatically move to the next input box
                    if (input && idx < otp.length - 1) {
                      const nextSibling = document.getElementById(`otp-${idx + 1}`);
                      if (nextSibling) (nextSibling as HTMLInputElement).focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                      const prevSibling = document.getElementById(`otp-${idx - 1}`);
                      if (prevSibling) (prevSibling as HTMLInputElement).focus();
                    }
                  }}
                  id={`otp-${idx}`}
                  className="w-10 h-10 text-center border border-gray-300 rounded"
                />
              ))}
            </div>
            <button
              disabled={loading || resendCount >= 5}
              onClick={handleResendOtp}
              className={`text-orange-500 hover:underline mb-4 block ${resendCount >= 5 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Resend OTP ({5 - resendCount} attempts left)
            </button>
            <button
              onClick={()=>setStep(3)}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Reset Password
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
            <p className="mb-4 text-gray-600">
              Enter and confirm your new password below. Ensure it is strong and secure.
            </p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={handleResetPassword}
              className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
            >
              Reset Password
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        {renderStepContent()}
      </div>
    </div>
  );
};

export default VerificationModal;
