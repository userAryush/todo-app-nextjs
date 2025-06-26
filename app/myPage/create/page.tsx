import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (

      <main className="container py-5">
        <h1 className="mb-4">Create Task</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="taskInput" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="taskInput"
              placeholder="Enter your task"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="statusSelect" className="form-label">
              Status
            </label>
            <select
              className="form-select"
              id="statusSelect"
              required
            >
              <option value="Pending">Pending</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">
            Add Task
          </button>
        </form>
      </main>
    
  );
}
