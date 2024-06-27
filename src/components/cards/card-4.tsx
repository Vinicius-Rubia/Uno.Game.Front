import React from "react";

interface Card1Props {
  color: "blue" | "yellow" | "green" | "red";
}

export const Card4: React.FC<Card1Props> = ({ color }) => {
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
        <g clipPath="url(#clip0_8_42414)">
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
          <g filter="url(#filter0_d_8_42414)">
            <mask
              id="path-5-outside-1_8_42414"
              maskUnits="userSpaceOnUse"
              x="7"
              y="12"
              width="16"
              height="19"
              fill="black"
            >
              <rect fill="white" x="7" y="12" width="16" height="19" />
              <path d="M8.26081 26.592V23.952L16.1088 12.72H20.0208V23.664H22.1328V26.592H20.0208V30H16.6608V26.592H8.26081ZM16.8768 16.32L11.9568 23.664H16.8768V16.32Z" />
            </mask>
            <path
              d="M8.26081 26.592V23.952L16.1088 12.72H20.0208V23.664H22.1328V26.592H20.0208V30H16.6608V26.592H8.26081ZM16.8768 16.32L11.9568 23.664H16.8768V16.32Z"
              fill="#FEFEFE"
            />
            <path
              d="M8.26081 26.592H7.76081V27.092H8.26081V26.592ZM8.26081 23.952L7.85095 23.6656L7.76081 23.7946V23.952H8.26081ZM16.1088 12.72V12.22H15.8482L15.6989 12.4336L16.1088 12.72ZM20.0208 12.72H20.5208V12.22H20.0208V12.72ZM20.0208 23.664H19.5208V24.164H20.0208V23.664ZM22.1328 23.664H22.6328V23.164H22.1328V23.664ZM22.1328 26.592V27.092H22.6328V26.592H22.1328ZM20.0208 26.592V26.092H19.5208V26.592H20.0208ZM20.0208 30V30.5H20.5208V30H20.0208ZM16.6608 30H16.1608V30.5H16.6608V30ZM16.6608 26.592H17.1608V26.092H16.6608V26.592ZM16.8768 16.32H17.3768V14.6753L16.4614 16.0417L16.8768 16.32ZM11.9568 23.664L11.5414 23.3857L11.02 24.164H11.9568V23.664ZM16.8768 23.664V24.164H17.3768V23.664H16.8768ZM8.76081 26.592V23.952H7.76081V26.592H8.76081ZM8.67068 24.2384L16.5187 13.0064L15.6989 12.4336L7.85095 23.6656L8.67068 24.2384ZM16.1088 13.22H20.0208V12.22H16.1088V13.22ZM19.5208 12.72V23.664H20.5208V12.72H19.5208ZM20.0208 24.164H22.1328V23.164H20.0208V24.164ZM21.6328 23.664V26.592H22.6328V23.664H21.6328ZM22.1328 26.092H20.0208V27.092H22.1328V26.092ZM19.5208 26.592V30H20.5208V26.592H19.5208ZM20.0208 29.5H16.6608V30.5H20.0208V29.5ZM17.1608 30V26.592H16.1608V30H17.1608ZM16.6608 26.092H8.26081V27.092H16.6608V26.092ZM16.4614 16.0417L11.5414 23.3857L12.3722 23.9423L17.2922 16.5983L16.4614 16.0417ZM11.9568 24.164H16.8768V23.164H11.9568V24.164ZM17.3768 23.664V16.32H16.3768V23.664H17.3768Z"
              fill="#181818"
              mask="url(#path-5-outside-1_8_42414)"
            />
          </g>
          <g filter="url(#filter1_d_8_42414)">
            <mask
              id="path-7-outside-2_8_42414"
              maskUnits="userSpaceOnUse"
              x="62"
              y="109"
              width="16"
              height="19"
              fill="black"
            >
              <rect fill="white" x="62" y="109" width="16" height="19" />
              <path d="M76.7392 113.408L76.7392 116.048L68.8912 127.28L64.9792 127.28L64.9792 116.336L62.8672 116.336L62.8672 113.408L64.9792 113.408L64.9792 110L68.3392 110L68.3392 113.408L76.7392 113.408ZM68.1232 123.68L73.0432 116.336L68.1232 116.336L68.1232 123.68Z" />
            </mask>
            <path
              d="M76.7392 113.408L76.7392 116.048L68.8912 127.28L64.9792 127.28L64.9792 116.336L62.8672 116.336L62.8672 113.408L64.9792 113.408L64.9792 110L68.3392 110L68.3392 113.408L76.7392 113.408ZM68.1232 123.68L73.0432 116.336L68.1232 116.336L68.1232 123.68Z"
              fill="#FEFEFE"
            />
            <path
              d="M76.7392 113.408L77.2392 113.408L77.2392 112.908L76.7392 112.908L76.7392 113.408ZM76.7392 116.048L77.1491 116.334L77.2392 116.205L77.2392 116.048L76.7392 116.048ZM68.8912 127.28L68.8912 127.78L69.1518 127.78L69.3011 127.566L68.8912 127.28ZM64.9792 127.28L64.4792 127.28L64.4792 127.78L64.9792 127.78L64.9792 127.28ZM64.9792 116.336L65.4792 116.336L65.4792 115.836L64.9792 115.836L64.9792 116.336ZM62.8672 116.336L62.3672 116.336L62.3672 116.836L62.8672 116.836L62.8672 116.336ZM62.8672 113.408L62.8672 112.908L62.3672 112.908L62.3672 113.408L62.8672 113.408ZM64.9792 113.408L64.9792 113.908L65.4792 113.908L65.4792 113.408L64.9792 113.408ZM64.9792 110L64.9792 109.5L64.4792 109.5L64.4792 110L64.9792 110ZM68.3392 110L68.8392 110L68.8392 109.5L68.3392 109.5L68.3392 110ZM68.3392 113.408L67.8392 113.408L67.8392 113.908L68.3392 113.908L68.3392 113.408ZM68.1232 123.68L67.6232 123.68L67.6232 125.325L68.5386 123.958L68.1232 123.68ZM73.0432 116.336L73.4586 116.614L73.98 115.836L73.0432 115.836L73.0432 116.336ZM68.1232 116.336L68.1232 115.836L67.6232 115.836L67.6232 116.336L68.1232 116.336ZM76.2392 113.408L76.2392 116.048L77.2392 116.048L77.2392 113.408L76.2392 113.408ZM76.3293 115.762L68.4813 126.994L69.3011 127.566L77.1491 116.334L76.3293 115.762ZM68.8912 126.78L64.9792 126.78L64.9792 127.78L68.8912 127.78L68.8912 126.78ZM65.4792 127.28L65.4792 116.336L64.4792 116.336L64.4792 127.28L65.4792 127.28ZM64.9792 115.836L62.8672 115.836L62.8672 116.836L64.9792 116.836L64.9792 115.836ZM63.3672 116.336L63.3672 113.408L62.3672 113.408L62.3672 116.336L63.3672 116.336ZM62.8672 113.908L64.9792 113.908L64.9792 112.908L62.8672 112.908L62.8672 113.908ZM65.4792 113.408L65.4792 110L64.4792 110L64.4792 113.408L65.4792 113.408ZM64.9792 110.5L68.3392 110.5L68.3392 109.5L64.9792 109.5L64.9792 110.5ZM67.8392 110L67.8392 113.408L68.8392 113.408L68.8392 110L67.8392 110ZM68.3392 113.908L76.7392 113.908L76.7392 112.908L68.3392 112.908L68.3392 113.908ZM68.5386 123.958L73.4586 116.614L72.6278 116.058L67.7078 123.402L68.5386 123.958ZM73.0432 115.836L68.1232 115.836L68.1232 116.836L73.0432 116.836L73.0432 115.836ZM67.6232 116.336L67.6232 123.68L68.6232 123.68L68.6232 116.336L67.6232 116.336Z"
              fill="#181818"
              mask="url(#path-7-outside-2_8_42414)"
            />
          </g>
          <g filter="url(#filter2_d_8_42414)">
            <mask
              id="path-9-outside-3_8_42414"
              maskUnits="userSpaceOnUse"
              x="29"
              y="53"
              width="27"
              height="33"
              fill="black"
            >
              <rect fill="white" x="29" y="53" width="27" height="33" />
              <path d="M30.5902 79.036V74.416L44.3242 54.76H51.1702V73.912H54.8662V79.036H51.1702V85H45.2902V79.036H30.5902ZM45.6682 61.06L37.0582 73.912H45.6682V61.06Z" />
            </mask>
            <path
              d="M30.5902 79.036V74.416L44.3242 54.76H51.1702V73.912H54.8662V79.036H51.1702V85H45.2902V79.036H30.5902ZM45.6682 61.06L37.0582 73.912H45.6682V61.06Z"
              fill="#FEFEFE"
            />
            <path
              d="M30.5902 79.036H29.5902V80.036H30.5902V79.036ZM30.5902 74.416L29.7705 73.8432L29.5902 74.1013V74.416H30.5902ZM44.3242 54.76V53.76H43.803L43.5045 54.1872L44.3242 54.76ZM51.1702 54.76H52.1702V53.76H51.1702V54.76ZM51.1702 73.912H50.1702V74.912H51.1702V73.912ZM54.8662 73.912H55.8662V72.912H54.8662V73.912ZM54.8662 79.036V80.036H55.8662V79.036H54.8662ZM51.1702 79.036V78.036H50.1702V79.036H51.1702ZM51.1702 85V86H52.1702V85H51.1702ZM45.2902 85H44.2902V86H45.2902V85ZM45.2902 79.036H46.2902V78.036H45.2902V79.036ZM45.6682 61.06H46.6682V57.7706L44.8374 60.5034L45.6682 61.06ZM37.0582 73.912L36.2274 73.3554L35.1846 74.912H37.0582V73.912ZM45.6682 73.912V74.912H46.6682V73.912H45.6682ZM31.5902 79.036V74.416H29.5902V79.036H31.5902ZM31.4099 74.9888L45.1439 55.3328L43.5045 54.1872L29.7705 73.8432L31.4099 74.9888ZM44.3242 55.76H51.1702V53.76H44.3242V55.76ZM50.1702 54.76V73.912H52.1702V54.76H50.1702ZM51.1702 74.912H54.8662V72.912H51.1702V74.912ZM53.8662 73.912V79.036H55.8662V73.912H53.8662ZM54.8662 78.036H51.1702V80.036H54.8662V78.036ZM50.1702 79.036V85H52.1702V79.036H50.1702ZM51.1702 84H45.2902V86H51.1702V84ZM46.2902 85V79.036H44.2902V85H46.2902ZM45.2902 78.036H30.5902V80.036H45.2902V78.036ZM44.8374 60.5034L36.2274 73.3554L37.889 74.4686L46.499 61.6166L44.8374 60.5034ZM37.0582 74.912H45.6682V72.912H37.0582V74.912ZM46.6682 73.912V61.06H44.6682V73.912H46.6682Z"
              fill="#181818"
              mask="url(#path-9-outside-3_8_42414)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_8_42414"
            x="7.2608"
            y="12.72"
            width="14.872"
            height="18.28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_42414"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42414"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_8_42414"
            x="61.8672"
            y="110"
            width="14.872"
            height="18.28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-1" dy="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_42414"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42414"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_8_42414"
            x="28.5902"
            y="54.76"
            width="26.276"
            height="32.24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-2" dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_8_42414"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42414"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_8_42414">
            <rect width="85" height="140" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
