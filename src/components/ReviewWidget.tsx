import React from 'react';

// It's good practice to export your interface
export interface ReviewWidgetProps {
  className?: string;
}

const ReviewWidget: React.FC<ReviewWidgetProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-bold text-deep-blue mb-4">
        Share Your Experience
      </h3>
      <p className="text-dark-grey mb-4">
        Your feedback helps others find the mental health support they need.
      </p>

      <div className="space-y-3">
        {/* Link 1 */}
        <a
          href="https://g.page/r/CRsj9FHiW7kuEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          aria-label="Leave a review on Google - opens in new window"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">G</span>
            </div>
            <span className="font-medium text-dark-grey">
              Missouri Google Business Profile
            </span>
          </div>
          <span className="text-deep-blue">→</span>
        </a>

        {/* Link 2 */}
        <a
          href="https://g.page/r/CbYnvt3xU_0mEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          aria-label="Leave a review on Google - opens in new window"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">G</span>
            </div>
            <span className="font-medium text-dark-grey">
              Ohio Google Business Profile
            </span>
          </div>
          <span className="text-deep-blue">→</span>
        </a>

        {/* Link 3 */}
        <a
          href="https://g.page/r/CUhHfFbz-UylEAI/review"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          aria-label="Leave a review on Google - opens in new window"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-bold">G</span>
            </div>
            <span className="font-medium text-dark-grey">
              Florida Google Business Profile
            </span>
          </div>
          <span className="text-deep-blue">→</span>
        </a>

        {/* Link 4 */}
        <a
          href="https://www.healthgrades.com/physician/dr-haleh-tabrah-2v2gx?referrerSource=autosuggest"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          aria-label="Leave a review on HealthGrades - opens in new window"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-bold">H</span>
            </div>
            <span className="font-medium text-dark-grey">HealthGrades</span>
          </div>
          <span className="text-deep-blue">→</span>
        </a>

        {/* Link 5 */}
        <a
          href="https://www.psychologytoday.com/us/psychiatrists/haleh-tabrah-naples-fl/1566703"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2"
          aria-label="Leave a review on Psychology Today - opens in new window"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-sm font-bold">P</span>
            </div>
            <span className="font-medium text-dark-grey">Psychology Today</span>
          </div>
          <span className="text-deep-blue">→</span>
        </a>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <p className="text-sm text-dark-grey">
          <strong>Note:</strong> Reviews help build trust and improve our
          services. All reviews are subject to platform guidelines and
          policies.
        </p>
      </div>
    </div>
  );
};

export default ReviewWidget;