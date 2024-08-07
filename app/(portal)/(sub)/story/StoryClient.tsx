"use client";

import style from "./storyClient.module.scss";
import SectionCommonLayout from "@/component/common/SectionCommonLayout/SectionCommonLayout";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFax } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// kakaoMap
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import SubTop from "@/component/common/Sub/SubTop/SubTop";

export default function StoryClient() {
  // aos
  useEffect(() => {
    AOS.init();
  });

  // useKakaoLoader();
  // // 지도
  // const [createMap, setCreateMap] = useState<kakao.maps.Map>();
  // const [isMounted, setIsMounted] = useState<boolean>(false);

  // 지도 센터 위치
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 35.4291203410053, lng: 128.48635821889138 });
  // }>({ lat: 35.4288859, lng: 128.486459 });

  // useEffect(() => {
  //   if (createMap && isMounted) {
  //     setLocation({ lat:   35.4288859, lng: 128.486459});
  // 35.4291203410053, 128.48635821889138
  //   }
  // }, [createMap]);

  return (
    <>
      <SectionCommonLayout
        sectionId={"boss"}
        title={
          // "위코 주식회사는 <br />고객의 품질과 생산성 향상을 위해 <br />끊임 없이 발전하는 기술을 제공합니다."
          "CEO 인사말"
        }
        desc={""}
        btnYn={false}
      >
        <div className={`${style.boss_box}`}>
          {/* <span className={`${style.img_box}`}></span> */}
          <div className={`${style.paragraph}`}>
            <p>안녕하십니까</p>
            <p>
              &#39;위코주식회사&#39;는 1999년 부산에서 설립된
              &#39;코리아캐스트&#39;를 기반으로, 2009년 ‘위코주식회사’로 법인
              전환 하였습니다.
            </p>
          </div>

          <div className={`${style.paragraph}`}>
            <p>
              저희는 향상된 기술 서비스와 안정적인 품질의 제품들을 기반으로,
            </p>
            <p>
              단순한 제품 판매를 벗어나 기술력까지 서비스하는 회사가 되기 위해
              노력하고 있습니다.
            </p>
          </div>
          <div className={`${style.paragraph}`}>
            <p>
              바쁘신 와중에도 저희 &#39;위코주식회사&#39;를 방문해 주신 여러분께
              진심으로 감사드리며,
            </p>
            <p>
              앞으로 고객 여러분께 좋은 제품, 기술 서비스를 제공하는 기업이 될
              수 있도록 많은 격려 부탁드립니다.
            </p>
            <p>오늘 하루도 행복한 하루 되십시오.</p>
          </div>
          <div className={`flex_end ${style.boss_sign}`}>
            대표이사<span>안영도</span>
          </div>
        </div>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={"history"}
        title={"연혁"}
        desc={""}
        sectionBg={"var(--gray-1)"}
        btnYn={false}
      >
        <div
          className={`flex_end ${style.history_box}`}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className={`flex_center ${style.row}`}>
            <ul className={`${style.history}`}>
              <li>Ransom & Randolph 한국 에이전트 계약 체결</li>
            </ul>
            <span></span>
            <p className={`${style.year}`}>2017</p>
          </div>

          <div className={`flex_center ${style.row}`}>
            <ul className={`${style.history}`}>
              <li>벤처기업 가입</li>
            </ul>
            <span></span>
            <p className={`${style.year}`}>2012</p>
          </div>

          <div className={`flex_center ${style.row}`}>
            <ul className={`${style.history}`}>
              <li>&#39;정밀주조용 패턴의 코팅 자동화 라인&#39; 특허등록</li>
              <li>IMERYS 한국 에이전트 계약</li>
              <li>VA - TECH 한국 에이전트 계약</li>
            </ul>
            <span></span>
            <p className={`${style.year}`}>2011</p>
          </div>

          <div className={`flex_center ${style.row}`}>
            <ul className={`${style.history}`}>
              <li>&#39;위코주식회사&#39; 법인 전환</li>
            </ul>
            <span></span>
            <p className={`${style.year}`}>2002</p>
          </div>

          <div className={`flex_center ${style.row}`}>
            <ul className={`${style.history}`}>
              <li>&#39;코리아캐스트&#39; 설립</li>
            </ul>
            <span></span>
            <p className={`${style.year}`}>1999</p>
          </div>
        </div>
      </SectionCommonLayout>

      <SectionCommonLayout
        sectionId={"location"}
        title={"찾아오시는 길"}
        desc={""}
        textAlign={"center"}
        btnYn={false}
      >
        <div className={`flex_between ${style.location_box}`}>
          <div
            className={style.left}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <Map
              center={location}
              level={3}
              style={{ width: "100%", height: "100%" }}
            >
              <CustomOverlayMap position={location}>
                <div className={style.map_marker}>
                  <p className="flex_center">
                    <span>HERE</span>
                    <span>위코주식회사</span>
                  </p>
                </div>
              </CustomOverlayMap>
            </Map>
          </div>
          <div
            className={style.right}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p>위코주식회사</p>

            <div className={"flex_start"}>
              <p>
                <MdLocationOn role={"img"} aria-label={"위치 아이콘"} />
                경상남도 창녕군 영산면 영산월령로 370
              </p>
              <p>
                <BiSolidPhoneCall role={"img"} aria-label={"전화 아이콘"} />
                055-521-1255~6
              </p>
              <p>
                <FaFax role={"img"} aria-label={"팩스 아이콘"} />
                055-521-1257
              </p>
              <p>
                <MdMarkEmailUnread role={"img"} aria-label={"이메일 아이콘"} />
                <ul>
                  <li>wiko6561@hanmail.net</li>
                  <li>ahw9201@naver.com</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </SectionCommonLayout>
    </>
  );
}
