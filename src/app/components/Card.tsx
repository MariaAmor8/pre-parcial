import { useRouter } from "next/navigation";
import {Service} from "@/services/authorService";


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


const Card = ({id, name, description,imageUrl,birthDate, onDelete, onFavorite, favoriteAuthors}: CardProps) => {
  const router = useRouter();  

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
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push(`/authors/${id}/edit`)}
        >
          Editar
        </button>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onDelete}
        >
          Eliminar
        </button>
        <button
          className={`mt-2 px-4 py-2 rounded ${favoriteAuthors.map(a => a.id).includes(id)? "bg-yellow-500" : "bg-blue-500"} text-white`}
          onClick={onFavorite}
        >
          {favoriteAuthors.map(a => a.id).includes(id)? "Desmarcar como favorito" : "Marcar como favorito"}
        </button>
    </div>
    );
}

export default Card;