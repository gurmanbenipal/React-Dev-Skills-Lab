import React, { useState } from 'react'

const defaultSkillValue = {
    name: '',
    level: 3
}
export default function NewSkillForm({addSkill}) {
    const [formData, setFormData] = useState(defaultSkillValue);

    function handleChange(evt){
        setFormData({...formData, [evt.target.name]:
        evt.target.value})
    }
    function handleAddSkill(evt){
        evt.preventDefault()
        addSkill(formData);
        setFormData(defaultSkillValue)
    }
    return (
        <>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label htmlFor="">Skill</label>
                <input className='newskillformbtn' name='name' onChange={handleChange} value={formData.name}></input>
                <label>Level</label>
                <select className='newskillformselect'name="emotion" onChange={handleChange} value={formData.level}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button>ADD SKILL</button>
            </form>
        </>
    );
}