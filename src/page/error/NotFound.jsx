import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link
                to="/"
                className="px-6 py-3 text-white rounded-lg transition duration-200 bg-jeju-green"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;