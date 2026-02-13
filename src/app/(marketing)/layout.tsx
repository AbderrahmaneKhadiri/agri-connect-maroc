import AgriNavbar from "@/components/marketing/navbar"; // Vérifie l'import
import Footer from "@/components/marketing/footer";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <AgriNavbar />
            {/* On ajoute pt-24 pour ne pas que la navbar cache le contenu */}
            <main className="flex-1 pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
}