import React from 'react';
import Person from './Person';

function NameList() {

    const persons = [
        {
            id: 1,
            name: "ABC",
            age: 22,
            skill: "HTML & CSS"
        },
        {
            id: 2,
            name: "DEF",
            age: 23,
            skill: "JavaScript"
        },
        {
            id: 3,
            name: "GHI",
            age: 24,
            skill: "React & Redux"
        }
    ]

    const personList = persons.map((person, index) =>
        <Person key={index} person={person} />
    )

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList


//List Rendering