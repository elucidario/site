import { cn } from "@/utils";
import { TextProps } from "./types";

export function Text({ ref, children, className, ...props }: TextProps) {
    return (
        <p
            ref={ref}
            {...props}
            className={cn(
                "font-sans",
                "text-base",
                "text-dark dark:text-light",
                "md:text-lg",
                className
            )}
        >
            {children}
        </p>
    );
}
