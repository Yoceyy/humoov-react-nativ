import React, { createContext, useContext, useState, ReactNode } from 'react';

// Définition du type utilisateur
type User = {
  username: string;
  avatar: string; // Peut être une URL ou un chemin local
};

// Définition du type du contexte
type UserContextType = {
  user: User;
  setUser: (user: User) => void;
};

// Création du contexte avec une valeur par défaut
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider pour englober l'application et gérer l'état utilisateur
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({
    username: 'mamos',
    avatar: require('../assets/images/avatar_mamos.jpg'), // Mocké en local
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte plus facilement
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser doit être utilisé dans un UserProvider');
  }
  return context;
};