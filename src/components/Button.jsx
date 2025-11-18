function Button({ title, onClick }){
    return (
            <button
              onClick={ onClick }
              className="bg-gray-700 hover:bg-gray-600 active:bg-gray-500 transition p-4 text-xl rounded-lg text-white"
            >
              {title}
            </button>
    )
}

export default Button;