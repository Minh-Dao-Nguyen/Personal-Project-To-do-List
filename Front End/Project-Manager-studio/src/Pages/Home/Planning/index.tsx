import StatusBox from "./statusBox";

type Props = {}

const Planning = (props: Props) => {
  const weekText = "text-2xl text-left text-white";
  const flexBetween = "flex items-center justify-center justify-between";

  return (
    <div className={`h-full bg-primary-gray p-20`}>
      <div className={`${weekText}`}>
          Week 1
      </div>
      <div className={`${flexBetween} h-full`}>
        <StatusBox status="Todo"/>
        <StatusBox status="In Progress"/>
        <StatusBox status="Complete"/>
      </div>
    </div>
  )
}

export default Planning;