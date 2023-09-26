import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BoxContainer from "../components/BoxContainer";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import ActionBar from "../components/ActionBar";
import { Controller, useForm } from "react-hook-form";

function Barcoded() {
  const { control, register } = useForm();
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
          <Input type="text" bgColor="gray.100" isReadOnly />
        </FormControl>
        {/* Shift */}
        <FormControl isRequired>
          <FormLabel>Shift</FormLabel>
          <Controller
            name="Shift"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
        </FormControl>
        {/* Line No. */}
        <FormControl isRequired>
          <FormLabel>Line No.</FormLabel>
          <Input type="text" bgColor="gray.100" isReadOnly />
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
          <Controller
            name="ProcessDefect"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
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
          <Controller
            name="DefectClass"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
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
