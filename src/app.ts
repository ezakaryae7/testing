import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 3001;

// MySQL connection pool
const pool = mysql.createConnection({
  host: "auth-db1427.hstgr.io",
  user: "u365232941_esystemsma",
  password: "99Redzonek1ng",
  database: "u365232941_testdb",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res, next) => {
  pool.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return next(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
