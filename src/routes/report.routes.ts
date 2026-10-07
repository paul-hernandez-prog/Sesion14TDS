import { Router } from 'express';
import {
  createReport,
  listReports,
  updateReport,
  deleteReport
} from '../controllers/report.controller.js';
import { authenticate } from '../middleware/authenticate.middleware.js';
import { upload } from '../middleware/upload.js';

export const reportRouter = Router();

reportRouter.get('/', authenticate, listReports);

reportRouter.post(
  '/',
  authenticate,
  upload.array('evidence', 5),
  createReport
);

// TODO 11
reportRouter.patch(
  '/:id',
  authenticate,
  updateReport
);

// TODO 14
reportRouter.delete(
  '/:id',
  authenticate,
  deleteReport
);