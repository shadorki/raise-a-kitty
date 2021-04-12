import React, { FC, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";



export const Loading: FC = (): JSX.Element => {
  const [rotation, setRotation] = useState<number>(0)
  // Rotation doesnt change?
  useEffect(() => {
    const id = window.setInterval(() => {
      console.log(rotation)
      setRotation(rotation + 360)
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="loading">
      <div>
        <FontAwesomeIcon
          icon={faCat}
          size="10x"
          className="loading-kitty"
          style={{
            transform: `Rotate(${rotation}deg)`
          }}
        />
      </div>
      <div>
        Loading...
      </div>
    </div>
  )
}
