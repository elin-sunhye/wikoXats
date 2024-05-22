"use client";

import { Btn } from "@/component/common/Btn/Btn";
import style from "./customerror.module.scss";
import { useRouter } from "next/navigation";

export default function Custom404Page() {
  //
  const router = useRouter();

  return (
    <div className={`flex_center ${style.custom_404_box}`}>
      <p className={style.error_code}>
        4<span>0</span>4
      </p>

      <div className={style.error_desc}>
        <p>죄송합니다. 현재 찾을 수 없는 페이지를 요청하셨습니다.</p>

        <span>
          페이지의 주소가 잘못 입력되었거나,
          <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </span>
      </div>

      <div className={`flex_center ${style.btn_box}`}>
        <Btn
          type={"button"}
          title={"이전"}
          id={"backBtn"}
          btnType={"text"}
          hover={false}
          onClick={() => {
            router.back();
          }}
        />
        <Btn
          type={"button"}
          title={"홈"}
          id={"mainBtn"}
          btnType={"text"}
          hover={false}
          onClick={() => {
            router.replace("/");
          }}
        />
      </div>
    </div>
  );
}
