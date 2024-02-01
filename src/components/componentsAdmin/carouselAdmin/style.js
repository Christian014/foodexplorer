import styled from "styled-components";

export const Container = styled.div `

@media(max-width:1099px){
    .swiper-button-prev{
            visibility: hidden;
            position: absolute;
        }
        .swiper-button-next{
            visibility: hidden;
            position: absolute;
        }
}
@media(min-width: 1100px){
    .swiper-button-prev{
            color: white;
            visibility: visible;
            box-sizing: border-box;
            margin-left: 46px;
            padding-right: 233px;
            background-color: rgba(0, 0, 0, .3);
            height: 476px;
            margin-top: -15%;
        }


        .swiper-button-next{
            color: white;
            visibility: visible;

            box-sizing: border-box;
            margin-right: 40px;
            padding-left: 233px;
            background-color: rgba(0, 0, 0, .3);
            height: 476px;
            margin-top: -15%;
        }

}



        

        .swiper-slide{
            display: flex;
            justify-content: center;
        }
`;