import React from 'react';
import styles from "src/components/Loader/Loader.module.css";

interface ILoaderProps {
  /**
   * width in pixels
   */
  width?: number;
}

const Loader: React.FC<ILoaderProps> = ({width = 30}) => {
  return <div className={styles.loader} style={{width}} />
}

export default Loader;