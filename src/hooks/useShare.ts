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
  shareToClipboard: () => void;
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

      async shareToClipboard() {
        try {
          if (navigator.clipboard)
            await navigator.clipboard.writeText(requestUrl);
          else throw new Error("클립보드를 사용할 수 없습니다.");
          alert("URL이 복사되었습니다.");
          analytics.logEvent("share_link");
        } catch (err) {
          alert("오류\n" + err.message);
        }
      },
    }),

    [requestUrl, facebookAppID, kakaoShareOption, analytics]
  );
}
