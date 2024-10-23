"use client"
import useAppState from "@/hooks/useAppState"
import { useState } from "react";

export default function About() {
    const [newPersonForm, setNewPersonForm] = useState({name: "" });
    const appState = useAppState()

    function ChangeFormField(e) {
        setNewPersonForm({
            ...newPersonForm,
            [e.currentTarget.name]: e.currentTarget.value,
        });
    }

    function submitNewPerson(e) {
        e.preventDefault();
        appState.addPerson(newPersonForm);
        setNewPersonForm({name: "", title: "" });
    }


    const peopleJsx = appState.people.map 
    (function(peep){
        return(
            <li>
                {peep.name} (<i>{peep.title}</i>)
            </li>
        )
    })

    return (
        <main>
            <h1>About</h1>

            <form onSubmit={submitNewPerson}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={newPersonForm.name} onChange={ChangeFormField} />
                </div>
                <div>
                    <label htmlFor="title">Ttile</label>
                    <input id="title" name="title" value={newPersonForm.title} onChange={ChangeFormField} />
                </div>
                <div>
                    <input type="submit" value="Add Person"/>
                </div>
            </form>
            <ul>{peopleJsx}</ul>
        </main>
    )
}