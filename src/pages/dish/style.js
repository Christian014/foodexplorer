import styled from "styled-components";

export const Container = styled.div `
    a{
        text-decoration: none;
    }
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

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

        .tags{
            margin-top: 24px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
        }

        

        .buttons{
            margin-top: 48px;
            margin-bottom: 61px;

            display: flex;
            align-items: center;

            .btt{
                padding-left: 25px;
                width: 188px;
                font-size: 10px;
            }

            .img-pedidos{
                position: absolute;
                width: 18px;
                height: 15px;


                margin-left: 151px;
                margin-top: 3px;
            }
        }


        .pedidos{
            margin-right: 16px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 15px;

            img{
                cursor: pointer;
            }

            .decrement{
                width: 20px;
                height: 2px;
                padding: 5px;
            }
            strong{
                color: white;
                font-size: 22px;
                font-family: 'Roboto';
            }
        } 
    }


    .footer{
        margin-top: 45px;
    }

`;