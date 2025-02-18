"use client"
import { useState } from "react";

export default function UserPage() {
  const [tasks, setTasks] = useState([
    { id: 1, userId: "1", title: "Task One", description: "Description One", status: "Pending", document: "" },
    { id: 2, userId: "1", title: "Task Two", description: "Description Two", status: "Pending", document: "" },
  ]);
  const [userId, setUserId] = useState("1");

  const handleUpload = (taskId, file) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, document: file.name } : task));
  };

  const handleUpdateStatus = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status: "Completed" } : task));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Assigned Tasks</h2>
        <ul className="space-y-4">
          {tasks.filter(task => task.userId === userId).map(task => (
            <li key={task.id} className="p-4 bg-gray-200 rounded-md">
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-700">{task.description}</p>
              <p className="text-sm text-gray-500">Status: {task.status}</p>
              <input
                type="file"
                className="mt-2 w-full p-1 border border-gray-300 rounded-lg"
                onChange={(e) => handleUpload(task.id, e.target.files[0])}
              />
              {task.document && <p className="text-sm text-green-500">Uploaded: {task.document}</p>}
              <button
                onClick={() => handleUpdateStatus(task.id)}
                className="mt-2 bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600"
              >
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}