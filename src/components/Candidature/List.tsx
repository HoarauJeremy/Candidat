// import {useFetch} from "@Utils/Fetch.ts";
import useFetchData from "@Utils/FetchData.ts";

type Candidature = {
    id: number;
    date: string;
    statut: string;
    messageMotivation: string;
}

const List = () => {
    // const { data, loading, error } = useFetch<Candidature[]>('candidatures');
    // const {data: data, loading: loading, error: error} = useFetch('candidatures');
    const { data, loading, error } = useFetchData('candidatures');

    if (loading) return <p>Chargement</p>;
    if (error) return <p>Error {error}</p>;

    console.log(data)

    return (
        <ul>
            {data.map((candidature: Candidature) => (
                <li key={candidature.id}>{candidature.id} - {candidature.statut} - {candidature.date} - {candidature.messageMotivation}</li>
            ))}
        </ul>
    )
}

export default List;