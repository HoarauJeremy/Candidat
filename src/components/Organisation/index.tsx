
import {Outlet} from "react-router";

const Index = () => {
  return (
    <div>
      <h1>Communes</h1>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
export default Index;