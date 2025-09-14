
import { Router } from 'express';
import BlogController from './controller';
import auth from '../../../middleware/auth';
import authorizeRoles from '../../../middleware/role';

const router = Router();

router.post('/', auth, authorizeRoles('admin', 'blogger'), BlogController.create);
router.get('/', auth, authorizeRoles('admin', 'blogger'), BlogController.getAll);
router.get('/:postId', auth, authorizeRoles('admin', 'blogger'), BlogController.getById);
router.patch('/:postId', auth, authorizeRoles('admin', 'blogger'), BlogController.updateById);
router.delete('/:postId', auth, authorizeRoles('admin', 'blogger'), BlogController.deleteById);

export default router;
