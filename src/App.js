import React from 'react';
import { useState } from 'react';
import './App.css';
import handsData from './hands.json'

function swap(switchimage, imagename) {
  document.images[switchimage].src = imagename
  return true
}

function App() {
  const [handIndex, setHandIndex] = useState(Math.floor(Math.random()*handsData.length))
  const [hand, setHand] = useState(handsData[handIndex])

  const printFinger = (width, height, position, altPosition, finger, link) => {
    const imageName = `Img${position}${finger}`
    const image = `images/${position}_${finger}.jpg`
    const altImage = `images/${altPosition}_${finger}.jpg`

    const onMouseEnter = () => {
      swap(imageName, altImage)
    }
    const onMouseLeave = () => {
      swap(imageName, image)
    }
    const onClick = () => {
      const newHand = { ...hand }
      newHand.Name = "-"
      newHand.Description = ""
      newHand[`PositionFinger${finger}`] = altPosition
      newHand[`AltPositionFinger${finger}`] = position
      const matchIndex = handsData.findIndex((test) => {
        return test[`PositionFinger0`] === newHand[`PositionFinger0`] &&
          test[`PositionFinger1`] === newHand[`PositionFinger1`] &&
          test[`PositionFinger2`] === newHand[`PositionFinger2`] &&
          test[`PositionFinger3`] === newHand[`PositionFinger3`] &&
          test[`PositionFinger4`] === newHand[`PositionFinger4`] 
      })
      if (matchIndex !== -1) {
        setHandIndex(matchIndex)
        // TODO: chain automatically
        setHand(handsData[matchIndex])
      } else {
        setHand(newHand)
      }
    }

    return (
      <img 
        name={imageName} 
        src={image} 
        width={width} 
        height={height} 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        alt="Finger" />
    )
  }

  return (
    <main>
      <table className="hand">
        <tbody>
          <tr style={{ height: 30 }}>
            <td colSpan="3" style={{ height: 30 }}>
              <img src='/images/s1.jpg' style={{
                width: 167,
                height: 30
              }} alt="Spacer" />
            </td>
            <td rowSpan="2" height="219"> {printFinger(59, 219, hand["PositionFinger2"], hand["AltPositionFinger2"], "2", hand["LinkFinger2"])}</td>
            <td rowSpan="2" height="219">
              {printFinger(57, 219, hand["PositionFinger3"], hand["AltPositionFinger3"], "3", hand["LinkFinger3"])}
            </td>
            <td rowSpan="2" height="219">
              {printFinger(81, 219, hand["PositionFinger4"], hand["AltPositionFinger4"], "4", hand["LinkFinger4"])}
            </td>
          </tr>
          <tr height="189">
            <td height="189">
              <img src='/images/s2.jpg' width="98" height="189" alt="Spacer" />
            </td>
            <td colSpan="2" height="189">
              {printFinger(69, 189, hand["PositionFinger1"], hand["AltPositionFinger1"], "1", hand["LinkFinger1"])}
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              {printFinger(121, 166, hand["PositionFinger0"], hand["AltPositionFinger0"], "0", hand["LinkFinger0"])}
            </td>
            <td colSpan="4" rowSpan="2">
              <img src="images/palm2.jpg" width="243" height="222" alt="Palm 2" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <img src="images/palm1.jpg" width="121" height="56" alt="Palm 1" />
            </td>
          </tr>
          <tr>
            <td><img src="images/spacer.gif" width="98" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="23" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="46" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="59" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="57" height="1" alt="spacer" /></td>
            <td><img src="images/spacer.gif" width="81" height="1" alt="spacer" /></td>
          </tr>
        </tbody>
      </table>
      <div className="title">
        {hand.Name}
      </div>
      <div className="description">
        {hand.Description}
      </div>
    </main>
  );
}

export default App;
