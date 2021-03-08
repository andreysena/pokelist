import styled, { createGlobalStyle, keyframes } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        background: -moz-linear-gradient( to right, #0052b0, #ffd400 );
        background: -webkit-linear-gradient( to right, #0052b0, #ffd400 );
        background: linear-gradient( to right, #0052b0, #ffd400);

       
    }
    @media(max-width: 800px){
        body{
            background: #0052b0DD;
        }    
    }
`

export const ContainerLoadingImage = styled.div`
    display: flex;
    min-height: ${({altura}) => `${altura}px`};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoadingImage = styled.img`
    width: 300px;
`

const spiner = keyframes`
    to {
        transform: rotate(360deg);
    }
`

export const PokeBallSpiner = styled.img`
    width: 50px;
    animation: ${spiner} 0.7s linear infinite;
`

export const TitleImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 3%;
`

export const TitleImage = styled.img`
    display: flex;
    min-width: 200px;
    max-width: 400px;
    @media(max-width: 800px){
        margin: 8% 0% 0% 0%;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleOpitionsGen = styled.h1`
    color: #FFF;
    margin-bottom: 0;
    font-size: 20px;
    text-align: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    @media(max-width: 800px){
        margin: 8% 0% 0% 0%;
    }
`

export const GenOpitionBar = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5% 0% 2% 0%;
    flex-wrap: wrap;
    @media(max-width: 800px){
        margin: 4% 0% 8% 0%;
    }
`

export const GenOpition = styled.button`
    display: flex;
    width: 45px;
    height: 45px;
    background: steelblue;
    color: #FFF;
    font-weight: bolder;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin: 0 2% 2% 2%;
    border-radius: 50%;
    cursor: pointer;
    border: ${(props) => {
        if(props.value === props.generation){    
            return '2px solid yellow    '
        }else{
            return 'none'
        }
    }};
`

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    background-color: #FFF;
    display: flex;
    list-style: none;
    min-width: 300px;
    min-height: 250px;
    margin: 12px;
    border: 4px solid #FFF;
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;
	transition: all 0.3s;

    :hover{
        -moz-transform: scale(1.5);
	    -webkit-transform: scale(1.5);
	    transform: scale(1.05);
    }
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(${({bgColor}) => {
        return bgColor.length === 2 ? 
            `180deg, ${bgColor[1]} 50%, ${bgColor[1]} 50%`
            : 
            `180deg, ${bgColor[1]} 50%, ${bgColor[2]} 50%`
    }});
    width: 100%;
    align-self: flex-start;
`

export const ImageInCardList = styled.img`
    width: 150px;
    height: 150px;
    padding: 15px;
`
export const CardNumber = styled.a`
    align-self: flex-start;
    margin-top: 10px;
    font-size: 14px;
    font-weight: bold;
    color: slategray;
`

export const CardTitle = styled.h1`
    text-transform: capitalize;
    margin-top: 5px;
`

export const TypesContainer = styled.div`
    display: flex;
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 15px;
    width: 70%;
    height: 30px;
    margin-bottom: 15px;
    padding: 2%;
    flex-direction: row;
    justify-content: space-around;
`

export const EachType = styled.div`
    display: flex;
    background: linear-gradient(${({bgColor}) => {
        return bgColor.length === 2 ? 
            `180deg, ${bgColor[1]} 50%, ${bgColor[1]} 50%`
            : 
            `180deg, ${bgColor[1]} 50%, ${bgColor[2]} 50%`
    }});
    width: 30%;
    height: 30px;
    border-radius: 10px;
    padding: 0% 5% 0% 5%;
    justify-content: center;
    align-items: center;
`

export const TextofType = styled.a`
    display: flex;
    color: ${({color}) => color[0]};
    font-size: 16px;
    font-weight: 700;
`

export const ScrollToTop = styled.div`
    display: flex;
    background-color: slategray;
    position: fixed;
    bottom: 2%;
    right: 2%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
`

const scrollTop = keyframes`
    from {
        -moz-transform: translateY(-2px);
        -webkit-transform: translateY(-2px);
        transform: translateY(-2px);
    }

    to: {
        -moz-transform: translateY(4px);
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
    }
`

export const ScrollToTopIcon = styled.img`
    color: #FFF;
    width: 25px;
    height: 25px;
    animation: ${scrollTop} 0.3s alternate ease infinite;
`