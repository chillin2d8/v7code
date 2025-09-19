import React, { useState } from 'react';



interface BookingWidgetProps {

  className?: string;

}



const BookingWidget: React.FC<BookingWidgetProps> = ({ className = '' }) => {

  const [isExpanded, setIsExpanded] = useState(false);



  return (

    <div className={`bg-gradient-to-r from-deep-blue to-blue-700 text-white p-6 rounded-lg shadow-lg ${className}`}>

      <div className="flex items-center justify-between mb-4">

        <h3 className="text-xl font-bold">Schedule Your Appointment</h3>

        <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">

          <span className="text-white text-lg">📅</span>

        </div>

      </div>

      

      <p className="text-blue-100 mb-6">

        Book your confidential telepsychiatry consultation with Dr. Tabrah

      </p>

      

      <div className="space-y-4">

        <a 

          href="https://care.headway.co/providers/haleh-tabrah?utm_source=pem&utm_medium=direct_link&utm_campaign=135186" 

          target="_blank" 

          rel="noopener noreferrer"

          className="block w-full bg-white text-deep-blue px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue"

          aria-label="Book appointment online - opens in new window"

        >

          Book Online Now

        </a>

        

        <button 

          onClick={() => setIsExpanded(!isExpanded)}

          className="w-full text-left text-blue-100 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"

          aria-expanded={isExpanded}

          aria-controls="booking-details"

        >

          <div className="flex items-center justify-between">

            <span className="text-sm">Other ways to schedule</span>

            <span className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>

              ▼

            </span>

          </div>

        </button>

        

        {isExpanded && (

          <div id="booking-details" className="space-y-3 pt-2 border-t border-blue-600">

            <div className="flex items-center space-x-3">

              <span className="text-blue-100">📞</span>

              <div>

                <p className="text-sm text-blue-100">Call or Text</p>

                <a 

                  href="tel:707-582-2724" 

                  className="text-white font-medium hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"

                >

                  707-582-2724

                </a>

              </div>

            </div>

            

            <div className="flex items-center space-x-3">

              <span className="text-blue-100">✉️</span>

              <div>

                <p className="text-sm text-blue-100">Email</p>

                <a 

                  href="mailto:info@tabrahtelepsych.com" 

                  className="text-white font-medium hover:text-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-deep-blue rounded"

                >

                  info@tabrahtelepsych.com

                </a>

              </div>

            </div>

          </div>

        )}

      </div>

      

      <div className="mt-4 p-3 bg-blue-800 bg-opacity-50 rounded-lg flex flex-wrap">

        <div className="w-1/2">

          <p className="text-xs text-blue-100">

            <strong>Available:</strong>

          </p>

        </div>

        <div className="w-1/2">

          <p className="text-xs text-blue-100">Monday - Thursday: 8 AM - 8 PM</p>

          <p className="text-xs text-blue-100">Friday: 10 AM - 1 PM</p>

          <p className="text-xs text-blue-100">Saturday: 10 AM - 1 PM</p>

          <p className="text-xs text-blue-100">Sunday: 10 AM - 1 PM</p>

        </div>

      </div>

    </div>

  );

};



export default BookingWidget;          target="_blank"
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