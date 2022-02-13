import { useState } from 'react'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import './Gallery.css'
import G1 from '../Components/IMG/G1.jpg'
import G2 from '../Components/IMG/G2.jpeg'
import G3 from '../Components/IMG/G3.jpeg'
import G4 from '../Components/IMG/G4.jpeg'
import G5 from '../Components/IMG/G5.jpeg'
import G6 from '../Components/IMG/G6.jpeg'
import G7 from '../Components/IMG/G7.jpeg'
import G8 from '../Components/IMG/G8.jpeg'
import G9 from '../Components/IMG/F1.jpeg'
import G10 from '../Components/IMG/F2.jpg'



const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc: G1
        },
        {
            id:2,
            imgSrc: G2
        },
        {
            id:3,
            imgSrc: G3
        
        },
        {
            id:4,
            imgSrc :G4
        },
        {
            id:5,
            imgSrc: G5
        },
        {
            id:6,
            imgSrc: G6

        },
        {
            id:7,
            imgSrc: G7
        
        },
        {
            id:8,
            imgSrc :G8
        },
        {
            id:9,
            imgSrc: G9
        },
        {
            id:10,
            imgSrc: G10
        },
        
     
    ]
    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempimgSrc] = useState('')
    const getImg = (imgSrc) =>{
        setTempimgSrc(imgSrc);
        setModel(true);

    }
    return (
        <>
        <div className={model ? "model open" : "model"}>
            <img src={tempimgSrc} />
            <ClearIcon onClick={()=> setModel(false)} />
            
        </div>
        <div className='gallery'>
            {data.map((item, index)=>{
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width:'100%'}}/>
                    </div>
                )
            })}

        </div>
        
        </>
    )
}
export default Gallery
