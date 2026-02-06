import { query } from "../db";

export async function POST(request) {
    const { username, password } = await request.json();
    const login = await query({
        query: `SELECT * FROM login WHERE email = ? AND password = MD5(?)`,
        values: [username, password]
    });

    if (login.length > 0) {
        // Login successful
        const responseBody = JSON.stringify({ message: "Login successfully" });

        // Set cache headers
        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'max-age=86400', // Cache response for 1 hour (adjust as needed)
            'Expires': new Date(Date.now() + 86400 * 1000).toUTCString(), // Set expiration time
            'ETag': generateETag(responseBody) // Generate ETag for response content
        };

        return new Response(responseBody, {
            status: 200,
            headers: {
                ...headers,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    } else {
        // Incorrect username or password
        const responseBody = JSON.stringify({ message: "Incorrect username or password" });

        return new Response(responseBody, {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store', // Do not cache error responses
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
}

export async function GET() {
    const blog = await query({
        query: 'SELECT * FROM login',
        values: []
    });

    // Convert the blog data to JSON string
    const responseBody = JSON.stringify(blog);

    // Set cache headers
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=86400', // Cache response for 1 day (24 hours)
        'Expires': new Date(Date.now() + 86400 * 1000).toUTCString(), // Set expiration time
        'ETag': generateETag(responseBody) // Generate ETag for response content
    };

    // Return the response with cache headers
    return new Response(responseBody, {
        status: 200,
        headers: {
            ...headers,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    });
}



// Helper function to generate ETag
function generateETag(data) {
    // Implement logic to generate unique ETag for response content
    // For example, you can use a hashing algorithm (e.g., SHA-256) to hash the response data
    return 'ETag-123'; // Example ETag value
}

