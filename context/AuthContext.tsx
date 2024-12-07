"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { login as apiLogin, register as apiRegister, getUserData, refreshAccessToken, tokenVerification } from "@/app/api/authentication";

import Spinner from "@/components/ui/Spinner";

interface AuthContextType {
    user: User | null; 
    login: (email: string, password: string) => Promise<void>; 
    logout: () => void; 
    register: (email: string, password: string, name: string) => Promise<void>;
    isAuthenticated: boolean; 
}

interface User {
    id: string;
    email: string;
    name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const isAuthenticated = !!user;
    const pathname = usePathname();
    useEffect(() => {
        const verifyAndFetchUser = async () => {
          const authToken = localStorage.getItem("accessToken");
          const refreshToken = localStorage.getItem("refreshToken");
          if (!authToken) {    
          
            if (pathname !== "/signup" && pathname !== '/' ) router.push("/signin");
            setLoading(false);
            return;
          }
    
          try {
            // Verify the access token
            const status = await tokenVerification(authToken);
    
            if (status === 200) {
              // Token is valid, fetch user data
              const userData = await getUserData(authToken);
              setUser(userData);
            } else {
              throw new Error("Token verification failed");
            }
          } catch (error) {
            console.log("Token verification error:", error);
            try {
              const newAuthToken = await refreshAccessToken(refreshToken);
              localStorage.setItem("accessToken", newAuthToken.access);
              const userData = await getUserData(newAuthToken);
              setUser(userData);
            } catch (refreshError) {
              console.log("Token refresh error:", refreshError);
    
              // Redirect to sign-in page if refresh fails
              if (pathname !== "/signin" ) {
                router.push("/signin");
              }
              
            }
          } finally {
            setLoading(false);
          }
        };

       
            verifyAndFetchUser();
     
      }, [pathname, router]);

    const login = async (email: string, password: string) => {
        try {
            const data = await apiLogin(email, password); 
            console.log('data', data);
            setUser(data.user);
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            router.push("/dashboard");
    
        } catch (error: any) {
            console.log("Login error:", error);
            throw error.detail || "Login failed";
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/signin");
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            await apiRegister(email, password, name);
            router.push("/signin");
        } catch (error: any) {
            console.log("Registration error:", error);
            throw error?.detail || "Registration failed";
        }
    };


    if (loading) {
        return <div className="flex justify-center items-center h-screen">
        <Spinner size={12} color="blue-500" />
      </div>; 
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
