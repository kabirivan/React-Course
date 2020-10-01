import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => {

    return(

        <section className = "functions">
            <Button text="clear" clickHandler = {onContentClear}/>
            <Button text="&larr;" clickHandler = {onDelete}/>

        </section>

    )

}

Functions.PropTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions