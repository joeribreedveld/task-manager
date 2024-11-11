import Task from "@/components/task";

export default function TaskList() {
  return (
    <ul className="flex flex-col gap-3 sm:gap-4">
      {Array.from({ length: 5 }).map((task, index) => (
        <Task
          key={index}
          task={{
            id: 0,
            title:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, veritatis?",
            status: "Todo",
          }}
        />
      ))}
    </ul>
  );
}
