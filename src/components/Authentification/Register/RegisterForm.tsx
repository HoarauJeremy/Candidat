import {cn} from "@/lib/utils.ts";
import {Button} from "@Components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@Components/ui/card.tsx";
import {Input} from "@Components/ui/input.tsx"
import {Label} from "@Components/ui/label.tsx"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@Components/ui/select.tsx";

enum TypeUtilisateur {
  ELEVE= "Élève",
  ETUDIANT= "Étudiant",
  ALTERNANT= "Alternant",
  APPRENTI= "Apprenti",
  STAGIAIRE= "Stagiaire",
  CHERCHEUR_EMPLOI= "En recherche d’emploi",
  JEUNE_DIPLOME= "Jeune diplômé",
  SALARIE= "Salarié",
  AUTRE= "Autre"
}

const typeUtilisateur: { label: string; value: string }[] = Object.entries(TypeUtilisateur).map(
  ([key, value]) => ({
    label: value,
    value: key
  })
);

const RegisterForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>

      <Card>
        <CardHeader>
          <CardTitle>Register to create your account</CardTitle>
          <CardDescription>
            Enter your information below to register
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="nom">Nom</Label>
                <Input
                  id="nom"
                  type="text"
                  placeholder="Dupont"
                  required
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="prenom">Prénom</Label>
                <Input
                  id="prenom"
                  type="text"
                  placeholder="Jean"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Vous êtes un(e)</Label>
                {/*<Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />*/}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    { typeUtilisateur.map((type) => <SelectItem value={type.value}>{type.label}</SelectItem> )}
                    {/*<SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>*/}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="telephone">Telephone</Label>
                <Input
                  id="telephone"
                  type="tel"
                  placeholder="06 92 00 00 00"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="dateNaissance">Date de naissance</Label>
                <Input
                  id="dateNaissance"
                  type="date"
                  placeholder="01/01/2000"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="motDePasse">Mot de passe</Label>
                </div>
                <Input id="motDePasse" type="password" required/>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Register
                </Button>
                {/*<Button variant="outline" className="w-full">
                  Login with Google
                </Button>*/}
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Have an account?{" "}
              <a href="/auth/login" className="underline underline-offset-4">
                Log in
              </a>
            </div>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}

export default RegisterForm;