'use client';
import { Tabs, Box, Text, Heading, Card, Strong, Grid, Badge } from '@radix-ui/themes';
import { useState } from 'react';
import {
    Fade,
    Slide,
    Zoom
} from 'react-awesome-reveal';

export default function () {
    const [showGabow, setShowGabow] = useState(false);

    return (
        <>
            <Tabs.Root defaultValue='account'>
                <Slide>
                    <Tabs.List>
                        <Tabs.Trigger value='account'>
                            <Heading
                                weight='regular'
                                className='text-5xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent'
                            >
                                Gabow
                            </Heading>
                        </Tabs.Trigger>
                        <Tabs.Trigger value='documents'>
                            <Heading
                                weight='regular'
                                className='text-5xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent'
                            >
                                Qu Ex
                            </Heading>
                        </Tabs.Trigger>
                        <Tabs.Trigger value='settings'>
                            <Heading
                                weight='regular'
                                className='text-5xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent'
                            >
                                Contact us
                            </Heading>
                        </Tabs.Trigger>
                    </Tabs.List>
                </Slide>

                <Box pt='3'>
                    <Tabs.Content value='account'>
                        <Slide cascade>
                            <Box className='text-center'>
                                <Heading
                                    size='9'
                                    className='text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'
                                    onClick={() => setShowGabow(true)}
                                >
                                    Gabow
                                </Heading>
                                <Heading size='5' weight="light">Ve por buen camino</Heading>
                            </Box>
                        </Slide>
                        <Slide>
                            <Box width="90%" className='mx-auto px-4'>
                                <Heading weight="medium" mb="3" mt="5">
                                    ¿Que es Gabow?
                                </Heading>
                                <Card size="2" mb="3">
                                    <Text as="p" size="3">
                                        ¡Bienvenido a <Strong>¡GABOW!</Strong> Tu guía definitiva para explorar el mundo, encontrar lo que necesitas y nunca perderte de nuevo. Descubre una nueva forma de navegar en cualquier lugar, en cualquier momento. ¡Comienza tu aventura ahora!
                                    </Text>
                                </Card>
                                <section className="bg-black">
                                    <div>
                                        <Heading weight="medium" mb="3" mt="5">
                                            Explora Gabow con sus funcionalidades
                                        </Heading>
                                        <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                                            ¡Sumergete en gabow explotando al 100 sus funcionalidades nunca antes vistas!
                                        </p>
                                        <Grid columns="2" gap="8" mt="8" className='xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3"'>
                                            <Fade cascade>
                                                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                        </svg>
                                                    </span>

                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Navegación en Interiores</h1>

                                                    <p className="text-gray-500 dark:text-gray-300">
                                                        Proporciona mapas detallados y precisos de lugares interiores como aeropuertos, centros comerciales, escuelas y más.
                                                    </p>

                                                    <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                                        </svg>
                                                    </span>

                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Busqueda de destinos</h1>

                                                    <p className="text-gray-500 dark:text-gray-300">
                                                        Permite a los usuarios buscar fácilmente tiendas, restaurantes, servicios y puntos de interés dentro de un lugar.
                                                    </p>

                                                    <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                        </svg>
                                                    </span>

                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Navegación paso por paso</h1>

                                                    <p className="text-gray-500 dark:text-gray-300">
                                                        Ofrece indicaciones precisas y paso a paso para guiar a los usuarios desde su ubicación actual hasta su destino deseado.
                                                    </p>

                                                    <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                    <span className="inline-block text-blue-500 dark:text-blue-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                        </svg>
                                                    </span>

                                                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Gabow Inside View</h1>

                                                    <p className="text-gray-500 dark:text-gray-300">
                                                        Permite a los usuarios realizar recorridos visuales de 360 grados dentro de sus lugares favoritos, ofreciendo una experiencia inmersiva y detallada.
                                                    </p>

                                                    <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </Fade>
                                        </Grid>
                                    </div>
                                </section>
                                <section>
                                    <Box>
                                        <Box >
                                            <Heading weight="medium" mb="3" mt="5">
                                                ¿Perdido?
                                            </Heading>
                                            <Card my="3">
                                                <Text my="3">
                                                    ¡Bienvenido a Gabow, tu compañero de navegación definitivo para explorar el mundo! Con Gabow, nunca más te sentirás perdido en lugares desconocidos. Nuestra aplicación te ofrece una forma inteligente y conveniente de encontrar tu camino en una variedad de entornos, desde aeropuertos hasta parques y todo lo demás.
                                                    <br></br>
                                                    <br></br>
                                                    Ya sea que estés buscando tu puerta de abordaje en el aeropuerto, tu clase en la escuela o simplemente quieras explorar un parque local, Gabow está aquí para ayudarte. Con una interfaz intuitiva y mapas detallados, te guiamos paso a paso para que puedas disfrutar al máximo de cada experiencia.
                                                    <br></br>
                                                    <br></br>
                                                    Descubre cómo Gabow puede hacer que tus viajes sean más fáciles, tus aventuras más emocionantes y tus días más organizados. ¡Comienza a explorar con Gabow hoy mismo!
                                                </Text>
                                            </Card>
                                            <Heading weight="medium" mb="3" mt="5">Usa gabow en...</Heading>
                                        </Box>
                                        <Grid columns="2" gap="5" mt="8">
                                            <Zoom>
                                                <Box>
                                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                            </svg>
                                                        </span>

                                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">¡Usalo en el aeropuerto!</h1>

                                                        <p className="text-gray-500 dark:text-gray-300 text-justify">
                                                            ¿Te sientes perdido en el vasto laberinto de un aeropuerto mientras buscas desesperadamente tu puerta de abordaje? Con Gabow, la incertidumbre se convierte en tranquilidad. Nuestra aplicación te guía desde la entrada del aeropuerto hasta tu puerta de embarque con precisión y eficiencia. Simplemente ingresa el código de tu vuelo o selecciona tu aerolínea, y Gabow te mostrará la ubicación exacta de tu puerta de abordaje junto con la ruta más rápida para llegar. Nunca más llegarás tarde a tu vuelo o te sentirás perdido en el aeropuerto gracias a Gabow, tu compañero de viaje confiable.
                                                        </p>

                                                        <a href="#">
                                                            <Badge size="3" className='my-5'>
                                                                Gabow in airports
                                                            </Badge>
                                                        </a>
                                                    </div>
                                                </Box>
                                            </Zoom>
                                            <Zoom>
                                                <Box>
                                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                            </svg>
                                                        </span>

                                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">¡Usalo en tu escuela!</h1>

                                                        <p className="text-gray-500 dark:text-gray-300 text-justify">
                                                            ¡Primer día y no sabes dónde está tu salon? Con Gabow, nunca más te sentirás perdido en el laberinto de pasillos y aulas. Nuestra aplicación te brinda la tranquilidad de encontrar fácilmente tu camino en el primer día de clases y en cualquier día siguiente. Simplemente abre la aplicación, ingresa el nombre de tu salon y Gabow te mostrará la ubicación exacta y la mejor ruta para llegar. ¡Deja de preocuparte por llegar tarde a clases y comienza tu día escolar con confianza con Gabow!
                                                        </p>

                                                        <a href="#">
                                                            <Badge size="3" className='my-5'>
                                                                Gabow in schools
                                                            </Badge>
                                                        </a>
                                                    </div>
                                                </Box>
                                            </Zoom>
                                            <Zoom>
                                                <Box>
                                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                            </svg>
                                                        </span>

                                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">¡Usalo en el parque!</h1>

                                                        <p className="text-gray-500 dark:text-gray-300 text-justify">
                                                            ¿Te gustaría explorar un parque grande pero no estás seguro por dónde empezar? Con Gabow, cada visita al parque se convierte en una aventura emocionante y sin preocupaciones. Nuestra aplicación te proporciona mapas detallados del parque, destacando senderos, áreas de picnic, atracciones y puntos de interés. Simplemente selecciona el parque que deseas explorar en la aplicación y Gabow te mostrará las rutas recomendadas, los lugares de interés cercanos y la información útil para hacer que tu experiencia en el parque sea inolvidable. Ya sea que estés buscando un lugar tranquilo para relajarte o emocionantes aventuras al aire libre, Gabow te guiará por el camino correcto.
                                                        </p>
                                                        <a href="#">
                                                            <Badge size="3" className='my-5'>
                                                                Gabow in parks
                                                            </Badge>
                                                        </a>
                                                    </div>
                                                </Box>
                                            </Zoom>
                                            <Zoom>
                                                <Box>
                                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                                            </svg>
                                                        </span>

                                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">¡Usalo en plazas comerciales!</h1>

                                                        <p className="text-gray-500 dark:text-gray-300 text-justify">
                                                            ¿Te has sentido abrumado por la inmensidad de un centro comercial y no sabes por dónde empezar tus compras? Con Gabow, cada visita al centro comercial se convierte en una experiencia emocionante y sin estrés. Nuestra aplicación te ofrece un mapa interactivo del centro comercial, resaltando las tiendas, restaurantes y servicios que más te interesan. Simplemente ingresa al centro comercial en Gabow y descubre las mejores ofertas, encuentra tu tienda favorita y sigue las rutas más eficientes para maximizar tu tiempo de compras. Desde moda hasta tecnología, Gabow te guía por el camino hacia una experiencia de compras inigualable. ¡Deja que Gabow te lleve de compras hoy mismo y descubre todo lo que el centro comercial tiene para ofrecer!
                                                        </p>

                                                        <a href="#">
                                                            <Badge size="3" className='my-5'>
                                                                Gabow in malls
                                                            </Badge>
                                                        </a>
                                                    </div>
                                                </Box>
                                            </Zoom>
                                        </Grid>
                                    </Box>
                                </section>
                                <Card size="2" mb="3">
                                    <br></br>
                                    <br></br>

                                </Card>
                            </Box>
                        </Slide>
                    </Tabs.Content>
                    <Tabs.Content value='documents'>
                        <Fade>
                            <Text size='2'>Access and update your documents.</Text>
                        </Fade>
                    </Tabs.Content>

                    <Tabs.Content value='settings'>
                        <Text size='2'>
                            Edit your profile or update contact information.
                        </Text>
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
            <footer className="fixed bottom-0 w-full bg-black">
                <Zoom>
                    <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                        <p className="text-sm text-gray-600 dark:text-gray-300">Gabow: Developed by QuEx</p>

                        <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                        <div className="flex -mx-2">
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                                <svg className="w-5 h-5 fill-current" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z" fill="currentColor"></path></svg>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                    </path>
                                </svg>
                            </a>

                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </Zoom>
            </footer>
        </>
    );
}
