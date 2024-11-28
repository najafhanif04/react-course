import React from 'react'
import { Link } from './Link'
import Container from "./container/Container";

const Footer = () => {
  return (
    <div>
       <Container>
            <div>Logo</div>
            <div className='flex flex-col'>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
            </div>
            <div className='flex flex-col'>
                <Link>Social Links</Link>
                <Link>Gallery</Link>
                <Link>Location</Link>
            </div>
        </Container>
    </div>
  )
}

export default Footer
