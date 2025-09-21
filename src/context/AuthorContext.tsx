"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Service, fetchAuthorService } from "@/services/authorService";

type AuthorContextType = {
  authors: Service[];
  addAuthor: (author: Service) => void;
};

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);

export function AuthorProvider({ children }: { children: ReactNode }) {
  const [authors, setAuthors] = useState<Service[]>([]);

  useEffect(() => {
    async function loadAuthors() {
      const apiAuthors = await fetchAuthorService();
      setAuthors(apiAuthors);
    }
    loadAuthors();
  }, []);

  const addAuthor = (author: Service) => {
    setAuthors((prev) => [...prev, author]);
  };

  return (
    <AuthorContext.Provider value={{ authors, addAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
}

export function useAuthors() {
  const context = useContext(AuthorContext);
  if (!context) throw new Error("useAuthors debe ser usado dentro de AuthorProvider");
  return context;
}