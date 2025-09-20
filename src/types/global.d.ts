// Global type definitions for tracking functions

declare global {
  interface Window {
    // Google Ads Tracking Functions
    trackBookingConversion: () => void;
    trackPhoneConversion: () => void;
    trackEmailConversion: () => void;
    trackChatConversion: () => void;
    
    // Google Analytics / gtag
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    
    // Facebook Pixel (if needed)
    fbq?: (...args: any[]) => void;
  }
}

export {};