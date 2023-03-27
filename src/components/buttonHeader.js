export default function ButtonHeader({ children, ...props }) {
  return (
    <button
      className='hover:bg-gray-50 hover:bg-opacity-5 px-2 py-1 rounded transition-colors duration-200 ease-in-out'
      {...props}
    >
      {children}
    </button>
  )
}
