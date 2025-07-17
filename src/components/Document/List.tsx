import useFetchData from "@Utils/FetchData.ts";

type Document = {
  id: number;
  nom: string;
  typeDocument: string;
  urlFichier: string;
  creationDate: string;
  // utilisateur: string;
}

const List = () => {
  const { data, loading, error } = useFetchData('documents');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error}</p>;

  console.log({
    data,
    loading,
    error
  })

  return (
    <ul>
      {data?.map((document: Document) => (
        <li key={document.id}>{document.id} - {document.nom} {document.typeDocument} {document.urlFichier} {document.creationDate}</li>
      ))}
    </ul>
  )
}
export default List;