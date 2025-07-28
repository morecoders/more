'use client'

import { useActionState } from 'react'
import Click from '../ui/link'
import { onSubmitSignIn } from '@/utils/signin'
import SocialButtons from './socials'


const initialState = {
  user: null,
  error: null,
  success: false,
}

export default function LoginForm() {

  const [state, dispatch, pending] = useActionState(onSubmitSignIn, initialState)

  return (

    <>
      <SocialButtons />
      <form action={dispatch} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow my-16">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          type='email'
          name="email"
          placeholder="Email Address"
          className="w-full px-3 py-2 border rounded"
        // required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border rounded"
        // required
        />

        <button
          type="submit"
          disabled={pending}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {pending ? 'Logging in...' : 'Login'}
        </button>

        {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
        {state.success && state.user && (
          <div className="mt-4 p-4 border rounded bg-green-50">
            {/* <p><strong>Welcome,</strong> {state.user.firstName} {state.user.lastName}!</p>
          <p><strong>Occupation:</strong> {state.user.occupation}</p>
          <p><strong>Age:</strong> {state.user.age}</p> */}
          </div>
        )}

        <div className="text-sm text-center mt-4">
          Don't have an account?{' '}
          <Click text='Sign Up' route='v1/signup' />
        </div>

      </form>
    </>
  )
}
