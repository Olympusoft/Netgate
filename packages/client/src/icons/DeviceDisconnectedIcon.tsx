import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const DeviceDisconnectedIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <rect
      x="6.71729"
      y="6.71698"
      width="26.5652"
      height="26.5652"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.4349 40C8.88261 40 8.4349 39.5523 8.4349 39V34.7822H10.4349V39C10.4349 39.5523 9.98718 40 9.4349 40ZM13.6523 34.7822V39C13.6523 39.5523 14.1001 40 14.6523 40C15.2046 40 15.6523 39.5523 15.6523 39V34.7822H13.6523ZM18.8698 34.7822V39C18.8698 39.5523 19.3175 40 19.8698 40C20.4221 40 20.8698 39.5523 20.8698 39V34.7822H18.8698ZM24.0872 34.7822V39C24.0872 39.5523 24.535 40 25.0872 40C25.6395 40 26.0872 39.5523 26.0872 39V34.7822H24.0872ZM29.304 34.7822V39C29.304 39.5523 29.7518 40 30.304 40C30.8563 40 31.304 39.5523 31.304 39V34.7822H29.304ZM34.7827 31.3048H39C39.5523 31.3048 40 30.8571 40 30.3048C40 29.7525 39.5523 29.3048 39 29.3048H34.7827V31.3048ZM34.7827 26.0861H39C39.5523 26.0861 40 25.6384 40 25.0861C40 24.5338 39.5523 24.0861 39 24.0861H34.7827V26.0861ZM34.7827 20.8698H39C39.5523 20.8698 40 20.4221 40 19.8698C40 19.3175 39.5523 18.8698 39 18.8698H34.7827V20.8698ZM34.7827 15.6522H39C39.5523 15.6522 40 15.2045 40 14.6522C40 14.0999 39.5523 13.6522 39 13.6522H34.7827V15.6522ZM34.7827 10.435H39C39.5523 10.435 40 9.98728 40 9.435C40 8.88271 39.5523 8.435 39 8.435H34.7827V10.435ZM31.304 5.21697V1C31.304 0.447716 30.8563 0 30.304 0C29.7518 0 29.304 0.447716 29.304 1V5.21697H31.304ZM26.0872 5.21697V1C26.0872 0.447716 25.6395 0 25.0872 0C24.535 0 24.0872 0.447716 24.0872 1V5.21697H26.0872ZM20.8698 5.21697V1C20.8698 0.447716 20.4221 0 19.8698 0C19.3175 0 18.8698 0.447716 18.8698 1V5.21697H20.8698ZM15.6523 5.21697V1C15.6523 0.447716 15.2046 0 14.6523 0C14.1001 0 13.6523 0.447716 13.6523 1V5.21697H15.6523ZM10.4349 5.21697V1C10.4349 0.447716 9.98718 0 9.4349 0C8.88261 0 8.4349 0.447716 8.4349 1V5.21697H10.4349ZM5.21745 8.435H1C0.447715 8.435 0 8.88271 0 9.435C0 9.98728 0.447715 10.435 1 10.435H5.21745V8.435ZM5.21745 13.6522H1C0.447715 13.6522 0 14.0999 0 14.6522C0 15.2045 0.447715 15.6522 1 15.6522H5.21745V13.6522ZM5.21745 18.8698H1C0.447715 18.8698 0 19.3175 0 19.8698C0 20.4221 0.447715 20.8698 1 20.8698H5.21745V18.8698ZM5.21745 24.0861H1C0.447715 24.0861 0 24.5338 0 25.0861C0 25.6384 0.447715 26.0861 1 26.0861H5.21745V24.0861ZM5.21745 29.3048H1C0.447715 29.3048 0 29.7525 0 30.3048C0 30.8571 0.447715 31.3048 1 31.3048H5.21745V29.3048Z"
      fill="currentColor"
    />
    <path
      d="M1.81836 1.81818L38.182 38.1818"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(forwardRef(DeviceDisconnectedIcon));
