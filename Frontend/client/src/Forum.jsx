import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, VStack, Button, Input, HStack, Textarea } from '@chakra-ui/react';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch posts from the server
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:3001/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  // Add a new post
  const handleAddPost = async () => {
    if (title && content) {
      const response = await axios.post('http://localhost:3001/api/posts', { title, content });
      setPosts([response.data, ...posts]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }}>
      {/* Stack everything vertically */}
      <VStack spacing={6} align="stretch">
        {/* Form for adding posts */}
        <HStack w="full" spacing={4}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nickname"
            size="lg"
            height="50px"
            w="full" // Full width for the input
          />
        </HStack>

        <HStack w="full" spacing={4}>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            size="lg"
            height="150px"
            w="full" // Full width for the textarea
          />
        </HStack>

        <Button
          onClick={handleAddPost}
          size="lg"
          colorScheme="teal"
          w="full" // Full width for the button
        >
          Add Post
        </Button>

        {/* Displaying posts */}
        <VStack spacing={4} align="stretch">
          {posts.map(post => (
            <Box
              key={post.id}
              borderWidth="1px"
              p={6}
              borderRadius="md"
              maxW="100%"  // Make the post box responsive, scaling horizontally
              w="full"  // Full width for the box
              minH={{ base: "150px", md: "200px" }}  // Dynamic height based on screen size
              height="auto" // Automatically adjust the height based on content
              boxSizing="border-box"
            >
              <Text fontWeight="bold" fontSize="xl">{post.title}</Text>
              <Text fontSize="lg" my={2}>{post.content}</Text>
              <Text fontSize="sm" color="gray.500">{new Date(post.created_at).toLocaleString()}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Forum;
