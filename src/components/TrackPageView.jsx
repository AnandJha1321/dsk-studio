import { analytics } from '../firebaseConfig';
import { logEvent } from 'firebase/analytics';
import { useEffect } from 'react';

const TrackPageView = () => {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view');
    }
  }, []);
};

export default TrackPageView;
