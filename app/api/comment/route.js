import { query } from '../db'; // Assuming query function is correctly set up for your DB connection

export async function POST(request) {
    const { blog_id, comment_text, name = 'Anonymous' } = await request.json(); // Get data from the request body

    if (!blog_id || !comment_text) {
        return new Response(
            JSON.stringify({ status: 'error', message: 'Blog ID and comment text are required.' }),
            {
                status: 400,
            }
        );
    }

    // Get IP address from headers (adjust as per your environment)
    const ip_address = request.headers.get('x-forwarded-for') || request.connection.remoteAddress;

    // Check if the user has already commented on the post
    const existingComment = await query({
        query: 'SELECT * FROM comments WHERE blog_id = ? AND ip_address = ?',
        values: [blog_id, ip_address],
    });

    if (existingComment.length > 0) {
        return new Response(
            JSON.stringify({ status: 'error', message: 'You have already commented on this post.' }),
            {
                status: 400,
            }
        );
    }

    // Get current timestamp and format it correctly for MySQL
    const now = new Date();
    const formattedDate = now.toISOString().slice(0, 19).replace('T', ' '); // Format: YYYY-MM-DD HH:MM:SS

    // Insert the comment into the database
    const result = await query({
        query: 'INSERT INTO comments (blog_id, name, comment_text, ip_address, created_at) VALUES (?, ?, ?, ?, ?)',
        values: [blog_id, name, comment_text, ip_address, formattedDate],
    });

    if (result.affectedRows > 0) {
        const responseBody = JSON.stringify({ status: 'success', message: 'Comment added successfully.' });

        return new Response(responseBody, {
            status: 200,
        });
    } else {
        const responseBody = JSON.stringify({ status: 'error', message: 'Failed to add comment.' });

        return new Response(responseBody, {
            status: 500,
        });
    }
}

// Handle OPTIONS request for preflight CORS (Optional)
export async function OPTIONS() {
    return new Response(null, {
        status: 200,
    });
}
