import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import BoxContainer from "../components/BoxContainer";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import ActionBar from "../components/ActionBar";

function Barcoded() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/printing");
  };
  return (
    <>
      <ActionBar bgColor="blue.500" title="Barcoded" />
      <BoxContainer>
        {/* Hinban */}
        <FormControl isRequired>
          <FormLabel>Hinban</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Inspector Code */}
        <FormControl isRequired>
          <FormLabel>Inspector Code </FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Shift */}
        <FormControl isRequired>
          <FormLabel>Shift</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Line No. */}
        <FormControl isRequired>
          <FormLabel>Line No.</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Lot No. */}
        <FormControl isRequired>
          <FormLabel>Lot No.</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Defect Code */}
        <FormControl isRequired>
          <FormLabel>Defect Code</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Process Defect */}
        <FormControl isRequired>
          <FormLabel>Process Defect</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Picking Tools */}
        <FormControl isRequired>
          <FormLabel>Picking Tools</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Connector Name */}
        <FormControl isRequired>
          <FormLabel>Connector Name</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Wire Color */}
        <FormControl isRequired>
          <FormLabel>Wire Color</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Circuit No. */}
        <FormControl isRequired>
          <FormLabel>Circuit No.</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Operator Code */}
        <FormControl isRequired>
          <FormLabel>Operator Code</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Defect Class */}
        <FormControl isRequired>
          <FormLabel>Defect Class</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Terminal Type */}
        <FormControl isRequired>
          <FormLabel>Terminal Type</FormLabel>
          <Input type="text" />
        </FormControl>

        <Box display="flex" justifyContent="center">
          <Button colorScheme="blue" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </BoxContainer>
    </>
  );
}

export default Barcoded;
