import { Header, Heading, Main, Share } from "@/components";
import { cn } from "@/utils";
import { JSONSchemaType } from "ajv";
import { useMemo } from "react";

type ShareFields = {
    name: string;
    email: string;
    friends: Array<{
        name: string;
        email: string;
    }>;
    message: string;
};

export default function Page() {
    const schema = useMemo(() => {
        const schema: JSONSchemaType<ShareFields> = {
            type: "object",
            properties: {
                name: {
                    type: "string",
                    title: "Nome",
                },
                email: {
                    type: "string",
                    title: "Email",
                    format: "email",
                },
                friends: {
                    type: "array",
                    title: "Amigos",
                    items: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                title: "Nome",
                            },
                            email: {
                                type: "string",
                                title: "Email",
                                format: "email",
                            },
                        },
                        required: ["name", "email"],
                        additionalProperties: false,
                    },
                },
                message: {
                    type: "string",
                    title: "Mensagem",
                },
            },
            required: ["name", "email"],
            additionalProperties: false,
        };

        return schema;
    }, []);

    return (
        <Main>
            <Header />
            <Heading
                level={1}
                className={cn(
                    "font-mono",
                    "text-center",
                    "mx-4",
                    "relative",
                    "mb-10",
                )}
            >
                Agradecemos a sua inscrição!
            </Heading>
            <Share
                ctaID={"cta-newsletter"}
                schema={schema}
                submitLabel="Enviar"
                includeListIds={[7]}
                templateId={3}
                redirectionUrl="https://elucidario.art/inscricao-confirmada"
                addValuesToParams={true}
            />
        </Main>
    );
}
