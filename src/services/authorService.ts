// definir la forma de los datos con una interface
export interface Service {
    id: number;
    name: string;
    description: string;
    birthDate: string;
    image: string;
}

// función de fectching
export const fetchAuthorService = async (): Promise<Service[]> => {
    const response = await fetch("http://localhost:8080/api/authors");
    if (!response.ok) {
        throw new Error("Error al obtener los servicios");
    }
    const data = await response.json();
    // Suponiendo que la respuesta ya tiene la forma de Service[]
    return data as Service[];
};

