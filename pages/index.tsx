import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        address: 'Some address 5, 12345 France',
        description: 'This is a First meetup'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        address: 'Some address 5, 12345 France',
        description: 'This is a Second meetup'
    },
];

const HomePage = (props: any) => {
    /**
     * getStaticProps의 사용으로 useState와 useEffect의 사용이 불필요
     *  - 데이터를 props에서 받음
     */
    // const [loadedMeetups, setLoadedMeetups] = useState<Array<object>>();

    // useEffect(() => {
    //     //send a http request and fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // }, [])

    return (
        <MeetupList meetups={props.meetups} />
    )
};
/**
 *  fetch data from API
 *  @returns 
 */
// export async function getStaticProps() {
//     //객체 반환 필수
        // 요청, 응답 객체에 접근 x
//     return {
//         //일반적으로 props 프로퍼티 설정
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         /**
//          *  Next의 점진적 생성 기능 사용 가능
//          *  - 요청이 들어올 때 페이지를 다시 생성하기까지 Next가 대기하는 시간
//          *  - 서버에서 페이지 다시 생성 시간
//          */
//         revalidate: 1
//     }
// }

/**
 *  요청이 들어올 때마다 페이지를 다시 생성해야하는 경우
 *  getServerSideProps
 *      - 빌드 중에는 실행되지 x (getStaticProps 와 차이)
 *      - fetch data from API
 *      - 요청이 들어올 때마다 실행되는 함수
 */
export async function getServerSideProps (context : any) {
    // 요청 객체에 접근 가능
    const  req = context.req;
    const res = context.res;
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage 