import React from 'react';
import Image from 'next/image';
import styles from './CentralImage.module.css';
import centralImage from '../../public/images/central-image.png';

const CentralImage: React.FC = () => {
  return (
    <div className={styles.centralImageContainer}>
      <Image src={centralImage} alt="Central Image" className={styles.centralImage} />
    </div>
  );
};

export default CentralImage;
