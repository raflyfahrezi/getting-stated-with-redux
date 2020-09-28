/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useState } from 'react'
import Link from 'next/link'

import AddUser from '../config/Redux/ADD_DATA'
import Store from '../config/Redux/Store'

const add = () => {
    const [ user, setUser ] = useState('')

    const FormHandler = e => {
        e.preventDefault()

        Store.dispatch(AddUser(user))

        setUser('')
        alert('Data added')
    }

    const InputHandler = e => {
        const Element = e.target

        setUser(Element.value)
    }

    return (
        <div>
            <form onSubmit={ FormHandler }>
                <input type='text' placeholder='Username' onChange={ InputHandler }></input>
                <button type='submit'>Update</button>
            </form>
            <Link href="/">
                <a>Check User</a>
            </Link>
        </div>
    )
}

export default add
