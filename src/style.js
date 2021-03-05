import styled from 'styled-components'

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Card = styled.div`
    background-color: gainsboro;
    display: flex;
    list-style: none;
    min-width: 300px;
    min-height: 250px;
    margin: 12px;
    border: 4px solid gainsboro;
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
        return bgColor.length === 1 ? 
            `180deg, ${bgColor[0]} 50%, ${bgColor[0]} 50%` : 
            `180deg, ${bgColor[0]} 50%, ${bgColor[1]} 50%`
    }});
        
    width: 100%;
    align-self: flex-start;
`
// linear-gradient(180deg, #1D3475 50%, #060D1F 50%)

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