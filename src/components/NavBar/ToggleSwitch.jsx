import { useTheme } from './../Theme';

const ToggleSwitch = () => {
    const {darkMode , toggleDarkMode}=useTheme();
  return (
    <div>
        <label className="flex items-center" >
            <div className="relative cursor-pointer">
                <input type="checkbox" className="sr-only peer " onChange={toggleDarkMode} checked={darkMode} />
                <div
                className="w-9 h-3 flex items-center bg-primary  rounded-full peer 
                peer-checked:after:translate-x-full after:absolute after:left-0 
                peer-checked:after:-left-1 after:bg-white after:border after:border-primary 
                peer-checked:after:border-primary  after:rounded-full after:h-5 after:w-5 after:transition-all
                peer-checked:bg-primary ">
                </div>
            </div>
        </label>
    </div>
  )
}

export default ToggleSwitch