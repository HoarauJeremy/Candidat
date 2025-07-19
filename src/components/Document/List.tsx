import useFetchData from "@Utils/FetchData.ts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@Components/ui/card.tsx";
import {Button} from "@Components/ui/button.tsx";
import {Link} from "react-router";
import {Eye} from "lucide-react";

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

      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link to={`/candidature/`}>
              <Eye/> Voir +
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ul>
  )
}
export default List;