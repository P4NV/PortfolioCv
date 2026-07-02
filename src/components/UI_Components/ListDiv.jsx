export default function ListDiv({children}) {
    return(
        <div className='glass rounded-xl px-5 py-2'>
            <p className='font-bold text-white text-shadow-lg'>{children}</p>
        </div>
    )
}