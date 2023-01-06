import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetupHandler = (enteredMeetupData: any) => {
        console.log('enteredMeetupData', enteredMeetupData)
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetupPage