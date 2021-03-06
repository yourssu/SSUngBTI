import firebase from "firebase/app";
import { useEffect, useMemo } from "react";

type KakaoShareOption = {
  templateId: number;
  templateArgs: {
    description: string;
    resultImage: string;
    resultPath: string;
  };
};
type UseShareResult = {
  shareToKakao: () => void;
  shareToFacebook: () => void;
  shareToNative: () => void;
};
type UseShareProps = {
  requestUrl: string;
  kakaoAppKey: string;
  facebookAppID: string;
  kakaoShareOption: KakaoShareOption;
};
export default function useShare({
  requestUrl,
  kakaoAppKey,
  facebookAppID,
  kakaoShareOption,
}: UseShareProps): UseShareResult {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) window.Kakao.init(kakaoAppKey);
    return () => window.Kakao.cleanup();
  }, [kakaoAppKey]);
  const analytics = firebase.analytics();

  return useMemo(
    () => ({
      shareToKakao() {
        if (window.Kakao.isInitialized()) {
          window.Kakao.Link.sendCustom(kakaoShareOption);
          analytics.logEvent("share_kakao");
        }
      },

      shareToFacebook() {
        const uri = `https://www.facebook.com/dialog/share?app_id=${facebookAppID}&href=${encodeURIComponent(
          requestUrl
        )}`;
        window.open(
          uri,
          "_blank",
          "toolbar=yes, scrollbars=yes,status=no, resizable=yes,left=500, width=600, height=400"
        );
        analytics.logEvent("share_facebook");
      },

      async shareToNative() {
        try {
          if (navigator.share) {
            await navigator.share({
              title: document.title,
              url: requestUrl,
            });
          } else if (navigator.clipboard) {
            await navigator.clipboard.writeText(requestUrl);
            alert("URL이 복사되었습니다.");
          } else {
            throw new Error("클립보드를 사용할 수 없습니다.");
          }
        } catch (err) {
          if (err.name !== "AbortError") {
            prompt("다음 주소를 복사해서 친구들에게 공유해 주세요", requestUrl);
          }
        }

        analytics.logEvent("share_link");
      },
    }),

    [requestUrl, facebookAppID, kakaoShareOption, analytics]
  );
}
