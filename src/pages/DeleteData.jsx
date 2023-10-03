import React, { useCallback, useState } from "react";
import ActionBar from "../components/ActionBar";
import BoxContainer from "../components/BoxContainer";
import {
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
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const defectData = [
  { control: "123123", hinban: "aaaaaaa" },
  { control: "123123", hinban: "1232132" },
  { control: "123123", hinban: "1232132" },
  { control: "123123", hinban: "1232132" },
  { control: "123123", hinban: "1232132" },
  { control: "123123", hinban: "1232132" },
];

function DeleteData() {
  const [searchResults, setSearchResults] = useState(defectData);

  const navigate = useNavigate();

  const handleDelete = () => {};

  const handleSearch = useCallback(
    (e) => {
      const searchValue = e.target.value;
      if (searchValue) {
        const results = defectData.filter(
          (item) =>
            item.control
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase()) ||
            item.hinban
              .toString()
              .toLowerCase()
              .includes(searchValue.toLowerCase())
        );
        setSearchResults(results);
      } else {
        setSearchResults(defectData);
      }
    },
    [setSearchResults]
  );
  return (
    <>
      <ActionBar bgColor="red.500" title="Delete" />
      <BoxContainer>
        <Box>
          <Box display="flex">
            <InputGroup>
              <Input
                type="text"
                border="1px solid black"
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
                    Control No.
                  </Th>
                  <Th bgColor="blue.500" color="#fff">
                    Hinban
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {searchResults?.map((item) => (
                  <Tr>
                    <Td>{item.control}</Td>
                    <Td>{item.hinban}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box display="flex" justifyContent="center">
          <Button onClick={handleDelete} colorScheme="red" variant="outline">
            Delete
          </Button>
        </Box>
      </BoxContainer>
    </>
  );
}

export default DeleteData;
