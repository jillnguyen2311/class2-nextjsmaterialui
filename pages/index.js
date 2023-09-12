import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className={`${styles.navigation}`}>
        <Button variant="contained">Text</Button>

        <Stack direction="row" spacing={2}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </Stack>

      </nav>
      <main className={`${styles.main}`}>
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </main>

      <footer>
        <ButtonGroup orientation="vertical" variant="outlined" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </footer>
    </>
  )
}
