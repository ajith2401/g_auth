import React from 'react'
import { useAuth } from './AuthContex';

const Home = () => {
    const { currentUser, isUserLoggedIn, loading: authLoading } = useAuth(); // Access auth context
  return (
    <div>
      Hello {currentUser.displayName}
    </div>
  )
}

export default Home
