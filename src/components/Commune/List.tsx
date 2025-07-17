import useFetchData from "@Utils/FetchData.ts";

type Commune = {
  id: number;
  nom: string;
  codePostal: string;
  departement: string;
  region: string;
  pays: string;
}

const List = () => {
  const { data, loading, error } = useFetchData('communes');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((commune: Commune) => (
        <li key={commune.id}>{commune.id} - {commune.nom} {commune.codePostal} {commune.departement} {commune.region} {commune.pays}</li>
      ))}
    </ul>
  )
}
export default List;