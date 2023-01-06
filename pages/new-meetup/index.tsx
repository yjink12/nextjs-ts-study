import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetupPage = () => {
    const addMeetupHandler = async (enteredMeetupData: any) => {
        console.log('enteredMeetupData', enteredMeetupData)
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //const response2 = await fetch('/api/new-meetup');

        const data = await response.json();
        console.log('response data', data);
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}
export default NewMeetupPage