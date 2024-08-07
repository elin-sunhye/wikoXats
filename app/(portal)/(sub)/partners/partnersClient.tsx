"use client";

import SectionMoreInfo from "@/component/common/SectionMoreInfo/SectionMoreInfo";
import SectionPartners from "@/component/portal/sub/story/SectionPartners/SectionPartners";
import SectionPoint from "@/component/portal/sub/story/SectionPoint/SectionPoint";
import SectionServe from "@/component/portal/sub/story/SectionServe/SectionServe";
import SectionSimpleIntro from "@/component/portal/sub/story/SectionSimpleIntro/SectionSimpleIntro";
import SectionStrong from "@/component/portal/sub/story/SectionStrong/SectionStrong";
import StorySubVisual from "@/component/portal/sub/story/StorySubVisual/StorySubVisual";

export default function PartnersClient() {
  return (
    <>
      {/* 서브 비주얼 */}
      <StorySubVisual />

      {/* 회사 간략 소개 */}
      <SectionSimpleIntro />

      {/* 회사 강점 설명 */}
      <SectionStrong />

      {/* 회사 차별화 */}
      <SectionPoint />

      {/* 회사 서비스 설명 */}
      <SectionServe />

      {/* 회사 거래처 설명 */}
      <SectionPartners />

      {/* 문의하기 */}
      {/* <SectionMoreInfo /> */}
    </>
  );
}
