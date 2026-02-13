import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor } from "lucide-react"; // Une icone de tracteur

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 gap-6 p-4">

      {/* Test d'une carte */}
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Tractor className="h-6 w-6 text-green-600" />
            <CardTitle>Agri-Connect Maroc</CardTitle>
          </div>
          <CardDescription>La connexion directe Agriculteur-Entreprise.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Bienvenue sur la plateforme. Connectez-vous pour voir les offres.
          </p>

          {/* Test du bouton */}
          <Button className="w-full bg-green-700 hover:bg-green-800">
            Commencer maintenant
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}