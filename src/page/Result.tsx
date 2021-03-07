import {
  Box,
  Button,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import AnimatedImage from "components/AnimatedImage";
import { pageVariants, shakeAnimation } from "constants/animation";
import { mbtiResults, MbtiType } from "constants/mbti";
import { AnimatePresence, motion } from "framer-motion";
import useMbtiResult from "hooks/useMbtiResult";
import useShare from "hooks/useShare";
import { FacebookIcon, KakaoIcon, ShareIcon } from "icon";
import React, { FC, useMemo } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";

type CompatibilityBoxProps = {
  mbtiId: MbtiType;
};
const CompatibilityBox: FC<CompatibilityBoxProps> = ({ mbtiId }) => (
  <Box textAlign="center">
    <AnimatedImage src={`${process.env.BASE_NAME}img/${mbtiId}.png`} />
    <Heading fontSize="0.875rem">
      {mbtiResults.find(r => r.id === mbtiId).title}
    </Heading>
  </Box>
);

export const Result: FC = () => {
  const params = useParams<{ mbti: string }>();
  const mbti = useMbtiResult(params.mbti);
  const { shareToKakao, shareToFacebook, shareToClipboard } = useShare(
    useMemo(
      () => ({
        kakaoAppKey: "198aa41f0b5781d5a78ee6af2ba40e24",
        facebookAppID: "1646991318648798",
        requestUrl: `https://ssungbti.yourssu.com/result/${mbti.id}/`,
        kakaoShareOption: {
          templateId: 49134,
          templateArgs: {
            description: `${mbti.subtitle} ${mbti.title}`,
            resultImage: `https://ssungbti.yourssu.com/img/${mbti.id}.png?v=2`,
            resultPath: `result/${mbti.id}/`,
          },
        },
      }),
      [mbti]
    )
  );
  return (
    <Box
      as={motion.div}
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <AnimatePresence initial={true}>
        <Stack spacing="2.813rem">
          <Box textAlign="center">
            <Heading fontSize="1.25rem">{mbti.subtitle}</Heading>
            <Heading fontSize="2rem">{mbti.title}</Heading>
          </Box>

          <Box p="0 3rem">
            <AnimatedImage
              w="full"
              m="auto"
              src={`${process.env.BASE_NAME}img/${mbti.id}.png`}
            />
          </Box>

          <Box p="0 2rem">
            <Text fontSize="0.875rem" style={{ textIndent: "0.7rem" }}>
              {mbti.description}
            </Text>
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
              <motion.div whileHover={shakeAnimation}>
                <KakaoIcon
                  w="3rem"
                  h="3rem"
                  cursor="pointer"
                  onClick={shareToKakao}
                />
              </motion.div>
              <motion.div whileHover={shakeAnimation}>
                <FacebookIcon
                  w="3rem"
                  h="3rem"
                  cursor="pointer"
                  onClick={shareToFacebook}
                />
              </motion.div>
              <motion.div whileHover={shakeAnimation}>
                <ShareIcon
                  w="3rem"
                  h="3rem"
                  cursor="pointer"
                  onClick={shareToClipboard}
                />
              </motion.div>
            </HStack>
          </Box>

          <Box p="0 1rem">
            <LinkBox as={Button} w="full" variant="mbti_reset">
              <LinkOverlay as={RouterLink} to="/">
                {"테스트 다시하기"}
              </LinkOverlay>
            </LinkBox>
          </Box>
        </Stack>
      </AnimatePresence>
    </Box>
  );
};
