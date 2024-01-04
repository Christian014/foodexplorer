import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    .containOneDish{

        
        width: 316px;
        height: 677px;
        margin: 16px auto 0px;
        
        display: flex;
        flex-direction: column;
        margin-bottom: 16px;

        .back{

            margin-top: 20px;
            margin-bottom: 16px;

            display: flex;
            align-items: center;
            gap: 10px;

            p{
                color: white;
                font-size: 24px;
                font-family: 'Poppins';
            }

            img{
                width: 12px;
                height: 22px;
            }
        }

        .dishDescription{

            display: flex;
            flex-direction: column;

            justify-content: center;
            align-items: center;

            text-align: center;

            img{
                width: 264px;
                height: 264px;

                margin-bottom: 16px;
            }

            h1{
                color: white;

                font-family: 'Poppins';
                font-size: 27px;

                margin-bottom: 24px;
            }

            p{
                color: white;
                font-size: 16px;
                font-family: 'Poppins';
            }

        }
    }


    

`;