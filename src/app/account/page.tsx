'use client'
import { useState, useEffect } from 'react'
import { auth, db } from '@/../lib/firebase'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export default function AccountPage() {
  const [user, setUser] = useState<any>(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  // Récupérer l'utilisateur actuel et ses informations de compte
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/account/login')  // Redirige si non connecté
      } else {
        setUser(user)
        // Charger les données de l'utilisateur depuis Firestore
        const userDocRef = doc(db, 'users', user.uid)
        getDoc(userDocRef).then((docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data()
            setFirstName(userData.firstName || '')
            setLastName(userData.lastName || '')
            setAddress(userData.address || '')
            setCity(userData.city || '')
            setPostalCode(userData.postalCode || '')
          }
        })
      }
    })
    return () => unsubscribe()
  }, [router])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    if (name === 'firstName') setFirstName(value)
    if (name === 'lastName') setLastName(value)
    if (name === 'address') setAddress(value)
    if (name === 'city') setCity(value)
    if (name === 'postalCode') setPostalCode(value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      // Mettre à jour les données de l'utilisateur dans Firestore
      if (user) {
        await setDoc(
          doc(db, 'users', user.uid),
          { firstName, lastName, address, city, postalCode },
          { merge: true } // Merge pour garder les autres données intactes
        )
        alert('Les informations ont été sauvegardées avec succès !')
      }
    } catch (error) {
      setError('Erreur lors de la sauvegarde des informations. Veuillez réessayer.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-20 px-6">
      {user ? (
        <>
          <h1 className="text-3xl font-semibold mb-6 text-center">Mon Compte</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Entrez votre prénom"
                value={firstName}
                onChange={handleInputChange}
                className="w-full mt-1 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom de famille</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Entrez votre nom de famille"
                value={lastName}
                onChange={handleInputChange}
                className="w-full mt-1 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adresse</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Entrez votre adresse"
                value={address}
                onChange={handleInputChange}
                className="w-full mt-1 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ville</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Entrez votre ville"
                value={city}
                onChange={handleInputChange}
                className="w-full mt-1 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Code Postal</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="Entrez votre code postal"
                value={postalCode}
                onChange={handleInputChange}
                className="w-full mt-1 bg-gray-200 text-gray-800 placeholder-gray-500 text-sm px-4 py-2 rounded-md focus:outline-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
            >
              Sauvegarder les informations
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-lg font-medium">Informations de compte</h2>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Nom :</strong> {firstName} {lastName}</p>
            <p><strong>Adresse :</strong> {address}</p>
            <p><strong>Ville :</strong> {city}</p>
            <p><strong>Code Postal :</strong> {postalCode}</p>
          </div>
        </>
      ) : (
        <p>Chargement des informations...</p>
      )}
    </div>
  )
}
