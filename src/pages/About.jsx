import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";


const About = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.info("¡El formulario de contacto estará disponible pronto!");
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Teléfono",
            value: "+1 (555) 123-4567",
            link: "tel:+15551234567",
        },
        {
            icon: Mail,
            title: "Correo Electrónico",
            value: "contacto@petlovers.com",
            link: "mailto:contacto@petlovers.com",
        },
        {
            icon: MapPin,
            title: "Dirección",
            value: "Calle Mascota 123, Ciudad Mascota, CM 12345",
            link: "#",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Sobre Nosotros - PetLovers Market</title>
                <meta name="description" content="Conoce PetLovers Market, tu socio de confianza para comida y servicios de cuidado premium para mascotas. Contáctanos para cualquier consulta." />
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
                            <h1 className="text-5xl font-bold mb-4">Sobre PetLovers Market</h1>
                            <p className="text-xl text-muted-foreground">
                                Tu socio de confianza en el cuidado de mascotas desde 2020
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <h2 className="text-4xl font-bold">Nuestra Historia</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    PetLovers Market se fundó con una misión simple: proporcionar a los dueños de mascotas la comida y los servicios de cuidado de la más alta calidad para sus queridos compañeros. Entendemos que las mascotas son familia y no merecen nada más que lo mejor.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A lo largo de los años, hemos establecido sólidas relaciones con marcas premium de alimentos para mascotas y hemos reunido a un equipo de apasionados profesionales del cuidado de mascotas. Nuestro compromiso con la calidad, el servicio al cliente y el bienestar animal nos ha convertido en un nombre de confianza en la comunidad.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Ya sea que estés comprando comida nutritiva o reservando una cita en el spa, estamos aquí para asegurarnos de que tu mascota reciba el cuidado y la atención que merece.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <img alt="Mascotas felices en PetLovers Market" src="https://images.unsplash.com/photo-1517793576098-855d319fa8cf" />
                                <img alt="Profesionales del cuidado de mascotas" src="https://images.unsplash.com/photo-1697854517643-db7d8c9f642e" />
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
                            className="text-center mb-12"
                        >
                            <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
                            <p className="text-xl text-muted-foreground">
                                Lo que nos impulsa cada día
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    emoji: "❤️",
                                    title: "Amor por los Animales",
                                    description: "Cada decisión que tomamos está guiada por nuestro profundo amor y respeto por todas las mascotas.",
                                },
                                {
                                    emoji: "🌟",
                                    title: "Calidad Primero",
                                    description: "Nunca comprometemos la calidad, ofreciendo solo los mejores productos y servicios.",
                                },
                                {
                                    emoji: "🤝",
                                    title: "Atención al Cliente",
                                    description: "Tu satisfacción y la felicidad de tu mascota son nuestras principales prioridades.",
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="text-5xl">{value.emoji}</div>
                                            <h3 className="text-xl font-semibold">{value.title}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl font-bold mb-8">Ponte en Contacto</h2>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Card className="hover:shadow-lg transition-shadow">
                                                <CardContent className="p-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="p-3 rounded-full bg-primary/10">
                                                            <info.icon className="h-6 w-6 text-primary" />
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold mb-1">{info.title}</p>
                                                            <a
                                                                href={info.link}
                                                                className="text-muted-foreground hover:text-primary transition-colors"
                                                            >
                                                                {info.value}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Nombre</Label>
                                                <Input id="name" placeholder="Tu nombre" required />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Correo Electrónico</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="tu@email.com"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Asunto</Label>
                                                <Input id="subject" placeholder="¿Cómo podemos ayudarte?" required />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Mensaje</Label>
                                                <textarea
                                                    id="message"
                                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="Tu mensaje..."
                                                    required
                                                />
                                            </div>

                                            <Button type="submit" className="w-full" size="lg">
                                                <Send className="mr-2 h-4 w-4" />
                                                Enviar Mensaje
                                            </Button>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};

export default About;