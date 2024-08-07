import React, { useState } from 'react'
import image from '../../assets/landing.svg'
import { Box, Button, Flex, FormInput, toast } from '@sparrowengg/twigs-react'
import { Link, useNavigate, } from 'react-router-dom'
import { signInWithGooglePopup } from "../../utils/Auth";
import google from "../../assets/Google_Icon.webp";
import API from "api";

function Signup() {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      const res = await API.post("/signup", user);
      if (res.data.email === user.email) {
        navigate("/login");
      }
    } catch (err) {
      toast({
        variant: "error",
        title: "Error in signup",
        description: err.message,
      });
      console.log("Error in signup", err);
    }
  };
  const signupWithGoogle = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    setUser({
      email: res.user.email,
      password: "password",
    });
    signup();
  };
  return (
    <Box>
      <Flex
        css={{
          width: "100vw",
          height: "100vh",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <img src={image} alt="Signup" />
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
            Signup
          </Box>

          <Flex flexDirection="column" gap={20}>
            <FormInput
              size={"lg"}
              label="Email Address"
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
            <FormInput
              label="Password"
              size={"lg"}
              value={user.password}
              showCount
              type="password"
              maxLength={16}
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
            Already member?{" "}
            <Link
              style={{ color: "#56b0bb", fontFamily: "sans-serif" }}
              to="/login"
            >
              Login here
            </Link>
          </Box>
          <Button
            css={{ fontFamily: "sans-serif" }}
            size={"lg"}
            onClick={signup}
          >
            Signup
          </Button>
          <Flex>
            <Flex
              css={{
                height: "$10",
                boxShadow: "$sm",
                borderRadius: "$xl",
                width: "100%",
                cursor: "pointer",
              }}
              gap={10}
              justifyContent="center"
              onClick={signupWithGoogle}
            >
              <img src={google} alt="Gooogle" />
              <Flex alignItems="center">Signup with Google</Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Signup