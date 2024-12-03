import React, { useEffect, useRef, useState } from "react";
import ServiciosGeneralesImg from "../lib/Imagenes en Inicio/Servicios_Generales_Especializados_con_mas_de_15_años.webp";
import { Link, useNavigate } from "react-router-dom";
import { Accordionpc } from "./Accordionpc";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AccordionItem } from "./AccordionItem";
import { MdClose } from "react-icons/md";
import SubServicios from '../lib/JSONServicio';
function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const NavBarMenu = [
    {
      id: 1,
      titulo: "SERVICIOS",
      submenu:  [...SubServicios],
    },
    { id: 2, titulo: "PROYECTOS", Link: "/Proyectos" },
    { id: 3, titulo: "PRODUCTOS", Link: "/Productos" },
    { id: 4, titulo: "QUIENES SOMOS", Link: "/Quienessomos" },
    { id: 5, titulo: "CONTATO", Link: "/Contactenos" },
  ];

  const redes = [
    { id: 1, nombre: "Facebook", icono: <FaFacebook className="text-[#2AA769]" /> },
    { id: 2, nombre: "LinkedIn", icono: <FaLinkedin className="text-[#2AA769]" /> },
    { id: 3, nombre: "Whatsapp", icono: <FaWhatsapp className="text-[#2AA769]" /> },
  ];

  // Manejar clics fuera del menú lateral
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Manejar cambios al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
 <nav className={`grid ${isScrolled ? "shadow-lg" : ""}`}>
      {/* Barra superior */}
      <div className="bg-[#2AA769] py-4">
        <div className="w-[90vw] mx-auto text-white">
          Servicios Generales Especializados con más de 15 años
        </div>
      </div>

      {/* Barra principal */}
      <div className="flex justify-between items-center w-[90vw] mx-auto py-4">
        {/* Logo */}
        <img
          className="w-40 cursor-pointer"
          onClick={() => navigate("/")}
          src={ServiciosGeneralesImg}
          alt="Servicios Generales Especializados con más de 15 años"
        />

        {/* Menú hamburguesa (móvil) */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu className="text-zinc-900 text-2xl cursor-pointer" />
        </div>

        {/* Menú principal (desktop) */}
        <ul className="hidden lg:flex gap-6 items-center">
          {NavBarMenu.map((menu) => (
            <li
              key={menu.id}
              className="relative group font-poppins uppercase font-medium text-base text-gray-950 transition-all duration-200 hover:text-[#2AA769] px-2"
            >
              {menu.submenu ? (
                <Accordionpc title={menu.titulo}>
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded p-2 space-y-2">
                    {menu.submenu.map((sub, idx) => (
                      <li
                        key={idx}
                        onClick={() =>
                          navigate("/servicios", { state: { servicio: sub } })
                        }
                        className="cursor-pointer text-black hover:text-[#2AA769] transition-all duration-200 text-sm"
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </Accordionpc>
              ) : (
                <Link to={menu.Link}>{menu.titulo}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Redes sociales */}
        <ul className="hidden lg:flex gap-4">
          {redes.map((res) => (
            <li key={res.id} title={res.nombre} className="p-2 text-xl text-[#2AA769] hover:text-zinc-900 transition-all">
              {res.icono}
            </li>
          ))}
        </ul>
      </div>

      {/* Menú lateral (móvil) */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 z-40 bg-[#2AA769] h-screen p-4 overflow-y-auto transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-80`}
        aria-labelledby="drawer-right-label"
      >
        <div className="flex justify-end">
          <MdClose
            className="text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <ul className="text-white text-lg mt-5 space-y-4">
          {NavBarMenu.map((menu) => (
            <li key={menu.id}>
              {menu.submenu ? (
                <AccordionItem title={menu.titulo}>
                  <ul className="pl-4 space-y-2">
                    {menu.submenu.map((sub, idx) => (
                      <li
                        key={idx}
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.title}
                      </li>
                    ))}
                  </ul>
                </AccordionItem>
              ) : (
                <Link
                  to={menu.Link}
                  className="hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {menu.titulo}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
