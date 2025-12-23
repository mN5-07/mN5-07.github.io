import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { BarChart3, Database, Code, Brain, TrendingUp, FileSpreadsheet } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'R', 'SQL', 'Julia', 'Scala'],
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      skills: ['PostgreSQL', 'MongoDB', 'Apache Spark', 'Airflow', 'ETL Pipelines'],
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost', 'Neural Networks'],
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      skills: ['Tableau', 'Power BI', 'Matplotlib', 'Plotly', 'D3.js'],
      color: 'bg-orange-100 text-orange-700',
    },
    {
      icon: TrendingUp,
      title: 'Statistical Analysis',
      skills: ['Hypothesis Testing', 'Regression', 'Time Series', 'A/B Testing', 'Bayesian Methods'],
      color: 'bg-red-100 text-red-700',
    },
    {
      icon: FileSpreadsheet,
      title: 'Tools & Platforms',
      skills: ['Jupyter', 'Git', 'Docker', 'AWS', 'Google Cloud'],
      color: 'bg-teal-100 text-teal-700',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for end-to-end data analysis and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
