import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './Pages/Home/Home'

function App() {
  return (
    <motion.div layout>
      <AnimatePresence>
        <Home />
      </AnimatePresence>
    </motion.div>
  )
}
export default App
