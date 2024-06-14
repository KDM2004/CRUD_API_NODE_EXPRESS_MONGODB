import express from 'express';
const router = express.Router();

import { createUser, getUsers, getUser, updateUser, deleteUser} from '../controllers/users.js';



router.get('/:id', getUser);

router.get('/', getUsers);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;

