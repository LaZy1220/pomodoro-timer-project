import { useContext } from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PauseButton } from '../PauseButton/PauseButton';
import { SettingsButton } from '../SettingsButton/SettingsButton';
import { SettingsContext } from '../SettingsContext/SettingsContext';
import { StartButton } from '../StartButton/StartButton';
import './Timer.css'

export function Timer(){
    const context = useContext(SettingsContext)
    return(
        <div className='timer'>
            <CircularProgressbar
             value={50} 
             text={'50%'}
             styles={buildStyles(
                {rotation:0, 
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
                <SettingsButton onClick={()=>context.setIsShow(true)}/>
            </div>
        </div>
    )
}