import React from 'react';
import styled from 'styled-components';

interface SpotifyCardProps {
  songTitle?: string;
  artist?: string;
  currentTime?: string;
  totalTime?: string;
  progress?: number; // 0-100
  isPlaying?: boolean;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({
  songTitle = "Soldiers Rage",
  artist = "Tha Mechanic",
  currentTime = "1:31",
  totalTime = "3:46",
  progress = 42,
  isPlaying = true
}) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="top">
          <div className="pfp">
            <div className={`playing ${!isPlaying ? 'paused' : ''}`}>
              <div className="greenline line-1" />
              <div className="greenline line-2" />
              <div className="greenline line-3" />
              <div className="greenline line-4" />
              <div className="greenline line-5" />
            </div>
          </div>
          <div className="texts">
            <p className="title-1">{songTitle}</p>
            <p className="title-2">{artist}</p>
          </div>
        </div>
        <div className="controls">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={20} width={24} className="volume_button">
            <path clipRule="evenodd" d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Zm-3.394 3.393a1.2 1.2 0 0 1 1.698 0A7.178 7.178 0 0 1 18 12a7.18 7.18 0 0 1-2.108 5.092 1.2 1.2 0 1 1-1.698-1.698A4.782 4.782 0 0 0 15.6 12a4.78 4.78 0 0 0-1.406-3.394 1.2 1.2 0 0 1 0-1.698Z" fillRule="evenodd" />
          </svg>
          <div className="volume">
            <div className="slider">
              <div className="green" />
            </div>
            <div className="circle" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
            <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm.848-12.352a1.2 1.2 0 0 0-1.696-1.696l-3.6 3.6a1.2 1.2 0 0 0 0 1.696l3.6 3.6a1.2 1.2 0 0 0 1.696-1.696L11.297 13.2H15.6a1.2 1.2 0 1 0 0-2.4h-4.303l1.551-1.552Z" fillRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
            <path clipRule="evenodd" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0ZM8.4 9.6a1.2 1.2 0 1 1 2.4 0v4.8a1.2 1.2 0 1 1-2.4 0V9.6Zm6-1.2a1.2 1.2 0 0 0-1.2 1.2v4.8a1.2 1.2 0 1 0 2.4 0V9.6a1.2 1.2 0 0 0-1.2-1.2Z" fillRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height={24} width={24}>
            <path clipRule="evenodd" d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z" fillRule="evenodd" />
          </svg>
          <div className="air" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" fill="none" height={20} width={24}>
            <path d="M3.343 7.778a4.5 4.5 0 0 1 7.339-1.46L12 7.636l1.318-1.318a4.5 4.5 0 1 1 6.364 6.364L12 20.364l-7.682-7.682a4.501 4.501 0 0 1-.975-4.904Z" />
          </svg>
        </div>
        <div className="time">
          <div className="elapsed" style={{ width: `${progress}%` }} />
        </div>
        <p className="timetext time_now">{currentTime}</p>
        <p className="timetext time_full">{totalTime}</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Spotify music card made by: csozi | Website: www.csozi.hu*/
  perspective: 500px;
  transform: translate3d(0, 0, 0.1px);
  position: relative;
  touch-action: none;



  .card {
    position: relative;
    width: 300px;
    height: 150px;
    background: #191414;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 
      rgba(0, 0, 0, 0.3) 0px 4px 15px -3px,
      0 0 30px rgba(29, 185, 84, 0.2),
      0 0 60px rgba(29, 185, 84, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(29, 185, 84, 0.2);
    transition: transform 1s ease, box-shadow 0.3s ease;
    transform: translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg);
    overflow: hidden;
  }

  .card:hover {
    transition: none;
    transform: translate3d(0, 0, 0.1px) rotateX(2deg) rotateY(2deg);
    box-shadow: 
      rgba(0, 0, 0, 0.3) 0px 8px 25px -3px,
      0 0 40px rgba(29, 185, 84, 0.3),
      0 0 80px rgba(29, 185, 84, 0.15);
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(29, 185, 84, 0.3), transparent);
    border-radius: 15px 15px 0 0;
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(29, 185, 84, 0.1) 0%, transparent 50%);
    border-radius: 15px;
    pointer-events: none;
  }

  @keyframes spotify-glow {
    0%, 100% {
      box-shadow: 
        rgba(0, 0, 0, 0.3) 0px 4px 15px -3px,
        0 0 30px rgba(29, 185, 84, 0.2),
        0 0 60px rgba(29, 185, 84, 0.1);
    }
    50% {
      box-shadow: 
        rgba(0, 0, 0, 0.3) 0px 4px 15px -3px,
        0 0 40px rgba(29, 185, 84, 0.3),
        0 0 80px rgba(29, 185, 84, 0.15);
    }
  }

  .card {
    animation: spotify-glow 3s ease-in-out infinite;
  }

  .top {
    position: relative;
    width: 100%;
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
  }

  .pfp {
    position: relative;
    top: 5px;
    left: 5px;
    height: 40px;
    width: 40px;
    background-color: #d2d2d2;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .texts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
  }

  .title-1 {
    color: white;
    font-size: 20px;
    font-weight: bolder;
    line-height: 1.2;
    margin-bottom: 2px;
  }

  .title-2 {
    color: white;
    font-size: 12px;
    font-weight: bold;
    line-height: 1.2;
  }

  .time {
    width: 90%;
    background-color: #5e5e5e;
    height: 6px;
    border-radius: 3px;
    position: absolute;
    left: 5%;
    bottom: 15px;
  }

  .elapsed {
    background-color: #1db954;
    height: 100%;
    border-radius: 3px;
    transition: width 0.3s ease;
  }

  .controls {
    color: white;
    display: flex;
    position: absolute;
    bottom: 35px;
    left: 0;
    width: 100%;
    justify-content: center;
  }

  .volume {
    height: 100%;
    width: 48px;
  }

  .air {
    height: 100%;
    width: 48px;
  }

  .controls svg {
    cursor: pointer;
    transition: 0.1s;
  }

  .controls svg:hover {
    color: #1db954;
  }

  .volume {
    opacity: 0;
    position: relative;
    transition: 0.2s;
  }

  .volume .slider {
    height: 4px;
    background-color: #5e5e5e;
    width: 80%;
    border-radius: 2px;
    margin-top: 8px;
    margin-left: 10%;
  }

  .volume .slider .green {
    background-color: #1db954;
    height: 100%;
    width: 80%;
    border-radius: 3px;
  }

  .volume .circle {
    background-color: white;
    height: 6px;
    width: 6px;
    border-radius: 3px;
    position: absolute;
    right: 20%;
    top: 60%;
  }

  .volume_button:hover ~ .volume {
    opacity: 1;
  }

  .timetext {
    color: white;
    font-size: 8px;
    position: absolute;
  }

  .time_now {
    bottom: 3px;
    left: 15px;
  }

  .time_full {
    bottom: 3px;
    right: 15px;
  }

  .playing {
    display: flex;
    position: relative;
    justify-content: center;
    gap: 1px;
    width: 30px;
    height: 20px;
  }

  .playing.paused .greenline {
    animation-play-state: paused;
  }

  .greenline {
    background-color: #1db954;
    height: 20px;
    width: 2px;
    position: relative;
    transform-origin: bottom;
  }

  .line-1 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.2s;
  }

  .line-2 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.5s;
  }

  .line-3 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.6s;
  }

  .line-4 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0s;
  }

  .line-5 {
    animation: infinite playing 1s ease-in-out;
    animation-delay: 0.4s;
  }

  @keyframes playing {
    0% {
      transform: scaleY(0.1);
    }

    33% {
      transform: scaleY(0.6);
    }

    66% {
      transform: scaleY(0.9);
    }

    100% {
      transform: scaleY(0.1);
    }
  }
`;

export default SpotifyCard; 