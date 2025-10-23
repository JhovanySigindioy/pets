import { useQuery } from '@tanstack/react-query';

const mockProducts = [
    {
        id: 1,
        name: 'Pienso Premium para Perro',
        category: 'dogs',
        price: 49.99,
        brand: 'PetPro',
        weight: '15kg',
        description: 'Nutrición de alta calidad para perros adultos',
        rating: 4.8,
    },
    {
        id: 2,
        name: 'Comida Gourmet para Gato',
        category: 'cats',
        price: 39.99,
        brand: 'FelineFresh',
        weight: '10kg',
        description: 'Deliciosas comidas para tu amigo felino',
        rating: 4.9,
    },
    {
        id: 3,
        name: 'Mezcla de Semillas para Pájaros',
        category: 'birds',
        price: 19.99,
        brand: 'BirdBest',
        weight: '5kg',
        description: 'Mezcla nutritiva de semillas para todo tipo de pájaros',
        rating: 4.6,
    },
    {
        id: 4,
        name: 'Escamas para Peces',
        category: 'fish',
        price: 12.99,
        brand: 'AquaLife',
        weight: '500g',
        description: 'Escamas premium para peces tropicales',
        rating: 4.7,
    },
    {
        id: 5,
        name: 'Premios de Entrenamiento para Cachorros',
        category: 'dogs',
        price: 24.99,
        brand: 'PetPro',
        weight: '2kg',
        description: 'Premios saludables para entrenar cachorros',
        rating: 4.9,
    },
    {
        id: 6,
        name: 'Premios Dentales para Gatos',
        category: 'cats',
        price: 18.99,
        brand: 'FelineFresh',
        weight: '1kg',
        description: 'Promueve la salud dental en gatos',
        rating: 4.5,
    },
    {
        id: 7,
        name: 'Pellets para Loros',
        category: 'birds',
        price: 29.99,
        brand: 'BirdBest',
        weight: '3kg',
        description: 'Nutrición completa para loros',
        rating: 4.8,
    },
    {
        id: 8,
        name: 'Comida para Goldfish',
        category: 'fish',
        price: 9.99,
        brand: 'AquaLife',
        weight: '250g',
        description: 'Especialmente formulado para goldfish',
        rating: 4.6,
    },
];

const fetchProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockProducts;
};

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });
};