import styled from 'styled-components';

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 110px;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
        justify-content: center;
    }
`

export const Image = styled.div`
    height: 20vw;
    width: 20vw;
    border-radius: 50%;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/instagram-clone-c5dfa.appspot.com/o/IMG_2811%20(1).jpg?alt=media&token=c43c07ac-3b51-4a49-bb12-5e004f38098b");
    background-size: cover;
    box-shadow: 0px 3px 6px ${({ theme }) => theme.colorShadow};
    margin-right: 2vw;
`

export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.span`
    color: ${({ theme }) => theme.text};
    font-size: 4.3vw;
    font-weight: 800;
`

export const BoxLine = styled.div`
    width: 40%;
    height: 9px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.primary};
    margin-top: 16px;
`

export const IconSocial = styled.img`
    src: url(${props => props.src});
    width: 1.5vw;
    height: 1.5vw;
    color: red;
    margin-top: 30px;
    margin-right: 17px;
    margin-left: 5px;
    cursor: pointer;
`