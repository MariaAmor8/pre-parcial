import { useRouter } from "next/navigation";


interface CardProps {
  id: number;
  name: string;
  description: string;
  birthDate: string;
  imageUrl: string;
  onDelete?: () => void;
}


const Card = ({id, name, description,imageUrl,birthDate, onDelete}: CardProps) => {
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
    </div>
    );
}

export default Card;