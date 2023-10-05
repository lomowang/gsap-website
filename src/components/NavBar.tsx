import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const NavBar: React.FC = () => {
  const [locomotiveAnimation, setLocomotiveAnimation] = useState(false);

  useEffect(() => {
    const scrollAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);

      // 使用Locomotive Scroll
      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });

      // 当Locomotive Scroll更新时，通知ScrollTrigger更新位置
      locoScroll.on("scroll", ScrollTrigger.update);

      // 告诉ScrollTrigger使用这些代理方法来操作“#main”元素，因为Locomotive Scroll正在控制它
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("#main")?.style.transform
          ? "transform"
          : "fixed",
      });

      // 每当窗口更新时，刷新ScrollTrigger并更新LocomotiveScroll
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // 完成设置后，刷新ScrollTrigger并更新LocomotiveScroll
      ScrollTrigger.refresh();
    };

    scrollAnimation();

    gsap.to("#navSvg", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: "#main",
        scroller: "#main", // 修正了此处的scroller
        markers: true,
        start: "top 0",
        end: "top -5%",
        scrub: true,
      },
    });

    setLocomotiveAnimation(true);
  }, []);

  return (
    <div
      id="navBar"
      className="h-24 w-full fixed z-10 p-5 flex items-start justify-between"
    >
      <div id="navSvg" className=" bg-red-500 h-24 block">
        <svg
          id="twogood"
          width="106"
          height="83"
          viewBox="0 0 106 83"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "translate(0px, 0px)" }}
        >
          {/* ... SVG 內容 ... */}
        </svg>
        <svg
          id="twogoodlogo"
          width="62"
          height="63"
          viewBox="0 0 62 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "translate(0px, 0px)", display: "none" }}
        >
          {/* ... SVG 內容 ... */}
        </svg>
      </div>
      <div id="navList" className="flex items-center justify-center gap-10">
        <div id="links">
          <a
            href="#"
            className="no-underline font-normal text-sm m-5 uppercase"
          >
            Shop
          </a>
          <a
            href="#"
            className="no-underline font-normal text-sm m-5 uppercase"
          >
            Catering
          </a>
          <a
            href="#"
            className="no-underline font-normal text-sm m-5 uppercase"
          >
            Donate
          </a>
        </div>
        <div id="icons" className="p-2 rounded-full bg-white">
          <i className="ri-menu-line   m-5 text-lg font-thin"></i>
          <i className="ri-shopping-cart-2-line  m-5 text-lg font-thin"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
