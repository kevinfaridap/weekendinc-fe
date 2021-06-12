import React from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Headline from '../../../part/Home/Headline'
import Main from '../../../part/Home/Main'

function Home() {
  return (
    <div>
      <Navbar 
        greeting="Good Morning"
        name="Fellas"
      />
      <Headline />
      {/* Subheadline moved to headline */}
      <Main 
        povDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        resourceDescription="These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best"
      />
      <Footer />
    </div>
  )
}

export default Home
