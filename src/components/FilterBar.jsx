export default function FilterBar({ tags, selectedTags, toggleTag, clearTags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`px-3 py-1 rounded-full border text-sm transition-colors
            ${selectedTags.includes(tag)
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600'}`}
        >
          {tag}
        </button>
      ))}
      {selectedTags.length > 0 && (
        <button onClick={clearTags} className="ml-auto text-sm text-red-500 underline">
          Clear all
        </button>
      )}
    </div>
  );
}
