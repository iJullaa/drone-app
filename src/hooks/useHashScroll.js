import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // We wait for a "moment" to make sure the page has fully rendered
    const timer = setTimeout(() => {
      const hash = location.hash;
      if (hash) {
        // Remove '#' from the hash to get the clean ID
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          // If the element exists, scroll to it
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // 100ms to ensure safe delay

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [location]); // This effect runs every time the URL changes
};

export default useHashScroll;
