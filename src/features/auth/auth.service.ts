import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from './auth.model'
import { RegisterBody, LoginBody, JwtPayload } from './auth.types'

export const registerUser = async (body: RegisterBody) => {
  const { name, email, password } = body

  const existingUser = await User.findOne({ email })
  if (existingUser) throw new Error('Email already in use')

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  return { id: user._id, name: user.name, email: user.email }
}

export const loginUser = async (body: LoginBody) => {
  const { email, password } = body

  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid credentials')

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error('Invalid credentials')

  const payload: JwtPayload = { userId: user._id.toString(), email: user.email }
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '7d' })

  return { token, user: { id: user._id, name: user.name, email: user.email } }
}

export const getUserProfile = async (userId: string) => {
  const user = await User.findById(userId)
  if (!user) throw new Error('User not found')
  return { id: user._id, name: user.name, email: user.email }
}