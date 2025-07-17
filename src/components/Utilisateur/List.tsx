import useFetchData from "@Utils/FetchData.ts";

type Utilisateur = {
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
}

const List = () => {
  const { data, loading, error } = useFetchData('utilisateur');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((utilisateur: Utilisateur) => (
        <li key={utilisateur.id}>{utilisateur.id} - {utilisateur.nom} {utilisateur.prenom} {utilisateur.email} {utilisateur.typeUtilisateur} {utilisateur.telephone} {utilisateur.dateNaissance}</li>
      ))}
    </ul>
  )
}
export default List;