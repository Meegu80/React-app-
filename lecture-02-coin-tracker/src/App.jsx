import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);   // 데이터는 배열형태로 데이터가 넘어옴.그래서 빈 배열로 초기화

    // 데이터를 받아오는 함수 : fetch 비동기함수, 비동기 함수를 사용할 때에는 즉시 변수에 저장하지 않고, then통해서 가공해야한다.
    // fetch("주소").then()
    //.then(함수) => 정상적으로 데이터를 받아오면 함수를 실행함.
    //.catch(함수) => 데이터 받아올 때 에러가 난다면 함수를 실행함. 실행안하고 삭제할 수 있음

    // 리액트에서는 데이터를 받아오는 일은 직접적으로 사용하며 안된다=> 화면을 그릴 때 데이터를 받아오면 화면이 변경되었다는 것을 감지하여 다시 그림
    // => 데이터를 다시 받고 => 화면을 다시 그리고 => 데이터를 다시 받고.... 루프상태가 되버림(원인:useState가 계속 그리기때문이야)
    // 그래서 useEffect로 감싸야함

    // useEffect는
    // 1. 화면이 모두 렌더링(그리기)이 끝난 이후에 실행된다.
    // 2. 대괄호 array안에 있는 값들이 변경되었을 때 발동시킬 다
    //  useEffect(() => {  }, [지켜볼 변수]);
    // useEffect(): 화면이 모두 그련진 이후에 실행을 하기 위한 목적으로 사용.
    // 반환되는 값 없음
    // 기본 형태에서 배열[]에 아무것도 없다면, 화면을 모두 그린 후 1번만 실행됨.
    useEffect(() => {

        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())             // 받아온 데이터 객체를 res나 response로 명명함, 이벤트를 e,event명명하듯
            // .json() : 자바스크립트 엔진이 string 변수에 자동으로 붙여주는 기능
            // .json() : string 의 값을 객체나 배열로 변환해주는 기능
            .then((json) => {
                setCoins(json);
                setLoading(false);
            })

    }, []);


    return (
        <>
            <h1>가즈아~~~~~~코인월드 </h1>
            {loading
                ? <strong>Loading...</strong>
                : <select>
                    {coins.map((coin, index) => {
                        return <option
                            key={index}>{coin.name}({coin.symbol}:{coin.quotes.USD.price}USD)</option>;
                    })}

                </select>
            }
        </>
    )
}

export default App
