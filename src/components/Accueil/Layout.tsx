import {Outlet} from "react-router";
import Header from "@Components/Accueil/Header";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="w-full h-auto max-w-11/12 mx-auto mt-20 py-4 md:p-4">
      {/*<main className="w-full minh-screen flex flex-col bg-neutral-50 text-neutral-600">*/}
        <Outlet />
      </main>

      <footer className="mt-auto py-6 bg-secondary"></footer>
    </>
  )
}

export default Layout;