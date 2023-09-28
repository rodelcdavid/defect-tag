import { Box, Button, FormLabel, Text } from "@chakra-ui/react";
import React from "react";

function Printing() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <Box
        padding="0.3rem"
        sx={{
          "@page": {
            margin: "0",
          },
          label: {
            "@media print": { fontSize: ".7rem", w: "4.3rem" },
          },
          p: {
            "@media print": { fontSize: ".8rem" },
          },
        }}
      >
        <Text textAlign="center" fontWeight="bold">
          International Wiring Systems (Phils.) Corp.
        </Text>
        {/* Control Number */}
        <Box display="flex" gap="0.5rem" mt="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Control No:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            T901-000144
          </Text>
        </Box>

        {/* Title */}
        <Box
          mt="0.3rem"
          display="flex"
          flexDir="column"
          padding="0.3rem 2rem"
          alignItems="center"
          border="1px solid black"
        >
          <Text
            fontWeight="bold"
            textAlign="center"
            sx={{ "@media print": { fontSize: "0.8rem !important" } }}
          >
            PRODUCT DEFECT TAG
          </Text>
          <Text>(Assembly/Inspection)</Text>
        </Box>

        {/* Date */}
        <Box display="flex" gap="0.5rem" mt="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Date:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            9/28/2023, 1:51:58 PM
          </Text>
        </Box>

        {/* Line Name */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Line Name:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            MZD-J J59C AXELA REAR#3
          </Text>
        </Box>

        {/* Hinban */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Hinban:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            8TES9S11K36I
          </Text>
        </Box>

        {/* RME */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            RME:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            MAUREEN CANE O. BOGNOT
          </Text>
        </Box>

        {/* Defect Details */}
        <Text
          textAlign="center"
          fontWeight="bold"
          fontSize="xs"
          mt="0.5rem"
          sx={{
            "@media print": { fontSize: ".7rem !important" },
          }}
        >
          DEFECT DETAILS
        </Text>

        {/* Def. Code */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Def. Code:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            9999
          </Text>
        </Box>

        {/* Con. Name */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Con. Name
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            sa
          </Text>
        </Box>

        {/* Circuit No:  */}
        <Box display="flex" gap="0.5rem">
          <FormLabel w="5rem" fontSize="sm">
            Circuit No.:
          </FormLabel>
          <Text
            w="10rem"
            borderBottom="1px solid black"
            fontSize="xs"
            h="max-content"
          >
            C1A
          </Text>
        </Box>

        {/* Asignatories */}

        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          padding="0.5rem 1rem"
          border="1px dashed black"
          mt="0.5rem"
        >
          <Text
            fontSize="xs"
            fontStyle="italic"
            textAlign="center"
            sx={{
              "@media print": { fontSize: ".6rem" },
            }}
          >
            *Please ensure that the data above is correct before signing*
          </Text>
          <Text
            borderTop="1px solid black"
            w="10rem"
            mt="1rem"
            textAlign="center"
          >
            Assy Leader
          </Text>

          <Text
            borderTop="1px solid black"
            w="10rem"
            mt="1.5rem"
            textAlign="center"
          >
            Assy SV
          </Text>
        </Box>
      </Box>

      {/* Print Button */}
      <Box
        display="flex"
        justifyContent="center"
        sx={{ "@media print": { display: "none" } }}
      >
        <Button onClick={handlePrint} colorScheme="blue" w="10rem">
          Print
        </Button>
      </Box>
    </>
  );
}

export default Printing;
