import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: 'Customer Churn Prediction Model',
      description: 'Built a machine learning model to predict customer churn with 92% accuracy using Random Forest and XGBoost. Deployed on AWS and integrated with company CRM system.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU4ODE5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Python', 'Scikit-learn', 'AWS', 'SQL'],
      link: '#',
      github: '#',
    },
    {
      title: 'Real-Time Sales Analytics Dashboard',
      description: 'Developed an interactive dashboard using Tableau and Python to visualize sales metrics in real-time, enabling data-driven decisions for leadership team.',
      image: 'https://images.unsplash.com/photo-1737703638422-2cfa152cdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzY1OTk1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Tableau', 'Python', 'PostgreSQL', 'ETL'],
      link: '#',
      github: '#',
    },
    {
      title: 'NLP Sentiment Analysis Pipeline',
      description: 'Created an end-to-end sentiment analysis system for social media data using transformers and BERT, processing over 1M tweets daily.',
      image: 'https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHB5dGhvbiUyMGNvZGV8ZW58MXx8fHwxNzY1OTk1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['NLP', 'PyTorch', 'BERT', 'Docker'],
      link: '#',
      github: '#',
    },
    {
      title: 'Financial Forecasting System',
      description: 'Implemented time series forecasting models (ARIMA, Prophet, LSTM) to predict quarterly revenue with high accuracy, reducing forecast error by 35%.',
      image: 'https://images.unsplash.com/photo-1706894075115-f140b40493cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludGVsbGlnZW5jZSUyMHJlcG9ydHxlbnwxfHx8fDE3NjU5OTU1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Time Series', 'Prophet', 'LSTM', 'R'],
      link: '#',
      github: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of recent data analysis and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
