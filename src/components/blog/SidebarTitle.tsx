
const SidebarTitle = ({title}:{title: string}) => {
    return (
        <div>
             <h3 className='text-[24px] text-black font-bold border-l-4 pl-2 rounded-tr-md border-green-600'>
                {title}
             </h3>
        </div>
    );
};

export default SidebarTitle;