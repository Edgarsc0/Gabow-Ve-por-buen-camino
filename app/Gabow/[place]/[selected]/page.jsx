"use client";

import { Heading, Box, Flex, Avatar, Button, Link } from "@radix-ui/themes";
import Select from "react-select";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ({ params }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleClick = (e) => {
    const { id: selected } = e.target;
    router.push(`/Gabow/${params.place}/${selected}`);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-gray-800 h-screen">
      <div className="flex justify-start">
        <div className="elemento">
          <Link href="/Gabow">
            <Heading size="8" className="ml-6 md:mt-4" color="cyan">
              GABOW
            </Heading>
          </Link>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="buscador relative md:mt-4">
          <Select
            placeholder={`Buscar en ${decodeURIComponent(params.place)}`}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <div className="elemento">
          {session ? (
            <div className="mr-6 md:mt-4 rounded-lg">
              <Flex gap="3" align="center">
                <Link href={`/Gabow/Profile/${session.user.name}`}>
                  <Avatar
                    size="3"
                    src={session.user.image}
                    radius="full"
                    fallback="T"
                  />
                </Link>
                <Box>
                  <Button onClick={() => signOut()}>Log out</Button>
                </Box>
              </Flex>
            </div>
          ) : (
            <Box maxWidth="240px" className="mr-6 md:mt-4 rounded-lg">
              <Flex gap="3" align="center">
                <Avatar size="3" src="user.png" fallback="u" />
                <Box>
                  <Button onClick={() => signIn()}>Log in</Button>
                </Box>
              </Flex>
            </Box>
          )}
        </div>
      </div>

      <div className="pt-18 flex justify-center items-center relative">
        <svg
          width={1280}
          height={720}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          overflow="hidden"
          
        >
          <defs>
            <linearGradient
              x1={1136.19}
              y1={455.033}
              x2={1270.81}
              y2={403.967}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="a"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={991.605}
              y1={502.426}
              x2={1186.4}
              y2={356.574}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="b"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={838.927}
              y1={503.04}
              x2={1034.07}
              y2={355.96}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="c"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={685.927}
              y1={503.04}
              x2={881.073}
              y2={355.96}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="d"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={435.927}
              y1={503.04}
              x2={631.073}
              y2={355.96}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="e"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={283.927}
              y1={503.04}
              x2={479.073}
              y2={355.96}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="f"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <linearGradient
              x1={130.927}
              y1={503.04}
              x2={326.073}
              y2={355.96}
              gradientUnits="userSpaceOnUse"
              spreadMethod="reflect"
              id="g"
            >
              <stop offset={0} stopColor="#7E7E7E" />
              <stop offset={0.5} stopColor="#B6B6B6" />
              <stop offset={1} stopColor="#D9D9D9" />
            </linearGradient>
            <image
              width={128}
              height={128}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGzUExURQAAANDZ6OLo8D1FZk1egNDY6N7k7+Ho8fH0+fT2+tjg6+ru9T1FZk1egNDX5+Hn8GZuiXaCnz1FZk1egFmr/1qr/1yz/2Gu/mGw/mOv/mS2/max/Wa2/mbM/220/W3O/m/O/nDO/nJJT3JWYXN7lXW3/He9/Hi5/HjQ/X+7+3/R/IC8+4SQqYS/+oZoaoZuc4vT+o/D+ZTG+JXW+Z3K96DY+LDQ9bHc9rXd9bbU9bnd9bze9L7f9MLY88La88Xg88nc88rd8svh8sxSKc10Ws/X5tF4XNHf8tLg8tLj8tTg8dfh8dfi8djk8dni8dnj8dnk8drk8dvg7Nvj8dzk8N3Ix97Q0t7k7t/m8OHZ5OHc5+Hf6uHh6+Hj7eHk7uHm8OKoueK3xuK+zeLD0OLI1eLK1+La5eLg6uOVqOO4xePb5ePd5+Rrg+SInOVHYuVdduY6V+Y8WeZBXeZEYOZRa+ZuhOaLXubK0ubN1ebP1+d7RefL0+iNYOjFzemNYOnAyOyzuu3v9u+jqfCeo/Dz+PHc1PHg2vP1+fSLjvaBhPl2ePpucP1hYv1jZP5gYP9ZWf9bW61egaUAAAASdFJOUwBXV6Cgo6Ojo6PDw9LS0tLd3X/Xsi0AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH/SURBVFhH7dfpTxNRFMbhAZGKyCalgtoWARXBXVxBCqLs1LqytiCglUUcQFBQlE1RAeuf7L3vPe0MpAmHiSRtM79P95xMnsw0TSfVErO8uOVaSBuM2yML2RQ/m+KX+lS6KHtld0/319E0EX4dsjZ2RzfHzQFGloxUeGlpeLifBuTz1d9voDPiUp8iEV0fpQG53S7neTqj5KYWtrenpl7TgEpLT5dU0xlxqdDERF9fiAYUCDz2P6Mz4lKMkpr6LXovUtPNKnTuLGpXSyYVjoh00RuMN9zI5ZQVtWDHpdai1DuMD8zUqefYcalfUWpSzWbKo1ZcajNKfVDzVRNVo1ZcSkqgdDXfNlFqI2JRHw1qDItagyrGQsai/hjUDBY9BnUNCxmHCv41qOkBrM7EqOuYZRzqMyRF6SNY3YtRjZhlHOqbmXqFVVuMwog41E8zNYfVE/mEkrqEEXEoJRFFX4dKou6qUcagQsuiVUm9HRIFsay7IynPrVZMiHNXslR64/z4Tr2gXorrrFFfF6kmqllcl/LUwtbW7OyOt7PXe/LEBTojLhUaH+/t3fF27urq7PDTGXEpRjYlsinVgVBH1qkvJBlUN6tMgjTNQfjgPEkx6iH9QdujwwTZ1N79dypDVHCRunKZKqPKK1jlHxJphXE7bqEEpXLidsxC+OgTLE37B0x0K8UQ26SJAAAAAElFTkSuQmCC"
              preserveAspectRatio="none"
              id="i"
            />
            <clipPath id="h">
              <path d="M0 0H704850V704850H0z" />
            </clipPath>
            <clipPath id="j">
              <path d="M0 0H714375V704850H0z" />
            </clipPath>
            <clipPath id="k">
              <path d="M0 0H704850V704850H0z" />
            </clipPath>
            <clipPath id="l">
              <path d="M9.31323e-10 0H657225.0000000009V657225H9.31323e-10z" />
            </clipPath>
            <image
              width={128}
              height={128}
              xlinkHref="data:image/png;base64,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"
              preserveAspectRatio="none"
              id="n"
            />
            <clipPath id="m">
              <path d="M0 0H657225V657225H0z" />
            </clipPath>
          </defs>
          
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="#D9D9D9"
            d="M56 204H1242V531H56z"
          />
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#a)"
            d="M1165 328H1242V531H1165z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(1176.46 438)"
          >
            {"2001"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#b)"
            d="M1013 328H1165V531H1013z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(1058.2 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(1061.7 452)"
          >
            {"2002"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#c)"
            d="M860 328H1013V531H860z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(905.425 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(908.925 452)"
          >
            {"2003"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#d)"
            d="M707 328H860V531H707z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(752.651 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(756.151 452)"
          >
            {"2004"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="#D9D9D9"
            d="M610 328H707V531H610z"
          />
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#e)"
            d="M457 328H610V531H457z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(502.844 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(506.344 452)"
          >
            {"2005"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#f)"
            d="M305 328H458V531H305z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(350.423 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(353.923 452)"
          >
            {"2006"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="url(#g)"
            d="M152 328H305V531H152z"
          />
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(197.826 424)"
          >
            {"Salon"}
          </text>
          <text
            fontFamily="Open Sans,Open Sans_MSFontService,sans-serif"
            fontWeight={400}
            fontSize={24}
            transform="translate(201.326 452)"
          >
            {"2007"}
          </text>
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="#D9D9D9"
            d="M56 328H152V429H56z"
          />
          <path
            stroke="#042433"
            strokeWidth={2}
            strokeMiterlimit={8}
            fill="#D9D9D9"
            d="M56 429H153V531H56z"
          />
          <g clipPath="url(#h)" transform="matrix(.0001 0 0 .0001 67 342)">
            <use
              width="100%"
              height="100%"
              xlinkHref="#i"
              transform="scale(5506.64)"
            />
          </g>
          <g clipPath="url(#j)" transform="matrix(.0001 0 0 .0001 66 443)">
            <g clipPath="url(#k)" transform="scale(1.01351 1)">
              <use
                width="100%"
                height="100%"
                xlinkHref="#i"
                transform="scale(5506.64)"
              />
            </g>
          </g>
          <g clipPath="url(#l)" transform="matrix(.0001 0 0 .0001 623 382)">
            <g clipPath="url(#m)">
              <use
                width="100%"
                height="100%"
                xlinkHref="#n"
                transform="scale(5134.57)"
              />
            </g>
          </g>
        </svg>
      </div>

      <footer className="fixed bottom-0 w-full bg-gradient-to-r from-black via-gray-800 to-gray-800">
        <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Gabow: Developed by QuEx
          </p>

          <div class="flex">
            <a
              href="#"
              class="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
            >
              <div class="flex items-center -mx-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>

                <span class="mx-1">previous</span>
              </div>
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
            >
              PB
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
            >
              1
            </a>

            <a
              href="#"
              class="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
            >
              2
            </a>

            <a
              href="#"
              class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
            >
              <div class="flex items-center -mx-1">
                <span class="mx-1">Next</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-1 rtl:-scale-x-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          </div>

          <div className="flex -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Reddit"
            >
              <svg
                className="w-5 h-5 fill-current"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.9091 12.909C13.2365 12.5817 13.4918 12.1895 13.6588 11.7577C13.8195 11.3443 13.9294 10.8718 13.961 10.1799C13.9926 9.48665 14.0001 9.26529 14.0001 7.50001C14.0001 5.73473 13.9926 5.51328 13.961 4.82008C13.9294 4.12821 13.8195 3.65573 13.6588 3.24228C13.4956 2.80857 13.2398 2.41567 12.9091 2.091C12.5844 1.76028 12.1915 1.50437 11.7578 1.34113C11.3443 1.18056 10.8718 1.0707 10.1799 1.03924C9.48675 1.00748 9.26537 1 7.50006 1C5.73476 1 5.51333 1.00748 4.82014 1.03912C4.12826 1.0707 3.65578 1.18056 3.24233 1.34125C2.80862 1.50447 2.41573 1.76032 2.09105 2.09098C1.76032 2.41563 1.5044 2.80852 1.34113 3.24225C1.18056 3.65573 1.0707 4.12821 1.03924 4.82008C1.00748 5.51328 1 5.73471 1 7.50001C1 9.26532 1.00748 9.48675 1.03924 10.1799C1.07083 10.8718 1.18069 11.3443 1.34138 11.7577C1.5046 12.1915 1.76045 12.5843 2.09111 12.909C2.41578 13.2397 2.80867 13.4955 3.24238 13.6587C3.65586 13.8194 4.12834 13.9293 4.82019 13.9609C5.51348 13.9925 5.73483 14 7.50012 14C9.2654 14 9.48685 13.9925 10.18 13.9609C10.8719 13.9293 11.3444 13.8194 11.7578 13.6587C12.1896 13.4917 12.5818 13.2364 12.9091 12.909ZM1.99949 6.73496C1.99974 6.94524 2.00005 7.19543 2.00005 7.50002C2.00005 7.80461 1.99974 8.0548 1.99949 8.26507C1.99849 9.08596 1.99824 9.29856 2.01963 9.7655C2.04625 10.3509 2.07823 10.7811 2.17588 11.1053C2.26976 11.417 2.37505 11.7342 2.7188 12.1171C3.06255 12.4999 3.39411 12.6733 3.81645 12.8007C4.23879 12.928 4.7696 12.9554 5.23052 12.9764C5.75332 13.0003 5.96052 13.0002 7.05714 12.9999L7.50006 12.9999C7.79304 12.9999 8.03569 13.0001 8.2409 13.0004C9.08195 13.0013 9.29425 13.0015 9.76575 12.9799C10.3512 12.9533 10.7814 12.9213 11.1056 12.8237C11.4173 12.7298 11.7345 12.6245 12.1173 12.2807C12.5001 11.937 12.6735 11.6054 12.8009 11.1831C12.9283 10.7607 12.9557 10.2299 12.9767 9.76902C13.0005 9.24689 13.0004 9.04027 13.0002 7.94749V7.94738L13.0001 7.50039L13.0001 7.05747C13.0004 5.96085 13.0005 5.75365 12.9766 5.23085C12.9556 4.76993 12.9282 4.23912 12.8009 3.81678C12.6735 3.39445 12.5001 3.06288 12.1173 2.71913C11.7345 2.37538 11.4172 2.27009 11.1056 2.17621C10.7813 2.07856 10.3511 2.04658 9.76571 2.01996C9.29421 1.99836 9.08194 1.99859 8.24092 1.99951H8.24092C8.0357 1.99974 7.79305 2.00001 7.50006 2.00001L7.05704 1.99993C5.96051 1.99964 5.75331 1.99958 5.23052 2.02343C4.7696 2.04446 4.23879 2.07183 3.81645 2.19921C3.39411 2.32659 3.06255 2.49999 2.7188 2.88281C2.37505 3.26562 2.26976 3.58286 2.17588 3.89453C2.07823 4.21874 2.04625 4.64894 2.01963 5.23437C1.99824 5.70131 1.99849 5.91401 1.99949 6.73496ZM7.49996 5.25015C6.25741 5.25015 5.25012 6.25744 5.25012 7.49999C5.25012 8.74254 6.25741 9.74983 7.49996 9.74983C8.74251 9.74983 9.7498 8.74254 9.7498 7.49999C9.7498 6.25744 8.74251 5.25015 7.49996 5.25015ZM4.25012 7.49999C4.25012 5.70515 5.70512 4.25015 7.49996 4.25015C9.2948 4.25015 10.7498 5.70515 10.7498 7.49999C10.7498 9.29483 9.2948 10.7498 7.49996 10.7498C5.70512 10.7498 4.25012 9.29483 4.25012 7.49999ZM10.9697 4.7803C11.3839 4.7803 11.7197 4.44452 11.7197 4.0303C11.7197 3.61609 11.3839 3.2803 10.9697 3.2803C10.5555 3.2803 10.2197 3.61609 10.2197 4.0303C10.2197 4.44452 10.5555 4.7803 10.9697 4.7803Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>

            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
