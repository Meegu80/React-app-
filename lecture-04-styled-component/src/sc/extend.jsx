import styled from "styled-components";

const Father = styled.div`

    display: flex;
`;


const Box = styled.div`
    width: 100px;height: 100px;
    background-color: ${props => props.bgColor};
`;


const Text = styled.span`
    color: white;
`;

// styled(기존컴포넌트): 해당하는 컴포넌트의 모든 정보를 상복 받은 후,
// 추가 CSS를 덧붙여 새로운 컴포넌트를 만들 때
const Circle = styled(Box)`
    border-radius: 50px;
`

function App() {

    return (<>
            <Father>
                <Box bgColor={"teal"}>
                    <Text>Hello World</Text>
                </Box>
                <Box bgColor={"tomato"}/>
                <Circle bgColor={"yellow"}/>
            </Father>
        </>

    );
}

export default App;