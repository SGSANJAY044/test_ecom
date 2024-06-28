import React, { useState } from 'react'
import API from 'api';
import { useDispatch } from 'react-redux';

import image from '../../assets/landing.svg'
import { Box, Button, Flex, FormInput, toast } from '@sparrowengg/twigs-react'
import { Link, useNavigate } from 'react-router-dom'
import { setUserData } from '../../redux/User';

function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = async () => {
        try {
            const res = await API.put('/login', user);
            if (res.data?.token) {
                localStorage.setItem("user", JSON.stringify({ email: user.email, token: res.data.token }));
                dispatch(setUserData({ email: user.email, token: res.data.token }))
                navigate('/home')
            }
        }
        catch (err) {
            console.log("Error in login", err);
            toast({
                variant: "error",
                title: "Error in login",
                description: err.message,
            })
        }
    }
    return (
      <>
        <Flex
          css={{
            width: "100vw",
            height: "100vh",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <img src={image} alt="Login" />
          <Flex
            css={{
              width: "40%",
              height: "50%",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              borderRadius: "$2xl",
              padding: 30,
            }}
            flexDirection="column"
            gap={30}
          >
            <Box
              css={{
                fontFamily: "sans-serif",
                fontSize: "$2xl",
                fontWeight: "$6",
                color: "$primary400",
              }}
            >
              Login
            </Box>

            <Flex flexDirection="column" gap={20}>
              <FormInput
                size={"lg"}
                label="Email Address"
                type="email"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <FormInput
                label="Password"
                size={"lg"}
                value={user.password}
                maxLength={16}
                showCount
                type="password"
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </Flex>
            <Box
              css={{
                textAlign: "center",
                fontFamily: "sans-serif",
                color: "gray",
              }}
            >
              New here?{" "}
              <Link
                style={{ color: "#56b0bb", fontFamily: "sans-serif" }}
                to="/signup"
              >
                Register now
              </Link>
            </Box>
            <Button
              css={{ fontFamily: "sans-serif" }}
              size={"lg"}
              onClick={login}
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </>
    );
}

export default Login