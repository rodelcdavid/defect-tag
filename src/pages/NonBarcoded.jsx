import React from "react";
import ActionBar from "../components/ActionBar";
import BoxContainer from "../components/BoxContainer";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function NonBarcoded() {
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
          <Input type="text" />
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
          <Input type="text" />
        </FormControl>
        {/* Wire */}
        <FormControl isRequired>
          <FormLabel>Wire</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Terminal */}
        <FormControl isRequired>
          <FormLabel>Terminal</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Process Defect */}
        <FormControl isRequired>
          <FormLabel>Process Defect</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Defect Class*/}
        <FormControl isRequired>
          <FormLabel>Defect Class</FormLabel>
          <Input type="text" />
        </FormControl>
        {/* Shift */}
        <FormControl isRequired>
          <FormLabel>Shift</FormLabel>
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
        {/* No. of Defect */}
        <FormControl isRequired>
          <FormLabel>No. of Defect</FormLabel>
          <Input type="text" />
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
