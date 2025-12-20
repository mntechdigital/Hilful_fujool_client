import React from 'react';
import HeroSection from '../_components/HeroSection';
import BlogHeader from './_components/BlogHeader';
import BlogSection from './_components/BlogSection';

const BlogPage = () => {
    return (
        <div>
            <HeroSection title="Blog" subtitle="Blog" />
            <BlogHeader/>
            <BlogSection/>
        </div>
    );
};

export default BlogPage;