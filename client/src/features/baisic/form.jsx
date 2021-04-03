import React from 'react'

const form = (name,src) => {
    return (
        <div>
            <label for=""></label>
           <input type="text" name={name} id="1"/> 
           <input type="url" name="link" value={src}/>
        </div>
    )
}

export default form
