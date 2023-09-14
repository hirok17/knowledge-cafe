import PropTypes from 'prop-types';
import Bookmarklist from '../bookmarklist/Bookmarklist';

const Bookmark = ({bookmarks, readTime}) => {
    return (
       <div>
         <div className="bg-[#6047ec1c] px-12 py-6 rounded-lg border border-[#6047EC]">
            <h2 className="text-2xl font-bold text-[#6047EC]">Spent time on read :{readTime} min</h2>
        </div>
        <div className="bg-gray-300 p-8 rounded-lg mt-5">
            <h2 className="text-2xl text-[#111] font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmarklist key={idx} bookmark={bookmark}></Bookmarklist>)
            }
        </div>
       </div>
    );
};

Bookmark.propTypes ={
    bookmarks:PropTypes.object.isRequired,
    readTime:PropTypes.number,
     
}
export default Bookmark;