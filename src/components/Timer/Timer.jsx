import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';
import { StartButton } from '../StartButton/StartButton';
import './Timer.css'

export function Timer(){
    return(
        <div className='timer'>
            <CircularProgressbar
             value={50} 
             text={'50%'}
             styles={buildStyles({rotation:0, 
                strokeLinecap: 'butt',
                textColor:'white',
                pathColor:'red',
                trailColor:'rgba(255,255,255,.2'
            })}/>
            <div className='timer-btn-wrapper'>
                <StartButton/>
                <PauseButton/>
            </div>
            <div style={{marginTop:'20px'}}>
                <SettingsButton/>
            </div>
        </div>
    )
}