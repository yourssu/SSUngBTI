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
import { sbtiResults, SbtiType } from "constants/sbti";
import { AnimatePresence, motion } from "framer-motion";
import useSbtiResult from "hooks/useSbtiResult";
import useShare from "hooks/useShare";
import { FacebookIcon, KakaoIcon, ShareIcon } from "icon";
import React, { FC, useMemo } from "react";
import { Link as RouterLink, useHistory, useParams } from "react-router-dom";

type CompatibilityBoxProps = {
  sbtiId: SbtiType;
};
const CompatibilityBox: FC<CompatibilityBoxProps> = ({ sbtiId }) => {
  const sbti = useMemo(() => sbtiResults.find(r => r.id === sbtiId), [sbtiId]);
  return (
    <Box textAlign="center">
      <AnimatedImage src={`${process.env.BASE_NAME}img/${sbti.type}.png`} />
      <Heading fontSize="0.875rem">{sbti.title}</Heading>
    </Box>
  );
};

export const Result: FC = () => {
  const params = useParams<{ sbti: string }>();
  const history = useHistory();
  const found = sbtiResults.find(r => r.id === params.sbti.toUpperCase());
  if (found !== undefined) {
    history.push(`/result/${found.type}/`);
    return <></>;
  }
  const sbti = useSbtiResult(parseInt(params.sbti));
  const { shareToKakao, shareToFacebook, shareToNative } = useShare(
    useMemo(
      () => ({
        kakaoAppKey: "198aa41f0b5781d5a78ee6af2ba40e24",
        facebookAppID: "1646991318648798",
        requestUrl: `https://ssungbti.yourssu.com/result/${sbti.type}/`,
        kakaoShareOption: {
          templateId: 49134,
          templateArgs: {
            description: `${sbti.subtitle} ${sbti.title}`,
            resultImage: `https://ssungbti.yourssu.com/img/${sbti.type}.png`,
            resultPath: `result/${sbti.type}/`,
          },
        },
      }),
      [sbti]
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
            <Heading fontSize="1.25rem">{sbti.subtitle}</Heading>
            <Heading fontSize="2rem">{sbti.title}</Heading>
          </Box>

          <Box p="0 3rem">
            <AnimatedImage
              w="full"
              m="auto"
              src={`${process.env.BASE_NAME}img/${sbti.type}.png`}
            />
          </Box>

          <Box p="0 2rem">
            <Text fontSize="0.875rem" style={{ textIndent: "0.7rem" }}>
              {sbti.description}
            </Text>
          </Box>

          <Box p="0 2rem">
            <Heading fontSize="1rem">{"단짝친구"}</Heading>
            <HStack spacing="1rem">
              <CompatibilityBox sbtiId={sbti.compatibility[0]} />
              <CompatibilityBox sbtiId={sbti.compatibility[1]} />
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
                  onClick={shareToNative}
                />
              </motion.div>
            </HStack>
          </Box>

          <Box p="0 1rem">
            <LinkBox as={Button} w="full" variant="sbti_reset">
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
