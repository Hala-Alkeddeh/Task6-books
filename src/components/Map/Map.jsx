import React from 'react'

const Map = () => {
  return (
    <iframe 
    title='Google Map'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.49873162748!2d36.28289545!3d33.50747549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2sch!4v1709987532479!5m2!1sen!2sch" 
    className='w-full h-[450px] rounded'
    allowFullScreen=''
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default Map