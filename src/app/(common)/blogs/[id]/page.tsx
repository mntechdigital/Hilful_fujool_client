
import { getBlogsById } from '@/services/blog';
import HeroSection from '../../_components/HeroSection';
import BlogDetails from './_components/BlogDetails';


interface EditBlogPageProps {
    params: { id: string };
}

const BlogDetailsPage = async ({ params }: EditBlogPageProps) => {
    const { id } = params;
    const blogDetails = await getBlogsById(id);
    const blogData = blogDetails?.data;
    return (
        <div>
            <HeroSection title="Blog Details" subtitle="Blog Details" />
            <BlogDetails key={blogDetails.id} {...blogData} />
        </div>
    );
};

export default BlogDetailsPage;