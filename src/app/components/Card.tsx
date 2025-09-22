import { useRouter } from "next/navigation";
import { Service } from "@/services/authorService";
import { useState } from "react";


interface CardProps {
  id: number;
  name: string;
  description: string;
  birthDate: string;
  imageUrl: string;
  onDelete?: () => void;
  onFavorite?: () => void;
  favoriteAuthors: Service[];
}


const Card = ({ id, name, description, imageUrl, birthDate, onDelete, onFavorite, favoriteAuthors }: CardProps) => {
  const router = useRouter();
  const isFav = favoriteAuthors.map(a => a.id).includes(id);

  

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm">
      <img
        src={imageUrl}
        alt={`Imagen para ${name}`}
        width={400}
        height={256}
        className="w-full h-88 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-gray-700">{birthDate}</p>
      </div>
      <div className="flex flex-col gap-3 mt-2">
        <button
          aria-label='bontón para editar autor'
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded focus:outline-blue-500 focus:outline-offset-2"
          onClick={() => router.push(`/authors/${id}/edit`)}
        >
          Editar
        </button>
        <button
          aria-label='bontón para eliminar un autor'
          aria-pressed="false"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded focus:outline-blue-500 focus:outline-offset-2"
          onClick={onDelete}
        >
          Eliminar
        </button>
        <button
          aria-label={`bontón para ${isFav ? "desmarcar" : "marcar"} autor como favorito`}
          className={`mt-2 px-4 py-2 rounded ${isFav ? "bg-yellow-500" : "bg-blue-500"} text-white focus:outline-blue-500 focus:outline-offset-2`}
          onClick={onFavorite}
          aria-pressed={isFav}
        >
          {isFav ? "Desmarcar como favorito" : "Marcar como favorito"}
        </button>
      </div>
    </div>
  );
}

export default Card;