import {Router} from 'express'
import { toDoCreate, getTodos, updateTodo, deleteTodo } from '../controllers/toDoController'

const router = Router()

router.post('/', toDoCreate)
router.get('/', getTodos);

router.patch('/:id', updateTodo);

router.delete('/:id', deleteTodo);

export default router