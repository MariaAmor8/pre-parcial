"use client";

import Card from "../components/Card";
import { useAuthors } from "@/context/AuthorContext";

export default function AuthorsPage() {

    const { favoriteAuthors, deleteAuthor, addFavoriteAuthor,removeFavoriteAuthor } = useAuthors();
    
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold">Lista de autores favoritos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {favoriteAuthors.map((author) => (
                    <Card
                        key={author.id}
                        id={author.id}
                        name={author.name}
                        description={author.description}
                        birthDate={author.birthDate}
                        imageUrl={author.image}
                        onDelete={() => deleteAuthor(author.id)}
                        favoriteAuthors={favoriteAuthors}
                        onFavorite={() =>
                            favoriteAuthors.map(a => a.id).includes(author.id)
                                ? removeFavoriteAuthor(author.id)
                                : addFavoriteAuthor(author)
                        }
                    />
                ))}
            </div>
        </div>
    );
}