import "./SkillListItem.css"

export default function SkillListItem({ skill, index }) {
    return (
        <li className="SkillListItem">
            {skill.name} <div className="lvl">Level: {skill.level}</div>
        </li>
    );
}