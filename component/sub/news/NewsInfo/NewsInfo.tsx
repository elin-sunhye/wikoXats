'use client';

import style from './newsInfo.module.scss';
import SectionCommonLayout from '@/component/common/SectionCommonLayout/SectionCommonLayout';

interface NewsSubVisualProps {}

export default function NewsInfo({}: NewsSubVisualProps) {
  // swiper setting

  return (
    <SectionCommonLayout
      sectionId={'newsInfo'}
      title={
        '타겟 오디언스 추출을 위한 <br />약 4천만 건의 온 · 오프라인 행동 데이터'
      }
      desc={
        '성별, 연령대, 지역, 구매 이력, 관심분야 등 다양한 정보를 포함, <br />다양한 온 · 오프라인 행동 데이터를 수집 및 분석하여 정교한 타겟팅이 가능합니다'
      }
      btnYn={false}
    >
      <div className={style.box}></div>
    </SectionCommonLayout>
  );
}
