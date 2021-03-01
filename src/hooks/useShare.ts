import { useEffect, useMemo } from "react";

type UseShareResult = {
  shareToKakao: () => void;
  shareToFacebook: () => void;
  shareToClipboard: () => void;
};
type UseShareProps = {
  requestUrl: string;
  KakaoAppKey: string;
  facebookAppID: string;
};
export default function useShare({
  requestUrl,
  KakaoAppKey,
  facebookAppID,
}: UseShareProps): UseShareResult {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) window.Kakao.init(KakaoAppKey);
    return () => window.Kakao.cleanup();
  }, [KakaoAppKey]);

  return useMemo(
    () => ({
      shareToKakao() {
        if (window.Kakao.isInitialized())
          window.Kakao.Link.sendScrap({
            requestUrl,
          });
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
      },

      async shareToClipboard() {
        try {
          await navigator.clipboard?.writeText(requestUrl);
          alert("URL이 복사되었습니다.");
        } catch (err) {
          alert("오류\n" + err.message);
        }
      },
    }),
    [requestUrl]
  );
}
