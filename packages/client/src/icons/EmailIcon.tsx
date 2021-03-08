import React, { forwardRef, memo, Ref, SVGProps } from 'react';

const EmailIcon = (props: SVGProps<SVGSVGElement>, svgRef?: Ref<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M17.087 2.521C15.263.841 12.995 0 10.286 0 7.438 0 5.01.955 3.006 2.868 1.005 4.782 0 7.16 0 10.008c0 2.73.955 5.076 2.86 7.042C4.774 19.017 7.344 20 10.58 20c1.95 0 3.863-.4 5.74-1.204.612-.26.91-.962.66-1.578a1.22 1.22 0 00-1.615-.662c-1.632.702-3.231 1.053-4.79 1.053-2.48 0-4.402-.755-5.765-2.268-1.358-1.51-2.04-3.285-2.04-5.32 0-2.212.73-4.056 2.187-5.537 1.453-1.477 3.244-2.22 5.365-2.22 1.955 0 3.607.608 4.953 1.824 1.347 1.216 2.02 2.746 2.02 4.59 0 1.26-.31 2.313-.926 3.15-.616.84-1.257 1.257-1.922 1.257-.359 0-.538-.192-.538-.58 0-.314.024-.681.069-1.106l.759-6.205h-2.611l-.168.608c-.665-.543-1.395-.816-2.186-.816-1.257 0-2.334.502-3.228 1.501-.897 1-1.342 2.289-1.342 3.864 0 1.538.396 2.782 1.191 3.725.796.946 1.75 1.416 2.869 1.416 1 0 1.852-.42 2.562-1.257.534.804 1.322 1.204 2.362 1.204 1.53 0 2.852-.665 3.966-2 1.114-1.33 1.673-2.937 1.673-4.818 0-2.383-.91-4.419-2.738-6.1zm-6.014 9.388c-.461.62-1.012.935-1.652.935-.437 0-.788-.229-1.053-.686-.27-.457-.404-1.024-.404-1.705 0-.84.188-1.518.563-2.032.375-.514.84-.775 1.395-.775.482 0 .91.192 1.286.58.375.387.563.9.563 1.546a3.53 3.53 0 01-.698 2.137z"
      fill="currentColor"
    />
  </svg>
);

export default memo(forwardRef(EmailIcon));