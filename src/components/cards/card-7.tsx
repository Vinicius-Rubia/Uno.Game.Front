import React from "react";

interface Card1Props {
  color: "blue" | "yellow" | "green" | "red";
}

export const Card7: React.FC<Card1Props> = ({ color }) => {
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
        <g clipPath="url(#clip0_8_42435)">
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
          <g filter="url(#filter0_d_8_42435)">
            <mask
              id="path-5-outside-1_8_42435"
              maskUnits="userSpaceOnUse"
              x="10"
              y="12"
              width="13"
              height="19"
              fill="black"
            >
              <rect fill="white" x="10" y="12" width="13" height="19" />
              <path d="M22.2596 15.048L15.8756 30H12.4676L18.8996 15.432H10.6916V12.552H22.2596V15.048Z" />
            </mask>
            <path
              d="M22.2596 15.048L15.8756 30H12.4676L18.8996 15.432H10.6916V12.552H22.2596V15.048Z"
              fill="#FEFEFE"
            />
            <path
              d="M22.2596 15.048L22.7194 15.2443L22.7596 15.1503V15.048H22.2596ZM15.8756 30V30.5H16.2057L16.3354 30.1963L15.8756 30ZM12.4676 30L12.0102 29.798L11.7002 30.5H12.4676V30ZM18.8996 15.432L19.357 15.6339L19.6669 14.932H18.8996V15.432ZM10.6916 15.432H10.1916V15.932H10.6916V15.432ZM10.6916 12.552V12.052H10.1916V12.552H10.6916ZM22.2596 12.552H22.7596V12.052H22.2596V12.552ZM21.7997 14.8517L15.4157 29.8037L16.3354 30.1963L22.7194 15.2443L21.7997 14.8517ZM15.8756 29.5H12.4676V30.5H15.8756V29.5ZM12.925 30.202L19.357 15.6339L18.4422 15.23L12.0102 29.798L12.925 30.202ZM18.8996 14.932H10.6916V15.932H18.8996V14.932ZM11.1916 15.432V12.552H10.1916V15.432H11.1916ZM10.6916 13.052H22.2596V12.052H10.6916V13.052ZM21.7596 12.552V15.048H22.7596V12.552H21.7596Z"
              fill="#181818"
              mask="url(#path-5-outside-1_8_42435)"
            />
          </g>
          <g filter="url(#filter1_d_8_42435)">
            <mask
              id="path-7-outside-2_8_42435"
              maskUnits="userSpaceOnUse"
              x="62"
              y="109"
              width="13"
              height="19"
              fill="black"
            >
              <rect fill="white" x="62" y="109" width="13" height="19" />
              <path d="M62.7404 124.952L69.1244 110L72.5324 110L66.1004 124.568L74.3084 124.568L74.3084 127.448L62.7404 127.448L62.7404 124.952Z" />
            </mask>
            <path
              d="M62.7404 124.952L69.1244 110L72.5324 110L66.1004 124.568L74.3084 124.568L74.3084 127.448L62.7404 127.448L62.7404 124.952Z"
              fill="#FEFEFE"
            />
            <path
              d="M62.7404 124.952L62.2806 124.756L62.2404 124.85L62.2404 124.952L62.7404 124.952ZM69.1244 110L69.1244 109.5L68.7943 109.5L68.6646 109.804L69.1244 110ZM72.5324 110L72.9898 110.202L73.2998 109.5L72.5324 109.5L72.5324 110ZM66.1004 124.568L65.643 124.366L65.3331 125.068L66.1004 125.068L66.1004 124.568ZM74.3084 124.568L74.8084 124.568L74.8084 124.068L74.3084 124.068L74.3084 124.568ZM74.3084 127.448L74.3084 127.948L74.8084 127.948L74.8084 127.448L74.3084 127.448ZM62.7404 127.448L62.2404 127.448L62.2404 127.948L62.7404 127.948L62.7404 127.448ZM63.2003 125.148L69.5843 110.196L68.6646 109.804L62.2806 124.756L63.2003 125.148ZM69.1244 110.5L72.5324 110.5L72.5324 109.5L69.1244 109.5L69.1244 110.5ZM72.075 109.798L65.643 124.366L66.5578 124.77L72.9898 110.202L72.075 109.798ZM66.1004 125.068L74.3084 125.068L74.3084 124.068L66.1004 124.068L66.1004 125.068ZM73.8084 124.568L73.8084 127.448L74.8084 127.448L74.8084 124.568L73.8084 124.568ZM74.3084 126.948L62.7404 126.948L62.7404 127.948L74.3084 127.948L74.3084 126.948ZM63.2404 127.448L63.2404 124.952L62.2404 124.952L62.2404 127.448L63.2404 127.448Z"
              fill="#181818"
              mask="url(#path-7-outside-2_8_42435)"
            />
          </g>
          <g filter="url(#filter2_d_8_42435)">
            <mask
              id="path-9-outside-3_8_42435"
              maskUnits="userSpaceOnUse"
              x="31"
              y="53"
              width="23"
              height="33"
              fill="black"
            >
              <rect fill="white" x="31" y="53" width="23" height="33" />
              <path d="M52.7091 58.834L41.5371 85H35.5731L46.8291 59.506H32.4651V54.466H52.7091V58.834Z" />
            </mask>
            <path
              d="M52.7091 58.834L41.5371 85H35.5731L46.8291 59.506H32.4651V54.466H52.7091V58.834Z"
              fill="#FEFEFE"
            />
            <path
              d="M52.7091 58.834L53.6288 59.2267L53.7091 59.0385V58.834H52.7091ZM41.5371 85V86H42.1975L42.4568 85.3927L41.5371 85ZM35.5731 85L34.6583 84.5961L34.0385 86H35.5731V85ZM46.8291 59.506L47.7439 59.9099L48.3638 58.506H46.8291V59.506ZM32.4651 59.506H31.4651V60.506H32.4651V59.506ZM32.4651 54.466V53.466H31.4651V54.466H32.4651ZM52.7091 54.466H53.7091V53.466H52.7091V54.466ZM51.7894 58.4413L40.6174 84.6073L42.4568 85.3927L53.6288 59.2267L51.7894 58.4413ZM41.5371 84H35.5731V86H41.5371V84ZM36.4879 85.4039L47.7439 59.9099L45.9143 59.1021L34.6583 84.5961L36.4879 85.4039ZM46.8291 58.506H32.4651V60.506H46.8291V58.506ZM33.4651 59.506V54.466H31.4651V59.506H33.4651ZM32.4651 55.466H52.7091V53.466H32.4651V55.466ZM51.7091 54.466V58.834H53.7091V54.466H51.7091Z"
              fill="#181818"
              mask="url(#path-9-outside-3_8_42435)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_8_42435"
            x="9.69159"
            y="12.552"
            width="12.568"
            height="18.448"
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
              result="effect1_dropShadow_8_42435"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42435"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_8_42435"
            x="61.7404"
            y="110"
            width="12.568"
            height="18.448"
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
              result="effect1_dropShadow_8_42435"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42435"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_8_42435"
            x="30.4651"
            y="54.4659"
            width="22.244"
            height="32.5341"
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
              result="effect1_dropShadow_8_42435"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42435"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_8_42435">
            <rect width="85" height="140" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
