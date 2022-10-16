import Casino from '../models/casinoModel.js';
import ApiError from '../exceptions/apiError.js';
import expressAsyncHandler from 'express-async-handler';

// @desc    Get All Casino
// @route   GET /api/casino
// @access  Public
export const getAllCasino = expressAsyncHandler(async (req, res) => {
    const allCasino = await Casino.find();
    res.json(allCasino);
});