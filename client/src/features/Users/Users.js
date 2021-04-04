import React from 'react'
import Image from './features/baisic/Image';

const Users = (props) => {
    return (
        <div>
           <Image 
        src={props.src}
        size='S'/>  
        </div>
    )
}

export default Users
