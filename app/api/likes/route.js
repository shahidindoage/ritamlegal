// pages/api/blog/post_like.js
import { query } from '../db'; // Assuming query function is correctly set up for your DB connection

export async function POST(request) {
    const { blog_id } = await request.json(); // Get blog_id from the request body

    if (!blog_id) {
        return new Response(
            JSON.stringify({ status: 'error', message: 'Blog ID is required.' }),
            {
                status: 400,
            }
        );
    }

    // Get current timestamp and format it correctly for MySQL
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS

    // Insert the like into the database (no ip_address involved)
    const result = await query({
        query: 'INSERT INTO likes (blog_id, created_at) VALUES (?, ?)',
        values: [blog_id, formattedDate],
    });

    if (result.affectedRows > 0) {
        const responseBody = JSON.stringify({ status: 'success', message: 'Like added successfully.' });

        return new Response(responseBody, {
            status: 200,
        });
    } else {
        const responseBody = JSON.stringify({ status: 'error', message: 'Failed to add like.' });

        return new Response(responseBody, {
            status: 500,
        });
    }
}

// Handle OPTIONS request for preflight CORS
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
    });
}
