"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'United States', value: 52.1, color: '#1f2937' },
  { name: 'Canada', value: 22.8, color: '#10b981' },
  { name: 'Mexico', value: 13.9, color: '#3b82f6' },
  { name: 'Other', value: 11.2, color: '#94a3b8' },
];

const TrafficByLocation = () => {
 

  const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex flex-col space-y-2 ml-6">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-3">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-700 flex-1">{entry.value}</span>
            <span className="text-sm font-medium text-gray-900">
              {data.find(item => item.name === entry.value)?.value}%
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F9F9FA] p-6 rounded-lg shadow-sm border border-gray-200 h-full border-none">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Traffic by Location</h3>
      
      <div className="flex items-center justify-between">
        <div className="w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex-1">
          <CustomLegend payload={data.map(item => ({ value: item.name, color: item.color }))} />
        </div>
      </div>
    </div>
  );
};

export default TrafficByLocation;