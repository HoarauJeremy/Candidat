import {Card, CardContent, CardHeader, CardTitle} from "@Components/ui/card.tsx";

const Candidature = () => {
  return (
    <>
      <h3>Mes candidature</h3>

      <div>
        <ul>
          <li>

            <Card>
              <CardHeader>
                <CardTitle>Nom offre emploie || Candidature ponctuel</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    Nom organisation
                  </p>
                  <p>Date de candidature</p>
                </div>
              </CardContent>

            </Card>


          </li>
        </ul>
      </div>
    </>
  )
}

export default Candidature;