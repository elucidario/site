import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
export default {
    // Layout,
    // Head,

    lang: "pt-BR",
    title: "elucidario.art | Sistema de Gestão de Coleções",
    image: "https://elucidario.art/webp/lcdr-banner.webp",
    description:
        "O elucidario.art é um Sistema de Gestão de Coleções em ativo desenvolvimento. Cadastre-se para receber novidades em primeira mão!",
    stream: true,
    extends: vikeReact,
    prerender: true,
    htmlAttributes: {
        class: "scroll-smooth",
    },
} satisfies Config;
