"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  // Initial task state
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn React", status: "Pending" },
    { id: 2, task: "Learn Django", status: "Done" },
    { id: 3, task: "Complete final task", status: "Pending" },
  ]);

  // Toggle function for individual task
  const toggleStatus = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === "Pending" ? "Done" : "Pending" }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-info text-center">Todo List</h2>

      <div className="table-responsive w-75 mx-auto">
        <table
          className="table table-light table-hover text-center"
          aria-label="task table"
        >
          <thead className="table-light">
            <tr>
              <th>Id</th>
              <th>Task</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(({ id, task, status }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{task}</td>
                <td>
                  <button
                    className={`btn ${
                      status === "Done"
                        ? "btn-info"
                        : "btn-outline-warning"
                    }`}
                    onClick={() => toggleStatus(id)}
                  >
                    {status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-center">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => router.push("/myPage/create")}
        >
          Create Task
        </button>
      </div>
    </div>
  );
}
