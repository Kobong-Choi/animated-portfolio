import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity, // 애니메이션이 무한히 반복되도록 설정
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0, // 애니메이션 시작 시, 슬라이더의 x 좌표는 0으로 설정됩니다. 이는 슬라이더의 초기 위치를 화면의 시작점으로 설정한다는 의미입니다.
  },
  animate: {
    // 슬라이더가 오른쪽에서 왼쪽으로 220%만큼 화면을 벗어나도록 움직인다는 것을 의미합니다. 퍼센트 단위는 부모 요소의 크기를 기준으로 계산됩니다.
    x: "-220%",
    transition: {
      repeat: Infinity,
      // 애니메이션이 끝에 도달했을 때, 반대 방향으로 다시 시작하는 미러(거울) 효과를 적용합니다.
      repeatType: "mirror",
      // 애니메이션이 한 방향으로 이동하는 데 20초가 걸리도록 설정합니다. 즉, 슬라이더가 한 번 화면을 벗어나고 다시 돌아오는 데 총 40초가 소요됩니다.
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
