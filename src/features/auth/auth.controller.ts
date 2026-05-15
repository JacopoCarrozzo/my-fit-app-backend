// src/features/auth/auth.controller.ts
import { Request, Response } from 'express'
import { registerUser, loginUser } from './auth.service'
import { getUserProfile } from './auth.service'
import { AuthRequest } from '../../middleware/auth.middleware'

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body)
    res.status(201).json({ success: true, data: user })
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const result = await loginUser(req.body)
    res.status(200).json({ success: true, data: result })
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message })
  }
}

export const profile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await getUserProfile(req.user!.userId)
    res.status(200).json({ success: true, data: user })
  } catch (error: any) {
    res.status(404).json({ success: false, message: error.message })
  }
}