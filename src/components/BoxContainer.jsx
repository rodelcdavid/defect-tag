import { Box } from "@chakra-ui/react";
import React from "react";

function BoxContainer({ children }) {
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      w="21rem"
      m="5rem auto"
      border="1px solid"
      borderColor="blackAlpha.400"
      boxShadow="lg"
      padding="1.5rem"
      gap="0.3rem"
      sx={{
        input: {
          border: "1px solid",
          borderColor: "blackAlpha.400",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default BoxContainer;
