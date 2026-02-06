"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Assuming Next.js for navigation
import './thankyou.css';

const ThankYouPage = () => {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        const timer = setTimeout(() => {
            router.push("/"); // Redirect to homepage after 3 seconds
        }, 3000);

        return () => {
            clearTimeout(timer);
            clearInterval(countdown);
        }; // Cleanup on unmount
    }, [router]);

    return (
        <div className="thank-you-page-container">
            <div className="thank-you-page-card">
                <h1 className="thank-you-page-heading">Thank You!</h1>
                <p className="thank-you-page-text">Your submission has been received successfully.</p>
                <p className="thank-you-page-text">Redirecting you to the homepage in {timeLeft} seconds...</p>
            </div>
        </div>
    );
};

export default ThankYouPage;
