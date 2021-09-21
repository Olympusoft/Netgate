import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const DisconnectedWiresIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="100%"
    viewBox="0 0 320 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M222.231 17.6609C223.144 13.6045 224.998 11.0319 227.235 9.44073C229.505 7.82658 232.517 6.97623 236.17 6.97623C238.467 6.97623 241.356 8.75353 244.508 12.9629C247.501 16.9599 250.031 22.2368 251.839 27.064C255.416 36.6182 258.005 53.6057 257.498 62.6027C257.336 65.4899 256.712 69.7743 255.997 74.691C255.575 77.588 255.122 80.7045 254.712 83.8841C254.173 88.0618 253.724 92.2753 253.587 95.9794C253.454 99.5657 253.587 103.106 254.47 105.701C256.654 112.117 262.407 118.283 268.844 121.539C272.102 123.187 275.803 124.226 279.528 123.958C283.372 123.681 286.952 122.022 289.725 118.782C294.841 112.805 296.008 104.019 295.94 96.6405C295.871 89.0876 294.486 82.0829 293.63 78.8823C293.143 77.0598 292.987 73.2754 293.884 69.8342C294.825 66.2239 296.449 64.5414 298.205 64.2132C304.123 63.1067 314.918 63.1156 319.724 63.282L320 56.3105C315.211 56.1447 303.616 56.0871 296.741 57.3725C290.501 58.5392 287.747 63.9073 286.633 68.1825C285.474 72.6267 285.585 77.5626 286.39 80.5743C287.133 83.3534 288.414 89.8028 288.478 96.7007C288.543 103.773 287.312 110.434 283.898 114.424C282.407 116.166 280.723 116.875 278.953 117.002C277.064 117.139 274.802 116.621 272.396 115.404C267.505 112.929 263.13 108.133 261.582 103.586C261.12 102.23 260.914 99.7452 261.045 96.2216C261.172 92.8159 261.591 88.8342 262.121 84.7189C262.486 81.8888 262.912 78.9525 263.323 76.1232L263.323 76.122C264.074 70.9441 264.773 66.1245 264.951 62.9694C265.51 53.0309 262.768 35.1373 258.883 24.7594C256.959 19.6206 254.159 13.6856 250.622 8.96234C247.244 4.45147 242.403 0 236.17 0C231.294 0 226.577 1.14286 222.716 3.88885C218.823 6.6578 216.146 10.8123 214.928 16.2237C213.632 21.9751 214.985 26.889 218.109 31.4154C221.105 35.7572 225.765 39.7871 231.088 44.0168C236.054 47.9625 237.739 51.1378 238.081 53.1737C238.389 55.0086 237.679 56.2193 236.657 56.9625L236.651 56.9649C236.602 56.9847 236.426 57.055 236.06 57.1412C235.507 57.2711 234.742 57.3869 233.761 57.4723C231.8 57.6429 229.3 57.6657 226.552 57.5807C221.076 57.4113 214.997 56.8273 211.082 56.3394L211.076 56.3387L187.632 53.3503L186.624 60.2626L210.079 63.2524L210.09 63.2537C214.17 63.7623 220.509 64.3738 226.305 64.5531C229.194 64.6425 232.045 64.6279 234.452 64.4185C235.654 64.314 236.828 64.1541 237.881 63.9065C238.87 63.6738 240.066 63.294 241.075 62.5867C244.285 60.3361 246.206 56.575 245.454 52.0926C244.729 47.7751 241.617 43.2268 235.922 38.7013C230.584 34.4599 226.714 31.0153 224.38 27.6334C222.173 24.4361 221.394 21.3771 222.231 17.6609Z"
      fill="#257D69"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M56.8957 58.498C53.0102 56.9847 47.2024 56.2971 41.9662 57.2329C36.7358 58.1676 31.0321 60.9893 29.4611 67.3071C29.0589 68.6142 28.7569 71.0872 29.6186 73.716C30.7359 77.6357 33.3715 83.3336 37.9557 88.8969C34.5658 89.3318 30.8695 89.5184 27.0548 89.55C22.1364 89.5908 17.1354 89.3744 12.4725 89.1379C11.7125 89.0994 10.9584 89.0601 10.2136 89.0213C6.45095 88.8254 2.92236 88.6416 0.0429395 88.6261L0 95.6022C2.6753 95.6166 5.97087 95.7879 9.73774 95.9838L9.74608 95.9842C10.5016 96.0235 11.276 96.0637 12.0682 96.1039C16.7506 96.3413 21.9512 96.5689 27.1211 96.526C32.2797 96.4832 37.5228 96.1713 42.2867 95.2944C42.8343 95.1936 43.3794 95.0846 43.9208 94.9668C48.9486 99.2519 55.4103 102.961 63.5472 105.021C85.0256 110.458 102.216 105.287 108.585 101.638L104.685 95.69C100.037 98.353 84.9592 103.214 65.4981 98.2869C60.2268 96.9524 55.7797 94.7857 52.0714 92.2072C53.1378 91.67 54.148 91.0648 55.086 90.3828C71.1857 78.6775 66.5477 62.2574 56.8957 58.498ZM36.7008 71.4427L36.6868 71.4458C36.559 70.9686 36.518 70.4925 36.5291 70.0699C36.5413 69.6021 36.6137 69.3088 36.6252 69.2622C36.6259 69.2592 36.6266 69.2563 36.6266 69.2563L36.6777 69.1064L36.7143 68.9524C37.3226 66.3935 39.5721 64.7633 43.3675 64.085C47.1934 63.4013 51.514 63.9595 54.0253 64.9376C57.1669 66.1613 63.1902 75.6528 50.5042 84.8761C49.3137 85.7417 47.8287 86.4829 46.0692 87.1026C40.7858 81.6523 37.8852 75.6662 36.8141 71.8638C36.7732 71.7187 36.7355 71.5783 36.7008 71.4427Z"
      fill="#257D69"
    />
    <path
      d="M112.913 113.739L131.089 107.158L119.399 75.6542L101.224 82.2266C98.0825 83.3667 96.4526 86.8289 97.6071 89.9306L105.112 110.151C106.258 113.261 109.772 114.87 112.913 113.739Z"
      fill="#3ED598"
    />
    <path
      d="M130.732 110.352L138.296 107.619C140.758 106.73 142.04 104.006 141.14 101.566L130.732 73.5162C129.832 71.0768 127.073 69.8193 124.603 70.7079L117.039 73.4408C114.569 74.3294 113.295 77.0539 114.195 79.4934L124.603 107.552C125.511 109.983 128.27 111.249 130.732 110.352Z"
      fill="#257D69"
    />
    <path
      opacity="0.8"
      d="M126.887 81.1196C127.371 82.4274 126.692 83.8693 125.367 84.3471C124.043 84.825 122.583 84.1543 122.099 82.8465C121.615 81.5388 122.294 80.0969 123.618 79.6191C124.943 79.1496 126.403 79.8202 126.887 81.1196Z"
      fill="white"
    />
    <path
      opacity="0.8"
      d="M133.228 98.2128C133.712 99.5206 133.033 100.962 131.709 101.44C130.384 101.918 128.924 101.248 128.44 99.9398C127.956 98.632 128.635 97.1901 129.96 96.7123C131.284 96.2428 132.744 96.9051 133.228 98.2128Z"
      fill="white"
    />
    <path
      opacity="0.8"
      d="M141.847 44.0862L141.874 43.8149C141.995 42.6234 143.072 41.7525 144.279 41.8713L179.52 45.3413C180.727 45.4601 181.609 46.5239 181.488 47.7154L181.461 47.9867C181.341 49.1782 180.263 50.0491 179.057 49.9303L143.815 46.4603C142.609 46.3415 141.727 45.2777 141.847 44.0862Z"
      fill="white"
    />
    <path
      opacity="0.8"
      d="M140.012 62.1998L140.039 61.9285C140.16 60.737 141.237 59.8661 142.444 59.9849L177.685 63.4549C178.892 63.5737 179.774 64.6375 179.653 65.829L179.626 66.1003C179.506 67.2918 178.428 68.1627 177.222 68.0439L141.98 64.5739C140.786 64.4563 139.898 63.386 140.012 62.1998Z"
      fill="white"
    />
    <path
      d="M182.757 73.9804L157.933 71.5361L161.304 38.1506L186.128 40.5949C189.461 40.9231 191.913 43.881 191.581 47.1723L189.417 68.6075C189.086 71.887 186.084 74.3139 182.757 73.9804Z"
      fill="#3ED598"
    />
    <path
      d="M159.077 74.5438L158.468 74.4838C155.852 74.2262 153.927 71.904 154.193 69.327L157.194 39.5985C157.455 37.015 159.807 35.1139 162.417 35.3768L163.026 35.4368C165.642 35.6944 167.567 38.0166 167.301 40.5937L164.299 70.3221C164.045 72.9003 161.693 74.8014 159.077 74.5438Z"
      fill="#257D69"
    />
  </svg>
);

const Composed = memo(forwardRef(DisconnectedWiresIcon));
Composed.displayName = 'DisconnectedWiresIcon';

export default Composed;
