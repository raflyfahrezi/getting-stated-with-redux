/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

import User from '../config/Redux/Store'

const index = () => {
    return (
        <div>
            { User.getState()['user'] === null ? (
                <p>Tidak ada user</p>
            ) : (
                <p>User saat ini adalah { User.getState()['user'] }</p>
            )}
            <Link href="/add">
                <a>Add user</a>
            </Link>
        </div>
    )
}

export default index
