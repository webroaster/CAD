import { WorkItem } from "../../components/Work";

const Work = () => {
  return (
    <WorkItem
      title="ゲミカム"
      badge="2021"
      category="動画編集講座LP"
      url="https://gamicome.com/"
      stacks="Scss/WordPress/jQuery"
      img1="/images/works/thumbGamicome.webp"
      img2="/images/works/thumbGamicome2.webp"
      alt="ゲミカムWebサイト画像"
      period="1ヶ月"
    >
      デザイン・WordPress構築を担当。WordPressオリジナルテーマで1ページのLP制作。
      ゲーミングPCをテーマに雰囲気やUIをデザイン。
    </WorkItem>
  );
};
export default Work;
