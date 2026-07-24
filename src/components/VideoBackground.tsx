import React, { useRef, useEffect, useState } from 'react';

interface VideoBackgroundProps {
  /** Direct URL to the MP4 video file */
  videoSrc: string;
  /** Poster/cover image URL (shown before video loads or as fallback) */
  posterSrc?: string;
  /** Additional CSS classes for the wrapper */
  className?: string;
  /** Overlay gradient classes */
  overlayClassName?: string;
  /** Children to render on top of the video */
  children?: React.ReactNode;
}

/**
 * Autoplay muted background video component.
 * - Always muted, no sound
 * - Autoplay on load, loops forever
 * - Uses playsInline for iOS compatibility
 * - Falls back to poster image if video fails
 * - Pauses when off-screen (IntersectionObserver) for performance
 */
export default function VideoBackground({
  videoSrc,
  posterSrc,
  className = '',
  overlayClassName = 'bg-gradient-to-r from-primary/90 via-primary/60 to-transparent',
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Pause video when off-screen for performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  // Force reload on mobile when video doesn't autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // On some mobile browsers, autoplay doesn't work until user interacts
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked - try muted play
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => video.removeEventListener('canplay', handleCanPlay);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      {/* Video element */}
      {!videoFailed && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={posterSrc}
          onError={() => setVideoFailed(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback poster/image when video fails */}
      {(videoFailed || !videoSrc) && posterSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${posterSrc}')` }}
        />
      )}

      {/* Dark overlay for text readability */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Content on top */}
      {children && (
        <div className="relative z-10 h-full">
          {children}
        </div>
      )}
    </div>
  );
}
