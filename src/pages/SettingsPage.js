import { SwitchLightButton as SwitchLightButton, SwitchTextButton as SwitchTextButton } from "../components/SwitchButton";
import Header from "../components/Header";


function SettingsPage(props) {

  return (
    <>
        <Header title="Settings"/>
        <SwitchLightButton switchname="Light Mode" alt="Toggle light mode" setLightMode={props.setLightMode} lightMode={props.lightMode}/>
        <SwitchTextButton switchname="Large Text" alt="Toggle large text" largeText={props.largeText} setLargeText={props.setLargeText}/>
    </>
  )};

export default SettingsPage;