import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useProducts } from "@/hooks/useProducts";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

const Shop = () => {
    const { data: products, isLoading } = useProducts();
    const { addItem } = useCartStore();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    const categories = [
        { value: "all", label: "Todos", icon: "🐾" },
        { value: "dogs", label: "Perros", icon: "🐶" },
        { value: "cats", label: "Gatos", icon: "🐱" },
        { value: "birds", label: "Pájaros", icon: "🐦" },
        { value: "fish", label: "Peces", icon: "🐠" },
    ];

    const filteredProducts = products
        ?.filter((p) => selectedCategory === "all" || p.category === selectedCategory)
        ?.sort((a, b) => {
            if (sortBy === "price-low") return a.price - b.price;
            if (sortBy === "price-high") return b.price - a.price;
            if (sortBy === "rating") return b.rating - a.rating;
            return a.name.localeCompare(b.name);
        }) || [];

    const handleAddToCart = (product) => {
        addItem(product);
        toast.success(`${product.name} ha sido añadido a tu carrito.`);
    };

    return (
        <>
            <Helmet>
                <title>Tienda - PetLovers Market</title>
                <meta name="description" content="Explora nuestra amplia selección de comida premium para perros, gatos, pájaros y peces. Productos de calidad de marcas de confianza." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className="bg-gradient-to-br from-primary/10 to-background py-12">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1 className="text-5xl font-bold mb-4">Compra Comida Premium para Mascotas</h1>
                            <p className="text-xl text-muted-foreground">
                                Nutrición de calidad para cada mascota
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container-custom">
                        <div className="flex flex-col md:flex-row gap-6 mb-8">
                            <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-4">
                                {categories.map((category) => (
                                    <motion.div
                                        key={category.value}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Button
                                            variant={selectedCategory === category.value ? "default" : "outline"}
                                            className="w-full h-auto py-4 flex flex-col gap-2"
                                            onClick={() => setSelectedCategory(category.value)}
                                        >
                                            <span className="text-2xl">{category.icon}</span>
                                            <span className="text-sm">{category.label}</span>
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Select value={sortBy} onValueChange={setSortBy}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Ordenar por" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="name">Nombre</SelectItem>
                                        <SelectItem value="price-low">Precio: Bajo a Alto</SelectItem>
                                        <SelectItem value="price-high">Precio: Alto a Bajo</SelectItem>
                                        <SelectItem value="rating">Valoración</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {isLoading ? (
                                Array.from({ length: 8 }).map((_, i) => (
                                    <Card key={i} className="animate-pulse">
                                        <div className="h-48 bg-muted rounded-t-2xl" />
                                        <CardContent className="p-4 space-y-2">
                                            <div className="h-4 bg-muted rounded" />
                                            <div className="h-4 bg-muted rounded w-2/3" />
                                            <div className="h-10 bg-muted rounded" />
                                        </CardContent>
                                    </Card>
                                ))
                            ) : filteredProducts.length === 0 ? (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-xl text-muted-foreground">
                                        No se encontraron productos en esta categoría.
                                    </p>
                                </div>
                            ) : (
                                filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        whileHover={{ y: -8 }}
                                    >
                                        <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                                            <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                                                <span className="text-6xl">
                                                    {product.category === "dogs" && "🐶"}
                                                    {product.category === "cats" && "🐱"}
                                                    {product.category === "birds" && "🐦"}
                                                    {product.category === "fish" && "🐠"}
                                                </span>
                                            </div>
                                            <CardContent className="p-4 flex-1 flex flex-col">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold mb-1">{product.name}</h3>
                                                    <p className="text-xs text-muted-foreground mb-2">
                                                        {product.brand} • {product.weight}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mb-3">
                                                        {product.description}
                                                    </p>
                                                    <div className="flex items-center gap-1 mb-3">
                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm font-medium">{product.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="text-2xl font-bold text-primary">
                                                        ${product.price}
                                                    </span>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => handleAddToCart(product)}
                                                        className="gap-2"
                                                    >
                                                        <ShoppingCart className="h-4 w-4" />
                                                        Añadir
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Shop;