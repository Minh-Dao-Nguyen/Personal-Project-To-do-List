
type Props = {
    status: string,
}

const StatusBox = ({status}: Props) => {
    const titleText = "text-xl text-center text-white";

  return (
    <div className={` bg-secondary-gray w-1/4`}>
        <div className={`${titleText} p-4`}>
            {status}
        </div>
        <div className={`border-gray-300 border-t-2 h-96`}> 
            
        </div>
    </div>
  )
}

export default StatusBox;