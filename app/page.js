import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Typography, Container, ToolBar, Button, Head, AppBar } from '@mui/material'


export default function Home() {
    <Container maxWidth="lg">
      <Head>
        <title>Flashcard Saas</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>

      <AppBar position="static">
        <ToolBar>
          <Typography variant = "h6" style={{flexgrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button>Log In</Button>
            <Button>Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ToolBar>
      </AppBar>
    </Container>
}