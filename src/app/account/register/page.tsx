'use client'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/../lib/firebase'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleRegister = async (e: any) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/') // Rediriger vers la page d'accueil après l'enregistrement réussi
    } catch (err: any) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 px-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">Créer un compte</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
        >
          S'inscrire
        </button>
        <p className="text-sm text-center mt-4">
          Déjà un compte ?{' '}
          <a href="/account/login" className="text-blue-600 hover:underline">
            Connectez-vous ici
          </a>
        </p>
      </form>
    </div>
  )
}
