import HtmlConverter from "@/utils/htmlConverter";
import Image from "next/image";

interface BlogDetailsProps {
    title: string;
    image: string;
    author: string;
    createdAt: string;
    description?: string;
}

const BlogDetails = ({
    title,
    image,
    author,
    createdAt,
    description,
}: BlogDetailsProps) => {
    return (
        <div className="bg-white rounded-2xl shadow p-6 max-w-3xl mx-auto border border-gray-100">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-[#0f3d3e] mb-4 leading-snug">
                {title}
            </h1>
            {/* Image */}
            <div className="mb-4">
                <Image
                    src={image}
                    alt="Blog visual"
                    width={800}
                    height={400}
                    className="rounded-xl w-full h-72 object-cover"
                />
            </div>
            {/* Author and Date */}
            <div className="flex items-center gap-4 mb-6 px-1 text-yellow-600 text-base font-medium">
                <span className="flex items-center gap-1">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    {author}
                </span>
                <span className="flex items-center gap-1">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm0-13H5V6h14v1z" />
                    </svg>
                    {new Date(createdAt).toLocaleDateString("en-GB")}
                </span>
            </div>
            {/* Content Sections */}
            <div className="prose max-w-none text-gray-800">
                <HtmlConverter html={description ?? ""} />
            </div>
            {/* Share Section */}
            <div className="mt-8 flex items-center gap-2">
                <span className="font-semibold text-gray-700">Share This:</span>
                <a href="#" className="text-yellow-600 hover:text-yellow-700"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-yellow-600 hover:text-yellow-700"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-yellow-600 hover:text-yellow-700"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
    );
};

export default BlogDetails;
