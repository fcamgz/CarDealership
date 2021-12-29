import React from 'react'

export default function Form() {

    return (
        <div>
            <form>
                <input name='brand' type="text" placeholder='brand' />
                <input name='model' type="text" placeholder='model' />
                <input name='year' type="text" placeholder='year' />
                <input name='color' type="text" placeholder='color' />
                <input name='type'  type="text" placeholder='type' />
                <input name='img' type="text" placeholder='img' />
            </form>
        </div>
    )
}
