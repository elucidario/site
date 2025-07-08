import { motion } from "motion/react";

import { cn } from "@/utils";

import { Button } from "@/components/button";
import { Heading, Text } from "@/components/typography";
import { useSystemProvider } from "@/provider";
import { featureVariants } from "./variants";
import { FeatureProps } from "./types";

export function Feature({
    inverted,
    title,
    description,
    className,
    cta,
    ctaID,
    ...props
}: FeatureProps) {
    const { theme } = useSystemProvider();

    const transition = {
        offScreen: {
            scale: 1,
        },
        onScreen: {
            scale: 2.5,
        },
    };

    return (
        <section
            className={featureVariants({ inverted, className })}
            {...props}
        >
            <div
                className={cn(
                    "w-1/2",
                    "z-10",
                    "p-2",
                    "flex",
                    "flex-col",
                    inverted ? "items-start" : "items-end",
                )}
            >
                <Heading
                    level={2}
                    className={cn(
                        "font-mono",
                        "pb-4",
                        inverted ? "text-left" : "text-right",
                    )}
                >
                    {title}
                </Heading>
                {cta && (
                    <Button asChild variant={"pb"}>
                        <a href={`#${ctaID}`}>{cta}</a>
                    </Button>
                )}
            </div>

            <div
                className={cn(
                    "absolute",
                    "flex",
                    "w-full",
                    "h-full",
                    "items-center",
                    "justify-center",
                )}
            >
                <motion.div
                    className={cn(
                        "rounded-full",
                        "bg-transparent",
                        "size-32",
                        "lg:size-56",
                    )}
                    variants={transition}
                    viewport={{
                        amount: 0.9,
                    }}
                    initial={"offScreen"}
                    whileInView={"onScreen"}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                    }}
                    style={{
                        background: inverted
                            ? `radial-gradient(circle at 25% 25%, var(--color-secondary-${theme}), var(--color-primary-${theme}))`
                            : `radial-gradient(circle at 75% 75%, var(--color-primary-${theme}), var(--color-secondary-${theme}))`,
                        filter: "blur(10px)",
                    }}
                ></motion.div>
            </div>

            <div
                className={cn(
                    "w-1/2",
                    "z-10",
                    "flex",
                    "flex-col",
                    "gap-2",
                    "p-4",
                    "bg-light/70",
                    "dark:bg-dark/70",
                    "rounded-2xl",
                    "border",
                    inverted
                        ? [
                              "border-secondary-light",
                              "dark:border-secondary-dark",
                              "border-l-4",
                              "border-b-4",
                          ]
                        : [
                              "border-primary-light",
                              "dark:border-primary-dark",
                              "border-r-4",
                              "border-b-4",
                          ],
                )}
            >
                <Text>{description}</Text>
            </div>
        </section>
    );
}
