import { FaRegBookmark, FaRegEye, FaStar, FaShareAlt } from "react-icons/fa";
import PropTypes from "prop-types";

export default function NewsCard({ data }) {

    const {
        author,
        title,
        rating,
        total_view,
        thumbnail_url,
        details,
    } = data;

    return (
        <div className="max-w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex items-center p-4">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                    <h3 className="text-lg font-semibold">{author.name}</h3>
                    <p className="text-sm text-gray-500">{author.published_date}</p>
                </div>
                <div className="ml-auto flex space-x-3 text-gray-500">
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </div>

            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt="news thumbnail"
                    className="w-full object-cove rounded-md mb-3"
                />
                <p className="text-gray-700 text-sm mb-3">{details.slice(0, 250)}</p>
                <button className="text-orange-500 font-semibold">Read More</button>
            </div>

            <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <div className="flex items-center text-orange-500">
                    <FaStar className="mr-1" />
                    <span className="font-bold">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaRegEye className="mr-1" />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
}
NewsCard.propTypes = {
    data: PropTypes.object.isRequired,
}
