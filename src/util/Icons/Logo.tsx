import React from "react";
import "./scss/LogoDesign.scss";
import "./scss/Loading.scss";
const LogoGoogle = () => {
  return (
    <svg
      id="Capa_1"
      version="1.1"
      viewBox="0 0 150 150"
      width={30}
      height={30}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          className="st14"
          d="M120,76.1c0-3.1-0.3-6.3-0.8-9.3H75.9v17.7h24.8c-1,5.7-4.3,10.7-9.2,13.9l14.8,11.5   C115,101.8,120,90,120,76.1L120,76.1z"
        />
        <path
          className="st15"
          d="M75.9,120.9c12.4,0,22.8-4.1,30.4-11.1L91.5,98.4c-4.1,2.8-9.4,4.4-15.6,4.4c-12,0-22.1-8.1-25.8-18.9   L34.9,95.6C42.7,111.1,58.5,120.9,75.9,120.9z"
        />
        <path
          className="st12"
          d="M50.1,83.8c-1.9-5.7-1.9-11.9,0-17.6L34.9,54.4c-6.5,13-6.5,28.3,0,41.2L50.1,83.8z"
        />
        <path
          className="st13"
          d="M75.9,47.3c6.5-0.1,12.9,2.4,17.6,6.9L106.6,41C98.3,33.2,87.3,29,75.9,29.1c-17.4,0-33.2,9.8-41,25.3   l15.2,11.8C53.8,55.3,63.9,47.3,75.9,47.3z"
        />
      </g>
    </svg>
  );
};

const LogoFacebook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      height={30}
      width={30}
    >
      <linearGradient
        id="a"
        x1="-277.375"
        x2="-277.375"
        y1="406.6018"
        y2="407.5726"
        gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0062e0" />
        <stop offset="1" stopColor="#19afff" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
      />
      <path
        fill="#fff"
        d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
      />
    </svg>
  );
};

function LogoWebsite({ w, color }: { w: number, color: string }) {
  return (
    <svg
      className="LogoSVG"
      id="LoadingLogo"
      xmlns="http://www.w3.org/2000/svg"
      width={w || 24}
      height={w || 24}
      fill={color || "#fff"}
      viewBox="0 0 24 24"
    >
      <path
        id="Loading_Logo"
        stroke={color || "#fff"}
        fill={color || "#fff"}
        d="M16.97 4.757a.999.999 0 0 0-1.918-.073l-3.186 9.554l-2.952-6.644a1.002 1.002 0 0 0-1.843.034L5.323 12H2v2h3.323c.823 0 1.552-.494 1.856-1.257l.869-2.172l3.037 6.835c.162.363.521.594.915.594l.048-.001a.998.998 0 0 0 .9-.683l2.914-8.742l.979 3.911A1.995 1.995 0 0 0 18.781 14H22v-2h-3.22z"
      ></path>
    </svg>
  );
}
export { LogoGoogle, LogoFacebook, LogoWebsite };
