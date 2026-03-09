// ========================
// import Spinner from './Spinner';
//
// // 사용 예시
// function MyComponent() {
//   return (
//     <div>
//       <Spinner />
//     </div>
//   );
// =============================
// import React from 'react';
// import styled from 'styled-components';
//
// const SpinnerContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;
//
// const SpinnerWrapper = styled.div`
//   position: relative;
//   width: 128px;
//   height: 128px;
// `;
//
// const Ray = styled.div<{ index: number; totalRays: number }>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform-origin: left center;
//   transform: rotate(${props => (props.index * 360) / props.totalRays}deg);
//   animation: fadeInRay 1.2s ease-in-out infinite;
//   animation-delay: ${props => (props.index * 1.2) / props.totalRays}s;
// `;
//
// const RayBar = styled.div`
//   width: 32px;
//   height: 4px;
//   background-color: white;
//   border-radius: 2px;
//   margin-left: 32px;
//
//   @keyframes fadeInRay {
//     0% {
//       opacity: 1;
//     }
//     41.67%, 100% {
//       opacity: 0;
//     }
//   }
// `;
//
// interface SpinnerProps {
//   className?: string;
// }
//
// export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
//   const rayCount = 12;
//
//   return (
//     <SpinnerContainer className={className}>
//       <SpinnerWrapper>
//         {[...Array(rayCount)].map((_, i) => (
//           <Ray key={i} index={i} totalRays={rayCount}>
//             <RayBar />
//           </Ray>
//         ))}
//       </SpinnerWrapper>
//     </SpinnerContainer>
//   );
// };
//
// export default Spinner;
//
//
