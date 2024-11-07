/* eslint-disable react-hooks/exhaustive-deps */
// noinspection JSIgnoredPromiseFromCall

import SubTitle from "../../component/text/SubTitle.jsx";
import {useNavigate} from "react-router-dom";
import {useData} from "../../context/DataContext.jsx";
import {useEffect} from "react";
import useAxios from "../../hook/useAxios.js";

const Creating = () => {
    const {error, fetchData} = useAxios();
    const nav = useNavigate();
    const {userData} = useData();

    useEffect(() => {
        const saveInfo = async () => {
            try {
                const resultData = await fetchData({
                    config: {method: 'POST', url: '/api/info'},
                    body: userData
                });
                if (resultData) {
                    if (resultData.status === 'OK') {
                        const data = resultData.data;
                        console.log('data: ', data);
                    }
                } else if (error) {
                    console.error("Error: ", error);
                }
            } catch (err) {
                console.error("Error: ", err);
            }
        };

        if (!userData.userNo) {
            nav('/');
        } else {
            saveInfo();
        }
    }, []);

    return (
        <div className={"h-screen w-full bg-cover bg-center relative"}>
            <div className={"flex items-center justify-center h-screen"}>
                <div className={"text-center"}>
                    <div className={`flex gap-40 pb-40`}>
                        <img
                            src={`/public/images/gul-1.jpg`}
                            alt={`gul-1`}
                            className={`w-40 h-44 animate-slide-top delay-0`}
                        />
                        <img
                            src={`/public/images/gul-2.jpg`}
                            alt={`gul-2`}
                            className={`w-40 h-44 animate-slide-top delay-500`}
                        />
                        <img
                            src={`/public/images/gul-3.jpg`}
                            alt={`gul-3`}
                            className={`w-40 h-44 animate-slide-top delay-1000`}
                        />
                    </div>
                    <SubTitle
                        text={"입력해주신 내용으로 추천해드릴 곳을 찾고 있어요."}
                        aniamtion={"animate-text-focus-in"}
                        last={false}
                    />
                    <SubTitle
                        text={"잠시만 기다려주세요!"}
                        aniamtion={"animate-text-focus-in"}
                        last={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Creating;