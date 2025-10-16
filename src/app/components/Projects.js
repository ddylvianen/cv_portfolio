'use client';

import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchGitHubProjects() {
            try {
                const response = await fetch('https://api.github.com/users/ddylvianen/repos?sort=updated&per_page=6');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                
                const data = await response.json();
                
                // Filter out forks and sort by stars
                const filteredProjects = data
                    .filter(repo => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                
                setProjects(filteredProjects);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchGitHubProjects();
    }, []);

    if (loading) {
        return (
            <div className="w-full h-full px-6 py-16 flex items-center justify-center">
                <div className="text-gray-400">Loading projects...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full h-full px-6 py-16 flex items-center justify-center">
                <div className="text-red-400">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="w-full h-full px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold flex items-center gap-2 mb-8 text-gray-100">
                    <Github size={24} className="text-blue-400" /> My Projects
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-gray-100 truncate flex-1">
                                    {project.name}
                                </h3>
                                <a
                                    href={project.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition-colors"
                                    aria-label={`View ${project.name} on GitHub`}
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                            
                            <p className="text-sm text-gray-400 mb-4 line-clamp-3 min-h-[3rem]">
                                {project.description || 'No description available'}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                {project.language && (
                                    <span className="flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                        {project.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Star size={14} />
                                    {project.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GitFork size={14} />
                                    {project.forks_count}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {projects.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                        No projects found
                    </div>
                )}
                
                <div className="mt-8 text-center">
                    <a
                        href="https://github.com/ddylvianen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-100 rounded-lg transition-colors border border-gray-700 hover:border-blue-400/50"
                    >
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}