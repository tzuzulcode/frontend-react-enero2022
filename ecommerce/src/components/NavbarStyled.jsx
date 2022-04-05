import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Nav = styled.nav`
    background-color: rgb(24 24 27);
    color: white;
    padding: 1.25rem;
`

const Ul = styled.ul`
    display: flex;
`
const Li = styled.li`
    color: ${props=>props.actual ? "rgb(165 180 252)":"white"};
`

const LiMotion = ({children,className}) =><motion.li className={className}>
    {children}
</motion.li>

// const LiMotionStyled = styled(LiMotion)`
//     color: rgb(129 140 248);
// `
const LiMotionStyled = styled(motion.div)`
    color: rgb(129 140 248);
`




export default function NavbarStyled() {
  return (
    <Nav>
        <Ul>
            <Li actual><Link to="/">Home</Link></Li>
            <LiMotionStyled
                animate={{
                    x:100,
                    rotate: 360
                }}
                transition={{
                    duration:5
                }}
            ><Link to="/payment">Payment</Link></LiMotionStyled>
        </Ul>
    </Nav>
  )
}
