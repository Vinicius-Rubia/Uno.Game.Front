import React from "react";

interface Card1Props {
  color: "blue" | "yellow" | "green" | "red";
}

export const CardBlock: React.FC<Card1Props> = ({ color }) => {
  const displayColor = () => {
    switch (color) {
      case "blue":
        return "#0768AF";
      case "red":
        return "#DB1910";
      case "yellow":
        return "#FFDB15";
      default:
        return "#549F20";
    }
  };

  return (
    <div className="group cursor-pointer">
      <svg
        width="85"
        height="140"
        viewBox="0 0 85 140"
        className="rounded-lg -mx-4 group-hover:mx-2 group-hover:scale-[1.07] group-hover:-translate-y-4 transition-all border border-border group-hover:outline group-hover:outline-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_8_42672)">
          <rect width="85" height="140" rx="8" fill="#FEFEFE" />
          <rect
            x="5"
            y="8"
            width="75"
            height="124"
            rx="6"
            fill={displayColor()}
          />
          <ellipse
            cx="42.7084"
            cy="70.0481"
            rx="65.4861"
            ry="30.7695"
            transform="rotate(-59.5565 42.7084 70.0481)"
            fill="#FEFEFE"
          />
          <ellipse
            cx="42.7303"
            cy="69.6278"
            rx="57.8329"
            ry="27.1735"
            transform="rotate(-59.5565 42.7303 69.6278)"
            fill={displayColor()}
          />
        </g>
        <circle cx="45" cy="72" r="17" stroke="#181818" strokeWidth="4" />
        <rect
          x="55.2493"
          y="59"
          width="4"
          height="32.8794"
          transform="rotate(45 55.2493 59)"
          fill="#181818"
        />
        <circle cx="43" cy="70" r="17" stroke="#FEFEFE" strokeWidth="4" />
        <rect
          x="53.2493"
          y="57"
          width="4"
          height="32.8794"
          transform="rotate(45 53.2493 57)"
          fill="#FEFEFE"
        />
        <rect
          x="23.0127"
          y="15.7071"
          width="1"
          height="14.5745"
          transform="rotate(45 23.0127 15.7071)"
          fill="#181818"
          stroke="#181818"
        />
        <circle cx="18" cy="21" r="8" stroke="#181818" strokeWidth="2" />
        <rect
          x="22.0127"
          y="14.7071"
          width="1"
          height="14.5745"
          transform="rotate(45 22.0127 14.7071)"
          fill="#FEFEFE"
          stroke="#FEFEFE"
        />
        <circle cx="17" cy="20" r="8" stroke="#FEFEFE" strokeWidth="2" />
        <circle cx="67" cy="119" r="8" stroke="#181818" strokeWidth="2" />
        <rect
          x="72.0127"
          y="113"
          width="2"
          height="15.5745"
          transform="rotate(45 72.0127 113)"
          fill="#181818"
        />
        <circle cx="68" cy="120" r="8" stroke="#FEFEFE" strokeWidth="2" />
        <rect
          x="73.0127"
          y="114"
          width="2"
          height="15.5745"
          transform="rotate(45 73.0127 114)"
          fill="#FEFEFE"
        />
        <defs>
          <clipPath id="clip0_8_42672">
            <rect width="85" height="140" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
