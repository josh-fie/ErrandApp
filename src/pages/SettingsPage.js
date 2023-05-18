import { SwitchLightButton as SwitchLightButton, SwitchTextButton as SwitchTextButton } from "../components/SwitchButton";


function SettingsPage(props) {

  return (
    <>
        <h3>Settings</h3>
        <SwitchLightButton switchname="Light Mode" alt="Toggle light mode" setLightMode={props.setLightMode} lightMode={props.lightMode}/>
        <SwitchTextButton switchname="Large Text" alt="Toggle large text" largeText={props.largeText} setLargeText={props.setLargeText}/>
    </>
  )};

export default SettingsPage;