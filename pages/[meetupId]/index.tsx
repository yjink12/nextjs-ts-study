import { useRouter } from "next/router";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    // => useRouter 훅은 컴포넌트 함수에서만 사용 가능, getStaticProps 함수에서는 사용 x
    // const router = useRouter();
    // const id = router.query.meetupId
    return (
        <MeetupDetail 
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg'
            title='A First Meetup'
            address='Some address 5, 12345 France'
            description='This is a First meetup'
            />
    )
}
/**
 *  동적 페이지에서 필요한 함수
 *  - 어떤 동적 매개변수 값의 어떤 페이지가 사전 생성되어야하는지 정의
 */
export async function getStaticPaths() {
    return {
        fallback: false,    //특정path 정의
        paths: [
            { params: 
                {
                    meetupId: 'm1',
                }
            },
            { params: 
                {
                    meetupId: 'm2',
                }
            }
       ] 
    }
}
/**
 *  데이터가 자주 변하지 x
 *   => getStaticProps
 */
export async function getStaticProps(context: any) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            meetupData: {
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
                title:'A First Meetup',
                address:'Some address 5, 12345 France',
                description:'This is a First meetup',
                id: meetupId
            }
        }
    }
}

export default MeetupDetails;