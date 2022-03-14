import React, {Fragment, useRef, useState} from 'react'
import styles from "./styles.module.css"
import clsx from "clsx"

export default function VideoPlayer(src: string) {

  const [playing, setPlaying] = useState(true)

  const videoRef = useRef(null)


  const handdlePlay = () => {
    const {current: videoEl} = videoRef

    playing 
    ? videoRef.current.pause()
    : videoRef.current.play()

    setPlaying(!playing)
  }

  const classNameButtonPlayer = clsx(styles.playerButton, {
    [styles.btn_hidden] : playing
  })

  console.log(classNameButtonPlayer)

  const SRC: string = "https://v16-webapp.tiktok.com/24a24f843eafb7dec0ad5f5637500cb7/622fc6eb/video/tos/useast2a/tos-useast2a-ve-0068c001/d2f53044e4ba425ba45f3828018a22c1/?a=1988&br=2788&bt=1394&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-33nnz7Th6jsvDXq&l=2022031416510401022307716912369A2C&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=aml2dDs6ZjZ0OjMzNzczM0ApO2k5aDs8NTw8NzQ7ZWhkZ2ctbmVzcjRnZGxgLS1kMTZzczUvMF5jNjMwMjA2NWI0NV86Yw%3D%3D&vl=&vr="

  return (
    <Fragment>

      <video 
        className={styles.video}
        src={SRC} 
        controls={false}
        autoPlay
        muted
        ref={videoRef}
        onClick={handdlePlay}
      />
      <button className={classNameButtonPlayer}></button>
    </Fragment>
  )
}
