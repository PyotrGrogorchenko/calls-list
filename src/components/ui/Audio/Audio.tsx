import { FC, useRef } from 'react'

import { Props } from './types'

import * as styles from './styles.scss'
import { IconButton } from '../IconButton'
import { Icon } from '../Icon'

export const Audio: FC<Props> = ({ src, ...rest }) => {
    const audioRef = useRef<HTMLAudioElement>()

    console.log('audioRef', audioRef)

    return (
        <>
            {/* <div style="width: 50px; height: 50px;"></div> */}
            <div className={styles.container}>
                <div className={styles.timeline}>
                    <div className={styles.progress}></div>
                </div>
                <div className={styles.controls}>
                    {/* <div class="play-container"> */}
                    {/* <div class="toggle-play play"></div> */}
                    {/* </div> */}
                    {/* <div class="time"> */}
                    {/* <div class="current">0:00</div> */}
                    {/* <div class="divider">/</div> */}
                    {/* <div class="length"></div> */}
                    {/*                     </div>
                     */}{' '}
                </div>
            </div>

            {/* <audio ref={audioRef} className={styles.container} src={src} />
            <IconButton onClick={() => audioRef.current && audioRef.current.play()}>
                <Icon type="play" />
            </IconButton>
 */}
            {/* <source src={src} />
            </audio> */}
        </>
    )

    {
        /* <audio {...rest} className={styles.container}></audio> */
    }
}
