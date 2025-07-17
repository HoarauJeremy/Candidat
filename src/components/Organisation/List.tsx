import useFetchData from "@Utils/FetchData.ts";

type Organisation = {
  id: number;
  nom: string;
  description: string;
  secteurActivite: string;
  siteWeb: string;
  logo: string;
  email: string;
  telephone: string;
  adresse: string;
  // commune: string;
  // offreEmploie: string;
}

const List = () => {
  const { data, loading, error } = useFetchData('organisations');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((organisation: Organisation) => (
        <li key={organisation.id}>{organisation.id} - {organisation.nom} {organisation.description} {organisation.secteurActivite} {organisation.siteWeb} {organisation.logo} {organisation.email} {organisation.telephone} {organisation.adresse}</li>
      ))}
    </ul>
  )
}
export default List;