import Blog from "@/components/blog/page";

export const metadata = {
  title: "Ritam Legal Blog - Insights and Expertise in Legal Practice",
  description:
    "Explore Ritam Legal's blog for the latest updates, insights, and expert commentary on legal practices, industry trends, and emerging legal challenges across diverse domains.",
  keywords:
    "Ritam Legal blog, legal insights, industry trends, legal commentary, Infrastructure Advisory, Energy Law, Dispute Resolution, Renewable Energy, Telecommunication Law, Competition Law, Consumer Protection, Commercial Litigation, Intellectual Property, Banking Laws, Mining Laws, Labour Laws",
  alternates: {
    canonical: "https://ritamlegal.com/blog-articles/blogs",
  },
};

export default function Page() {
  return <Blog />;
}
