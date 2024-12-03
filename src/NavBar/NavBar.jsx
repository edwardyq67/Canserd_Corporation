import React, { useEffect, useRef, useState } from "react";
import ServiciosGeneralesImg from "../lib/Imagenes en Inicio/Servicios_Generales_Especializados_con_mas_de_15_años.webp";
import { Link, useNavigate } from "react-router-dom";
import { Accordionpc } from "./Accordionpc";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AccordionItem } from "./AccordionItem";
import { MdClose } from "react-icons/md";
import NuestrosProyectosImg1 from "../lib/Imagenes en Inicio/NuestrosProyectosImg1.webp";
import NuestrosProyectosImg2 from "../lib/Imagenes en Inicio/NuestrosProyectosImg2.webp";
import NuestrosProyectosImg3 from "../lib/Imagenes en Inicio/NuestrosProyectosImg3.webp";
import NuestrosProyectosImg4 from "../lib/Imagenes en Inicio/NuestrosProyectosImg4.webp";
import NuestrosProyectosImg5 from "../lib/Imagenes en Inicio/NuestrosProyectosImg5.webp";

function NavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const NavBarMenu = [
    {
      id: 1,
      titulo: "SERVICIOS",
      submenu: [
        {
          id: 1,
          img: NuestrosProyectosImg1,
          title: "Servicio de gasfiteria",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 2,
          img: NuestrosProyectosImg1,
          title: "Trabajo sanitario",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "edward y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 3,
          img: NuestrosProyectosImg1,
          title: "Puertas enrollables",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 4,
          img: NuestrosProyectosImg1,
          title: "Trabajos de obras civiles",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 5,
          img: NuestrosProyectosImg1,
          title: "Sistema constructivo en Drywall",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 6,
          img: NuestrosProyectosImg1,
          title: "Servicios de Carpintería",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 7,
          img: NuestrosProyectosImg1,
          title: "Estructuras metálicas",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 8,
          img: NuestrosProyectosImg1,
          title: "Instalaciones Eléctricas",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 9,
          img: NuestrosProyectosImg1,
          title: "Mantenimiento de Pozo Tierra",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 10,
          img: NuestrosProyectosImg1,
          title: "Mantenimiento de Vidrios",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 11,
          img: NuestrosProyectosImg1,
          title: "Trabajo de Pintura",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 12,
          img: NuestrosProyectosImg1,
          title: "Muebles Metálicos",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
        {
          id: 13,
          img: NuestrosProyectosImg1,
          title: "Puertas de Emergencia",
          parrafo:
            "Ofrecemos soluciones integrales en gasfitería, diseñadas para satisfacer tus necesidades de mantenimiento, reparación e instalación de sistemas de agua y desagüe. Nuestro equipo de expertos asegura un trabajo eficiente y de alta calidad, abordando desde pequeñas reparaciones de tuberías hasta la instalación de sistemas completos. Garantizamos un servicio rápido, confiable y adaptado a las especificaciones de tu hogar o negocio, priorizando siempre tu comodidad y tranquilidad. ¡Confía en nosotros para mantener tus instalaciones en perfectas condiciones!",
          url: "/Gasfiteria",
          contenido: {
            seccion1: {
              text: "Estructuras Metálicas de Alta Calidad y Precisión",
              parrafo:
                "¿Buscas expertos en soldadura y estructuras metálicas para tus proyectos? En Carserd, ofrecemos soluciones completas y seguras para todo tipo de instalaciones metálicas.",
            },
            seccion2: [
              {
                id: 1,
                title: "Soldadura de precisión",
                parrafo:
                  "Garantizamos un trabajo sólido y duradero en diferentes tipos de estructuras.",
              },
              {
                id: 2,
                title: "Techos de estructuras metálicas",
                parrafo:
                  "Diseñamos e instalamos techos robustos y resistentes, adaptados a las necesidades de cada proyecto.",
              },
              {
                id: 3,
                title: "Instalación de coberturas metálicas",
                parrafo:
                  "Protege tus espacios con coberturas metálicas resistentes al clima y con larga vida útil.",
              },
              {
                id: 4,
                title: "Trabajo de soldadura en altura",
                parrafo:
                  "Expertos en trabajos de altura, aseguramos la máxima seguridad y calidad en cada soldadura.",
              },
              {
                id: 5,
                title: "Soportes metálicos para techos",
                parrafo:
                  "Instalamos soportes metálicos de alta resistencia, brindando estabilidad y seguridad para tus techos.",
              },
            ],
            seccion3: [
              {
                id: 1,
                img: NuestrosProyectosImg1,
              },
              {
                id: 2,
                img: NuestrosProyectosImg2,
              },
              {
                id: 3,
                img: NuestrosProyectosImg3,
              },
              {
                id: 4,
                img: NuestrosProyectosImg4,
              },
              {
                id: 5,
                img: NuestrosProyectosImg5,
              },
            ],
          },
        },
      ],
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
      <div className="flex justify-between items-center w-[90vw] mx-auto">
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
        <ul className={`hidden lg:flex gap-4`}>
          {NavBarMenu.map((menu) => (
            <li
              key={menu.id}
              className="font-poppins uppercase z-50 font-medium text-base text-gray-950 focus:text-white hover:text-[#2AA769] active:text-white transition-all duration-200 hover:shadow-[0_3px_0_-1px_#ffffff] px-2"
            >
              {menu.submenu ? (
                <Accordionpc title={menu.titulo}>
                  <ul className="pl-4">
                    {menu.submenu.map((sub, idx) => (
                      <li
                        key={idx}
                        onClick={() =>
                          navigate("/servicios", {
                            state: { servicio: sub },
                          })
                        }
                        className="cursor-pointer text-nowrap text-black hover:text-[#2AA769] transition-all duration-200 text-base py-1"
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


        {/* Menú lateral (móvil) */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 z-40 bg-[#2AA769] h-screen p-4 overflow-y-auto bg-secondary-950 transform transition-transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } w-80`}
          aria-labelledby="drawer-right-label"
        >
          <div className="flex justify-end">
            <MdClose className="text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>
          <ul className="text-white text-lg mt-5 space-y-4">
            {NavBarMenu.map((menu) => (
              <li key={menu.id}>
                {menu.submenu ? (
                  <AccordionItem title={menu.titulo}>
                    <ul className="pl-4">
                      {menu.submenu.map((sub, idx) => (
                        <li key={idx} className="hover:text-[#2AA769]">
                          <Link to={sub.Link}>{sub.titulo}</Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ) : (
                  <Link to={menu.Link}>{menu.titulo}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales */}
        <ul className="hidden lg:flex gap-4">
          {redes.map((res) => (
            <li key={res.id} title={res.nombre} className="p-2 text-xl">
              {res.icono}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
