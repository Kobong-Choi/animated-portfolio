/* 패럴랙스 효과:
   framer-motion의 useScroll과 useTransform을 사용하여 사용자가 페이지를 스크롤할 때 부드러운 패럴랙스 애니메이션을 구현합니다.
   각기 다른 요소들이 서로 다른 속도로 움직이며 레이어의 깊이감을 만듭니다. */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./parallax.scss";

const Parallax = ({ type }) => {
  const ref = useRef();

  // 스크롤의 진행 상태를 scrollYProgress로 제공합니다.
  const { scrollYProgress } = useScroll({
    // 스크롤 위치를 계산할 참조 요소입니다.
    target: ref,
    // 스크롤의 시작과 끝을 정의하는 설정입니다.
    // "start start": 요소의 상단이 뷰포트의 상단과 만나면 스크롤 애니메이션이 시작됩니다.
    // "end start": 요소의 하단이 뷰포트의 상단과 만나면 스크롤 애니메이션이 끝납니다.
    offset: ["start start", "end start"],
  });

  // 스크롤 진행에 따라 motion.h1의 Y축 위치를 조절합니다.
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  // 스크롤 진행에 따라 배경과 다른 요소의 Y축 위치를 조절합니다.
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains" />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div style={{ x: yBg }} className="stars" />
    </div>
  );
};

export default Parallax;
