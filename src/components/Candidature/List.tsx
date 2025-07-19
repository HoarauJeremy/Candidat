// import {useFetch} from "@Utils/Fetch.ts";
import useFetchData from "@Utils/FetchData.ts";
import {Button} from "@Components/ui/button.tsx";
import {Eye} from "lucide-react";
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@Components/ui/card.tsx";
import {Link} from "react-router";

type Candidature = {
  id: number;
  date: string;
  statut: string;
  messageMotivation: string;
}

const List = () => {
  // const { data, loading, error } = useFetch<Candidature[]>('candidatures');
  // const {data: data, loading: loading, error: error} = useFetch('candidatures');
  const {data, loading, error} = useFetchData('candidatures');

  if (loading) return <p>Chargement</p>;
  if (error) return <p>Error {error}</p>;

  console.log(data)

  return (
    <>
      {data.map((candidature: Candidature) => (
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
              <Link to={`/candidature/${candidature.id}`}>
                <Eye/> Voir +
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
  /*return (
    <>
      {data.map((candidature: Candidature) => (
        <div
          className={"p-2 rounded-md bg-neutral-50 text-black w-11/12 mx-auto"}
          key={candidature.id}
        >
          {candidature.statut} - {candidature.date} - {candidature.messageMotivation}

          <Button variant={"secondary"} size={"icon"}>
            <Eye />
          </Button>
        </div>
      ))}
    </>
  )*/
}

export default List;