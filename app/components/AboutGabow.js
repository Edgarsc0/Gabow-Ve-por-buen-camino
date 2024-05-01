"use client"
import { Box, Text, Heading, Card, Strong, Grid, Badge } from '@radix-ui/themes';
import {
    Fade,
    Slide,
    Zoom
} from 'react-awesome-reveal';

export default function () {
    return (
        <>
            <Slide>
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Navegación en Interiores</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Proporciona mapas detallados y precisos de lugares interiores como aeropuertos, centros comerciales, escuelas y más.
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Busqueda de destinos</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Permite a los usuarios buscar fácilmente tiendas, restaurantes, servicios y puntos de interés dentro de un lugar.
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Navegación paso por paso</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Ofrece indicaciones precisas y paso a paso para guiar a los usuarios desde su ubicación actual hasta su destino deseado.
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </a>
                                    </div>

                                    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                                        <span className="inline-block text-blue-500 dark:text-blue-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </span>

                                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Gabow Inside View</h1>

                                        <p className="text-gray-500 dark:text-gray-300">
                                            Permite a los usuarios realizar recorridos visuales de 360 grados dentro de sus lugares favoritos, ofreciendo una experiencia inmersiva y detallada.
                                        </p>

                                        <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
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
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
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
        </>
    )
}