import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashScroll = () => {
  const location = useLocation();

  useEffect(() => {
    // Czekamy na "chwilę", aby upewnić się, że strona się w pełni wyrenderowała
    const timer = setTimeout(() => {
      const hash = location.hash;
      if (hash) {
        // Usuwamy '#' z hasha, aby uzyskać czyste ID
        const id = hash.replace('#', '');
        const element = document.getElementById(id);

        if (element) {
          // Jeśli element istnieje, przewijamy do niego
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100); // 100ms to bezpieczne opóźnienie

    return () => clearTimeout(timer); // Czystka po odmontowaniu komponentu
  }, [location]); // Ten efekt uruchamia się za każdym razem, gdy zmienia się URL
};

export default useHashScroll;
