import { Mail, MapPin, Clock, Briefcase, Book, Code } from 'lucide-react';

export default function Information() {
    return (
        <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                {/* Work Experience - Card Style */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
                        <Briefcase size={20} className="text-blue-400" /> Work Experience
                    </h3>
                    <div className="space-y-5">
                        <div className="border-l-2 border-blue-400/50 pl-4">
                            <div className='flex flex-wrap gap-2 items-baseline mb-1'>
                                <h4 className="font-semibold text-gray-100">Swimming Instructor & Floor Manager</h4>
                                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">2016 — 2024</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">Managed groups, coordinated colleagues, and communicated progress with parents.</p>
                        </div>

                        <div className="border-l-2 border-blue-400/50 pl-4">
                            <div className='flex flex-wrap gap-2 items-baseline mb-1'>
                                <h4 className="font-semibold text-gray-100">Warehouse Associate — Albert Heijn</h4>
                                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">Jul 2024 — Dec 2024</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">Fulfilled warehouse tasks, collaborated with team members and solved operational problems.</p>
                        </div>

                        <div className="border-l-2 border-green-400/50 pl-4">
                            <div className='flex flex-wrap gap-2 items-baseline mb-1'>
                                <h4 className="font-semibold text-gray-100">Warehouse Associate — HEMA EDC</h4>
                                <span className="text-xs text-green-400 bg-green-900/30 px-2 py-0.5 rounded font-medium">Present</span>
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">Working on picking, packing and inventory while supporting team workflows.</p>
                        </div>
                    </div>
                </div>

                {/* Skills & Education - Card Style */}
                <div className='flex flex-col gap-6'>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
                        <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
                            <Code size={20} className="text-purple-400" /> Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['JavaScript', 'React', 'C/C++', 'Python', 'Django', 'Flask', 'Laravel', 'Node.js', 'HTML', 'CSS', 'Tailwind', 'MySQL', 'IoT'].map(s => (
                                <span
                                    key={s}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-700/70 hover:bg-gray-600/70 text-xs font-medium rounded-md border border-gray-600/50 hover:border-purple-400/50 transition-all cursor-default"
                                >
                                    <Code size={12} className="text-purple-300" /> {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
                        <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
                            <Book size={20} className="text-green-400" /> Education
                        </h3>
                        <ul className="space-y-2.5 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>Harvard CS50 - <a href="https://cs50.harvard.edu/" className="text-blue-400 hover:underline">Course Link</a></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>Software Development — ROC Midden Nederland (MBO Utrecht)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>FABLAB course — Cotteds Suriname (2023)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>MySQL (NHA) — completed</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 mt-1">•</span>
                                <span>Electrical & ICT studies — MBO-NATIN Suriname</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}