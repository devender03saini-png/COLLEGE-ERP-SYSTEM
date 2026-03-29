function Individualr(){

  const records = [
    {
      id: 1,
      subject: "Maths",
      teacher: "Mr. Sharma",
      date: "2026-03-20",
      time: "10:00 AM",
      status: "Present"
    },
    {
      id: 2,
      subject: "Physics",
      teacher: "Ms. Verma",
      date: "2026-03-21",
      time: "12:00 PM",
      status: "Absent"
    }
  ];

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

      {records.map((rec) => {

        const statusColor =
          rec.status === "Present" ? "text-green-600" : "text-red-500";

        return (
          <div
            key={rec.id}
            className="bg-white p-4 rounded-xl shadow"
          >
            <h2 className="text-lg font-semibold">{rec.subject}</h2>

            <p className="mt-1">Teacher: {rec.teacher}</p>
            <p>Date: {rec.date}</p>
            <p>Time: {rec.time}</p>

            <p className={`mt-2 font-bold ${statusColor}`}>
              {rec.status}
            </p>
          </div>
        );
      })}

    </div>
    )
}

export default Individualr