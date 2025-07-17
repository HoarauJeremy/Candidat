import {useEffect, useState} from "react";
import axios, {HttpStatusCode} from "axios";
import { ENTRYPOINT } from "../config/entrypoint.ts";

const useFetchData = (url: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await axios.get(`${ENTRYPOINT}/${url}`);
                console.log("API: ", response);

                const data = response.data;

                if (response.status === HttpStatusCode.Ok) {
                    if (data) {
                        setData(data);
                    } else {
                        setData([]);
                        console.warn(`Aucune données trouver`);
                    }
                }

                setError(null);
            } catch (error: any | Error) {
                console.error("Erreur lors de la récupération des données :", error);
                setError(`Erreur lors du chargement des données : ${(error/* || error?.message*/)}`);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, error, loading };
}

export default useFetchData;