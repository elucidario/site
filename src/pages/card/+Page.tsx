import { Header, Main, Image, Heading, Link, Text, Footer } from "@/components";
import { cn } from "@/utils";
import { VCard } from "./VCard";

export default function Page() {
    const links = [
        {
            href: "https://elucidario.art/",
            title: "Elucidario.art",
        },
        {
            href: "https://linkedin.com/in/hgodinho/",
            title: "LinkedIn",
        },
        {
            href: "https://github.com/hgodinho",
            title: "GitHub",
        },
        {
            href: "http://lattes.cnpq.br/0325402816569874",
            title: "Lattes",
        },
    ];

    return (
        <>
            <Main className="h-screen flex flex-col">
                <Header />
                <div className="flex flex-col gap-4 max-w-md w-full h-full mx-auto">
                    <div className="flex gap-4 h-fit">
                        <Image
                            src={"webp/henrique-godinho.webp"}
                            width={300}
                            height={300}
                            alt="Henrique Godinho"
                            className={cn("size-48", "rounded-full")}
                        />
                        <div className="flex flex-col justify-end items-start">
                            <Heading
                                level={5}
                                className={cn(
                                    "text-center",
                                    "font-mono",
                                    "m-0"
                                )}
                            >
                                {"Henrique Godinho"}
                            </Heading>
                            <Link
                                href={"mailto:henrique@elucidario.art"}
                                className={cn(
                                    "font-mono",
                                    "text-sm",
                                    "lg:text-base"
                                )}
                            >
                                {"henrique@elucidario.art"}
                            </Link>
                            <Text
                                className={cn(
                                    "font-mono",
                                    "text-sm",
                                    "lg:text-base"
                                )}
                            >
                                {"+55 11 99416 7130"}
                            </Text>
                        </div>
                    </div>
                    <div className="h-full mt-24 flex flex-col gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                variant={"pb"}
                                size={"lg"}
                                href={link.href}
                                target="_blank"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className="pb-24">
                        <VCard />
                    </div>
                </div>
            </Main>
            <Footer
                cta={{
                    label: "Inscreva-se",
                    href: "https://elucidario.art/#cta-newsletter",
                }}
            />
        </>
    );
}
