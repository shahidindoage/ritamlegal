import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "public/data/linkedin.js");

export async function POST(request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return new Response(JSON.stringify({ message: "URL is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Read the existing linkedin.js file
        let fileContent = fs.readFileSync(filePath, "utf8");

        // Extract the array from the file using regex
        const match = fileContent.match(/export const linkedin = (\[.*\]);/s);
        if (!match) {
            throw new Error("Invalid file format.");
        }

        // Extract only the JSON-like array part
        const jsonString = match[1];

        // Replace single quotes (if any) and correctly format it for JSON parsing
        const existingData = eval(jsonString); // Using `eval` to safely parse JavaScript array

        // Generate a new unique ID
        const newId = `post-${existingData.length + 1}`;
        const newEntry = { id: newId, url };

        // Append the new entry
        existingData.push(newEntry);

        // Convert the updated data back to JavaScript module format
        const updatedContent = `export const linkedin = ${JSON.stringify(existingData, null, 4)};`;

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent, "utf8");

        return new Response(JSON.stringify({ message: "Post saved successfully!" }), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "max-age=86400",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
        });
    } catch (error) {
        console.error("Error saving LinkedIn post:", error);

        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
