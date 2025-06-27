import { useMemo, useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Footer from './components/Footer'
import ProjectTimeline from './components/ProjectTimeline';
import { projects as allProjects } from './data/projects';
import './index.css';

function App() {
    const sortedProjects = useMemo(() =>
        [...allProjects].sort((a, b) => b.year - a.year), []);

    const allTags = useMemo(() =>
        Array.from(new Set(allProjects.flatMap(p => p.tags))), []);

    const [selectedTags, setSelectedTags] = useState([]);

    const filteredProjects = useMemo(() => {
        if (selectedTags.length === 0) return sortedProjects;
        return sortedProjects.filter(p =>
            p.tags.some(tag => selectedTags.includes(tag))
        );
    }, [selectedTags, sortedProjects]);

    const toggleTag = tag => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const clearTags = () => setSelectedTags([]);

    return (
        <div className="max-w-2xl mx-auto px-4 py-8 text-gray-900 dark:text-gray-100">
            <Header />
            <FilterBar
                tags={allTags}
                selectedTags={selectedTags}
                toggleTag={toggleTag}
                clearTags={clearTags}
            />
            <ProjectTimeline projects={filteredProjects} />
            <Footer />
        </div>
    );
}

export default App;
