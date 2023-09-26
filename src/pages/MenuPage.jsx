import { Box, Button, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBarcode, FaPrint } from "react-icons/fa";
import { RxShadowNone } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import BoxContainer from "../components/BoxContainer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/authSlice";

function MenuPage() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <BoxContainer>
      <Text textAlign="center" fontWeight="bold" fontSize="lg">
        Menu
      </Text>
      <Button
        as={NavLink}
        to="/barcoded"
        leftIcon={<FaBarcode />}
        colorScheme="blue"
      >
        Barcoded
      </Button>
      <Button
        as={NavLink}
        to="/nonbarcoded"
        leftIcon={<RxShadowNone />}
        colorScheme="green"
      >
        Non-Barcoded
      </Button>
      <Button
        as={NavLink}
        to="/reprint"
        leftIcon={<FaPrint />}
        colorScheme="orange"
      >
        Reprint
      </Button>
      <Divider mt="3rem" h="2px" bgColor="#000" />
      <Button
        as={NavLink}
        onClick={handleLogout}
        leftIcon={<RiLogoutBoxRLine />}
        colorScheme="red"
        mt="3rem"
      >
        Logout
      </Button>
    </BoxContainer>
  );
}

export default MenuPage;
