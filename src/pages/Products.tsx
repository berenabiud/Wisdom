
import { Cloud, Database, Users, Server } from 'lucide-react';

function Products() {
  const products = [
    {
      icon: <Database className="h-12 w-12 text-[#FFA916]" />,
      title: "Microsoft Dynamics 365 Office",
      description: "Comprehensive business management solution that streamlines operations and enhances productivity across your organization.",
      features: ["Integrated Office Apps", "Real-time Collaboration", "Advanced Security", "Cloud Storage"]
    },
    {
      icon: <Server className="h-12 w-12 text-[#FFA916]" />,
      title: "Dynamics 365 Business Central/NAV",
      description: "All-in-one business management solution designed for small to medium-sized businesses.",
      features: ["Financial Management", "Supply Chain", "Project Management", "Reporting & Analytics"]
    },
    {
      icon: <Users className="h-12 w-12 text-[#FFA916]" />,
      title: "Microsoft Dynamics CRM",
      description: "Customer relationship management solution that helps businesses build lasting customer relationships.",
      features: ["Lead Management", "Sales Automation", "Customer Service", "Marketing Automation"]
    },
    {
      icon: <Cloud className="h-12 w-12 text-[#FFA916]" />,
      title: "Microsoft Azure",
      description: "Cloud computing platform for building, testing, deploying, and managing applications and services.",
      features: ["Cloud Infrastructure", "AI & ML Services", "IoT Solutions", "Security & Compliance"]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#024A59] mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our comprehensive suite of business solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {product.icon}
                  <h2 className="text-2xl font-bold text-[#024A59] ml-4">{product.title}</h2>
                </div>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-2 w-2 bg-[#FFA916] rounded-full mr-2"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;