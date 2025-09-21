"use client";
//import { useAuthorServices } from "@/hooks/useAuthorServices";
import Card from "../components/Card";
import { useAuthors } from "@/context/AuthorContext";

export default function AuthorsPage() {
    //const { services, isLoading, error } = useAuthorServices();
    const { authors } = useAuthors();
    
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold">Authors Listing</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {authors.map((service) => (
                    <Card
                        key={service.id}
                        name={service.name}
                        description={service.description}
                        birthDate={service.birthDate}
                        imageUrl={service.image}
                    />
                ))}
            </div>
        </div>
    );
}