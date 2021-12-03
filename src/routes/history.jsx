import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import BoxHistory from "../Components/historyPage/boxHistory";
import SideBarHistory from "../Components/historyPage/sideBarHistory";
import axiosCall from "../utils/axios";


const Main = styled.main`
.container {
   
  width:80vw;
  margin:100px auto

}

.box-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap:24px;
}

.timing .title{
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 23px;
  color: #4E4E4F
}

.title-time{
  width: 120px;
  height: 56px;
  left: 305px;
  top: 252px;
  background: #FFFFFF;
  border: 1px solid #F1C40F;
  box-sizing: border-box;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  text-align: center;
  padding-top: 20px;
  cursor: pointer;
}

.times{
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 120px));
    margin-bottom: 30px;
  }
}


.history-page-content{
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  
}
  
`;

export default function HistoryPage() {

  const times = [
    {
      'title': 'All Time'
    },
    {
      'title': 'This week'
    },
    {
      'title': 'Last week'
    },
    {
      'title': 'Last Month'
    }
  ]


  return (

    <Main>
      <div class="container">

        <div className="timing">
          <p className="title">
            Order History
          </p>

          <div className="times">
            {times.map(({ title }) => {
              return <div className='title-time'>
                {title}
              </div>
            })}
          </div>
        </div>

        <div className="history-page-content">
          <div className="box-container">
            {[{}, {}, {}, {}, {}, {}, {}, {}, {}].map((data, index) => {
              return <BoxHistory index={(index % 5) + 1} />
            })}
          </div>


            <SideBarHistory/>

        </div>


      </div>
    </Main>
  );
}