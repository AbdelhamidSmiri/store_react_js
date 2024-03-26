import "./Notice.css";
const Notice = ({ count }) => {
    return (
        <>
            <div className="absolute -right-1 -top-1 rounded-full bg-red-700 min-w-4 min-h-4 flex justify-center min-h-5 min-w-5 items-center">
                <span className="font-medium text-xs text-gray-50">
                    {count}
                </span>
            </div>
        </>
    )
}

export default Notice;