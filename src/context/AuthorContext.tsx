"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Service, fetchAuthorService } from "@/services/authorService";

type AuthorContextType = {
  authors: Service[];
  addAuthor: (author: Service) => void;
  updateAuthor: (author: Service) => void;
  deleteAuthor: (authorId: number) => void;
  favoriteAuthors: Service[];
  addFavoriteAuthor: (author: Service) => void;
   removeFavoriteAuthor: (authorId: number) => void;
};

const AuthorContext = createContext<AuthorContextType | undefined>(undefined);


export function AuthorProvider({ children }: { children: ReactNode }) {
  const [authors, setAuthors] = useState<Service[]>([]);
  const [favoriteAuthors, setFavoriteAuthors] = useState<Service[]>([]);

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

  const updateAuthor = (updatedAuthor: Service) => {
    setAuthors((prev) =>
      prev.map((author) =>
        author.id === updatedAuthor.id ? updatedAuthor : author
      )
    );
  };

  const deleteAuthor = (authorId: number) => {
  setAuthors((prev) => prev.filter((author) => author.id !== authorId));
};

  const addFavoriteAuthor = (author: Service) => {
  setFavoriteAuthors((prev) => {
    if (prev.some((fav) => fav.id === author.id)) return prev;
    return [...prev, author];
  });
};

  const removeFavoriteAuthor = (authorId: number) => {
  setFavoriteAuthors((prev) => prev.filter((fav) => fav.id !== authorId));
};

  return (
    <AuthorContext.Provider value={{ authors, addAuthor, updateAuthor, deleteAuthor, favoriteAuthors, addFavoriteAuthor,removeFavoriteAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
}

export function useAuthors() {
  const context = useContext(AuthorContext);
  if (!context) throw new Error("useAuthors debe ser usado dentro de AuthorProvider");
  return context;
}