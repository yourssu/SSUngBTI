import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { pageVariants } from "constants/animation";
import { mbtiResults, MbtiType } from "constants/mbti";
import { motion } from "framer-motion";
import useMbtiResult from "hooks/useMbtiResult";
import { FacebookIcon, KakaoIcon, ShareIcon } from "icon";
import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

type CompatibilityBoxProps = {
  mbtiId: MbtiType;
};
const CompatibilityBox: FC<CompatibilityBoxProps> = ({ mbtiId }) => (
  <Box textAlign="center">
    <Image src={`${process.env.BASE_NAME}img/${mbtiId}.png`} />
    <Heading fontSize="0.875rem">
      {mbtiResults.find(r => r.id === mbtiId).title}
    </Heading>
  </Box>
);

export const Result: FC = () => {
  const mbti = useMbtiResult();
  return (
    <motion.div
      className="result-page"
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <Stack spacing="2.813rem">
        <Box textAlign="center">
          <Heading fontSize="1.25rem">{mbti.subtitle}</Heading>
          <Heading fontSize="2rem">{mbti.title}</Heading>
        </Box>

        <Box p="0 3rem" bgColor="brandBG">
          <Image
            w="full"
            bgColor="white"
            m="auto"
            src={`${process.env.BASE_NAME}img/${mbti.id}.png`}
          />
        </Box>

        <Box p="0 2rem">
          <Text fontSize="0.875rem">{mbti.description}</Text>
        </Box>

        <Box p="0 2rem">
          <Heading fontSize="1rem">{"단짝친구"}</Heading>
          <HStack spacing="1rem">
            <CompatibilityBox mbtiId={mbti.compatibility[0]} />
            <CompatibilityBox mbtiId={mbti.compatibility[1]} />
          </HStack>
        </Box>

        <Box p="0 2rem">
          <Heading fontSize="1rem">{"테스트 공유하기"}</Heading>
          <HStack spacing="3rem" mt="1rem" justifyContent="center">
            <KakaoIcon w="3rem" h="3rem" />
            <FacebookIcon w="3rem" h="3rem" />
            <ShareIcon w="3rem" h="3rem" />
          </HStack>
        </Box>

        <LinkBox as={Button} w="full" variant="mbti_reset">
          <LinkOverlay as={RouterLink} to="/">
            {"테스트 다시하기"}
          </LinkOverlay>
        </LinkBox>
      </Stack>
    </motion.div>
  );
};
