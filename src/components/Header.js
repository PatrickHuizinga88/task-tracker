import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className="header">
            <h1>Task Tracker</h1>
            {location.pathname === "/task-tracker" && (
                <Button onClick={onAdd} text={showAdd ? 'Add' : 'Close'}/>
            )}
        </header>
    )
}

export default Header
