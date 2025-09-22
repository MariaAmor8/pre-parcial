"use client";
import { useAuthors } from "@/context/AuthorContext";
import EditForm from "./EditForm";
import { use } from "react";

export default function EditAuthorPage({ params }: { params: Promise<{ authorId: string }> }) {
  const { authors } = useAuthors();
  const { authorId } = use(params);
  const author = authors.find(a => a.id === Number(authorId));

  if (!author) {
    return <div className="p-8 text-red-500">Autor no encontrado</div>;
  }

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Editar Autor</h1>
      <EditForm
        authorId={author.id}
        authorName={author.name}
        authorDescription={author.description}
        authorBirthDate={author.birthDate}
        authorImageUrl={author.image}
      />
    </main>
  );
}