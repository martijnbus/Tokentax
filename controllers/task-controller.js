const db = require('../db'); // Import your database connection (db)

const getTask = async (req, res) => {
  try {
    // Use a parameterized query to retrieve the task with the specified ID
    const [rows] = await db.execute('SELECT * FROM tasks WHERE id = ?', [req.params.id]);

    if (rows.length === 0) {
      return res.status(404).send('Task not found');
    }

    // If the task is found, send a success response with the task data
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
};


module.exports = {
  getTask,
};