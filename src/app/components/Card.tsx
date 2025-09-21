//import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  birthDate: string;
  imageUrl: string;
}


const Card = ({name, description,imageUrl,birthDate}: CardProps) => {
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
    </div>
    );
}

export default Card;