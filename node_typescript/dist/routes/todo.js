"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const toDoController_1 = require("../controllers/toDoController");
const router = (0, express_1.Router)();
router.post('/', toDoController_1.toDoCreate);
router.get('/', toDoController_1.getTodos);
router.patch('/:id', toDoController_1.updateTodo);
router.delete('/:id', toDoController_1.deleteTodo);
exports.default = router;