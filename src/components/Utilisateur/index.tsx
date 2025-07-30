import {Outlet} from "react-router";

const Index = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <div className={"h-auto min-h-96 bg-secondary rounded-md w-full"}>
        <Outlet/>
      </div>
    </div>
  )
}
export default Index;