import PropTypes from 'prop-types';
const Bookmarklist = ({bookmark}) => {
    return (
        <div className="bg-white text-lg font-semibold p-5 rounded-lg mt-5">
                <p>{bookmark.title}</p>
            </div>
    );
};

Bookmarklist.propTypes ={
    bookmark:PropTypes.object.isRequired,
     
}


export default Bookmarklist;