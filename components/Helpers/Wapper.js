const Wrapper=props=>{
    return props.children;

};

//예를 들어서 addUser에 사용한다면 ,addUser에서 ㅈWrapper을 임포트해준다음에 감싸줄 친구를 ㅈWrapper안에 넣어준다. 
//React.Fragment :


//포탈은 두가지가 필요함 : 1. 컴포넌트를 이동시킬 수 있는 장소, 2. 그컴포넌트가 이동했음을 알려주는 것
export default Wrapper;