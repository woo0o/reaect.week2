import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { createCardFB } from '../redux/configStore';
// 파일밖에있는폴더에 가려면 경로앞에 ..을 붙여야한다


const Add = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const wordInput = React.useRef('');
  const haoInput = React.useRef('');
  const meanInput = React.useRef('');
  const exInput = React.useRef('');
  const readInput = React.useRef('');

  const addWord = () => {
    dispatch(
      createCardFB({
        word: wordInput.current.value,
        hao: haoInput.current.value,
        mean: meanInput.current.value,
        example: exInput.current.value,
        read: readInput.current.value
      })
    );
    history.push('/');
  };

  return (
    <div style={{
      textAlign: 'center',
      height: '800px'
    }}>
      <Header>
        <h1
          style={{
            cursor: 'pointer',
            display: 'grid',
            margin: '30px auto'
          }}
        >
          중국어 단어장
        </h1>
      </Header>
      <div style={{ marginTop: '130px', height: '100%' }}>
        <h3 style={{ margin: '30px', color: 'green' }}>단어 추가하기</h3>
        <Container>
          <Contents>
            <h3>단어</h3>
            <InputBox ref={wordInput} />
            <h3>병음</h3>
            <InputBox ref={haoInput} />
            <h3>의미</h3>
            <InputBox ref={meanInput} />
            <h3>예문</h3>
            <InputBox ref={exInput} />
            <h3>해석</h3>
            <InputBox ref={readInput} />
          </Contents>
          <AddButton style={{ textAlign: 'center', backgroundColor: 'green' }} onClick={addWord}>
            저장하기
          </AddButton>
        </Container>
      </div>
    </div>

  );
};


const Header = styled.div`
  position: fixed;
  background-color: #fff;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #eee;
  z-index: 999;
`;

//테두리
const Container = styled.div`
  border: solid #ddd 2px;
  border-radius: 0px;
  width: 380px;
  height: 650px;
  text-align: left;
  margin: auto;
  padding: 0vh ;
`;
// padding: 5vh 0px > 스크롤 자동으로 맞춰준다
const Contents = styled.div`
  margin: 20px 50px;
  padding: 10px;
  text-align: center;
  justify-content: center;
`;

const InputBox = styled.input`
  color: black;
  border: solid 2px;
  border-radius: 5px; //박스 모서리 각
  font-size: 15px; // 글자크기
  width: 100%; // 박스 가로길이
  height: 30px; // 박스 세로길이
  margin-bottom: 10px; // 박스 사이끼리 거리
  display: flex; 
  text-align: center; // 상자 가운데로 오게해준다
`;

const AddButton = styled.div`
  background-color: #395b64;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  width: 200px;
  margin: 10px auto 20px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer; // 커서인식
`;

export default Add;
