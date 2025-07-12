import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, phone, address } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hash, phone, address });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'User already exists' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, user });
};

export const getUsers = async (req, res) => {
  const { search, filter } = req.query;
  let query = {};
  if (search) {
    query.name = { $regex: search, $options: 'i' };
  }
  if (filter) {
    query.address = { $regex: filter, $options: 'i' };
  }
  const users = await User.find(query).select('-password');
  res.json(users);
};
