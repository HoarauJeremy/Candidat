import useFetchData from "@Utils/FetchData";
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
import {Link, useParams} from "react-router";
import {Eye} from "lucide-react";

const Show = () => {
  // const { data, loading, error } = useFetch<Candidature[]>('candidatures');
  // const {data: data, loading: loading, error: error} = useFetch('candidatures');
  const params = useParams();
  
  const {data, loading, error} = useFetchData(`candidatures/${params.id}`);

  if (loading) return <p>Chargement</p>;
  if (error) return <p>Error {error}</p>;

  console.log(data)

  return (
    <>
      {/*{data.map((candidature: Candidature) => (
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
      ))}*/}

      <p>fezfjnezoifzepoino</p>
      {data.id}
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
export default Show;