import React, { useState } from "react";
import {TState as Props} from "../App";

interface IProps {
    handleSet: React.Dispatch<React.SetStateAction<Props["todos"]>>;
    todos: Props["todos"]
}

const AddTodoList: React.FC<IProps>  = ({ todos, handleSet}) => {

    const [values, setValues] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(
            !values.name ||
            !values.age ||
            !values.url
        ) {
            alert("error 400")
            return
        }
        handleSet([
            ...todos,
            {
                name: values.name,
                age: parseInt(values.age),
                url: values.url,
                note: values.note
            }
        ])

        setValues({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="add-form">
            <input 
                type="text"
                className="add-form__input"
                onChange={handleChange}
                name="name"
                value={values.name}
                placeholder="name"
            />
            <input 
                type="number"
                className="add-form__input"
                onChange={handleChange}
                name="age"
                value={values.age}
                placeholder="age"
            />
            <input 
                type="text"
                className="add-form__input"
                onChange={handleChange}
                name="url"
                value={values.url}
                placeholder="image url"
            />
            <textarea 
                className="add-form__input"
                onChange={handleChange}
                name="note"
                value={values.note}
                placeholder="note"
            />
            <button className="button" onClick={handleClick}>
                ADD TODO
            </button>
        </div>
    )
}

export default AddTodoList;