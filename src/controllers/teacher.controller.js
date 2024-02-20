import { pool } from "../db.js";

export const getTeachers = async(req,res) => {
  const [rows] = await pool.query('SELECT * FROM teacher');
  res.send(rows);
};

export const getTeacher = async(req,res) => {
  console.log(req.params.id)
  const [rows] = await pool.query('SELECT * FROM teacher WHERE id = ?',[req.params.id]);

  if(rows.length <= 0) return res.status(404).json({
    message: 'Teacher not found'
  });

  res.send(rows[0]);
};

export const addTeacher = async(req,res) => {
  const {name,salary} = req.body;
  const [rows] = await pool.query('INSERT INTO teacher (name,salary) VALUES (?,?)' ,[name,salary]);
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const updateTeacher = async(req,res) => {
  const {name,salary} = req.body;
  const id = req.params.id;
  const [result] = await pool.query('UPDATE teacher SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name,salary,id]);
  console.log(id)
  if(result.affectedRows === 0) return res.status(404).json({
   message: 'Teacher not found'
  });

  const [rows] = await pool.query('SELECT * FROM teacher WHERE id = ?',[id]);

  res.json(rows[0]);
};

export const deleteTeacher = async(req,res) => {
  const [result] = await pool.query('DELETE FROM teacher WHERE id = ?',[req.params.id]);

  if(result.affectedRows <= 0) return res.status(404).json({
    message: 'Teacher not found'
  });
  res.sendStatus(204);
};