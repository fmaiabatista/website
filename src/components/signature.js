import React from "react";
import styles from "./signature.module.css";

const Signature = ({ width = "auto", height = "auto" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 358.44 515.43" // viewBox="0 0 331.7 477.37"
    width={width}
    height={height}
  >
    <title>Felipe's Signature</title>
    <path
      className={[styles.path, styles.animate]}
      d="m134.54 3.5s-145.42 468.57-129.86 470.34c10.86 1.2379 37.099-64.892 46.693-100.59 7.9443-29.561 11.681-61.032 8.2983-91.455-2.8908-26.001-11.097-75.648-24.087-74.697-17.578 1.2862-26.549 27.021-26.674 44.241-0.11362 15.671 8.0262 41.13 23.689 40.609 24.653-0.8193 56.327-53.519 70.977-56.305 7.9716-1.5161-2.1288 58.349 10.668 48.965 6.0287-4.4213 39.998-48.701 49.094-40.667 8.7897 7.7636-10.894 77.436 17.4 46.556 61.632-67.263 147.47-101.95 147.47-101.95"
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-width="7"
    />
  </svg>
);

export default Signature;
