import LinkedIn from "@/components/linkedin_post/page";

export const metadata = {
  title: "LinkedIn Post Admin - Manage and Add Posts",
  description:
    "Admin panel for managing LinkedIn posts. Easily add, update, and organize embedded LinkedIn posts for the platform.",
  keywords:
    "LinkedIn post admin, manage LinkedIn posts, add LinkedIn embed, social media management, LinkedIn updates, LinkedIn embed admin, LinkedIn content manager",
};

export default function page() {
  return (
    <>
      <LinkedIn />
    </>
  );
}
