import React from 'react'
import { Outlet } from 'react-router-dom'

function LinuxIntroduction() {
    return (
        <>
            <article>
                <h2>This is an article</h2>
                <p>Some content will go here, which will be inside your article.</p>
            </article>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}

export default LinuxIntroduction