
export function Card({ name, time }) {
    return (
        <div className='bg-violet-700 text-white w-[50vw] h-24 m-auto p-2 rounded-md flex justify-between items-center hover:shadow-md hover:shadow-gray-600'>
            <h1 className='font-semibold'>{ name }</h1>
            <small>{ time }</small>
        </div>
    );
}