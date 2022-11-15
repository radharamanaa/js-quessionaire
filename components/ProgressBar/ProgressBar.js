import React, { useEffect, useRef } from "react";
import styles from "./progressbar.module.css";


function returnColorForPercent(percent){
  if(percent <=25){
    return "#F61067";
  }
  if(percent >25 && percent<=50){
    return "#2D3047";
  }
  if(percent>50 && percent<75){
    return "#FFFD82";
  }
  if(percent >75){
    return "#7161EF";
  }
}

function ProgressBar({ percent, color }) {
  const svgRef = useRef();
  useEffect(() => {
    svgRef.current.style.stroke = { color };
  }, []);
  return (
    <div className={`${styles.singleChart} flex justify-end `}>
      <svg viewBox="0 0 36 36" className={`${styles.circularChart}`}>
        <path
          className={styles.circleBg}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          ref={svgRef}
          className={styles.circle}
          strokeDasharray={`${percent}, 100`}
          stroke={returnColorForPercent(percent)}
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
