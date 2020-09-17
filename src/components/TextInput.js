import React from 'react'

const TextInput = ({ value, setInput }) => {
    return (
        <>
            <input value={value} onChange={(e) => setInput(e.target.value)} />
        </>
    )
}

export default TextInput
