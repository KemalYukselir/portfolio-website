import React from 'react';

const SkillSection = ({ skillsetTitle, skills }) => {
  const renderedSkills = [];
  for (let i = 0; i < skills.length; i += 2) {
    renderedSkills.push(
      <p key={i}>
        {skills[i]} {/* Display the skill at the current index */}
        {skills[i + 1]} {/* Display the skill at the next index */}
      </p>
    );
  }

  return (
    <div className='skills-container'>
      <div className='skills-section'>
        <h2>{skillsetTitle}</h2>
        <div className='language-logos-container'>
          {renderedSkills}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

