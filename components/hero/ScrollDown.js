import styles from "./hero.module.css"

const ScrollDown = () => {
  return (
    <div classNaame="scroll_down">
      <a href="#about" className="mouse_wrapper">
        <span className="hero_scroll_name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
