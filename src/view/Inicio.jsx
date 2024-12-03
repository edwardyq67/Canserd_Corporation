import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import CARSERDCORPORATIONsECCIONS from "../lib/Imagenes en Inicio/CARSERDCORPORATIONsECCIONS.webp";
import NuestrosProyectosImg1 from "../lib/Imagenes en Inicio/NuestrosProyectosImg1.webp";
import NuestrosProyectosImg2 from "../lib/Imagenes en Inicio/NuestrosProyectosImg2.webp";
import NuestrosProyectosImg3 from "../lib/Imagenes en Inicio/NuestrosProyectosImg3.webp";
import NuestrosProyectosImg4 from "../lib/Imagenes en Inicio/NuestrosProyectosImg4.webp";
import NuestrosProyectosImg5 from "../lib/Imagenes en Inicio/NuestrosProyectosImg5.webp";
import NuestrosProyectosImg6 from "../lib/Imagenes en Inicio/NuestrosProyectosImg6.webp";
import NuestrosProyectosImg7 from "../lib/Imagenes en Inicio/NuestrosProyectosImg7.webp";
import InicioImg1 from "../lib/Imagenes en Inicio/InicioImg1.webp";
import InicioImg2 from "../lib/Imagenes en Inicio/InicioImg2.webp";
import InicioImg3 from "../lib/Imagenes en Inicio/InicioImg3.webp";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Map from "./EnvioDeEmail/Map";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { ImHammer } from "react-icons/im";
import Email from "./EnvioDeEmail/Email";
import SubServicios from '../lib/JSONServicio';
function Inicio() {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);
  const [items, setItems] = useState(4); // Valor inicial para PC

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setItems(4); // PC
      } else if (width >= 768) {
        setItems(3); // Tablet
      } else {
        setItems(2); // Celular
      }
    };

    // Llama a la función inicialmente
    updateItems();

    // Agrega el event listener para manejar cambios en el tamaño
    window.addEventListener("resize", updateItems);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", updateItems);
  }, []);
  const seccion1 = [
    {
      id: 1,
      img: InicioImg1,
    },
    {
      id: 2,
      img: InicioImg2,
    },
    {
      id: 3,
      img: InicioImg3,
    },
  ];
  const numeroProyector = [
    {
      id: 1,
      numero: 70,
      texto: "Pintura",
    },
    {
      id: 2,
      numero: 54,
      texto: "Gasfitería",
    },
    {
      id: 3,
      numero: 35,
      texto: "Drywall",
    },
    {
      id: 4,
      numero: 48,
      texto: "Carpinteria",
    },
  ];
  const ImgServicios = [
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
    {
      id: 6,
      img: NuestrosProyectosImg6,
    },
    {
      id: 7,
      img: NuestrosProyectosImg7,
    },
  ];
  const servicios =  [...SubServicios]
  const boxIcon = [
    {
      id: 1,
      title: "Compromiso",
      icon: <IoShieldCheckmarkSharp className="text-white text-4xl" />,
      parrafo:
        "Compromiso con la seguridad y el cumplimiento de normativas vigentes.",
    },
    {
      id: 2,
      title: "Excelente servicio",
      icon: <FaStar className="text-white text-4xl" />,
      parrafo: "Atención personalizada y adaptada a tus necesidades.",
    },
    {
      id: 3,
      title: "Experiencia",
      icon: <AiOutlineLike className="text-white text-4xl" />,
      parrafo: "Más de 15 años de experiencia en el mercado peruano.",
    },
    {
      id: 4,
      title: "Eficiencia",
      icon: <ImHammer className="text-white text-4xl" />,
      parrafo:
        "Soluciones rápidas y eficientes para cualquier tipo de proyecto.",
    },
  ];
  return (
    <main>
      <section className="relative overflow-x-hidden max-w-[100vw] bg-black">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect="fade"
          loop={true} // Permite que el carrusel sea infinito
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
          style={{ width: "100vw", height: "100vh" }}
          onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)} // Actualiza el índice activo
        >
          {seccion1.map((seccion1Componets, index) => (
            <SwiperSlide className="relative" key={seccion1Componets.id}>
              {/* Imagen */}
              <motion.img
                src={seccion1Componets.img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: slideIndex === index ? 1 : 0,
                  scale: slideIndex === index ? 1.1 : 1,
                }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000] to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Texto principal */}
                  <div className="flex flex-col gap-5 md:col-span-2 text-center md:text-left">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">
                      ¿Deseas{" "}
                      <span className="text-[#21985d] text-4xl md:text-6xl font-bold">
                        Profesionales
                      </span>{" "}
                      para tus servicios empresariales?
                    </h1>
                    <p className="text-white text-xl md:text-2xl">
                      ¡Nosotros te contactamos!
                    </p>
                  </div>

                  {/* Formulario */}
                  <div className="col-span-1 flex justify-center">
                    <Email />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="overflow-x-hidden">
        <div className="relative">
          <h2 className="w-[100vw] absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
            NUESTROS PROYECTOS
          </h2>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
            alt=""
          />
        </div>
      </section>
      <section className="grid sm:grid-cols-4 grid-cols-2 gap-4 w-[90vw] mx-auto mt-10 py-10 shadow-lg">
        {numeroProyector.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col items-center lg:text-4xl text-3xl font-bold text-[#2AA769] text-center">
              <h3>+ {proyecto.numero}</h3>
              <h4 className="lg:text-xl text-lg font-bold">{proyecto.texto}</h4>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="w-[90vw] mx-auto my-20 ">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={items}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="mb-10"
        >
          {ImgServicios.map((servicio) => (
            <SwiperSlide
              key={servicio.id}
              className=" min-h-[25vh] flex items-center justify-center"
            >
              <img
                src={servicio.img}
                alt={`Proyecto ${servicio.id}`}
                className="w-full min-h-[25vh] max-h-[25vh] object-cover object-center rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={items}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true, // Dirección inversa
          }}
        >
          {ImgServicios.map((servicio) => (
            <SwiperSlide
              key={servicio.id}
              className="min-h-[25vh] flex items-center justify-center"
            >
              <img
                src={servicio.img}
                alt={`Proyecto ${servicio.id}`}
                className="w-full min-h-[25vh] max-h-[25vh] object-cover object-center rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="overflow-x-hidden">
        <div className="relative">
          <h2 className="w-[100vw] absolute inset-0 flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
            NUESTROS SERVICIOS
          </h2>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
            alt=""
          />
        </div>
      </section>
      <section className="grid  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-[90vw] container  mx-auto gap-10 py-10">
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            className="flex flex-col items-start sm:max-w-[400px] w-full mx-auto bg-[#2AA769] text-white border-white rounded-xl p-3 shadow-lg"
          >
            <img
              src={servicio.img}
              alt={`Servicio ${servicio.title}`}
              className="w-full h-[300px] object-cover object-center rounded-lg"
            />
            <h3 className="md:text-2xl text-xl font-bold my-1">
              {servicio.title}
            </h3>
            <p className="text-base text-zinc-50 line-clamp-2 ">
              {servicio.parrafo}
            </p>

            <div
              onClick={() =>
                navigate("/servicios", {
                  state: { servicio: servicio },
                })
              }
              className="flex justify-end w-full items-center cursor-pointer gap-2 mt-2"
            >
              <div className="bg-white rounded-s-md rounded-tr-md rounded-br-2xl pr-1 pb-1 cursor-pointer hover:translate-x-1 transition-all duration-200">
                <IoIosArrowForward size={35} className="text-[#2AA769]" />
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="overflow-x-hidden ">
        <div className="relative">
          <h2 className="w-[90vw] mx-auto absolute inset-0 uppercase flex items-center justify-center text-white  lg:text-6xl text-4xl text-center  font-bold">
            razones para elegirnos
          </h2>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="max-w-[100vw] min-w-[1300px] min-h-[20vh] h-auto"
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 py-20 lg:grid-cols-4 gap-6 w-[90%] mx-auto">
          {boxIcon.map((box) => (
            <div
              key={box.id}
              className="cursor-pointer bg-green-600 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{box.icon}</div>
              <h3 className="font-bold text-lg mb-2">{box.title}</h3>
              <p className="text-sm">{box.parrafo}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="overflow-x-hidden ">
        <div className="relative ">
          <div className=" px-4 gap-2 absolute  inset-0 uppercase flex flex-col text-start justify-center text-white  lg:text-6xl text-4xl container mx-auto font-light">
            <span className="font-bold">Brindamos el mejor </span>
            servicio técnico
            <div>
              <button className="bg-[#068a38] text-lg font-bold hover:bg-green-500 py-2 px-4 flex items-center transition-all duration-200 rounded-md ">
                cotiza con nosotros
              </button>
            </div>
          </div>
          <img
            src={CARSERDCORPORATIONsECCIONS}
            className="max-w-[100vw] min-w-[1300px] min-h-[30vh] h-auto"
            alt=""
          />
        </div>
      </section>
      <Map />
    </main>
  );
}

export default Inicio;
