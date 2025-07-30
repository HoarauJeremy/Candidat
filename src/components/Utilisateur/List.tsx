import useFetchData from "@Utils/FetchData.ts";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@Components/ui/tabs.tsx";
import Candidature from "@Components/Utilisateur/Candidature.tsx";

/*type Utilisateur = {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  typeUtilisateur: string;
  telephone: string;
  dateNaissance: string;
  // documents: string;
  // commune: string;
  // candidature: string;
}*/

const List = () => {
  /*const { data, loading, error } = useFetchData('utilisateur');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })*/

  /*return (
    <ul>
      {data?.map((utilisateur: Utilisateur) => (
        <li key={utilisateur.id}>{utilisateur.id} - {utilisateur.nom} {utilisateur.prenom} {utilisateur.email} {utilisateur.typeUtilisateur} {utilisateur.telephone} {utilisateur.dateNaissance}</li>
      ))}
    </ul>
  )*/

  return (
    <div className={"mx-auto md:w-11/12 flex flex-col justify-center items-center text-white"}>
      <div className="flex flex-col items-center justify-center rounded-t-md bg-primary w-full gap-y-5 py-8">
        {/*<img src="" alt=""/>*/}
        <div className="rounded-full w-48 h-48 md:w-36 md:h-36 bg-accent-foreground"></div>
        <h1 className={"text-4xl font-semibold"}>John Doe</h1>
      </div>

      <div className="bg-secondary min-h-48 h-full text-black">
        <Tabs defaultValue="candidature">
          <TabsList>
            <TabsTrigger value="candidature">Mes candidature</TabsTrigger>
            <TabsTrigger value="information">Mes informations</TabsTrigger>
            <TabsTrigger value="">...</TabsTrigger>
          </TabsList>
          <TabsContent value="candidature"><Candidature /></TabsContent>
          <TabsContent value="information">Information</TabsContent>
          <TabsContent value="">...</TabsContent>
        </Tabs>
      </div>

    </div>
  )
}
export default List;