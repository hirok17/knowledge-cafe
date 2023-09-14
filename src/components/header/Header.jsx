import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='container mx-auto flex flex-col gap-3 lg:flex-row justify-between items-center border-b mt-6 px-3'>
               <h1 className="text-4xl font-bold text-[#111]">Knowledge Cafe</h1>
               <img src={profile} alt="" />
        </div>
    );
};

export default Header;