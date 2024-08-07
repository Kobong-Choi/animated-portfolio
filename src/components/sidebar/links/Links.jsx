import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  // motion.div에 적용되어 링크들이 열리고 닫힐 때 자식 요소에 대한 전환 효과를 정의합니다.
  const variants = {
    open: {
      transition: {
        // 각 자식 요소가 0.1초 간격으로 애니메이션됩니다.
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        // 자식 요소가 0.05초 간격으로 역순으로 애니메이션됩니다.
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // 각각의 링크(motion.a)에 적용되어 열리고 닫히는 애니메이션 스타일을 정의합니다.
  const itemVariants = {
    open: {
      // 링크가 제자리(y: 0)에 있으며, 불투명도(opacity)가 1입니다(완전히 보이는 상태).
      y: 0,
      opacity: 1,
    },
    closed: {
      // 링크가 50px 아래로 이동(y: 50)하며, 불투명도(opacity)가 0이 됩니다(보이지 않는 상태).
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
