import React from 'react'

export default function NewSkillForm() {
    return (
        <>
            <form action="" className="NewSkillForm">
                <label htmlFor="">Skill</label>
                <input className='newskillformbtn'></input>
                <label>Level</label>
                <select className='newskillformselect'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button>ADD SKILL</button>
            </form>
        </>
    );
}