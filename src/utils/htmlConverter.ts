// Simple utility function
export const createHTMLMarkup = (html: string) => {
  return { __html: html };
};

// Usage in your component:
const BlogDescriptionCell = ({ html }: { html: string }) => (
  <div 
    className="line-clamp-2 prose prose-sm prose-slate max-w-xs" 
    dangerouslySetInnerHTML={createHTMLMarkup(html)} 
  />
);

// Use it anywhere else:
const OtherComponent = ({ content }: { content: string }) => (
  <div dangerouslySetInnerHTML={createHTMLMarkup(content)} />
);