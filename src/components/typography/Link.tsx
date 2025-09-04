import { cn } from "@/utils";
import { LinkProps } from "./types";
import { SquareArrowOutUpRight } from "lucide-react";
import { buttonVariants } from "../button";
import { VariantProps } from "class-variance-authority";

export function Link({
    href,
    variant,
    size,
    className,
    // active,
    children,
    external,
    ...props
}: LinkProps & VariantProps<typeof buttonVariants>) {
    return (
        <a
            {...props}
            href={href}
            className={cn(
                buttonVariants({
                    variant: variant || "link",
                    size: size || "link",
                    className,
                })
            )}
        >
            {children}
            {external && (
                <SquareArrowOutUpRight
                    className={cn("inline-block", "w-3", "h-3", "ml-1")}
                />
            )}
        </a>
    );
}
