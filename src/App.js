import { useState } from 'react';
import './App.css';
import styled from "styled-components";
import Modal from "react-modal";
import garuimg from "./img/garu.jpeg";
import { FiChevronRight,FiBell } from "react-icons/fi";


function App() {
  const selectList = ["오마카세", "삼겹살과 소주", "곱창", "육회"];

  const [name, setName] = useState();
  const [money, setMoney] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState();





  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const priceChangeHandler = (e) => {
    const { value } = e.target;
    let str = value.replace(/[^0-9]/g, '')
    setMoney(str);
  }

  const addComma = (price) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
}

const SelectHandler = (e) => {
  setSelected(e.target.value);
}


  // 저장누르면 alert 뜨는 버튼
  const clickAlertButtonHandler = (e) => {
  e.preventDefault();

  if ( name == "" || money == "" ){
    alert('이름이나 가격이 비어있습니다만')
  } else {
  alert(`{ 나한테 기부 하시는 분 성함 : ${name} , 나에게 줄 돈 : ${money} 원}`)
}

  setName('')
  setMoney('')
  };



  const alertBtn = () => {
    alert('왜 누르시고 그러세요');
  }

  const inputAlertBtn = () => {
    prompt('점심 메뉴 추천좀');
  }


  return (
    <div>
      <ItemDiv>
        <h1>Button</h1>
        <BtnDiv>
          <PrimaryBtn1 onClick={alertBtn}>
            <div>Large Primary Button
            <FiChevronRight
            style={{
              marginLeft:"3px",
            }}
            />
            </div>
          </PrimaryBtn1>
          <PrimaryBtn2>Medium</PrimaryBtn2>
          <PrimaryBtn3>Small</PrimaryBtn3>
        </BtnDiv>
        <BtnDiv>
          <NegativeBtn1 onClick={inputAlertBtn}>
            Large Negative Button
            <FiBell
            style={{
              marginLeft:"3px",
            }}
            />
            </NegativeBtn1>
          <NegativeBtn2>Medium</NegativeBtn2>
          <NegativeBtn3>Small</NegativeBtn3>
        </BtnDiv>
      </ItemDiv>
      <br/>
      
      <ItemDiv>
        <h1>Input</h1>
        <div>
          <label>이름</label>
          <InputDiv type='text' value={name} onChange={nameChangeHandler}/>
          <label>가격</label>
          <InputDiv 
            type='text' 
            value={addComma(money) || ""} 
            placeholder='0'
            onChange={(e)=>priceChangeHandler(e)}/>
          <InputBtn onClick={clickAlertButtonHandler}>저장</InputBtn>
        </div>
      </ItemDiv>
      <br/>


      <ItemDiv>
        <h1>Modal</h1>
        <div>
          <ModalOpenBtn onClick={()=> setModalIsOpen(true)}>매니저님</ModalOpenBtn>
            <Modal 
            isOpen={modalIsOpen}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                position: 'absolute',
                top: '150px',
                left: '100px',
                right: '100px',
                bottom: '150px',
                border: '2px solid #edacb1',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
            }}
            >
              라이브러리 반칙인가요? ㅇㅅaㅇ
              <OpenModalDiv>
              <ModalBtn onClick={()=> setModalIsOpen(false)}>용서 버튼</ModalBtn>
              <ModalBtn>용서 안 해주는 버튼</ModalBtn>
              </OpenModalDiv>
            </Modal>
          <ModalOpenBtn2 onClick={()=> setOpenModal(true)}>그대신</ModalOpenBtn2>
          <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '150px',
              left: '100px',
              right: '100px',
              bottom: '150px',
              border: '2px solid black',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          >
          제 귀여운 강아지 가루 보여드릴게요 ㅇㅅㅇr'
          <OpenModalDiv>
          <img src={garuimg} width={'400px'}/>
          <ModalBtn2 onClick={()=> setOpenModal(false)}>용서하기</ModalBtn2>
          </OpenModalDiv>
          </Modal>
        </div>
      </ItemDiv>
      <br/>

      <SelectDiv>
        <SelectDiv2>
          <h1>Select</h1>
          <div>
            <h3>매니저님이 수료후 저에게 사주실 메뉴는</h3>
            <HiddenBox>
              <Select onChange={SelectHandler} value={selected}>
                {selectList.map((item)=>(
                  <SelectOption value={item} key={item}>
                    {item}
                  </SelectOption>
                ))
                }
              </Select>
            </HiddenBox>
          </div>
        </SelectDiv2>
      </SelectDiv>
    </div>
  );
}

export default App;

// ItemDiv styled - components
const ItemDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0px 10px 0px 10px;
`

// Button styled - components
const BtnDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

const BtnLabeldiv = styled.div`
  width: 30px;
  height: 10px;
`

const BtnLabel = styled.label`
  margin-left: 3px;
`

const PrimaryBtn1 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid #e0e094;
    background-color: #f5f5dc;
    font-weight: 600;
    &:active {
      background-color: #d4c78c;
    }
`

const PrimaryBtn2 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 45px;
    width: 150px;
    border: none;
    background-color: #f5f5dc;
    font-weight: 600;
    &:active {
      background-color: #d4c78c;
    }
`

const PrimaryBtn3 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    border: none;
    background-color: #f5f5dc;
    font-weight: 600;
    &:active {
      background-color: #d4c78c;
    }
`

const NegativeBtn1 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid #bababa;
    background-color: #e9e9e9;
    font-weight: 600;
    &:active {
      background-color: #717171;
    }
`

const NegativeBtn2 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 45px;
    width: 150px;
    border: none;
    background-color: #e9e9e9;
    font-weight: 600;
    &:active {
      background-color: #717171;
    }
`

const NegativeBtn3 = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    border: none;
    background-color: #e9e9e9;
    font-weight: 600;
    &:active {
      background-color: #717171;
    }
`

// Input styled - components
const InputBtn = styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: white;
    height: 40px;
    width: 100px;
    margin-left: 20px;
    border: none;
    background-color: #00498c;
    font-weight: 600;
    &:active {
    background-color: #003a70;
    }
`

const InputDiv = styled.input`
    height: 20px;
    width: 150px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 0px 10px 0px 10px;
`

// Modal styled - components
const ModalOpenBtn = styled.button`
cursor: pointer;
    border-radius: 8px;
    color: black;
    height: 40px;
    width: 140px;
    border: 2px solid #edacb1;
    margin-right: 10px;
    background-color: white;
    &:active {
    background-color: #ffaeaf;
    }
`

const ModalOpenBtn2 = styled.button`
cursor: pointer;
    border-radius: 20px;
    color: white;
    height: 35px;
    width: 140px;
    border: none;
    margin-right: 10px;
    background-color: #727272;
    &:active {
    background-color: #494949;
    }
`

const ModalBtn = styled.button`
cursor: pointer;
    border-radius: 8px;
    color: black;
    height: 40px;
    width: 150px;
    border: 2px solid #edacb1;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    &:active {
    background-color: #ffaeaf;
    }
`

const ModalBtn2 = styled.button`
cursor: pointer;
    border-radius: 8px;
    color: black;
    height: 40px;
    width: 150px;
    border: 2px solid black;
    margin-left: 10px;
    margin-right: 10px;
    background-color: white;
    &:active {
    background-color: gray;
    }
`

const OpenModalDiv = styled.div`
  display: flex;
  margin-top: 50px;
`


// Select styled - components
const SelectDiv = styled.div`
  position: relative;
  width: 700px;
  height: 200px;
  border: 2px solid gray;
  border-radius: 8px;
  margin: 30px 10px 0px 10px;
`

const SelectDiv2 = styled.div`
  margin-left: 15px;
`

const Select = styled.select`
  position: absolute;
  appearance: none;
  width: 250px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px 32px 8px 8px;
  font-size: 16px;
  color: #333;
  &:focus{
    outline: none;
  box-shadow: 0 0 0 2px #8bc2ff;
  }
  &:hover{
    cursor: pointer;
  }
`

const SelectOption = styled.option`
  color: #333;
  background-color: #fff;
`

const HiddenBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`