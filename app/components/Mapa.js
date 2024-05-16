"use client"

import { MapContainer, Marker, TileLayer, ZoomControl, useMapEvents } from "react-leaflet";
import ResetViewControl from '@20tab/react-leaflet-resetview';
import { Heading, Box, Flex, Avatar, Link, Button, Separator } from '@radix-ui/themes';
import { Zoom } from "react-awesome-reveal";
import Select from "react-select"
import { Icon } from "leaflet";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRef, useState } from "react";
import Slide from "@mui/material/Slide";
import 'leaflet/dist/leaflet.css';
import { useRouter } from "next/navigation";

const infoPlaces = [
    {
        id: 1,
        name: "Bosque de Chapultepec",
        categoria: "Parque Urbano",
        direccion: "Miguel Hidalgo, Ciudad de México, CDMX",
        descripcion: "Este parque citadino de 686 hectáreas cuenta con varias atracciones, como un zoológico y museos.",
        pagina: "http://data.sedema.cdmx.gob.mx/bosquedechapultepec/",
        imagen: "https://lh5.googleusercontent.com/p/AF1QipPluYK1utukF2xO9jYEY11cBv8UUyhHwnD1CZGE=s483-k-no",
        position: [19.42044482108137, -99.18513180504628],

    },
    {
        id: 2,
        name: `CECyT 9 "Juan De Batiz"`,
        categoria: "Escuela",
        direccion: "Mar Mediterráneo 227, Nextitla, Miguel Hidalgo, 11420 Ciudad de México, CDMX",
        descripcion: "Escuela Media Superior del Instituo Politecnico Nacional Centro de Estudios Cientificos y Tecnologicos numero 9",
        pagina: "https://www.cecyt9.ipn.mx/",
        imagen: "https://lh5.googleusercontent.com/p/AF1QipN91Hrq2X9dh0fdj1ywjKSczxs5FLzJqU_Ng6QV=w426-h100-k-no",
        position: [19.453620779819428, -99.17533792256452]
    },
    {
        id: 3,
        name: `ESCOM: Escuela Superior de Computo`,
        categoria: "Escuela",
        direccion: "ESCOM IPN, Unidad Profesional Adolfo López Mateos, Av. Juan de Dios Bátiz, Nueva Industrial Vallejo, Gustavo A. Madero, 07320 Ciudad de México, CDMX",
        descripcion: "Escuela Superior del Instituo Politecnico Nacional Escuela Superior de Computo",
        pagina: "https://escom.ipn.mx/",
        imagen: "https://lh5.googleusercontent.com/p/AF1QipMyDwC57tg3hPvOEqTVtH5WSBgqYBjAx4QhNCgW=w203-h270-k-no",
        position: [19.504463800167144, -99.1469523624146]
    }
]


export default function MapWithSearch() {
    //use state
    const [openSideBar, setOpenSideBar] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState({});

    //hooks
    const { data: session } = useSession();
    const router = useRouter();
    const mapUseRef = useRef();

    //functions
    const onMarkerClick = (e) => {
        const { id } = e.sourceTarget.options;
        const selectedPlace = infoPlaces.find(place => place.id == id);
        setSelectedPlace(selectedPlace);
        const { current } = mapUseRef;
        current.flyTo(e.latlng, 15, { duration: 1.5 });
        setOpenSideBar(true);
    }

    const MapClickEvent = () => {
        useMapEvents({
            click: () => setOpenSideBar(false)
        })
        return null;
    }

    //component
    return (
        <>
            <div className="sideBar w-1/4">
                <Slide direction="right" in={openSideBar} mountOnEnter unmountOnExit>
                    <aside className="flex flex-col w-full h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                        <div className="flex">
                            <Heading className="mx-auto">
                                {selectedPlace.name}
                            </Heading>
                            <Button variant="outline" onClick={() => setOpenSideBar(false)}>
                                <svg className="flex items-center w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <img className="object-cover" src={selectedPlace.imagen} alt="avatar" />
                            <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">{selectedPlace.categoria}</h4>
                            <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">{selectedPlace.direccion}</p>
                        </div>
                        <Separator size="4" my="3" />
                        <div className="flex flex-col justify-between">
                            <nav className="mb-5">
                                <p className="mx-2  text-sm font-medium text-gray-600 dark:text-gray-400">{selectedPlace.descripcion}</p>
                                <a className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={selectedPlace.pagina}>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <span className="mx-4 overflow-x-hidden">Ir a pagina de contacto</span>
                                </a>
                            </nav>
                            <Button onClick={() => router.push(`/Gabow/${selectedPlace.name}`)}>Ir a {selectedPlace.name}</Button>
                        </div>
                    </aside>
                </Slide>
            </div>

            <div className='flex justify-start'>
                <div className='elemento'>
                    <Zoom>
                        <Heading size="8" className='ml-6 md:mt-4'>
                            <span className="bg-gradient-to-r from-black via-black to-red-500 text-transparent bg-clip-text">GABOW</span>
                        </Heading>
                    </Zoom>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className="buscador relative md:mt-4">
                    <Select
                        placeholder="Buscar en Gabow"
                    />
                </div>
            </div>

            <div className='flex justify-end'>
                <div className='elemento'>
                    <Zoom>
                        {session ? (
                            <div className="mr-6 md:mt-4 rounded-lg">
                                <Flex gap="3" align="center">
                                    <Link href={`Gabow/Profile/${session.user.name}`}>
                                        <Avatar
                                            size="3"
                                            src={session.user.image}
                                            radius="full"                            
                                        />
                                    </Link>
                                    <Box>
                                        <Button onClick={() => signOut()}>
                                            Log out
                                        </Button>
                                    </Box>
                                </Flex>
                            </div>
                        ) : (
                            <Box maxWidth="240px" className="mr-6 md:mt-4 rounded-lg">
                                <Flex gap="3" align="center">
                                    <Avatar
                                        size="3"
                                        src="profile-user.png"
                                    />
                                    <Box>
                                        <Button onClick={() => signIn()}>
                                            Log in
                                        </Button>
                                    </Box>
                                </Flex>
                            </Box>
                        )}
                    </Zoom>
                </div>
            </div>

            <MapContainer
                className='relative w-full h-screen z-0'
                center={[19.436403067595723, -99.15872007059457]}
                zoom={12}
                zoomControl={false}
                ref={mapUseRef}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <ZoomControl position="bottomleft" />
                <ResetViewControl position='bottomleft' icon="url(pointer.png)" />
                {infoPlaces.map(place => (
                    <Marker
                        key={place.id}
                        id={place.id}
                        position={place.position}
                        icon={
                            new Icon(
                                {
                                    iconSize: [30, 30],
                                    iconUrl: "gps.png"
                                }
                            )
                        }
                        eventHandlers={
                            {
                                click: onMarkerClick
                            }
                        }
                    />
                ))}
                <MapClickEvent />
            </MapContainer>
        </>
    );
}
