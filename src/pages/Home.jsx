import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useProducts } from "@/hooks/useProducts";

const Home = () => {
    const { data: products, isLoading } = useProducts();
    const featuredProducts = products?.slice(0, 4) || [];

    const features = [
        {
            icon: Heart,
            title: "Calidad Premium",
            description: "Solo lo mejor para tus queridas mascotas",
        },
        {
            icon: Shield,
            title: "Marcas de Confianza",
            description: "Productos cuidadosamente seleccionados de las mejores marcas",
        },
        {
            icon: Star,
            title: "Cuidado Experto",
            description: "Servicios profesionales de peluquería y spa",
        },
    ];

    const testimonials = [
        {
            name: "Sara García",
            text: "¡Calidad increíble! A mi perro le encanta la comida de aquí.",
            rating: 5,
        },
        {
            name: "Miguel Chen",
            text: "Los servicios de spa son fantásticos. ¡Mi gato nunca ha estado tan guapo!",
            rating: 5,
        },
        {
            name: "Elena Rodríguez",
            text: "Gran selección y entrega rápida. ¡Totalmente recomendado!",
            rating: 5,
        },
    ];

    return (
        <>
            <Helmet>
                <title>PetLovers - Comida y Cuidado Premium para Mascotas</title>
                <meta name="description" content="Tu socio de confianza para comida premium y servicios de cuidado profesionales. Compra productos de calidad para perros, gatos, pájaros y peces." />
            </Helmet>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-20 overflow-hidden">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                                    Cuidado Premium para tus
                                    <span className="text-primary"> Amigos Peludos</span>
                                </h1>
                                <p className="text-xl text-muted-foreground">
                                    Descubre comida para mascotas de alta calidad y servicios de peluquería profesionales, todo en un solo lugar.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/shop">
                                        <Button size="lg" className="group">
                                            Comprar Ahora
                                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <Link to="/spa">
                                        <Button size="lg" variant="outline">
                                            Reservar Servicio de Spa
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <img alt="Mascotas felices disfrutando de comida y cuidados premium" src="https://images.unsplash.com/photo-1698077153827-3270e409e524" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-muted/30">
                    <div className="container-custom">
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="text-center hover:shadow-lg transition-shadow">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                                                <feature.icon className="h-8 w-8 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">Productos Destacados</h2>
                            <p className="text-xl text-muted-foreground">
                                Favoritos seleccionados para tus mascotas
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {isLoading ? (
                                Array.from({ length: 4 }).map((_, i) => (
                                    <Card key={i} className="animate-pulse">
                                        <div className="h-48 bg-muted rounded-t-2xl" />
                                        <CardContent className="p-4 space-y-2">
                                            <div className="h-4 bg-muted rounded" />
                                            <div className="h-4 bg-muted rounded w-2/3" />
                                        </CardContent>
                                    </Card>
                                ))
                            ) : (
                                featuredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                    >
                                        <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                                            <div className="relative h-48 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                                                <span className="text-6xl">
                                                    {product.category === "dogs" && "🐶"}
                                                    {product.category === "cats" && "🐱"}
                                                    {product.category === "birds" && "🐦"}
                                                    {product.category === "fish" && "🐠"}
                                                </span>
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="font-semibold mb-2">{product.name}</h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {product.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-2xl font-bold text-primary">
                                                        ${product.price}
                                                    </span>
                                                    <div className="flex items-center gap-1">
                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                        <span className="text-sm">{product.rating}</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center mt-12"
                        >
                            <Link to="/shop">
                                <Button size="lg" variant="outline">
                                    Ver Todos los Productos
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-muted/30">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">Lo que Dicen Nuestros Clientes</h2>
                            <p className="text-xl text-muted-foreground">
                                Con la confianza de miles de amantes de las mascotas
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="hover:shadow-lg transition-shadow">
                                        <CardContent className="p-6 space-y-4">
                                            <div className="flex gap-1">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                            <p className="text-muted-foreground italic">
                                                "{testimonial.text}"
                                            </p>
                                            <p className="font-semibold">- {testimonial.name}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
                    <div className="container-custom text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto space-y-6"
                        >
                            <h2 className="text-4xl font-bold">¿Listo para Mimar a tu Mascota?</h2>
                            <p className="text-xl text-muted-foreground">
                                ¡Explora nuestra gama completa de productos y servicios hoy mismo!
                            </p>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link to="/shop">
                                    <Button size="lg">
                                        Empezar a Comprar
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link to="/spa">
                                    <Button size="lg" variant="outline">
                                        Reservar Cita de Spa
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Home;