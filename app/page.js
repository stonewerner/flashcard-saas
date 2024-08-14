import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Typography, Container, Toolbar, Button, AppBar, Box, Grid } from '@mui/material'


export default function Home() {
  return (
    <Container maxWidth="100vw">

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>Flashcard SaaS</Typography>
          <SignedOut>
            <Button color="inherit">Log In</Button>
            <Button color="inherit">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{textAlign: 'center', my: 4}}>
        <Typography variant="h2">Welcome to Flashcard SaaS</Typography>
        <Typography variant="h5">The smartest way to make flashcards with AI!</Typography>
        <Button variant="contained" color="primary" sx={{mt: 2}}>Get Started</Button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" components="h2">Features</Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}></Grid>

        </Grid>

      </Box>
    </Container>
  );
}