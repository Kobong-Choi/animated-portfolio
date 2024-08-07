import { useState } from "react";
import { motion } from "framer-motion";

import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // variants는 애니메이션 컴포넌트가 가질 수 있는 다양한 시각적 상태를 정의하는 데 사용됩니다.
  const variants = {
    open: {
      // 이 CSS 속성은 원형 클리핑 경로를 생성하여, 중심이 (50px, 50px)이고 반지름이 1400px인 큰 원을 정의합니다.
      // 클리핑 경로: 요소의 특정 부분만 보이도록 잘라내는 경로
      clipPath: "circle(1400px at 50px 50px)",
      // 닫힌 상태에서 열린 상태로의 전환은 spring 타입이며, stiffness가 20으로 설정되어 부드럽고 탄력 있는 애니메이션을 만듭니다.
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      // 이 CSS 속성은 반지름이 30px인 훨씬 작은 원형 클리핑 경로를 만들어, 사이드바가 "closed" 상태일 때 대부분이 숨겨지도록 합니다.
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5, // 닫힌 상태로 전환하기 전에 0.5초의 지연을 추가합니다.
        type: "spring",
        stiffness: 400, // 높은 stiffness 값은 전환을 더 빠르고 강하게 만듭니다.
        damping: 40, // 이 값은 스프링이 최종 상태에 도달할 때 진동을 줄이는 역할을 합니
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
