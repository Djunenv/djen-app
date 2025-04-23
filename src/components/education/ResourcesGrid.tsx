import React from 'react';
import { BookOpen, Video, Link, FileText } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'article' | 'video' | 'tool' | 'guide';
  category: 'carbon' | 'waste' | 'offsets' | 'general';
}

const ResourcesGrid: React.FC = () => {
  const resources: Resource[] = [
    {
      id: '1',
      title: 'Carbon Footprint Basics',
      description: 'Learn about the fundamental concepts of carbon footprints and how they are calculated.',
      link: 'https://www.conservation.org/carbon-footprint-calculator',
      type: 'article',
      category: 'carbon'
    },
    {
      id: '2',
      title: 'The Lifecycle of Waste',
      description: 'Understand what happens to your trash after it leaves your home.',
      link: 'https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling',
      type: 'article',
      category: 'waste'
    },
    {
      id: '3',
      title: 'Carbon Offsets Explained',
      description: 'A detailed video explaining how carbon offset projects work and their impact.',
      link: 'https://www.youtube.com/watch?v=MSZgoFyuHC8',
      type: 'video',
      category: 'offsets'
    },
    {
      id: '4',
      title: 'Home Composting Guide',
      description: 'Step-by-step instructions to set up your own composting system at home.',
      link: 'https://www.epa.gov/recycle/composting-home',
      type: 'guide',
      category: 'waste'
    },
    {
      id: '5',
      title: 'Recycling Symbols Decoded',
      description: 'Learn what all those recycling symbols actually mean for proper sorting.',
      link: 'https://www.earthday.org/recycling-symbols-decoded/',
      type: 'guide',
      category: 'waste'
    },
    {
      id: '6',
      title: 'Climate Change Basics',
      description: 'Understand the science behind climate change and global warming.',
      link: 'https://climate.nasa.gov/evidence/',
      type: 'article',
      category: 'general'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'article':
        return <FileText className="text-blue-500" size={24} />;
      case 'video':
        return <Video className="text-red-500" size={24} />;
      case 'tool':
        return <Link className="text-purple-500" size={24} />;
      case 'guide':
        return <BookOpen className="text-emerald-500" size={24} />;
      default:
        return <FileText className="text-gray-500" size={24} />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'carbon':
        return 'Carbon Footprint';
      case 'waste':
        return 'Waste Management';
      case 'offsets':
        return 'Carbon Offsets';
      case 'general':
        return 'General Knowledge';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'carbon':
        return 'bg-blue-100 text-blue-800';
      case 'waste':
        return 'bg-emerald-100 text-emerald-800';
      case 'offsets':
        return 'bg-amber-100 text-amber-800';
      case 'general':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-emerald-600 p-4 text-white">
        <h2 className="text-xl font-semibold flex items-center">
          <BookOpen className="mr-2" /> 
          Educational Resources
        </h2>
        <p className="text-emerald-100 mt-1">
          Learn more about sustainable practices and environmental impact
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Recommended Reading & Tools</h3>
          <p className="text-gray-600">
            Explore these curated resources to deepen your understanding of environmental issues 
            and sustainable practices.
          </p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a 
              key={resource.id}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group border rounded-lg overflow-hidden transform transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-3">
                    {getIcon(resource.type)}
                    <h4 className="font-medium text-gray-800 group-hover:text-emerald-700 transition-colors">
                      {resource.title}
                    </h4>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(resource.category)}`}>
                      {getCategoryLabel(resource.category)}
                    </span>
                    
                    <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-8 bg-emerald-50 p-4 rounded-lg">
          <h4 className="font-medium text-emerald-800 mb-2">Want to Learn More?</h4>
          <p className="text-sm text-emerald-700">
            These are just a few resources to get you started. For more personalized recommendations,
            try using the chat function to ask specific questions about environmental topics you'd like to explore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesGrid;