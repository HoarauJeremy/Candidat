import useFetchData from "@Utils/FetchData.ts";

type offreEmploie = {
  id: number;
  titre: string;
  description: string;
  typeOffreEmploie: string;
  lieu: string;
  dateDebut: string;
  dateFin: string;
  datePublication: string;
  offreEmploieStatut: string;
}

const List = () => {
  const { data, loading, error } = useFetchData('offre-emploies');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((offreEmploie: offreEmploie) => (
        <li key={offreEmploie.id}>{offreEmploie.id} - {offreEmploie.titre} {offreEmploie.description} {offreEmploie.typeOffreEmploie} {offreEmploie.lieu} {offreEmploie.dateDebut} {offreEmploie.dateFin} {offreEmploie.datePublication} {offreEmploie.offreEmploieStatut}</li>
      ))}
    </ul>
  )
}
export default List;