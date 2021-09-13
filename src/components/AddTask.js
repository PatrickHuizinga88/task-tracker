import {useState} from 'react'

const AddTask = ({onAdd}) => {
    //create constants with their default value
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        //Give an error if there is no text
        if(!text) {
            alert("Please fill in the task.")
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Enter your task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day and time</label>
                <input type="text" placeholder="Enter the day and time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className="btn btn-block" value="Save task"/>
        </form>
    )
}

export default AddTask

