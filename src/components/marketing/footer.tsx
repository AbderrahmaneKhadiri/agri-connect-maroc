export default function Footer() {
    return (
        <footer className="border-t bg-slate-50 py-8">
            <div className="container mx-auto px-4 text-center text-slate-600">
                <p className="mb-2">&copy; {new Date().getFullYear()} AgriConnect Maroc. Tous droits réservés.</p>
                <div className="text-sm space-x-4">
                    <a href="#" className="hover:underline">Conditions d'utilisation</a>
                    <a href="#" className="hover:underline">Politique de confidentialité</a>
                </div>
            </div>
        </footer>
    );
}