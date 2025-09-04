import { SystemProvider } from "@/provider";

export default function Layout({ children }: React.PropsWithChildren) {
    return <SystemProvider>{children}</SystemProvider>;
}
