import { Slide } from "react-awesome-reveal"
import {
    Box,
    Heading,
    Card,
    Strong,
    Text
} from "@radix-ui/themes"

export default function () {
    return (
        <>
            <Slide>
                <Box width="90%" className='mx-auto px-4'>
                    <div class="container px-6 py-16 mx-auto">
                        <div class="items-center lg:flex">
                            <div class="w-full lg:w-1/2">
                                <div class="lg:max-w-lg">
                                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">QuEx: Queremos Experimentar <br /><span class="text-blue-500 ">Hello to the new world</span></h1>
                                    <p class="mt-3 text-gray-600 dark:text-gray-400">Qu Ex es una empresa centrada en la innovación tecnológica, especializada en la venta y desarrollo de Gabow, una solución líder en navegación indoor. Nuestro enfoque es transformar la manera en que las personas exploran y navegan en espacios interiores, ofreciendo una experiencia única y sin complicaciones.</p>
                                    <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Prueba Gabow: Developed By QuEx</button>
                                </div>
                            </div>

                            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                                <img class="w-full h-full lg:max-w-3xl" src="https://merakiui.com/images/components/Catalogue-pana.svg" alt="Catalogue-pana.svg" />
                            </div>
                        </div>
                    </div>
                </Box>
            </Slide>
        </>

    )
}