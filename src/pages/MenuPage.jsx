import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBarcode, FaPrint, FaTrash } from "react-icons/fa";
import { RxShadowNone } from "react-icons/rx";
import { RiLogoutBoxRLine } from "react-icons/ri";
import BoxContainer from "../components/BoxContainer";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slices/authSlice";
import {
  closeMessageConfirmDialog,
  openMessageConfirmDialog,
} from "../slices/dialogSlice";

function MenuPage() {
  const { user } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      openMessageConfirmDialog({
        messageHeader: "Confirm Logout",
        messageBody: "Are you sure you want to logout?",
        action: "Logout",
        actionColor: "red",
        handleConfirm: handleConfirmLogout,
      })
    );
  };

  const handleConfirmLogout = () => {
    dispatch(logoutUser());
    dispatch(closeMessageConfirmDialog());
  };
  return (
    <BoxContainer>
      <Text textAlign="center" fontWeight="bold" fontSize="lg">
        Defect Tag Menu
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
      <Button
        as={NavLink}
        to="/delete"
        leftIcon={<FaTrash />}
        colorScheme="red"
      >
        Delete
      </Button>
      <Divider mt="3rem" h="2px" bgColor="#000" />
      <Flex mt="1rem" justifyContent="center" gap="0.3rem">
        <Text>Logged in as:</Text>
        <Text
          fontWeight="bold"
          color="green.500"
          borderBottom="2px solid"
          borderColor="green.500"
        >
          {user.username}
        </Text>
      </Flex>
      <Button
        as={NavLink}
        onClick={handleLogout}
        leftIcon={<RiLogoutBoxRLine />}
        colorScheme="red"
        variant="outline"
        mt="1rem"
      >
        Logout
      </Button>
    </BoxContainer>
  );
}

export default MenuPage;
