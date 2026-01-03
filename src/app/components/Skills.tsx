import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Code, Database, BarChart3, Table } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Languages',
      skills: ['Python', 'C++', 'SQL'],
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics & Visualization',
      skills: ['Power BI', 'Tableau', 'Excel', 'Jupyter', 'Seaborn', 'Matplotlib'],
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: Database,
      title: 'Databases & Cloud',
      skills: ['PostgreSQL', 'MySQL'],
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Table,
      title: 'Data Processing',
      skills: ['pandas', 'NumPy', 'SQLAlchemy', 'Excel Power Query', 'OpenRefine'],
      color: 'bg-orange-100 text-orange-700',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}