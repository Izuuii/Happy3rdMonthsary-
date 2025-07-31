import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Camera, Construction } from 'lucide-react';

import march4 from './assets/march4.jpg'; 
import march16 from './assets/march16.jpg';
import april4 from './assets/april4.jpg'; 
import april26 from './assets/april26.jpg';
import may11 from './assets/may11.jpg';
import june14 from './assets/june14.jpg';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 6,
      animationDelay: Math.random() * 8,
      size: 0.5 + Math.random() * 1,
      opacity: 0.3 + Math.random() * 0.4,
      color: ['text-pink-300', 'text-rose-300', 'text-red-300', 'text-purple-300'][Math.floor(Math.random() * 4)]
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: 8 + Math.random() * 6,
          animationDelay: 0,
          size: 0.5 + Math.random() * 1,
          opacity: 0.3 + Math.random() * 0.4,
          color: ['text-pink-300', 'text-rose-300', 'text-red-300', 'text-purple-300'][Math.floor(Math.random() * 4)]
        };
        return [...prev.slice(-14), newHeart]; // Keep only 15 hearts
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className={`absolute ${heart.color} animate-float-up`}
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            fontSize: `${heart.size}rem`,
            opacity: heart.opacity,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
          }}
        >
          <Heart fill="currentColor" className="w-6 h-6" />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--opacity);
          }
          90% {
            opacity: var(--opacity);
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear infinite;
        }
      `}</style>
    </div>
  );
};

// Main App component
const App = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      src: march4,
      alt: "Our First Pic",
      caption: "Look, it's our very first picture together! HASHAHAHHAHAHHA",
      isFlipped: false,
      date: "March 4, 2025"
    },
    {
      id: 2,
      src: march16,
      alt: "First Date",
      caption: "Our first official date! I was so nervous kasi you're so beautiful and I wanted everything to be perfect. It was a special day that I'll never forget.",
      isFlipped: false,
      date: "March 16, 2025"
    },
    {
      id: 3,
      src: april4,
      alt: "First visit",
      caption: "The first time you visited my place! I was so excited to spend quality time together—we cuddled and kissed, and every moment felt magical. You even met my parents that day, and it made everything feel even more special.",
      isFlipped: false,
      date: "April 4, 2025"
    },
    {
      id: 4,
      src: april26,
      alt: "Sweet moments",
      caption: "Even though we're far apart, moments like this remind me how close our hearts are. Missing you always, but these memories keep me going until we're together again.",
      isFlipped: false,
      date: "April 26, 2025"
    },
    {
      id: 5,
      src: may11,
      alt: "How much I love you",
      caption: "This pic shows exactly how much I adore you! You make me so happy, baby. I can't imagine my life without you now.",
      isFlipped: false,
      date: "May 11, 2025"
    },
    {
      id: 6,
      src: june14,
      alt: "Let's be together forever",
      caption: "I want to be with you forever, baby. No matter how far apart we are right now, I know we're meant to be together. You're my always and forever.",
      isFlipped: false,
      date: "June 14, 2025"
    },
    {
      id: 7,
      src: "https://placehold.co/600x400/FF69B4/FFFFFF?text=3+Months+of+Love",
      alt: "3 Months of Love",
      caption: "Happy 3rd monthsary, my love! These three months have been the most amazing of my life. Here's to countless more beautiful memories together! 💕",
      isFlipped: false,
      date: "August 1, 2025"
    },
    {
      id: 8,
      src: "https://placehold.co/600x400/DDA0DD/666666?text=Coming+Soon",
      alt: "Future Memory 1",
      caption: "Another cute memory coming soon! Every day with you is a new adventure waiting to happen.",
      isFlipped: false,
      date: "Coming Soon",
      isConstruction: true
    },
    {
      id: 9,
      src: "https://placehold.co/600x400/DDA0DD/666666?text=Coming+Soon",
      alt: "Future Memory 2",
      caption: "More sweet moments to come! I'm already excited about all the fun things we'll do together.",
      isFlipped: false,
      date: "Coming Soon",
      isConstruction: true
    },
  ]);

  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to toggle the flipped state of a photo card
  const toggleFlip = (id) => {
    setPhotos(prevPhotos =>
      prevPhotos.map(photo =>
        photo.id === id ? { ...photo, isFlipped: !photo.isFlipped } : photo
      )
    );
  };

  const calculateTimeTogether = () => {
    const startDate = new Date('2025-02-10'); // Dating started March 4, 2025 (based on first pic)
    const now = new Date('2025-08-01'); // 3rd monthsary date
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 font-sans text-gray-800 relative overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <header className="text-center mb-12 mt-6 sm:mt-10 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-pink-500 mr-3 animate-pulse" fill="currentColor" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent">
              Happy 3rd Monthsary Baby!
            </h1>
            <Heart className="w-8 h-8 text-pink-500 ml-3 animate-pulse" fill="currentColor" />
          </div>
          
          <p className="text-lg sm:text-xl text-pink-800 font-medium mb-4 leading-relaxed">
            A beautiful collection of our precious memories together
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-pink-700 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{calculateTimeTogether()} days together</span>
            </div>
            <div className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>{photos.filter(p => !p.isConstruction).length} memories captured</span>
            </div>
          <div className="flex items-center gap-2">
            <Construction className="w-4 h-4" />
            <span>More future memories to come</span>
          </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" fill="currentColor" />
              <span>Infinite love</span>
            </div>
          </div>
        </header>

        {/* Photo Gallery */}
        <section className="w-full max-w-7xl">
          <PhotoGallery photos={photos} onPhotoClick={toggleFlip} />
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-rose-600 font-semibold text-base">
            <span>Made with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" fill="currentColor" />
            <span>by Dan, for my one and only</span>
          </div>
          <p className="text-sm text-pink-600 opacity-75">
            {currentTime.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .flip-card-inner {
          transition: transform 0.8s;
          transform-style: preserve-3d;
          position: relative;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

// Gallery component to display PhotoCards
const PhotoGallery = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo, index) => (
        <PhotoCard 
          key={photo.id} 
          photo={photo} 
          onClick={onPhotoClick}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  );
};

// PhotoCard component with enhanced flip functionality
const PhotoCard = ({ photo, onClick, animationDelay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flip-card-container group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-pink-100 animate-slide-up ${
        photo.isConstruction 
          ? 'bg-gradient-to-br from-purple-100 to-pink-100 border-dashed border-2 border-purple-300' 
          : 'bg-white/90'
      }`}
      onClick={() => onClick(photo.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        height: '380px',
        animationDelay: `${animationDelay}s`
      }}
    >
      <div
        className="flip-card-inner w-full h-full"
        style={{ transform: `rotateY(${photo.isFlipped ? 180 : 0}deg)` }}
      >
        {/* Front of the card */}
        <div className="flip-card-front w-full h-full flex flex-col relative">
          <div className="relative overflow-hidden flex-1">
            {photo.isConstruction && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Construction className="w-16 h-16 text-purple-400 animate-bounce" />
              </div>
            )}
            <img
              src={photo.src}
              alt={photo.alt}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                photo.isConstruction ? 'opacity-50 grayscale' : ''
              }`}
              style={{ 
                transform: isHovered && !photo.isFlipped ? 'scale(1.1)' : 'scale(1)' 
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/600x400/CCCCCC/666666?text=Image+Error`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Date badge */}
            <div className={`absolute top-3 right-3 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 ${
              photo.isConstruction 
                ? 'bg-purple-200/90 text-purple-700' 
                : 'bg-white/90 text-pink-700'
            }`}>
              {photo.date}
            </div>
          </div>
          
          <div className={`p-4 ${
            photo.isConstruction 
              ? 'bg-gradient-to-r from-purple-50 to-pink-50' 
              : 'bg-gradient-to-r from-pink-50 to-rose-50'
          }`}>
            <p className={`text-center text-lg font-semibold transition-colors duration-300 ${
              photo.isConstruction 
                ? 'text-purple-700 group-hover:text-purple-600' 
                : 'text-gray-700 group-hover:text-rose-600'
            }`}>
              {photo.alt}
            </p>
            <p className={`text-center text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              photo.isConstruction ? 'text-purple-600' : 'text-pink-600'
            }`}>
              {photo.isConstruction ? 'Under construction' : 'Click to read more'}
            </p>
          </div>
        </div>

        {/* Back of the card */}
        <div className={`flip-card-back w-full h-full flex flex-col items-center justify-center p-6 text-center relative ${
          photo.isConstruction 
            ? 'bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100' 
            : 'bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100'
        }`}>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-4">
            {photo.isConstruction ? (
              <Construction className="w-8 h-8 text-purple-500 mx-auto animate-pulse" />
            ) : (
              <Heart className="w-8 h-8 text-pink-500 mx-auto animate-pulse" fill="currentColor" />
            )}
            <p className={`text-lg font-medium leading-relaxed ${
              photo.isConstruction ? 'text-purple-800' : 'text-pink-800'
            }`}>
              {photo.caption}
            </p>
            <div className={`text-sm font-medium rounded-full px-4 py-2 ${
              photo.isConstruction 
                ? 'text-purple-600 bg-white/50' 
                : 'text-pink-600 bg-white/50'
            }`}>
              {photo.date}
            </div>
            <p className={`text-xs opacity-75 ${
              photo.isConstruction ? 'text-purple-600' : 'text-pink-600'
            }`}>
              Click again to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;