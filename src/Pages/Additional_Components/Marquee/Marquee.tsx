import React from 'react';
import FastMarquee from 'react-fast-marquee';

const CustomMarquee: React.FC = () => {
  return (
    <div className='bg-yellow-200'>
      <FastMarquee>
        <div>
        New Batch for Azure data engineering is starting on 20th July 2024 *** Regristrations are open for all courses!! Enroll now.New Batch for Azure data engineering is starting on 20th July 2024 *** Regristrations are open for all courses!! Enroll now.
        </div>
      </FastMarquee>
    </div>
  );
}

export default CustomMarquee;
