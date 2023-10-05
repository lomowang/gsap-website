import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Nav: React.FC = () => {
  const h1Ref1 = useRef<HTMLHeadingElement | null>(null); // 不同的 ref
  const h1Ref2 = useRef<HTMLHeadingElement | null>(null); // 不同的 ref
  const [titleAnimation, setTitleAnimation] = useState(false);

  useEffect(() => {
    const animateTitle = () => {
      gsap.fromTo(
        h1Ref1.current, // 使用第一个 ref
        {
          y: 20, // 修改初始 y 值
          opacity: 0, // 修改初始 opacity 值
          delay: 1,
          duration: 0.9,
          stagger: 0.3,
        },
        {
          y: 0,
          opacity: 1,
        }
      );

      gsap.fromTo(
        h1Ref2.current, // 使用第二个 ref
        {
          y: 100, // 修改初始 y 值
          opacity: 0.1, // 修改初始 opacity 值
          delay: 0.5,
          duration: 0.1,
          stagger: 0.2,
        },
        {
          y: 0,
          opacity: 1,
        }
      );
    };

    // 这里可以放入其他逻辑，根据你的需求来执行动画或其他操作

    // 调用动画函数
    animateTitle();

    // 设置标题动画状态
    setTitleAnimation(true);
  }, []);

  return (
    <div id="main">
      <div
        id="page1"
        className="h-full w-full relative sm:px-0 sm:py-3vw sm:pt-[50vh] sm:min-h-[70vh] "
      >
        <h1
          ref={h1Ref1} // 使用第一个 ref
          className={`text-[15.2vw] font-black font-futura uppercase leading-[14vw] tracking-[-8px] sm:text-15vw  sm:tracking-[1px]  ${
            titleAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          Change
        </h1>
        <h1
          ref={h1Ref2} // 使用第二个 ref
          className={`text-[15.2vw] font-black font-futura uppercase leading-[14vw] tracking-[-8px]  sm:text-15vw  sm:tracking-[1px] ${
            titleAnimation ? "opacity-100" : "opacity-0"
          }`}
        >
          the course
        </h1>
      </div>
    </div>
  );
};

export default Nav;
