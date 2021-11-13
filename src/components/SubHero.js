import React from 'react'
import './CSS/SubHero.css'


const SubHero = (props) => {
    return (
        <div>
            <div className='__container d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${props.backgroundImage})`}} >
              
                
               
                
                <div className='text-styles'>
                    
                    <h1>{props.title}</h1>
                    <p>{props.caption}</p>
                   
                </div>
                    
                
            </div>
        </div>
    )
}

export default SubHero
