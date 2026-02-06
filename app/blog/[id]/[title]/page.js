
import Blog from "@/components/blog-description/page";
import { blog } from "@/public/data/blog"; // Import the blog data
import { BASE_URL } from "@/public/data/url";

export async function generateMetadata({ params }) {
  const { id, title } = await params;

  // Fetch the blog entry by ID
  try {
    const response = await fetch(`${BASE_URL}blog/fetch_blog_by_id/${id}`);
    const result = await response.json();
    
    const blogItem = result.data; // Assuming the result has the blog data in 'data'

    if (!blogItem) {
      // Return fallback metadata if no blog found
      return {
        title: "Blog Not Found - Ritam Legal",
        description: "Explore blogs and insights from Ritam Legal.",
        keywords: "Ritam Legal blogs, insights, legal expertise",
      };
    }

    // Generate metadata based on the blog data
    return {
      title: `${blogItem.title} - Insights by ${blogItem.author}`,
      description: `${blogItem.title} - ${blogItem.subtitle}`,
      keywords: `${blogItem.title}, ${blogItem.author}, Ritam Legal blogs, legal insights, ${blogItem.subtitle}`,
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);

    // Return fallback metadata in case of error
    return {
      title: "Blog Not Found - Ritam Legal",
      description: "Explore blogs and insights from Ritam Legal.",
      keywords: "Ritam Legal blogs, insights, legal expertise",
    };
  }
}

export default async function Page({ params }) {
  const { id, title } = await params;
  return (
    <>
      <Blog id={id} title={title} />
    </>
  );
}
