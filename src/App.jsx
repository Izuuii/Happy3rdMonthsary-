import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Camera } from 'lucide-react';

// Main App component
const App = () => {
  const [photos, setPhotos] = useState([
    {
      id: 1,
      src: "https://placehold.co/600x400/FF6B9D/FFFFFF?text=Our+First+Date",
      alt: "Our First Date",
      caption: "Remember our very first date? It feels like yesterday and a lifetime ago all at once. So many butterflies!",
      isFlipped: false,
      date: "February 10, 2025"
    },
    {
      id: 2,
      src: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Favorite+Memory+1",
      alt: "Favorite Memory 1",
      caption: "This moment captured perfectly how happy we are together. Pure joy!",
      isFlipped: false,
      date: "March 2, 2025"
    },
    {
      id: 3,
      src: "https://placehold.co/600x400/FF69B4/FFFFFF?text=Adventure+Time",
      alt: "Adventure Time",
      caption: "Every adventure with you is my favorite adventure. Can't wait for more!",
      isFlipped: false,
      date: "March 25, 2025"
    },
    {
      id: 4,
      src: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Cozy+Nights",
      alt: "Cozy Nights",
      caption: "Our cozy nights in are some of my most cherished memories. Just us, being us.",
      isFlipped: false,
      date: "April 15, 2025"
    },
    {
      id: 5,
      src: "https://placehold.co/600x400/FF6B9D/FFFFFF?text=Laughter+Always",
      alt: "Laughter Always",
      caption: "Your laugh is my favorite sound in the world. Always keep smiling!",
      isFlipped: false,
      date: "May 8, 2025"
    },
    {
      id: 6,
      src: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Future+Dreams",
      alt: "Future Dreams",
      caption: "Dreaming of all the beautiful moments we'll create together in the future.",
      isFlipped: false,
      date: "June 3, 2025"
    },
    {
      id: 7,
      src: "https://placehold.co/600x400/FF69B4/FFFFFF?text=Sweet+Moments",
      alt: "Sweet Moments",
      caption: "Just a sweet, simple moment that means the world to me because it's with you.",
      isFlipped: false,
      date: "June 28, 2025"
    },
    {
      id: 8,
      src: "https://placehold.co/600x400/FFB6C1/FFFFFF?text=Our+Song",
      alt: "Our Song",
      caption: "Every time I hear 'our song', I think of this moment and how much I adore you.",
      isFlipped: false,
      date: "July 18, 2025"
    },
    {
      id: 9,
      src: "https://placehold.co/600x400/FF1493/FFFFFF?text=3+Months+of+Love",
      alt: "3 Months of Love",
      caption: "Happy 3rd monthsary in advance, my love! These months have been the happiest of my life. Here's to many, many more! 💕",
      isFlipped: false,
      date: "August 1, 2025"
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
    const startDate = new Date('2025-02-10'); // Dating started February 10, 2025
    const now = new Date('2025-07-27'); // Today (celebrating 3rd monthsary in advance)
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 font-sans text-gray-800 relative overflow-hidden">
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
              <span>{photos.length} memories captured</span>
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
      className="flip-card-container group cursor-pointer rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm border border-pink-100 animate-slide-up"
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
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-700"
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
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-pink-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {photo.date}
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50">
            <p className="text-center text-lg font-semibold text-gray-700 group-hover:text-rose-600 transition-colors duration-300">
              {photo.alt}
            </p>
            <p className="text-center text-xs text-pink-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to read more
            </p>
          </div>
        </div>

        {/* Back of the card */}
        <div className="flip-card-back w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
          <div className="relative z-10 space-y-4">
            <Heart className="w-8 h-8 text-pink-500 mx-auto animate-pulse" fill="currentColor" />
            <p className="text-lg text-pink-800 font-medium leading-relaxed">
              {photo.caption}
            </p>
            <div className="text-sm text-pink-600 font-medium bg-white/50 rounded-full px-4 py-2">
              {photo.date}
            </div>
            <p className="text-xs text-pink-600 opacity-75">
              Click again to flip back
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;