import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Education() {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      institution: 'University Name',
      period: '2023 - Present',
      description: 'Focused on advanced statistical methods, machine learning algorithms, and big data technologies. Conducting research in predictive analytics and data-driven decision making.',
      coursework: [
        'Statistical Learning',
        'Machine Learning',
        'Data Mining',
        'Big Data Analytics',
        'Data Visualization',
        'Deep Learning',
      ],
      icon: GraduationCap,
    },
    {
      degree: 'Bachelor of Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Built strong analytical and quantitative foundation. Developed critical thinking and problem-solving skills essential for data analysis.',
      coursework: [
        'Statistics',
        'Calculus',
        'Linear Algebra',
        'Research Methods',
      ],
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong academic foundation in data science and analytics
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-2xl mb-1 text-gray-900">{edu.degree}</h3>
                        <p className="text-lg text-gray-700">{edu.institution}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{edu.description}</p>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="secondary">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}