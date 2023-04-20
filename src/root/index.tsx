import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
// import PrivateRoute from '../components/PrivateRoute'
import LandingPage from '../pages/LandingPage'

export const Root = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      {/* <Route
        element={
          <PrivateRoute>
            <LandingAdminPage />
          </PrivateRoute>
        }
        path="/landing"
      /> */}
      {/* <Route element={<LoginPage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupPage />} path="/signup" />
      <Route element={<RequestInfomation />} path="/request-infomation" />
      <Route
        element={
          <PrivateRoute>
            <MyProfilePage />
          </PrivateRoute>
        }
        path="/profile"
      /> */}
      {/* <Route element={<ErrorsPage status="401" />} path="/401" />
      <Route element={<ErrorsPage status="404" />} path="/404" />
      <Route path="*" element={<Navigate to="/404" />} /> */}
    </Routes>
  )
}