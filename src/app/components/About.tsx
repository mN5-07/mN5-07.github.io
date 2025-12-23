import { Heart, Target, Lightbulb } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Detail-Oriented',
      description: 'Meticulous approach to data analysis and quality',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Creative thinking to tackle complex challenges',
    },
    {
      icon: Heart,
      title: 'Passionate Learner',
      description: 'Constantly expanding knowledge and skills',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspiring data scientist with a passion for transforming data into actionable insights
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm a graduate student passionate about the power of data to drive meaningful decisions and solve real-world 
            problems. My journey into data science combines academic rigor with practical application, as I work to develop 
            the technical and analytical skills needed to excel in this field.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My background in administrative roles has given me strong organizational abilities, attention to detail, and 
            experience working with data in various forms. Now, I'm building on this foundation by mastering statistical 
            analysis, machine learning, and data visualization techniques to transition into a data-focused career where 
            I can make a lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}