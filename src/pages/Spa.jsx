import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Sparkles, Scissors, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Spa = () => {
    const [formData, setFormData] = useState({
        petName: "",
        ownerName: "",
        email: "",
        phone: "",
        service: "",
        date: "",
    });

    const services = [
        {
            icon: Scissors,
            title: "Peluquería Profesional",
            description: "Paquete completo de peluquería con baño, corte de pelo y corte de uñas",
            price: "$10.999",
        },
        {
            icon: Sparkles,
            title: "Tratamiento de Spa de Lujo",
            description: "Experiencia de spa premium con aromaterapia y masaje",
            price: "$10.999",
        },
        {
            icon: Heart,
            title: "Chequeo de Bienestar",
            description: "Evaluación de salud y consulta de bienestar",
            price: "$10.999",
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info("¡El sistema de reservas estará disponible pronto!");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Helmet>
                <title>Spa y Cuidado - PetLovers Market</title>
                <meta name="description" content="Servicios profesionales de peluquería y spa para mascotas. Reserva tu cita para tratamientos de lujo y cuidado de bienestar para tus queridas mascotas." />
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
                            <h1 className="text-5xl font-bold mb-4">Servicios de Spa y Bienestar</h1>
                            <p className="text-xl text-muted-foreground">
                                Cuidado y mimos premium para tus queridas mascotas
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
                                    <div className="space-y-6">
                                        {services.map((service, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                            >
                                                <Card className="hover:shadow-lg transition-shadow">
                                                    <CardHeader>
                                                        <div className="flex items-start gap-4">
                                                            <div className="p-3 rounded-full bg-primary/10">
                                                                <service.icon className="h-6 w-6 text-primary" />
                                                            </div>
                                                            <div className="flex-1">
                                                                <div className="flex items-start justify-between">
                                                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                                                    <span className="text-2xl font-bold text-primary">
                                                                        {service.price}
                                                                    </span>
                                                                </div>
                                                                <CardDescription className="mt-2">
                                                                    {service.description}
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                    </CardHeader>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <img alt="Servicio de peluquería para mascotas" src="https://images.unsplash.com/photo-1664837946343-3666ee0b008e" />
                                    <img alt="Tratamiento de spa para mascotas" src="https://images.unsplash.com/photo-1664837946343-3666ee0b008e" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card className="sticky top-24">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            <Calendar className="h-6 w-6 text-primary" />
                                            Reserva tu Cita
                                        </CardTitle>
                                        <CardDescription>
                                            Rellena el formulario y te contactaremos en breve
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="petName">Nombre de la Mascota</Label>
                                                <Input
                                                    id="petName"
                                                    name="petName"
                                                    placeholder="Fido"
                                                    value={formData.petName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="ownerName">Tu Nombre</Label>
                                                <Input
                                                    id="ownerName"
                                                    name="ownerName"
                                                    placeholder="Juan Pérez"
                                                    value={formData.ownerName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Correo Electrónico</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="juan@ejemplo.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Teléfono</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+1 (555) 123-4567"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="service">Servicio</Label>
                                                <Input
                                                    id="service"
                                                    name="service"
                                                    placeholder="Ej: Peluquería Profesional"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="date">Fecha Preferida</Label>
                                                <Input
                                                    id="date"
                                                    name="date"
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <Button type="submit" className="w-full" size="lg">
                                                Reservar Cita
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-muted/30">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h2 className="text-3xl font-bold mb-4">¿Por qué Elegir Nuestro Spa?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Nuestro experimentado equipo de profesionales del cuidado de mascotas utiliza solo los mejores productos y técnicas para garantizar que tu mascota reciba el mejor cuidado posible. Creamos un ambiente tranquilo y sin estrés donde tu mascota puede relajarse y disfrutar de su experiencia de spa.
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <Card>
                                    <CardContent className="pt-6 text-center">
                                        <div className="text-4xl mb-2">🏆</div>
                                        <h3 className="font-semibold mb-2">Galardonado</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Reconocidos por la excelencia en el cuidado de mascotas
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="pt-6 text-center">
                                        <div className="text-4xl mb-2">👨‍⚕️</div>
                                        <h3 className="font-semibold mb-2">Personal Experto</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Profesionales certificados y con experiencia
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardContent className="pt-6 text-center">
                                        <div className="text-4xl mb-2">💚</div>
                                        <h3 className="font-semibold mb-2">Productos Naturales</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Tratamientos ecológicos y seguros para mascotas
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default Spa;