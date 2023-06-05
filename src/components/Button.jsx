const Button = ({ label }) => {
  return (
    <button className="transition-all bg-blue-300/50 hover:bg-blue-300/75 py-2 px-4 rounded-full text-xs w-full">
      {label}
    </button>
  )
}

export default Button
