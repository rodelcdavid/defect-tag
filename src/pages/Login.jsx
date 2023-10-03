import { Box, Button, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import defectlogo from "../assets/defectlogo.png";
import iwslogo from "../assets/iwslogo.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authSlice";
import { useLazyLoginUserQuery } from "../app/defectTagAPI";
import { useForm } from "react-hook-form";

function Login() {
  /* Utils */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* React Hook Form */

  const {
    register,
    handleSubmit,
    setError,
    trigger,
    setValue,
    formState: { errors },
  } = useForm({ reValidateMode: "onSubmit" });

  /* RTK Query */
  const [loginUser] = useLazyLoginUserQuery();

  /* Handler */
  const handleLogin = async (data) => {
    // if correct credentials, set user
    const loginUserResult = await loginUser({ Password: data?.password });

    if (loginUserResult.isSuccess) {
      const { username, fullname } = loginUserResult.data;
      dispatch(setUser({ user: { username, fullname } }));
      navigate("/");
    } else {
      setError("password", {
        type: "manual",
        message: "Invalid Credentials!",
      });
    }
  };

  //focus on the input upon component load
  //   const inputRef = useRef();
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

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

        <Input
          type="password"
          w="18rem"
          isInvalid={errors?.password}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(handleLogin)();
            }
          }}
          {...register("password", { required: true })}
        />
        {errors?.password && (
          <Text fontSize="xs" color="red">
            Invalid credentials!
          </Text>
        )}

        <Button colorScheme="blue" w="8rem" onClick={handleSubmit(handleLogin)}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
