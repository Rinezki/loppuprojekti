import { Box, Flex, Text, Button, Spacer, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box bg="gray.800" color="white" px={6} py={4} boxShadow="md">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          OSRS Price Checker
        </Text>
        <Spacer />
        <HStack>
        <Button as={Link} to="/" size="sm">
          Home
        </Button>
        <Button as={Link} to="/Forum" size="sm">
          Forum
        </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;