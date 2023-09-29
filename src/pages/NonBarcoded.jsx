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
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import {
  connectorList,
  defectClassList,
  processDefectList,
  shiftList,
  terminalList,
  wireList,
} from "../utils/nonBarcodedSelect";

function NonBarcoded() {
  const { control, register } = useForm();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/printing");
  };

  const onStdChange = () => {};
  const onActChange = () => {};
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
                {connectorList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
                {wireList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
                {terminalList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
                {processDefectList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
                {defectClassList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
                {shiftList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
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
              <NumberInput {...field} w="5rem" min={1} defaultValue={1}>
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
          <Box display="flex" gap=".3rem" alignItems="center" mt="0.3rem">
            <input type="checkbox" onChange={onStdChange} />
            <Text fontStyle="italic" fontSize="xs">
              Set Std to NA
            </Text>
          </Box>
        </FormControl>
        {/* Act */}
        <FormControl isRequired>
          <FormLabel>Act</FormLabel>
          <Input type="text" />
          <Box display="flex" gap=".3rem" alignItems="center" mt="0.3rem">
            <input type="checkbox" onChange={onActChange} />
            <Text fontStyle="italic" fontSize="xs">
              Set Act to NA
            </Text>
          </Box>
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
