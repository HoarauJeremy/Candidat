import useFetchData from "@Utils/FetchData.ts";

type Metier = {
  id: number;
  nom: string;
  description: string;
  // offreEmploies: string | string[];
}

const List = () => {
  const { data, loading, error } = useFetchData('metiers');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((metier: Metier) => (
        <li key={metier.id}>{metier.id} - {metier.nom} {metier.description}</li>
      ))}
    </ul>
  )
}
export default List;