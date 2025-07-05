/* eslint-disable react/jsx-props-no-spreading */

import { Route, Routes } from 'react-router-dom'

import { Activities } from './routes/Activities/Activities'
import { Contacts } from './routes/Contacts/Contacts'
import { Home } from './routes/Home/Home'
import { NotFound404 } from './routes/NotFound404/NotFound404'
import { Room } from './routes/Room/Room'
import { Rooms } from './routes/Rooms/Rooms'
import { locations } from './utils/locations'

const App = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={locations.rooms}>
      <Route path=":roomId" element={<Room />} />
      <Route index element={<Rooms />} />
    </Route>
    <Route path={locations.contacts} element={<Contacts />} />
    <Route path={locations.activities} element={<Activities />} />
    <Route path="*" element={<NotFound404 />} />
  </Routes>
)

export default App
