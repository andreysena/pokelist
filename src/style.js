import styled, { createGlobalStyle } from 'styled-components'

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
    
export const TitleImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 3%;
`

export const TitleImage = styled.img`
    display: flex;
    min-width: 200px;
    max-width: 400px;
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