import * as React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Box,
  StackDivider,
  Container,
} from "@chakra-ui/react";

import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";

var utc = new Date().getFullYear();

function About() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              <Text pt="2" fontSize="sm">
                View a summary of all your clients over the last month.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Analysis
              </Heading>
              <Text pt="2" fontSize="sm">
                See a detailed analysis of all your business clients.
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Footer>
        <Text>
          {" "}
          Copyright &copy;
          {utc}
        </Text>{" "}
      </Footer>
    </Container>
  );
}

export default About;
