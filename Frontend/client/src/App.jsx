import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, Container, Field, Heading, HStack, Input, SimpleGrid, Stack, Image, Text, Center, Spinner, VStack } from '@chakra-ui/react';
import Navbar from './components/navbar';
import Forum from "./Forum";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setError(null);
      setItems([]);
      setLoading(true);

      const response = await axios.get(`http://localhost:3001/api/items/search?name=${searchTerm}`);

      const itemsWithPrices = await Promise.all(response.data.map(async (item) => {
        try {
          const priceResponse = await axios.get(`http://localhost:3001/getItemPrice?id=${item.id}`);
          return {
            ...item,
            price: priceResponse.data.price,
            priceChange: priceResponse.data.priceChange
          };
        } catch {
          return {
            ...item,
            price: 'Price unavailable',
            priceChange: 'N/A'
          };
        }
      }));

      setItems(itemsWithPrices);
    } catch (err) {
      setError('Error fetching items');
    }
    setLoading(false);
  };

  return (
    <Container gap={5} maxW="full" p={{ base: 4, md: 8 }} mt={4}>
      <HStack marginY={4} spacing={4} align="center" w="full" justify="center">
        <Field.Root invalid={error} w="full">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter item name"
            size="lg"
          />
          <Field.ErrorText>item name is wrong</Field.ErrorText>
        </Field.Root>
        <Button 
          loading={loading} 
          loadingText={"Searching..."} 
          onClick={handleSearch} 
          size="lg"
        >
          Search
        </Button>
      </HStack>

      {loading ? (
        <VStack>
          <Spinner />
          <Text>Searching...</Text>
        </VStack>
      ) : (
        <SimpleGrid 
          columns={{ base: 2, sm: 3, md: 4, lg: 5 }} 
          gap={4}
        >
          {items.map(item => (
            <Box borderWidth="1px" maxW="sm" key={item.id} borderRadius="md" overflow="hidden">
              <Center>
                <Image
                  src={`https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=${item.id}`}
                  alt={item.name}
                  boxSize="150px"
                  objectFit="contain"
                />
              </Center>
              <Box p={4}>
                <Text fontWeight="bold" fontSize="lg">{item.name}</Text>
                <Text fontSize="sm">Current Price: {item.price}</Text>
                <Text fontSize="sm">Price Change (Today): {item.priceChange}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Container>
  );
};

export default App;
