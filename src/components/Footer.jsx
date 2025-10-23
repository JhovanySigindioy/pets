import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        toast({
            title: " ¡La suscripción al boletín estará disponible pronto!",
            description: "Esta funcionalidad aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! ",
        });
    };

    return (
        <footer className="bg-muted/50 border-t mt-20">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <span className="text-2xl font-bold text-primary">🐾 PetLovers</span>
                        <p className="text-sm text-muted-foreground">
                            Tu socio de confianza para comida y servicios de cuidado premium para mascotas.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon">
                                <Facebook className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Instagram className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Twitter className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">Enlaces Rápidos</span>
                        <div className="space-y-2">
                            <Link to="/shop" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                                Tienda
                            </Link>
                            <Link to="/spa" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                                Spa y Cuidado
                            </Link>
                            <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                                Sobre Nosotros
                            </Link>
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">Contacto</span>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Calle Flasa 123</p>
                            <p>Ciudad Flasa, CM 12345</p>
                            <p>contacto@petlovers.com</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div>
                        <span className="font-semibold mb-4 block">Boletín</span>
                        <p className="text-sm text-muted-foreground mb-4">
                            ¡Suscríbete para ofertas exclusivas y consejos de cuidado para mascotas!
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                            <Input type="email" placeholder="Tu correo electrónico" required />
                            <Button type="submit" className="w-full">
                                <Mail className="h-4 w-4 mr-2" />
                                Suscribirse
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 PetLovers Market. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;