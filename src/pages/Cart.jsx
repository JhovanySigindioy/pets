import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";

const Cart = () => {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

    const handleCheckout = () => {
        toast({
            title: "¡El pago estará disponible pronto!",
            description: "Esta funcionalidad aún no está implementada, ¡pero no te preocupes! ¡Puedes solicitarla en tu próximo mensaje! 🚀",
        });
    };

    const handleUpdateQuantity = (id, currentQuantity, change) => {
        const newQuantity = currentQuantity + change;
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    const handleRemoveItem = (item) => {
        removeItem(item.id);
        toast({
            title: "Eliminado del carrito",
            description: `${item.name} ha sido eliminado de tu carrito.`,
        });
    };

    if (items.length === 0) {
        return (
            <>
                <Helmet>
                    <title>Carrito de Compras - PetLovers Market</title>
                    <meta name="description" content="Ve y gestiona los artículos de tu carrito de compras." />
                </Helmet>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="min-h-[60vh] flex items-center justify-center"
                >
                    <div className="text-center space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", duration: 0.6 }}
                        >
                            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground" />
                        </motion.div>
                        <h2 className="text-3xl font-bold">Tu carrito está vacío</h2>
                        <p className="text-muted-foreground">
                            ¡Empieza a comprar para añadir artículos a tu carrito!
                        </p>
                        <Link to="/shop">
                            <Button size="lg">
                                Explorar Productos
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Carrito de Compras - PetLovers Market</title>
                <meta name="description" content="Revisa los artículos seleccionados y procede al pago." />
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
                            <h1 className="text-5xl font-bold mb-4">Carrito de Compras</h1>
                            <p className="text-xl text-muted-foreground">
                                {items.length} {items.length === 1 ? "artículo" : "artículos"} en tu carrito
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-4">
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        exit={{ opacity: 0, x: -20 }}
                                    >
                                        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                                            <CardContent className="p-4">
                                                <div className="flex gap-4">
                                                    <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center flex-shrink-0">
                                                        <span className="text-4xl">
                                                            {item.category === "dogs" && "🐶"}
                                                            {item.category === "cats" && "🐱"}
                                                            {item.category === "birds" && "🐦"}
                                                            {item.category === "fish" && "🐠"}
                                                        </span>
                                                    </div>

                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                                                        <p className="text-sm text-muted-foreground mb-2">
                                                            {item.brand} • {item.weight}
                                                        </p>
                                                        <p className="text-sm text-muted-foreground mb-3">
                                                            {item.description}
                                                        </p>

                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="h-8 w-8"
                                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                </Button>
                                                                <span className="w-12 text-center font-medium">
                                                                    {item.quantity}
                                                                </span>
                                                                <Button
                                                                    size="icon"
                                                                    variant="outline"
                                                                    className="h-8 w-8"
                                                                    onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                </Button>
                                                            </div>

                                                            <div className="flex items-center gap-4">
                                                                <span className="text-xl font-bold text-primary">
                                                                    ${(item.price * item.quantity).toFixed(2)}
                                                                </span>
                                                                <Button
                                                                    size="icon"
                                                                    variant="ghost"
                                                                    className="text-destructive hover:text-destructive"
                                                                    onClick={() => handleRemoveItem(item)}
                                                                >
                                                                    <Trash2 className="h-4 w-4" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card className="sticky top-24">
                                    <CardContent className="p-6 space-y-6">
                                        <h2 className="text-2xl font-bold">Resumen del Pedido</h2>

                                        <div className="space-y-3">
                                            <div className="flex justify-between text-muted-foreground">
                                                <span>Subtotal</span>
                                                <span>${getTotalPrice().toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-muted-foreground">
                                                <span>Envío</span>
                                                <span>Gratis</span>
                                            </div>
                                            <div className="border-t pt-3 flex justify-between text-xl font-bold">
                                                <span>Total</span>
                                                <span className="text-primary">${getTotalPrice().toFixed(2)}</span>
                                            </div>
                                        </div>

                                        <Button
                                            size="lg"
                                            className="w-full"
                                            onClick={handleCheckout}
                                        >
                                            Proceder al Pago
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>

                                        <Button
                                            variant="outline"
                                            className="w-full"
                                            onClick={() => {
                                                clearCart();
                                                toast({
                                                    title: "Carrito vaciado",
                                                    description: "Todos los artículos han sido eliminados de tu carrito.",
                                                });
                                            }}
                                        >
                                            Vaciar Carrito
                                        </Button>

                                        <Link to="/shop">
                                            <Button variant="ghost" className="w-full">
                                                Seguir Comprando
                                            </Button>
                                        </Link>
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

export default Cart;