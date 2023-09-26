import { Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ActionBar({ bgColor, title }) {
  return (
    <Box
      fontWeight="bold"
      position="fixed"
      top="0"
      w="100%"
      left="50%"
      transform="translateX(-50%)"
      zIndex="100"
      bgColor={bgColor}
      color="#fff"
      borderTop="1px solid black"
      borderBottom="1px solid black"
      padding="0.5rem"
      display="flex"
      alignItems="center"
      // justifyContent="center"
    >
      <IconButton
        as={NavLink}
        to="/menu"
        icon={<FaArrowLeft />}
        variant="ghost"
        colorScheme="white"
      />
      <Text>{title}</Text>
    </Box>
  );
}

export default ActionBar;
