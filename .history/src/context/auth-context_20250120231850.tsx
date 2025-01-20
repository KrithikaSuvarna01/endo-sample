import { createContext, useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";

interface AuthContextType {
  cognitoUser: CognitoUser | null;
  setCognitoUser: (user: CognitoUser | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cognitoUser, setCognitoUser] = useState<CognitoUser | null>(null);
  return (
    <AuthContext.Provider value={{ cognitoUser, setCognitoUser }}>
      {children}
    </AuthContext.Provider>
  );
};

