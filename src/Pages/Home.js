import React from 'react'
import Carousel from '../Components/Carousel'
import Text from '../Components/Text'
import Gallery from '../Components/Gallery'
import Modal from '../Components/Modal'
import { Button } from 'reactstrap'



function Home() {
    return (
        <div>
            <Carousel />
            <div style={
                {
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '100px',
                }
            }>
               <Button>
                   <Modal/>
               </Button>
                  
                

            </div>
            <Text />
            <Gallery />
            <div style={
                {
                    textAlign: 'center',
                    marginBottom: '50px',
                    marginTop: '50px',
                }
            }>
                <Button>
                   <Modal/>
               </Button>

            </div>


        </div>
    )
}
export default Home