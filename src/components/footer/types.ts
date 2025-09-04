export type CtaLink = {
    label: string;
    href: string;
};

export type FooterProps = React.PropsWithChildren<
    React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement>;
        cta?: CtaLink;
    }
>;
