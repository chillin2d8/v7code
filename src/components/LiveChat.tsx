import React, { useState } from 'react';

interface LiveChatProps {
  className?: string;
}

const LiveChat: React.FC<LiveChatProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Replace with your actual webhook URL
      const webhookUrl = 'https://chat.googleapis.com/v1/spaces/AAQAVl2T6dI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=chtfkstYOTEdMpfcJMFwhnZHCTuu3mSc_eAtkeTE1dI';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          text: message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully! We will respond within 24 hours.');
        setMessage('');
        setIsOpen(false);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again later.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 bg-deep-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${className}`}
        aria-label="Open live chat"
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">💬</span>
          )}
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="bg-deep-blue text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Chat with Us</h3>
            <p className="text-sm text-blue-100">We typically respond within 24 hours</p>
          </div>
          
          <div className="p-4">
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-dark-grey">
                <strong>Hello!</strong> How can we help you today? For immediate assistance or crisis support, please call 707-582-2724 or dial 988.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                rows={3}
                required
                disabled={isLoading}
              />
              
              <div className="flex space-x-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-deep-blue text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 disabled:opacity-50"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  disabled={isLoading}
                  className="px-4 py-2 text-dark-grey hover:text-deep-blue transition-colors focus:outline-none focus:ring-2 focus:ring-deep-blue focus:ring-offset-2 rounded disabled:opacity-50"
                >
                  Close
                </button>
              </div>
            </form>
            
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-dark-grey">
                <strong>Privacy Notice:</strong> This chat is not for emergencies. Messages are secure but not monitored 24/7.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;