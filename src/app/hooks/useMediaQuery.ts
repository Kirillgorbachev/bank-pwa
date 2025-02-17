import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const updateMatches = (event: MediaQueryListEvent) => setMatches(event.matches);

        mediaQueryList.addEventListener('change', updateMatches);

        return () => mediaQueryList.removeEventListener('change', updateMatches);
    }, [query]);

    return matches;
};
