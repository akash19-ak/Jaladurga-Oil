import { useEffect } from 'react';

export default function useScrollSpy() {
  useEffect(() => {
    // Scroll to section on initial load if path matches a valid section
    const initialPath = window.location.pathname.substring(1);
    const validSections = ['home', 'products', 'services', 'gallery', 'reviews', 'contact'];
    
    if (initialPath && validSections.includes(initialPath)) {
      setTimeout(() => {
        const el = document.getElementById(initialPath);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }

    // Observe scroll intersections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const path = id === 'home' ? '/' : `/${id}`;
            if (window.location.pathname !== path) {
              window.history.replaceState(null, '', path);
              window.dispatchEvent(new Event('pathchanged'));
            }
          }
        });
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Trigger when mostly in view
        threshold: 0
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}
