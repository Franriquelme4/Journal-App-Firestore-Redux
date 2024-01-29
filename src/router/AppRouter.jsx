import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRouter } from '../auth/routes/AuthRouter'
import { JournalRoute } from '../journal/routes/JournalRoute'


export const AppRouter = () => {
  return (
    <Routes>

      {/* {Login y registro} */}
      <Route path='/auth/*' element={<AuthRouter />} />
      {/* Journal app  */}
      <Route path='/*' element={<JournalRoute />} />

    </Routes>
  )
}
