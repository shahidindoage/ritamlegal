import Practise from "@/components/practisearea/page";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const title = resolvedParams?.title || "";
  const id = resolvedParams?.id || "";

  // Convert slug-like title to a properly formatted title
  const formattedTitle = title
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize each word
    .trim(); // Remove unnecessary spaces

  // Define shorter descriptions for SEO optimization
  const shortTitles = {
    "infrastructure advisory and regulatory practice": "Infrastructure Advisory",
    "energy regulatory practice": "Energy Law",
    "alternate dispute resolution": "Dispute Resolution",
    "enviro-engineering and renewable energy": "Environmental & Energy Law",
    "telecommunication regulatory practice": "Telecom Law",
    "oil and gas": "Oil & Gas Law",
    "competition law and consumer protection laws": "Competition & Consumer Law",
    "commercial litigation and insolvency laws": "Litigation & Insolvency",
    "mining laws": "Mining Law",
    "criminal law": "Criminal Law",
    "policy advocacy": "Policy Advocacy",
  };

  // Use the shorter title if available, otherwise use the formatted title
  const optimizedTitle =
    shortTitles[formattedTitle.toLowerCase()] || formattedTitle;

  // Make the title shorter while keeping branding
  const dynamicTitle = `${optimizedTitle} | Ritam Legal`;

  // Match the formatted title to the descriptions (convert to lowercase for consistency)
  const descriptions = {
    "infrastructure advisory and regulatory practice":
      "Gain expert legal guidance on infrastructure projects, covering regulatory compliance, contract structuring, and project financing.",
    "energy regulatory practice":
      "Navigate complex energy regulations with Ritam Legal’s expertise in power, renewable energy, and compliance matters.",
    "alternate dispute resolution":
      "Resolve disputes efficiently through arbitration, mediation, and negotiation with our skilled legal professionals.",
    "enviro-engineering and renewable energy":
      "Ensure sustainable project development with legal advisory on environmental regulations and renewable energy laws.",
    "telecommunication regulatory practice":
      "Stay ahead in the telecom sector with legal solutions on licensing, compliance, and regulatory matters.",
    "oil and gas":
      "Expert legal services in the oil and gas industry, covering contracts, compliance, and dispute resolution.",
    "competition law and consumer protection laws":
      "Protect your business interests with Ritam Legal’s expertise in competition law, mergers, and consumer protection.",
    "commercial litigation and insolvency laws":
      "Strong legal representation in commercial disputes, contract enforcement, and corporate litigation.",
    "mining laws":
      "Expert legal advisory in mining laws, compliance, and regulatory approvals.",
    "criminal law":
      "Legal representation in criminal cases, defense strategy, and regulatory compliance.",
    "policy advocacy":
      "Strategic legal consultation on policy formation, regulatory frameworks, and government relations.",
  };

  const dynamicDescription =
    descriptions[formattedTitle.toLowerCase()] ||
    "Explore Ritam Legal's expert legal services across multiple practice areas, ensuring strategic legal solutions for diverse industries.";

  return {
    title: dynamicTitle, // Shortened title
    description: dynamicDescription,
    keywords:
      "Ritam Legal practice areas, Infrastructure Advisory, Energy Law, Dispute Resolution, Renewable Energy, Telecom Law, Oil and Gas Law, Competition Law, Consumer Protection, Litigation, Insolvency, Intellectual Property, Banking, Mining Law, Labour Law, Industrial Law",
    alternates: {
      canonical: `https://ritamlegal.com/practise-area-described/${id ? `${id}/` : ""}${title}`,
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id || "";
  const title = resolvedParams?.title || "";

  return <Practise id={id} title={title} />;
}
