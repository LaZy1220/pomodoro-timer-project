import './Settings.css'
import ReactSlider from 'react-slider'
import { useContext } from 'react'
import { SettingsContext } from '../SettingsContext/SettingsContext'
import { BackButton } from '../BackButton/BackButton'

export function Settings(){
    const context = useContext(SettingsContext)
    return(
        <div className='settings'>
            <label>Work: {context.workMinutes} min.</label>
            <ReactSlider
            className='slider red'
            thumbClassName='thumb red'
            trackClassName='track'
            value={context.workMinutes}
            onChange ={newValue=>context.setWorkMinutes(newValue)}
            min={1}
            max={120}
            />
            <label>Break: {context.breakMinutes} min.</label>
            <ReactSlider
            className='slider green'
            thumbClassName='thumb green'
            trackClassName='track'
            value={context.breakMinutes}
            onChange ={newValue=>context.setBreakMinutes(newValue)}
            min={1}
            max={120}
            />
            <div className='back-btn' style={{textAlign:'center',marginTop:'35px'}}>
            <BackButton onClick={()=>context.setIsShow(false)}/>
            </div>
        </div>
    )
}