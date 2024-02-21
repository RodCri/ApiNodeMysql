import { pool } from "../db.js";

export const getTeachers = async(req,res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM teacher');
    res.send(rows);
  } catch (error) {
    return res.status(500).json({
      message: 'Someting goes wrong'
    });
  }
};

export const getTeacher = async(req,res) => {
  try {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM teacher WHERE id = ?',[req.params.id]);
  
    if(rows.length <= 0) return res.status(404).json({
      message: 'Teacher not found'
    });
  
    res.send(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: 'Someting goes wrong'
    });
  }
};

export const addTeacher = async(req,res) => {
  try {
    const {name,salary} = req.body;
    const [rows] = await pool.query('INSERT INTO teacher (name,salary) VALUES (?,?)' ,[name,salary]);
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Someting goes wrong'
    });
  }
};

export const updateTeacher = async(req,res) => {
  const {name,salary} = req.body;
  const id = req.params.id;
  try {
    const [result] = await pool.query('UPDATE teacher SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?',[name,salary,id]);
    console.log(id)
    if(result.affectedRows === 0) return res.status(404).json({
     message: 'Teacher not found'
    });
  
    const [rows] = await pool.query('SELECT * FROM teacher WHERE id = ?',[id]);
  
    res.json(rows[0]);
    
  } catch (error) {
    res.status(500).json({
      message: 'Someting goes wrong'
    })
  }
};

export const deleteTeacher = async(req,res) => {
  try {
    const [result] = await pool.query('DELETE FROM teacher WHERE id = ?',[req.params.id]);
  
    if(result.affectedRows <= 0) return res.status(404).json({
      message: 'Teacher not found'
    });
    res.sendStatus(204);
    
  } catch (error) {
    res.status(500).json({
      message: 'Someting goes wrong'
    })
  }
};