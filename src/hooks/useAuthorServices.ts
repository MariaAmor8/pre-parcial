// src/hooks/useStudentServices.ts
"use client"; // Hooks that use useState/useEffect should be for the client.

import { useState, useEffect } from "react";
import { Service, fetchAuthorService } from "@/services/authorService";

export function useAuthorServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadServices = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchAuthorService();
        setServices(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocurrió un error desconocido.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadServices();
  }, []); 

  return { services, isLoading, error };
}