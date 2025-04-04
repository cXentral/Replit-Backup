import { useState } from 'react';
import { Users, Code, Database, ArrowRight, Info, ExternalLink } from 'lucide-react';

export function LayeredArchitecture() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  const layers = [
    {
      id: 'presentation',
      name: 'Presentation Layer',
      icon: Users,
      color: 'bg-blue-100',
      hoverColor: 'hover:bg-blue-200',
      textColor: 'text-blue-800',
      description: 'Handles user interaction and display',
      examples: ['User Interface', 'API Endpoints', 'Command Line Interface']
    },
    {
      id: 'business',
      name: 'Business Logic Layer',
      icon: Code,
      color: 'bg-green-100',
      hoverColor: 'hover:bg-green-200',
      textColor: 'text-green-800',
      description: 'Processes business rules and workflow logic',
      examples: ['Validation Rules', 'Calculations', 'Workflow Processing']
    },
    {
      id: 'data',
      name: 'Data Layer',
      icon: Database,
      color: 'bg-purple-100',
      hoverColor: 'hover:bg-purple-200',
      textColor: 'text-purple-800',
      description: 'Manages data storage and retrieval',
      examples: ['Database Operations', 'File Storage', 'Caching']
    }
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-4 text-center">Understanding Our Architecture</h2>
            <p className="text-muted-foreground text-center mb-8">
              Click on each layer to learn more about its role and responsibilities.
            </p>
          </div>

          <div className="space-y-4">
            {layers.map((layer) => {
              const IconComponent = layer.icon;
              return (
                <div key={layer.id}>
                  <div 
                    className={`p-4 rounded-lg ${layer.color} ${layer.hoverColor} cursor-pointer 
                      transition-all duration-300 ${activeLayer === layer.id ? 'shadow-lg' : ''}`}
                    onClick={() => setActiveLayer(activeLayer === layer.id ? null : layer.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-6 h-6 ${layer.textColor}`} />
                        <h3 className={`font-semibold ${layer.textColor}`}>{layer.name}</h3>
                      </div>
                      <Info className={`w-5 h-5 ${layer.textColor}`} />
                    </div>

                    {activeLayer === layer.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-gray-700 mb-3">{layer.description}</p>
                        <div className="bg-white rounded-lg p-3">
                          <h4 className="font-medium mb-2">Common Examples:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {layer.examples.map((example, index) => (
                              <li key={index} className="text-gray-600">{example}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg font-medium 
                              hover:from-indigo-700 hover:to-blue-600 transform hover:-translate-y-0.5 transition-all duration-200
                              shadow-lg hover:shadow-xl flex items-center gap-2">
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium
                              hover:bg-indigo-50 transform hover:-translate-y-0.5 transition-all duration-200
                              focus:ring-2 focus:ring-indigo-200 flex items-center gap-2">
                              View Examples
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {layer.id !== 'data' && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className="text-gray-400 w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium mb-2">Key Benefits:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Separation of Concerns: Each layer has a specific responsibility</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Maintainability: Easier to update or fix specific components</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Scalability: Can enhance specific layers as needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
