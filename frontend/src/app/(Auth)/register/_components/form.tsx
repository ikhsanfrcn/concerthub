'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register with in:', formData)
  }

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-6 py-12">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>

          <div className="text-right text-sm text-gray-500">
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-500 font-semibold py-3 rounded-xl cursor-not-allowed"
            disabled
          >
            Login
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center gap-2 py-3 rounded-xl hover:bg-gray-100"
          >
            <img src="https://w7.pngwing.com/pngs/869/485/png-transparent-google-logo-computer-icons-google-text-logo-google-logo.png" alt="Google" className="h-5 w-5" />
            Continue with Google
          </button>

          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link href="/login" className="text-pink-600 font-semibold hover:underline">
                Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
