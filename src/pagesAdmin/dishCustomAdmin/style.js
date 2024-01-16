import styled from "styled-components";


export const Container = styled.div `
    color: white;
    h1{
        font-family: 'Poppins';
    }
    a{
        text-decoration: none;
    }
    @media(max-width: 428px){

        a{
            color: white;
        }
        .container{
            width: 364px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .return{
            margin-top: 11px;
            display: flex;
            gap: 5px;
            align-items: center;
            cursor: pointer;

            
            p{
                font-size: 16px;
            }

            img{
                width: 8px;
                height: 15px;
            }
        }

        .img-dish{

            .p-img-fo-prato{
                margin-bottom: 16px;
                font-size: 16px;
                font-family: 'Roboto';
            }

            .upload{
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border-radius: 8px;
            gap: 8px;
            width: 100%;
            height: 48px;

            background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};

            input{
                width: 100%;
                height: 100%;
                opacity: 0;
                position: absolute;
                cursor: pointer;
            }

            img{
                width: 24px;
                height: 24px;
            }

            p{
                font-size: 14px;
                font-family: 'Poppins';
            }
            }
        }

        .name{
            p{
                margin-bottom: 16px;
                font-family: 'Roboto';
                
            }
            input{
                border: none;
                border-radius: 8px;
                gap: 8px;
                width: 100%;
                height: 48px;
                color: white;
                padding-left: 14px;
                box-sizing: border-box;
                background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUT_ADMIN};
                outline: none;
            }

            input::placeholder{
                color: ${({theme}) => theme.COLORS.PLACEHOLDER_INPUT};
            }
        }
}

    

        

    
`;