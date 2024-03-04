import styled from "styled-components";

export const Container = styled.div `

.image{
    border-radius: 50%;
}

@media(min-width: 1920px){
    
    .containOneDish{
        display: flex;
        justify-content: center;

        .footer{
            position: absolute;
            bottom: 0;
            width: 100%;
        }

        .pedidos{
            img{
                padding: 10px;
                cursor: pointer;
            }
        }
        

        .back{
            height: max-content;
            align-items: center;
            gap: 6px;
            display: flex;
            color: white;
            margin-top: 24px;
            margin-bottom: 42px;
            left: 22%;;
            position: absolute;
            
            
            a{
                text-decoration: none;
                color: white;
                font-size: 24px;
                height: max-content;
            }

            img{
                width: 12px;
                height: 22px;
            }
        }

        .dishDescription{
            color: white;
            display: flex;
            
            img{
                margin-top: 100px;
                width: 390px;
                height: 390px;
            }

            .txt-description{
                margin-top: 145px;
                margin-left: 47px;

                h1{
                    font-size: 40px;
                    font-family: 'Poppins';
                }

                p.p-mobile{
                    position: absolute;
                    visibility: hidden;
                }

                p.p-desktop{
                    margin-top: 24px;
                    font-size: 24px;
                    font-family: 'Poppins';
                    width: 660px;
                }
            }
        }

        .tags{
            margin-top: 17%;
            margin-left: 14%;
            justify-content: center;
            gap: 12px;
            position: absolute;
            display: flex;
        }

        .buttons{
            position: absolute;
            margin-top: 22%;
            margin-left: 3.5%;
            display: flex;
            gap: 33px;
            align-items: center;

            .img-pedidos{
                position: absolute;
                visibility: hidden;
            }

            .pedidos{
                display: flex;
                align-items: center;
                gap: 14px;
            }

            Button{
                width: 162px;
                padding: 0;
            }
            strong{
                color: white;
            }
        }
        
    }
}


//mobile first
@media (max-width: 1919px){
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

            p.p-desktop{
                position: absolute;
                visibility: hidden;
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


    
}

`;