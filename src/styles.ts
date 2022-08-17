import styled from 'styled-components'

export const Container = styled.div`
    background-color: #282437;
    width: 100%;
    min-height: 100vh;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export const Title = styled.h1`
    color: #FFF;
    text-align: center;
    margin-top: 10rem;
`

export const Input = styled.input`
    width: 50%;
    height: 30px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
`

export const Button = styled.button`
    width: 90px;
    height: 30px;
    background-color: ${ props => props.value ? '#3C1F7B' : 'isDisable'};
    border-radius: 10px;
    font-size: 17px;
    display: block;
    margin-top: 1.5rem;
    cursor: ${ props => props.value ? 'pointer' : 'none'};
`

export const Div = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7E64FF;
    border: 2px solid #3C1F7B;
    font-size: 25px;
    border-radius: 10px;
    min-width: 200px;
    height: 50px;
    margin-top: 30px;
`