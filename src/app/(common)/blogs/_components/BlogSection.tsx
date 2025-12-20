import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render multiple BlogCard components */}
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    );
};

export default BlogSection;