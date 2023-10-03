import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSearchFacilityDialog } from "../../slices/dialogSlice";
import { FaSearch } from "react-icons/fa";

const productList = [
  { productNo: "1111111", defectClass: "s" },
  { productNo: "2222222", defectClass: "t" },
  { productNo: "3333333", defectClass: "s" },
  { productNo: "4444444", defectClass: "s" },
  { productNo: "5555555", defectClass: "s" },
  { productNo: "6666666", defectClass: "s" },
];
function SearchFacilityDialog() {
  const { dialogs } = useSelector((state) => state.dialogState);
  const cancelRef = React.useRef();

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeSearchFacilityDialog());
  };

  //   const [searchValue, setSearchValue] = useState(null);
  const [searchResults, setSearchResults] = useState(productList);

  //   const onSearchChange = (e) => {
  //     setSearchValue(e.target.value);
  //   };

  const inputRef = useRef();

  const handleSearch = useCallback(
    (e) => {
      const searchValue = e.target.value;
      if (searchValue) {
        const results = productList.filter((item) =>
          item.productNo
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults(productList);
      }
    },
    [setSearchResults]
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <AlertDialog
        isOpen={dialogs.searchFacilityDialog.isOpen}
        leastDestructiveRef={cancelRef}
        onClose={handleClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Search Product No.
            </AlertDialogHeader>

            <AlertDialogBody>
              <Box>
                <Box display="flex">
                  <InputGroup>
                    <Input
                      type="text"
                      border="1px solid black"
                      ref={inputRef}
                      onChange={handleSearch}
                    />
                    <InputRightElement>
                      <FaSearch color="gray" />
                    </InputRightElement>
                  </InputGroup>
                </Box>
                <TableContainer
                  maxH="20rem"
                  overflowY="auto"
                  mt="0.5rem"
                  border="1px solid black"
                >
                  <Table size="sm">
                    <Thead>
                      <Tr>
                        <Th bgColor="blue.500" color="#fff">
                          Product No.
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {searchResults?.map((item) => (
                        <Tr>
                          <Td>{item.productNo}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleClose} ml={3}>
                Select
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SearchFacilityDialog;
