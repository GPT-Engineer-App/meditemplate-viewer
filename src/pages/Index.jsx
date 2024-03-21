import React from "react";
import { Box, Heading, Text, Button, Image, Badge, Icon, VStack, HStack, Input, Divider } from "@chakra-ui/react";
import { FaPlus, FaPencilAlt, FaEye } from "react-icons/fa";

const Index = () => {
  const templates = [
    { id: 1, title: "Rectum tumor primer staging", status: "draft", created: "8 months ago" },
    { id: 2, title: "COVID-19 CT Structured Report", status: "ready", created: "2 years ago" },
    { id: 3, title: "Brain MRI Report", status: "draft", created: "1 year ago" },
  ];

  const categories = ["COVID-19", "Neuroradiology", "Oncology"];

  return (
    <Box>
      <HStack bg="gray.800" p={4} justifyContent="space-between">
        <HStack>
          <Image src="https://images.unsplash.com/photo-1541703203846-94ce22d65b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx4cmF5JTIwaWNvbnxlbnwwfHx8fDE3MTA5ODE4MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="40px" />
          <Heading size="lg" color="white">
            XRreport
          </Heading>
        </HStack>
        <Button colorScheme="blue" size="sm">
          Sign In
        </Button>
      </HStack>

      <HStack alignItems="start" spacing={8} p={8}>
        <VStack bg="gray.700" p={4} rounded="md" spacing={4} minW="200px">
          <Input placeholder="Search templates..." size="sm" />
          <Divider />
          <VStack align="stretch" spacing={2}>
            <Text fontWeight="bold">Templates</Text>
            {categories.map((cat) => (
              <Text key={cat} fontSize="sm">
                {cat}
              </Text>
            ))}
            <Button leftIcon={<FaPlus />} size="sm" variant="outline">
              Add new template
            </Button>
          </VStack>
        </VStack>

        <VStack spacing={4} align="stretch" flexGrow={1}>
          {templates.map((template) => (
            <HStack key={template.id} bg="gray.700" p={4} rounded="md" justifyContent="space-between">
              <VStack align="start">
                <HStack>
                  <Text fontWeight="bold">{template.title}</Text>
                  <Badge colorScheme={template.status === "ready" ? "green" : "purple"}>{template.status}</Badge>
                </HStack>
                <Text fontSize="sm">Created by Anonymous - {template.created}</Text>
              </VStack>
              <HStack>
                <Icon as={FaPencilAlt} />
                <Icon as={FaEye} />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
