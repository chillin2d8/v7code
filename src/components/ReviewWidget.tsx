import React, { useState } from 'react';

interface ReviewWidgetProps {
  className?: string;
}

const ReviewWidget: React.FC<ReviewWidgetProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg shadow-lg ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Share Your Experience</h3>
        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">⭐</span>
        </div>
      </div>
      
      <p className="text-green-100 mb-6">
        Help others find quality mental health care by sharing your experience with Dr. Tabrah
      </p>
      
      <div className="space-y-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
          aria-expanded={isExpanded}
          aria-controls="review-platforms"
        >
          Leave a Review
        </button>
        
        {isExpanded && (
          <div id="review-platforms" className="space-y-3 pt-2 border-t border-green-600">
            <div className="grid grid-cols-1 gap-3">
              <a 
                href="https://www.google.com/search?q=Tabrah+TelePsychiatry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                <span className="text-white font-medium">Google Reviews</span>
                <span className="text-green-100">→</span>
              </a>
              
              <a 
                href="https://www.healthgrades.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                <span className="text-white font-medium">Healthgrades</span>
                <span className="text-green-100">→</span>
              </a>
              
              <a 
                href="https://www.psychology.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-800 bg-opacity-50 p-3 rounded-lg hover:bg-opacity-70 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                <span className="text-white font-medium">Psychology Today</span>
                <span className="text-green-100">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-6 p-3 bg-green-800 bg-opacity-50 rounded-lg">
        <p className="text-xs text-green-100 mb-2">
          <strong>Your feedback matters:</strong>
        </p>
        <p className="text-xs text-green-100">
          Reviews help other patients find quality telepsychiatry care and support Dr. Tabrah's mission to provide accessible mental health services.
        </p>
      </div>
    </div>
  );
};

export default ReviewWidget;