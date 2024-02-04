import styles from './page.module.css';
import { Typography } from '@mui/material';
import information from '../../data/information';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={information.avatarUrl}
        alt={`${information.displayName} profile picture`}
        width={160}
        height={160}
        style={{ borderRadius: "25px" }}
      />
      <Typography variant="h2">
        {information.displayName}
      </Typography>
      {
        information.about.map((line, index) => (
          <Typography key={`about-line-${index}`} variant="body2">
            {line}
          </Typography>
        ))
      }
    </main>
  )
}
