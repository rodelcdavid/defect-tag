import React from "react";
import ActionBar from "../components/ActionBar";
import BoxContainer from "../components/BoxContainer";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

function NonBarcoded() {
  const { control, register } = useForm();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/printing");
  };
  return (
    <>
      <ActionBar bgColor="green.500" title="Non Barcoded" />
      <BoxContainer>
        {/* Extracted By */}
        <FormControl isRequired>
          <FormLabel>Extracted By</FormLabel>
          <Input type="text" bgColor="gray.100" isReadOnly />
        </FormControl>
        {/* Hinban*/}
        <FormControl isRequired>
          <FormLabel>Hinban </FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Product No. */}
        <FormControl isRequired>
          <FormLabel>Product No.</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Line No. */}
        <FormControl isRequired>
          <FormLabel>Line No.</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Defect Code */}
        <FormControl isRequired>
          <FormLabel>Defect Code</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Connector */}
        <FormControl isRequired>
          <FormLabel>Connector</FormLabel>
          <Controller
            name="Connector"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
        </FormControl>
        {/* Wire */}
        <FormControl isRequired>
          <FormLabel>Wire</FormLabel>
          <Controller
            name="Wire"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
        </FormControl>
        {/* Terminal */}
        <FormControl isRequired>
          <FormLabel>Terminal</FormLabel>
          <Controller
            name="Terminal"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                <option>1</option>
              </Select>
            )}
          />
        </FormControl>
        {/* Process Defect */}
        <FormControl isRequired>
          <FormLabel>Process Defect</FormLabel>
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
        {/* Defect Class*/}
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
        {/* No. of Defect */}
        <FormControl isRequired>
          <FormLabel>No. of Defect</FormLabel>
          <Controller
            name="NumberOfDefect"
            control={control}
            render={({ field }) => (
              <NumberInput {...field} w="5rem" min={0} defaultValue={0}>
                <NumberInputField maxLength={4} />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            )}
          />
        </FormControl>
        {/* Std */}
        <FormControl isRequired>
          <FormLabel>Std</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Act */}
        <FormControl isRequired>
          <FormLabel>Act</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Operator Code */}
        <FormControl isRequired>
          <FormLabel>Operator Code</FormLabel>
          <Input type="text" />
        </FormControl>

        <Box display="flex" justifyContent="center" onClick={handleSubmit}>
          <Button colorScheme="green">Submit</Button>
        </Box>
      </BoxContainer>
    </>
  );
}

export default NonBarcoded;
