import React from 'react'
import Footer from './Footer'
import './About.css';

export default function About() {
  return (
    <div>
      <div className="skill_1">
        <div className='skill_Tech'>
          <h1 style={{textAlign:"center"}}>About</h1>
        </div>
        <div className='about'>
          <h1>Paris Tour</h1>
          <p>Paris, often referred to as the "City of Light," boasts a captivating history that has shaped its identity over the centuries. From its humble beginnings as a Celtic settlement to its pivotal role in the French Revolution and its current status as a global cultural hub, Paris has continually evolved.</p>
          <p>Founded over 2,000 years ago, Paris has witnessed the rise and fall of empires, monarchies, and revolutions. Its iconic landmarks, including the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral, stand as testaments to the city's enduring legacy.</p>
        </div>
        <div className='about'>
          <h1>Ireland Tour</h1>
          <p>Ireland, a land steeped in myth and legend, possesses a history as diverse and captivating as its lush landscapes. From its ancient Celtic roots to its more recent struggles for independence, Ireland's past has left an indelible mark on its culture and people.</p>
          <p>The story of Ireland unfolds through the annals of time, where legendary heroes, such as Cú Chulainn and Queen Medb, once roamed. This is a land where monastic scholars preserved knowledge during the Dark Ages and where exquisite illuminated manuscripts like the Book of Kells were crafted.</p>
        </div>
        <div className='about'>
          <h1>Salzburg & Vienna Tour</h1>
          <p><b>Salzburg: </b> Nestled against the breathtaking backdrop of the Alps, Salzburg is the birthplace of Wolfgang Amadeus Mozart and the setting for "The Sound of Music." Its baroque architecture and charming old town have preserved the essence of a bygone era, with a history dating back to Roman times.</p>
          <p><b>Vienna:</b> As the former capital of the Habsburg Empire, Vienna is a city of grandeur, art, and intellectual pursuits. It was home to musical giants like Beethoven, Mozart, and Strauss, and the historic palaces, such as Schönbrunn and Belvedere, offer a glimpse into its imperial past.</p>
        </div>
        <div className='about'>
          <h1>Rome Tour</h1>
          <p>Rome, often referred to as the "Eternal City," is a living testament to the grandeur of the past. Its history spans over 2,700 years, and it has been a witness to the rise and fall of empires, the birth of Renaissance art, and the heart of the Roman Catholic Church.</p>
          <p>Founded in 753 BC, Rome grew from a small settlement to the capital of the mighty Roman Empire, influencing the course of Western civilization. Its iconic landmarks, including the Colosseum, Roman Forum, and Pantheon, stand as enduring symbols of its legacy.</p>
        </div>
        <div className='about'>
          <h1>Poland Tour</h1>
          <p>Poland, a nation with a storied past, has played a vital role in the tapestry of Europe's history. From its medieval origins through centuries of monarchies, partitions, and rebirth, Poland's journey has been both turbulent and triumphant.</p>
          <p>Founded in the 10th century, Poland has witnessed the rise of great rulers and historic events, including the Polish-Lithuanian Commonwealth, the Solidarity movement, and the fall of the Iron Curtain.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
