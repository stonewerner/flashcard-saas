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
        <Typography variant="h4">Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Smart Flash Cards</Typography>
            <Typography>Upload a pdf and our AI will make intuitive flashcards!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Accessible Anwhere</Typography>
            <Typography>Access your flashcards from any device!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Easy Text Input</Typography>
            <Typography>Just Input your text and let our AI do the rest. Studying has never been easier!</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4">Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h6">Rook</Typography>
              <Typography>Upload a pdf and our AI will make intuitive flashcards!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h6">Intern</Typography>
              <Typography>Access your flashcards from any device!</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h6">Pro</Typography>
              <Typography>Just Input your text and let our AI do the rest. Studying has never been easier!</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}