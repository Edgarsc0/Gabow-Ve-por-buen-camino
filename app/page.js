'use client';
import { Button, Tabs, Box, Text, Heading } from '@radix-ui/themes';
import { useState } from 'react';
import {
  Fade,
  Slide,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
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
            {showGabow ? (
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
                    <Heading size='5'>Ve por buen camino</Heading>
                  </Box>
                </Slide>
              </>
            ) : (
              <Zoom>
                <div className='flex justify-center items-center h-screen'>
                  <Heading
                    size='9'
                    className='text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'
                    onClick={() => setShowGabow(true)}
                  >
                    ¡Hola! Comencemos...
                  </Heading>
                </div>
              </Zoom>
            )}
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
    </>
  );
}
