import {ModeToggle} from "@Components/mode-toggle.tsx";
import {Link, /*useLocation*/} from "react-router";
import logoApp from "@Assets/logo-app.png"
// import {useEffect, useState} from "react";

const Header = () => {
  /*const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();*/

  const nav = [
    {
      name: 'Accueil',
      lien: '/'
    },
    {
      name: 'Candidature',
      lien: 'candidature',
    },
    {
      name: 'Commune',
      lien: 'commune',
    },
    {
      name: 'Document',
      lien: 'document',
    },
    {
      name: 'Metier',
      lien: 'metier',
    },
    {
      name: 'OffreEmploie',
      lien: 'offreEmploie',
    },
    {
      name: 'Organisation',
      lien: 'organisation'
    },
    {
      name: 'Utilisateur',
      lien: 'utilisateur',
    },
    {
      name: 'Se connecter',
      lien: '/auth/login',
    }
  ]

  /*const toggleNav = () => {
    setOpen(!open);
  }

  const closeNav = () => {
    setOpen(false);
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })*/

  return (
    <header className="bg-background z-50 fixed top-0 w-full shadow md:h-auto">
      <nav className="bg-accent w-full p-6 flex items-center justify-between">
        <Link to="/" className="flex md:ml-10 md:mr-16">
          <span className="h-auto w-auto flex items-center gap-x-1">
            <img src={logoApp} className="w-9 h-9 rounded-full" alt="" />
            <h1 className="text-xl">Candidat</h1>
          </span>
        </Link>

        <div className="flex items-center gap-x-3">
          {
            nav.map((item) => (
              <Link to={item.lien} className="hover:border-b border-primary">
                {item.name}
              </Link>
            ))
          }

          <ModeToggle/>
        </div>
      </nav>

    </header>
  )
}

export default Header;