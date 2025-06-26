import React from 'react'
import Sidebar from './sideBar'
import EventPage from './EventPage'

export const DashBoardTemplate = ({onCreateClick, children, headerTitle, headerSubTitle}) => {
  return (
    <div className='main-dashboard-wrapper'>
     <Sidebar onCreateClick={onCreateClick}/>
      <main>
        <EventPage headerTitle={headerTitle} headerSubTitle={headerSubTitle}/>
        {children}
      </main>
    </div>
  )
}
