import React from 'react'

function Dropdonw() {
     const [color, setColor] = useState("red");
  return (
    <div>
        <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
      <Watch color={color} />
    </div>
  )
}

export default Dropdonw



























