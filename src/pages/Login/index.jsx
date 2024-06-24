import React from 'react'
import image from '../../assets/landing.svg'
import { Box, Button, Flex, FormInput } from '@sparrowengg/twigs-react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <Flex css={{
                width: '100vw',
                height: '100vh',
            }} justifyContent='center' alignItems='center'>
                <img src={image} alt="Login Image" />
                <Flex css={{
                    width: '40%',
                    height: '50%',
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                    borderRadius: '$2xl',
                    padding: 30
                }} flexDirection='column' gap={30}>
                    <Box css={{
                        fontFamily: 'sans-serif',
                        fontSize: '$2xl',
                        fontWeight: '$6',
                        color: '$primary400'
                    }}>Login</Box>

                    <Flex flexDirection='column' gap={20}>
                        <FormInput size={'lg'}
                            label="Email Address"
                        />
                        <FormInput
                            label="Password"
                            size={'lg'}
                            maxLength={16}
                        />
                    </Flex>
                    <Box css={{ textAlign: 'center', fontFamily: 'sans-serif', color: 'gray' }}>New here? <Link style={{ color: '#56b0bb', fontFamily: 'sans-serif' }} to='/signup'>Register now</Link></Box>
                    <Button css={{ fontFamily: 'sans-serif' }} size={'lg'}>Login</Button>
                </Flex>
            </Flex >
        </>
    )
}

export default Login