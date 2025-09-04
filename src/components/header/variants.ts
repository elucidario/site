import { cva } from "class-variance-authority";

export const headerVariants = cva(
    [
        "sticky",
        "top-0",
        "flex",
        "flex-col",
        "items-center",
        "justify-between",
        "z-20",
    ],
    {
        variants: {
            color: {
                primary: "text-primary",
                secondary: "text-secondary",
            },
            type: {
                horizontal: [],
                vertical: [],
            },
            theme: {
                light: [],
                dark: [],
            },
        },
        defaultVariants: {
            color: "primary",
            type: "horizontal",
            theme: "light",
        },
    }
);
