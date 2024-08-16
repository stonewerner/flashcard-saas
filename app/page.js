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
            <Button color="inherit" href="/sign-in">Log In</Button>
            <Button color="inherit" href="/sign-up">Sign Up</Button>
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
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Flash Cards</Typography>
            <Typography>Upload a pdf and our AI will make intuitive flashcards!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Accessible Anwhere</Typography>
            <Typography>Access your flashcards from any device!</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>Just Input your text and let our AI do the rest. Studying has never been easier!</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h5" gutterBottom>Rook</Typography>
              <Typography variant="h6" gutterBottom>$5/month</Typography>
              <Typography>Access to basic flashcard features and limited storage.</Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Rook</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h5" gutterBottom>Intern</Typography>
              <Typography variant="h6" gutterBottom>$12/month</Typography>
              <Typography>Unlimited flashcards and storage with priority support.</Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Intern</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, border: '1px solid', borderColor: 'grey.300', borderRadius: 2,}}>
              <Typography variant="h5" gutterBottom>Pro</Typography>
              <Typography variant="h6" gutterBottom>$19/month</Typography>
              <Typography>Everything in Intern plus pdf support.</Typography>
              <Button variant="contained" color="primary" sx={{mt: 2}}>Choose Pro</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}