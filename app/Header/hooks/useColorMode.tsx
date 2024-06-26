import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

  useEffect(() => {
    const className = 'dark';
    if (typeof window !== 'undefined') {
      // Code that uses window here
      const bodyClass = window.document.body.classList;
      // const bodyClass = typeof window !== "undefined" && window.document.body.classList;
      colorMode === 'dark'
        ? bodyClass.add(className)
        : bodyClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
