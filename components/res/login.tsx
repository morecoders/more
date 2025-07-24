'use client'

import { LoginUserFn } from '@/actions/load'
import {  useActionState, useEffect } from 'react'
import Click from '../ui/link'
import { useRouter } from 'next/navigation'

const initialState = {
  user: null,
  error: null,
  success: false,
}

export default function LoginForm(
  {click}:{click:Function}
)  {
  const route = useRouter()
  const [state, dispatch, isPending] = useActionState(LoginUserFn, initialState)
  useEffect(()=> {
    if(isPending) {
      route.replace('/profile')
    }
  }, [isPending])
  return (
    <form action={dispatch} className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow my-16">
      <h2 className="text-xl font-bold">Login</h2>

      <input
        name="username"
        placeholder="Username"
        className="w-full px-3 py-2 border rounded"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border rounded"
        required
      />

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {isPending ? 'Logging in...' : 'Login'}
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
        <Click text='Sign Up' click={click} />
       </div>
    </form>
  )
}
