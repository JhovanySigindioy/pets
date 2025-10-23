import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export const SonnerDemo = () => {
    return (
        <Button
            variant="outline"
            onClick={() => toast.success("Validacion de error ")}
        >
            Show Toast
        </Button>
    )
}
