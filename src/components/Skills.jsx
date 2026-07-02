import './Skills.css'
    
     const skillsData = [
      { id: 1, name: 'Color Theory',    icon: '🎨', level: 90, category: 'Design' },
      { id: 2, name: 'Prototyping',     icon: '🔁',level: 45, category: 'Design' },
      { id: 3, name: 'JavaScript',      icon: '⚡', level: 60, category: 'vediography' },
      { id: 4, name: 'React Native',    icon: '⚛️', level: 75, category: 'vediography' },
      { id: 5, name: 'Wireframing',     icon: '✏️', level: 65, category: 'Design'  },
      { id: 6, name: 'API integration', icon: '🔗', level: 60, category: 'vediographer'   },
      { id: 7, name: 'UI/UX',           icon: '🎭', level: 70, category: 'Design'  },
      { id: 8, name: 'Figma',         icon: '💙', level: 55, category: 'vediographer' },
    ]
    
    function SkillCard({ name, icon, level, category }) {
      return (
        <div className="skill-card">
          <div className="skill-card__header">
            <span className="skill-card__icon">{icon}</span>
            <div>
              <h3 className="skill-card__name">{name}</h3>
              <span className="skill-card__category">{category}</span>
            </div>
          </div>
          <div className="skill-card__bar-container">
            <div className="skill-card__bar" style={{ width: `${level}%` }}></div>
          </div>
          <p className="skill-card__level">{level}%</p>
        </div>
      )
    }
    
    function Skills() {
      return (
        <section id="skills" className="skills">
          <div className="section-container">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Skills I'm developing as a UI/UX Designer</p>
            <div className="skills__grid">
              {skillsData.map((skill) => (
                <SkillCard
                  key={skill.id}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
        </section>
      )
    }
    export default Skills
