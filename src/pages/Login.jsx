import { Box, Button, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import defectlogo from "../assets/defectlogo.png";
import iwslogo from "../assets/iwslogo.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authSlice";

function Login() {
  /* Utils */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Handler */
  const handleLogin = () => {
    // if correct credentials, set user
    dispatch(setUser({ user: "51345" }));
    navigate("/");
  };

  //focus on the input upon component load
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box
        border="1px solid"
        borderColor="blackAlpha.400"
        padding="3rem 5rem"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="1rem"
        boxShadow="lg"
        w="20rem"
      >
        <Box display="flex" gap="0.3rem" alignItems="center" w="100%">
          <Image src={defectlogo} w="2rem" />
          <Text textAlign="center" fontWeight="bold" fontSize="sm">
            Mobile Defect Tag
          </Text>
        </Box>
        <Input type="password" w="18rem" ref={inputRef} />
        <Button colorScheme="blue" w="8rem" onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
