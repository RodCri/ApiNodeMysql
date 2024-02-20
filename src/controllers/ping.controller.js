import {pool} from '../db.js';

export const allTeacher = async(req,res) => {
  const [result] = await pool.query('SELECT * FROM teacher');
  res.json(result);
}