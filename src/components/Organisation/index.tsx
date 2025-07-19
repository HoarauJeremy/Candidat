
import {Outlet} from "react-router";

const Index = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <div
        className={"mx-auto md:w-11/12 h-20 rounded-t-md bg-primary p-4 flex justify-center items-center text-white"}>
        <h1 className={"text-4xl font-semibold"}>Organisation</h1>
      </div>
      <div className={"h-auto min-h-96 overflow-auto bg-secondary rounded-b-md w-full grid-cols-1 gap-y-0.5 p-1.5"}>
        <Outlet/>
      </div>
    </div>
  )
}
export default Index;