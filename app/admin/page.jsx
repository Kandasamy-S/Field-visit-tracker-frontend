"use client";
import { useState } from "react";

export default function AdminPage() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [tasks, setTasks] = useState([]);

  const users = [
    { id: "1", name: "Mr.K" },
    { id: "2", name: "Goldenbell" },
    { id: "3", name: "JRF" },
  ];

  const handleAssignTask = () => {
    if (!taskTitle.trim() || !taskDescription.trim() || !selectedUser) return;
    setTasks([...tasks, { userId: selectedUser, userName: users.find(u => u.id === selectedUser)?.name, title: taskTitle, description: taskDescription }]);
    setTaskTitle("");
    setTaskDescription("");
    setSelectedUser("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Assign Task</h2>
        <select
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="" disabled>Select User</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          placeholder="Task Title"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button
          onClick={handleAssignTask}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Assign Task
        </button>
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-700">Assigned Tasks</h3>
          <ul className="mt-2 space-y-2">
            {tasks.map((task, index) => (
              <li key={index} className="p-2 bg-gray-200 rounded-md">
                <strong>{task.userName}</strong>: {task.title} - {task.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
