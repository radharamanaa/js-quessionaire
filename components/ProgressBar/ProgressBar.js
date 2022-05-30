import React, { useEffect, useRef } from "react";
import styles from "./progressbar.module.css";
function ProgressBar({ percent, color }) {
  const svgRef = useRef();
  useEffect(() => {
    svgRef.current.style.stroke = { color };
  }, []);
  return (
    <div className={`${styles.singleChart} flex justify-center`}>
      <svg viewBox="0 0 36 36" class={`${styles.circularChart}`}>
        <path
          className={styles.circleBg}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          ref={svgRef}
          className={styles.circle}
          stroke-dasharray={`${percent}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text
          x="18"
          y="20.35"
          className={`${styles.percentage} tracking-wider font-thin`}
        >
          {`${percent}%`}
        </text>
      </svg>
    </div>
  );
}

export default ProgressBar;
