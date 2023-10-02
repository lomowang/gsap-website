import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Nav: React.FC = () => {
  const [showPlayButton] = useState(false);
  const videocon = document.querySelector("#video-container"); // 将 videocon 移至函数外部

  const videoMove = () => {
    gsap.fromTo(
      videocon,
      {
        scale: 0.9,
        opacity: 0.1,
        delay: 1.3,
        duration: 0.5,
      },
      {
        scale: 1,
        opacity: 1,
      }
    );
  };

  useEffect(() => {
    const playbtn = document.querySelector("#play");

    if (videocon && playbtn) {
      // 确保 videocon 和 playbtn 都存在
      // 控制滑鼠進入
      const handleMouseEnter = () => {
        gsap.to(playbtn, {
          scale: 1,
          opacity: 1,
        });
      };
      // 控制滑鼠出去
      const handleMouseLeave = () => {
        gsap.to(playbtn, {
          scale: 0,
          opacity: 0,
        });
      };

      // 控制滑鼠黑色圈圈位置
      const handleMouseMove = (e: any) => {
        // 计算出适当的偏移量，以便黑色圈圈跟随鼠标
        const offsetX = 50; // 你可以根据需要调整 X 偏移
        const offsetY = 200; // 你可以根据需要调整 Y 偏移

        gsap.to(playbtn, {
          left: e.clientX - offsetX,
          top: e.clientY - offsetY,
        });
      };

      videoMove();

      // 滑鼠進入顯現
      videocon.addEventListener("mouseenter", handleMouseEnter);
      //   滑鼠跑出隱藏
      videocon.addEventListener("mouseleave", handleMouseLeave);
      //   滑鼠跑出隱藏
      videocon.addEventListener("mousemove", (e) => handleMouseMove(e));

      // 在组件卸载时移除事件监听，类似于 componentWillUnmount
      return () => {
        videocon.removeEventListener("mouseenter", handleMouseEnter);
        videocon.removeEventListener("mouseleave", handleMouseLeave);
        videocon.addEventListener("mousemove", (e) => handleMouseMove(e));
      };
    }
  }, [videocon]); // 添加 videocon 作为依赖

  return (
    <div id="main">
      <div id="video-container" className="h-screen w-full mt-4 ">
        <div
          id="play"
          className={`py-[3vw] px-[2.2vw] bg-black text-white text-[1.3vw] uppercase font-futura fixed rounded-full ${
            showPlayButton ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          PLAY
        </div>
        <video
          autoPlay
          loop
          muted
          src="./video.mp4"
          className="h-full w-full object-cover"
        ></video>
      </div>
    </div>
  );
};

export default Nav;
