import React from 'react';
import styled from "styled-components";
import {selectMovies} from "../features/movie/movieSlice";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import detail from './Detail';


function Movies(props) {

// const  movies = useSelector(selectMovies);


    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>

                {/*{ movies &&*/}
                {/*movies.map((movies)=>(*/}
                {/*    <Wrap>*/}
                {/*        <img src={movies.cardImg}/>*/}
                {/*    </Wrap>*/}

                {/*))*/}

                {/*}*/}

<Wrap>
    <img src='https://occ-0-590-769.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZfGwED6kNpc0JrQ4HcjtjIqATWuaHmY6hw6Zx_lVjHdFKXndNNllUBGPfG_q2JXHKk17US8UP0QYGZjaA3c91PfiVj-uaofOIE.jpg?r=9ee'/>
</Wrap>

                <Wrap>
                    <img src='https://images.moviesanywhere.com/49e7a444a55f2c0cf7ebe793a8f4daeb/a3610d00-c674-4651-9148-755e9f76959b.jpg?h=375&resize=fit&w=250'/>
                </Wrap>

                <Wrap>
                    <img src='https://m.media-amazon.com/images/M/MV5BMGE0MmQ5ZDEtOTFiYy00OWY0LTk1MjUtMGEzNGQ0Yzc0OWQ4XkEyXkFqcGdeQXVyMTQ1NTMyMDkw._V1_.jpg'/>
                </Wrap>

                <Wrap>
                    <img src='https://tinybeans.com/wp-content/uploads/2020/12/The-one-and-only-ivan-seattle-movies-cc-disney-plus-e1608669265978.jpeg?w=566'/>
                </Wrap>

                <Wrap>
                    <img src='https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4614/1534614-v-189a0cf36d4f'/>
                </Wrap>

                <Wrap>
                    <img src='https://cdn1.clickthecity.com/images/movies/poster/600/19310.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg'/>
                </Wrap>
                <Wrap>
                    <img src='https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/26/570e062044cd563eff225710f715adc31674698729879453_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628'/>
                </Wrap>

            </Content>
        </Container>
    );
}

export default Movies;


const Container = styled.div`


`


const Content = styled.div`
display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0,1fr));

`

const Wrap = styled.div`
border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

`