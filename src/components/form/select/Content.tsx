import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ScrollDownButton, ScrollUpButton } from "./Buttons";

import { cn } from "@/utils";

export function Content({
    ref,
    className,
    children,
    position = "popper",
    ...props
}: SelectPrimitive.SelectContentProps & {
    ref?: React.Ref<HTMLDivElement>;
}) {
    return (
        <SelectPrimitive.Portal>
            <SelectPrimitive.Content
                ref={ref}
                className={cn(
                    "relative",
                    "z-50",
                    "max-h-96",
                    "min-w-[8rem]",
                    "overflow-hidden",
                    "rounded-sm",
                    "border",
                    "border-zinc-200",
                    "bg-white",
                    "text-zinc-950",
                    "shadow-md",
                    "data-[state=open]:animate-in",
                    "data-[state=closed]:animate-out",
                    "data-[state=closed]:fade-out-0",
                    "data-[state=open]:fade-in-0",
                    "data-[state=closed]:zoom-out-95",
                    "data-[state=open]:zoom-in-95",
                    "data-[side=bottom]:slide-in-from-top-2",
                    "data-[side=left]:slide-in-from-right-2",
                    "data-[side=right]:slide-in-from-left-2",
                    "data-[side=top]:slide-in-from-bottom-2",
                    "dark:border-zinc-800",
                    "dark:bg-zinc-950",
                    "dark:text-zinc-50",
                    position === "popper" && "data-[side=bottom]:translate-y-1",
                    "data-[side=left]:-translate-x-1",
                    "data-[side=right]:translate-x-1",
                    "data-[side=top]:-translate-y-1",
                    className,
                )}
                position={position}
                {...props}
            >
                <ScrollUpButton />
                <SelectPrimitive.Viewport
                    className={cn(
                        "p-1",
                        position === "popper" &&
                            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                    )}
                >
                    {children}
                </SelectPrimitive.Viewport>
                <ScrollDownButton />
            </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
    );
}
