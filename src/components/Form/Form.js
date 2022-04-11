import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    const [error, setError] = useState();

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value);
    }

    const statusChangeHandler = (e) => {
        setEnteredStatus(e.target.value);
    }

    const editDataHandler = (e) => {
        e.preventDefault();

        if ((enteredName.trim().length === 0)){
            setError(true);
            return;
        }
        const doggyData = {
            name: enteredName
        }
        
        console.log(enteredName);
        props.onSaveDogName(doggyData);
        
        setEnteredName('');
        setError(false);
    }

    const nameForm = props.editNameForm;
    console.log(nameForm)

    return (
        <div className='form-container'>
            <form className='edit-form' onSubmit={editDataHandler}>
                {
                    error && (
                        <p className='edit-form__error'>Field cannot be empty</p>
                    )
                }
                <h1>Edit details</h1>
                <fieldset>
                    { nameForm ? (
                        <>
                            <label htmlFor='display-name'>Enter a new display name</label>
                            <input type='text' value={enteredName} onChange={nameChangeHandler} id='display-name' placeholder='Display name' />
                        </>
                    ) : (
                        <>
                            <label htmlFor='display-status'>Enter a new status</label>
                            <textarea type='text' value={enteredStatus} onChange={statusChangeHandler} id='display-status' placeholder='Display status' />
                        </>
                    )}
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;