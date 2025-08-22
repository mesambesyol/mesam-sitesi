import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // Do not scroll to top if a hash or specific state like scrollToId is present,
    // as a page-specific component will handle the scrolling.
    const componentState = state as { scrollToId?: string } | null;
    if (hash || componentState?.scrollToId) {
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, state, hash]);

  return null;
};

export default ScrollToTop;