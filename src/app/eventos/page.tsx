import styles from '../page.module.css';
import { Container, Typography } from '@mui/material';
import information from '../../../data/information';

export default function Eventos() {
  return (
    <Container className={styles.main}>
      <Typography variant="h3">
        Eventos
      </Typography>
      <Typography variant="subtitle1">
        { information.eventPageDesc }
      </Typography>
    </Container>
  )
}
