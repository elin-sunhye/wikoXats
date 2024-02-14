'use client';

import style from './sectionCount.module.scss';
import SectionVarticalLayout from '@/component/common/SectionVarticalLayout/SectionVarticalLayout';
import { AtsCountsType } from '@/types/atsCounts';
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlinePlusSm,
} from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { Btn } from '@/component/common/Btn/Btn';

// react-swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import 'swiper/css'; //basic
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

// dummyData
import atsCounts from '@/dummyData/main/atsCounts.json';

interface SectionCountProps {}

export default function SectionCount({}: SectionCountProps) {
  // swiper setting
  const swiperParams = {
    // https://swiperjs.com/react
    modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    slidesOffsetBefore: 0, // 슬라이드 시작 부분 여백
    slidesOffsetAfter: 0, // 슬라이드 끝 부분 여백
    spaceBetween: 0, // 슬라이드 사이 여백

    slidesPerView: 1, //  한 슬라이드에 보여줄 개수

    initialSlide: 0, // 시작 위치 값
    centeredSlides: true, // center 정렬

    loop: true, // 슬라이드 반복 여부
    loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정

    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false, true 설정 시   import {Autoplay from "swiper/modules" 추가
      delay: 3000, // 시간 설정
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },

    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

    // direction: "horizontal", // 가로 세로 슬라이드 : height 설정 필수

    // pagination: {
    //   // 페이징 적용
    //   el: ".pagination", // 페이저 버튼 클래스명
    //   clickable: true, // 버튼 클릭 여부
    //   type: "bullets", // 버튼 모양 결정, bullets, fraction
    //   renderBullet: function (index: number, className: string) {
    //    return '<span class="' + className + '">' + (index + 1) + "</span>";
    //   },
    // },

    // scrollbar : { // 스크롤바 적용
    // el: '.swiper-scrollbar',
    // draggable: true,
    // },

    //allowTouchMove: true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능

    // breakpoints: { // 반응형 설정 },

    // onbeforeinput: (swiper: any) => {
    //   swiper.params.navigation.prevEl = "swiper-button-prev";
    //   swiper.params.navigation.nextEl = "swiper-button-next";
    //   swiper.navigation.update();
    // },
  };
  return (
    <SectionVarticalLayout
      sectionBg={`var(--gray-1)`}
      title={`제품 설명<br />풍부한 데이터로부터`}
      desc={``}
      textAlign={`right`}
      moTextCenter={true}
      btnYn={true}
      btnTitle={`문의하기`}
      btnId={`contact`}
      btnHref={`/contact`}
      btnIcoPosition={`right`}
      btnIco={<FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />}
      btnHover={true}
    >
      <>
        <div className={`pc_left flex_start ${style.left}`}>
          {atsCounts.map((count: AtsCountsType) => {
            return (
              <div key={count.seq} className={`flex_center ${style.count_box}`}>
                <p className={style.title}>{count.title}</p>
                <p className={style.count}>
                  <span>{count.count}만</span>
                  <HiOutlinePlusSm
                    role={`img`}
                    aria-label={`플러스 아이콘`}
                    className={style.ico_plus}
                  />
                </p>
              </div>
            );
          })}
        </div>

        {/* 모바일 */}
        <div className={`mo_left ${style.left}`}>
          <Swiper {...swiperParams}>
            {atsCounts.map((count: AtsCountsType) => {
              return (
                <SwiperSlide key={count.seq} className={style.count_box}>
                  <p className={style.title}>{count.title}</p>
                  <p className={style.count}>
                    <span>{count.count}만</span>
                    <HiOutlinePlusSm
                      role={`img`}
                      aria-label={`플러스 아이콘`}
                      className={style.ico_plus}
                    />
                  </p>
                </SwiperSlide>
              );
            })}
            <Btn
              type={`button`}
              title={`이전 슬라이드 버튼`}
              id={`swiperButtonPrev`}
              className={`swiper-button-prev`}
              btnType={'ico'}
              ico={
                <HiOutlineChevronLeft
                  role={`img`}
                  aria-label={`왼쪽 화살표 아이콘`}
                />
              }
              hover={false}
            />

            <Btn
              type={`button`}
              title={`다음 슬라이드 버튼`}
              id={`swiperButtonNext`}
              className={`swiper-button-next`}
              btnType={'ico'}
              ico={
                <HiOutlineChevronRight
                  role={`img`}
                  aria-label={`오른쪽 화살표 아이콘`}
                />
              }
              hover={false}
            />
          </Swiper>
        </div>
      </>
    </SectionVarticalLayout>
  );
}
