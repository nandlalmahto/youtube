import { useState } from "react";
import '../styles/videos.css'
const Videos = () => {
    let [video, setVideo] = useState([
        
        {
            thumbnail:"https://i.ytimg.com/vi/oE4g4P41KLM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCCR31uCIBiLuqNReDLLCeQ-b00Nw",
            title:"Stop Wasting Your Time | Sandeep Maheshwari | Every Student Must Watch This Video | Hindi by Sandeep Maheshwari",
            channel:"Sandeep Maheshwari",
            views:"72K views",
            id:1
        },
        {
            thumbnail:"https://i.ytimg.com/vi/wVJO5I8qnkA/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDAqiPkS2vyUyNMZQoN8sErO-067g",
            title:"Mix - bas ek baar tumko dekhne ko tarsu kehta hai dil ye mera (slowed reverb)",
            channel:"",
            views:"",
            id:2
        },
        {
            thumbnail:"https://i.ytimg.com/vi/ZYKF4R5Lk2Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBc_rsorSOq3OU4iy2eM4ErAaTZQg",
            title:"Comedy का Sixer | Chris Gayle, Brett Lee |The Kapil Sharma Show 2 | Ep 333 | 4 June 2023 by SET India 17 hours ago 10 minutes, 39 seconds 613,540 views",
            channel:"SET India",
            views:"613K views",
            id:3
        },
        {
            thumbnail:"https://i.ytimg.com/vi/MgBRD8OBzd8/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBztfVRT_9aVBF8YS7RKpIKP43eUg",
            title:"JAY SHREE RAM - Adipurush Status - | Adipurush Status | Jay Shree Ram Adipurush Status | Tiger Sunil by Tiger Sunil Vlogs 8 hours ago 31 seconds 539 views",
            channel:"Tiger Sunil Vlogs",
            views:"539 views",
            id:4
        },
        {
            thumbnail:"https://i.ytimg.com/vi/_PQd6aZ-ANk/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDpUwFKDkjTPIpQ8spZHtUaPNy6bw",
            title:"🔴 Microservices  Crash Course for beginners ||  Spring Boot || Hindi by Learn Code With Durgesh 2 years ago 1 hour, 48 minutes 474,015 views",
            channel:"Learn Code With Durgesh",
            views:"474K views",
            id:5
        },
        {
            thumbnail:"https://i.ytimg.com/vi/VsHJip55_Ck/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCNLrFyfRkRRF5FI8RQrH7u3RsHjg",
            title:"12 Hours Arijit Singh Mashup (Eternal Mahup) ┃ 24 Hours radio beats to chill and relax by Proxy YT 777 Streamed 8 days ago 1 hour, 39 minutes 21,946 views",
            channel:"Proxy YT 777",
            views:"Proxy YT 777",
            id:6
        },
        {
            thumbnail:"https://i.ytimg.com/vi/NisfIUglozc/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBiNVZ5iyrXj-SGysesN4dYqfoJ5g",
            title:"रामायण कथा - सीता स्वयंवर। शिव धनुष। श्री राम परशुराम संवाद। Sita Swayamvar - Sri Ram & Parshuram Ji by Tilak",
            channel:"Tilak",
            views:"262 views",
            id:7
        },
        {
            thumbnail:"https://i.ytimg.com/vi/0lSxjDYdvpQ/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCFN8UsSSGmf1zWksPCV2MkHNMOPQ",
            title:"Bolo Na (Video) Truly Konnected | #TulsiKumar | Anurag S | Avinash C | Arsh Grewal | Bhushan Kumar by T-Series",
            channel:"T-Series",
            views:"306K views",
            id:8
        },
        {
            thumbnail:"https://i.ytimg.com/vi/sx6KIpTlDUY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLACBS9hhMo-rCnUheLdPLBQ79P5GQ",
            title:"",
            channel:"",
            views:"",
            id:9
        },
        {
            thumbnail:"https://i.ytimg.com/vi/D-I_lHdMRu4/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLDvcZrvLlXMNrgZVcj-Lk2SfZIQPg",
            title:"",
            channel:"",
            views:"",
            id:10
        },
        {
            thumbnail:"https://i.ytimg.com/vi/ehAGlT9DJZ4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAfplvazUKh2c8R5yDwX4JGvRi7LA",
            title:"",
            channel:"",
            views:"",
            id:11
        },
        {
            thumbnail:"https://i.ytimg.com/vi/yI7jOEbRLAE/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLD4LlydxgTfJ3Iw7DiJqTRZN6PooA",
            title:"",
            channel:"",
            views:"",
            id:12
        },

        {
            thumbnail:"https://i.ytimg.com/vi/WCOtd14m3ZY/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBdCOiZI-zWgT2vod94033dJBg-ew",
            title:"Adipurush (Hindi) Jukebox | Prabhas |Ajay - Atul | Sachet-Parampara | Manoj M | Om Raut | Bhushan K by T-Series",
            channel:"T-Series",
            views:"289K views",
            id:13
        },

        {
            thumbnail:"https://i.ytimg.com/vi/tuSW02HAjI0/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD1FTffstGnfLqXjJWBWBPPK9h0JA",
            title:"Ek Din Ka HR | Ft. Chote Miyan & Mugdha Agarwal | RVCJ Media by RVCJ Media",
            channel:"RVCJ Media",
            views:"293K views",
            id:14
        },

        {
            thumbnail:"https://i.ytimg.com/vi/QxJBFd3syF4/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAfACG_mcpBOUNRWsQeziZVlpPj1Q",
            title:"कलियुग/ Kaliyug की शुरुआत कब और कैसे हुई ? || HG Amogh Lila Prabhu || ISKCON Dwarka by ISKCON Dwarka",
            channel:"ISKCON Dwarka",
            views:"831K views",
            id:15
        },
    ])
        //shorts

    let [short, useShort] = useState([
        {
            thumbnail1:"https://i.ytimg.com/vi/kkhn1Gk7rtw/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLBT6zCOaDbPw0N4iI5oimderV7fIw",
            title1:"Pov: When She Is A Sanatani🕉️🤌|#shorts #sanatandharma #csk #hindu #ipl #ravindrajadeja #dhoni",
            views1:"458K views",
            id:1
        },
        {
            thumbnail1:"https://i.ytimg.com/vi/t6_TuSLR0Xs/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLCIGQjrsIuP8kPvgkIIhpZ9GKno2A",
            title1:"Jai Shree Ram🙏 || Sanatani Girl🕉 || #shorts #omegle #jaishreeram",
            views1:"364K views",
            id:2
        },
        {
            thumbnail1:"https://i.ytimg.com/vi/pb0m_7uREg8/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLB_mDvZOCYKF5ygSDsB7SIEMtNxRw",
            title1:"Ashish Chanchalani on Acharya Prashant | Nonveg Lover destroyed in seconds ; Non-Veg Debate #vegan",
            views1:"473K views",
            id:3
        },
        {
            thumbnail1:"https://i.ytimg.com/vi/y-2rK52w4nM/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLBeSEkCFb9pvBGMlDeMWQKG5MN4yQ",
            title1:"NO LOVE JETHALAL😎 OF DILIP JOSHI🤟#shorts #tarakmehtakaultachashma",
            views1:"392K views",
            id:4
        },
        {
            thumbnail1:"https://i.ytimg.com/vi/Q1nozJdnMwA/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLDxq0_Ahv2Q-OoQS9Cn3zySO027eQ",
            title1:"Owner of GT RutuRaj gaikwad ✨#shorts #shortvideo #cricket #trending #shortsfeed #viral #ipl",
            views1:"298K views",
            id:5
        },
        {
            thumbnail1:"https://i.ytimg.com/vi/8udY9UWawlw/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLB6Vm89qUlBgvgKozT3bPL5DrhKRw",
            title1:"Samantha Ruth Prabhu Top Romantic Love Story Movies 💕 Oh Baby | Jaanu | A Aa | #samantha  #shorts",
            views1:"983K views",
            id:6
        }

    ])

    //remove
    let removeVideo = (id, name) =>{
        let result = video.filter( (x) => x.id !== id)
        setVideo(result)
        alert(`${name} video got removed`)
    }
    return (
        <div className="videos">
            <h1>Featured Videos</h1>
            <div className="videdata">
                
            {video.map((data) => {
                return(
                    <div className="video">
                        <img src={data.thumbnail} />
                        <div className="videoDetails">
                        <h4>{data.title}</h4>
                        <p>{data.channel}</p>
                        <p>{data.views}</p>
                        <a onClick = {() => removeVideo(data.id, data.channel) }>Remove</a>
                        </div>
                    </div>
                )
            })}

            </div>
            
        <div className="shorts">
            <h1>Shorts</h1>
            <div className="shortdata">
                {short.map((data1) => {
                return(
                    <div className="short">
                        <img src={data1.thumbnail1} />
                        <div className="shortDetails">
                        <h4>{data1.title1}</h4>
                        <p>{data1.views1}</p>
                        </div>
                    </div>
                )
            })}
            </div> 
        </div>

        </div>
    );
}
 
export default Videos;