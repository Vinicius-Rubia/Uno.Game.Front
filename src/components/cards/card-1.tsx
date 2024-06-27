import React from "react";

interface Card1Props {
  color: "blue" | "yellow" | "green" | "red";
}

export const Card1: React.FC<Card1Props> = ({ color }) => {
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
  }

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
        <g clipPath="url(#clip0_8_42393)">
          <rect width="85" height="140" rx="8" fill="#FEFEFE" />
          <rect x="5" y="8" width="75" height="124" rx="6" fill={displayColor()} />
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
          <g filter="url(#filter0_d_8_42393)">
            <mask
              id="path-5-outside-1_8_42393"
              maskUnits="userSpaceOnUse"
              x="14"
              y="12"
              width="8"
              height="19"
              fill="black"
            >
              <rect fill="white" x="14" y="12" width="8" height="19" />
              <path d="M15.1687 15.6V12.504H20.9527V30H17.4967V15.6H15.1687Z" />
            </mask>
            <path
              d="M15.1687 15.6V12.504H20.9527V30H17.4967V15.6H15.1687Z"
              fill="#FEFEFE"
            />
            <path
              d="M15.1687 15.6H14.6687V16.1H15.1687V15.6ZM15.1687 12.504V12.004H14.6687V12.504H15.1687ZM20.9527 12.504H21.4527V12.004H20.9527V12.504ZM20.9527 30V30.5H21.4527V30H20.9527ZM17.4967 30H16.9967V30.5H17.4967V30ZM17.4967 15.6H17.9967V15.1H17.4967V15.6ZM15.6687 15.6V12.504H14.6687V15.6H15.6687ZM15.1687 13.004H20.9527V12.004H15.1687V13.004ZM20.4527 12.504V30H21.4527V12.504H20.4527ZM20.9527 29.5H17.4967V30.5H20.9527V29.5ZM17.9967 30V15.6H16.9967V30H17.9967ZM17.4967 15.1H15.1687V16.1H17.4967V15.1Z"
              fill="#181818"
              mask="url(#path-5-outside-1_8_42393)"
            />
          </g>
          <g filter="url(#filter1_d_8_42393)">
            <mask
              id="path-7-outside-2_8_42393"
              maskUnits="userSpaceOnUse"
              x="63"
              y="109"
              width="8"
              height="19"
              fill="black"
            >
              <rect fill="white" x="63" y="109" width="8" height="19" />
              <path d="M69.8313 124.4L69.8313 127.496L64.0473 127.496L64.0473 110L67.5033 110L67.5033 124.4L69.8313 124.4Z" />
            </mask>
            <path
              d="M69.8313 124.4L69.8313 127.496L64.0473 127.496L64.0473 110L67.5033 110L67.5033 124.4L69.8313 124.4Z"
              fill="#FEFEFE"
            />
            <path
              d="M69.8313 124.4L70.3313 124.4L70.3313 123.9L69.8313 123.9L69.8313 124.4ZM69.8313 127.496L69.8313 127.996L70.3313 127.996L70.3313 127.496L69.8313 127.496ZM64.0473 127.496L63.5473 127.496L63.5473 127.996L64.0473 127.996L64.0473 127.496ZM64.0473 110L64.0473 109.5L63.5473 109.5L63.5473 110L64.0473 110ZM67.5033 110L68.0033 110L68.0033 109.5L67.5033 109.5L67.5033 110ZM67.5033 124.4L67.0033 124.4L67.0033 124.9L67.5033 124.9L67.5033 124.4ZM69.3313 124.4L69.3313 127.496L70.3313 127.496L70.3313 124.4L69.3313 124.4ZM69.8313 126.996L64.0473 126.996L64.0473 127.996L69.8313 127.996L69.8313 126.996ZM64.5473 127.496L64.5473 110L63.5473 110L63.5473 127.496L64.5473 127.496ZM64.0473 110.5L67.5033 110.5L67.5033 109.5L64.0473 109.5L64.0473 110.5ZM67.0033 110L67.0033 124.4L68.0033 124.4L68.0033 110L67.0033 110ZM67.5033 124.9L69.8313 124.9L69.8313 123.9L67.5033 123.9L67.5033 124.9Z"
              fill="#181818"
              mask="url(#path-7-outside-2_8_42393)"
            />
          </g>
          <g filter="url(#filter2_d_8_42393)">
            <mask
              id="path-9-outside-3_8_42393"
              maskUnits="userSpaceOnUse"
              x="35"
              y="53"
              width="13"
              height="33"
              fill="black"
            >
              <rect fill="white" x="35" y="53" width="13" height="33" />
              <path d="M36.4036 59.8V54.382H46.5256V85H40.4776V59.8H36.4036Z" />
            </mask>
            <path
              d="M36.4036 59.8V54.382H46.5256V85H40.4776V59.8H36.4036Z"
              fill="#FEFEFE"
            />
            <path
              d="M36.4036 59.8H35.4036V60.8H36.4036V59.8ZM36.4036 54.382V53.382H35.4036V54.382H36.4036ZM46.5256 54.382H47.5256V53.382H46.5256V54.382ZM46.5256 85V86H47.5256V85H46.5256ZM40.4776 85H39.4776V86H40.4776V85ZM40.4776 59.8H41.4776V58.8H40.4776V59.8ZM37.4036 59.8V54.382H35.4036V59.8H37.4036ZM36.4036 55.382H46.5256V53.382H36.4036V55.382ZM45.5256 54.382V85H47.5256V54.382H45.5256ZM46.5256 84H40.4776V86H46.5256V84ZM41.4776 85V59.8H39.4776V85H41.4776ZM40.4776 58.8H36.4036V60.8H40.4776V58.8Z"
              fill="#181818"
              mask="url(#path-9-outside-3_8_42393)"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_8_42393"
            x="14.1687"
            y="12.504"
            width="6.784"
            height="18.496"
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
              result="effect1_dropShadow_8_42393"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42393"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_8_42393"
            x="63.0473"
            y="110"
            width="6.784"
            height="18.496"
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
              result="effect1_dropShadow_8_42393"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42393"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_8_42393"
            x="34.4036"
            y="54.382"
            width="12.1219"
            height="32.618"
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
              result="effect1_dropShadow_8_42393"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_8_42393"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_8_42393">
            <rect width="85" height="140" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
