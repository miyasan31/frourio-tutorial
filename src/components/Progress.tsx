import React, { FC } from 'react'
import { Center, Spinner } from '@chakra-ui/react'

type Props = {
  h: '200px' | '100px'
}
export const Progress: FC<Props> = (props) => {
  return (
    <Center h={props.h} w="100vw" color="white">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  )
}
