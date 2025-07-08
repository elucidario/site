import { cn } from "@/utils";
import type { ArticleProps } from "./types";

export function Article({ children, className, ...props }: ArticleProps) {
    return (
        <article
            {...props}
            className={cn(
                "col-start-1",
                "col-span-2",
                "grid",
                "grid-cols-subgrid",
                className,
            )}
        >
            {children}
        </article>
    );
}
