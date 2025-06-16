import React from 'react';
interface StatCardProps {
value: string;
description: string;
className?: string;
isDark?: boolean;
}
const StatCard: React.FC<StatCardProps> = ({ value, description, className = '', isDark = false }) => {
return (
<div className={`${isDark
? 'bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 border-blue-300/50 hover:border-blue-200/50'
: 'bg-white/90 hover:bg-white border-blue-100 hover:border-blue-200'
} backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border ${className}`}>
<div className={`text-4xl md:text-5xl font-bold mb-2 ${isDark
? 'text-white'
: 'bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent'
}`}>
{value}
</div>
<div className={`text-sm md:text-base ${isDark ? 'text-blue-50' : 'text-gray-600'}`}>
{description}
</div>
</div>
 );
};
export default function ExpertiseSection() {
const stats = [
 { value: '2+', description: 'years in the game' },
 { value: '20+', description: 'projects completed' },
 { value: '$30K+', description: 'in revenue' },
 { value: '10+', description: 'technologies' },
];
return (
<section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 md:px-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Left side - Text content */}
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
<span className="text-gray-900">PROVEN </span>
<span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">EXPERTISE</span>
<span className="text-gray-900"> AND</span>
<br />
<span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">EXCEPTIONAL</span>
<span className="text-gray-900"> RESULTS</span>
</h2>
<p className="text-gray-600 text-lg leading-relaxed max-w-lg">
 Over 90% of our clients return to us! We ensure the quality of our work and are committed to your satisfaction. You're not just a customer; you're our partner in solving your challenges with tenacity.
</p>
</div>
{/* Right side - Stats grid */}
<div className="grid grid-cols-2 gap-4">
{stats.map((stat, index) => (
<StatCard
key={index}
value={stat.value}
description={stat.description}
isDark={index === 0 || index === 3} // Top-left (0) and bottom-right (3) are dark
/>
 ))}
</div>
</div>
</div>
</section>
 );
}