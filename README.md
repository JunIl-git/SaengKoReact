# React Class Component로 CRUD 만들기  

<h2>"C"reate</h2>
<h2>"R"ead</h2>
<h2>"U"pdate</h2>
<h2>"D"elete</h2>

1. Class문법으로 CRUD기능 구현
2. 하위component로 props전달, 하위 component에서 event를 이용한 state변경
3. lifeCycle 파악
4. React의 immutable 파악

<a href="https://junil-git.github.io/SaengKoReact/" target="_blank">CRUD 결과물 클릭!</a>



<h2>배운 점</h2>

1. funciton 내에서 this를 사용하고 싶으면 this를 바인딩 또는 arrow function을 사용한다.

2. 상위 component에서 하위 component에 값을 주고 싶으면 props를 사용하고
   하위 componenet에서 상위 component의 값을 바꾸기 위해서는 event를 활용한다. 

3. Array의 push가 아닌 concat을 사용하여 원본 데이터를 보존하고 새로운 데이터로 갱신한다.
   (push를 사용하면 기존데이터에 추가되기 때문에 나중 퍼포먼스를 개선할 때 까다롭다.)
    shouldComponentUpdate함수를 사용하기 위해선 concat필수
    shouldComponentUpdate(newProps, newState){          //Nav component
        console.log(newProps.data, this.props.data);

        if(newProps.data === this.props.data){          
            return false;
        }
        return true;
    }

    위에 shouldComponentUpdate()를 사용했을 때 concat을 사용함으로 인해
    newProps.data(바뀐값)와 this.props.data(이전값)을 비교할 수 있다.
    push를 사용할 경우 this.state.component의  newProps와 this.props.data 둘 다 갱신이 되어 항상 값이 같다.

    +추가 Array.from()을 사용해서 기존 배열을 복사한다.
     let _contents = Array.from(this.state.contents);

4. Class component의 lifeCycle(생명 주기)
    shouldComponentUpdate()는 render전에 호출이 되며,
    return 값이 false이면 render함수는 호출되지 않는다.

5. 리팩토링 팁
   []를 이용하여 중복 없애기
   inputFormHandler(e){
     this.setState({[e.target.name]:e.target.value});
   }
   해당 태그에 name속성을 넣으면 적용이 된다.

6. window.confirm()을 이용하여 확인창을 받고 true값을 받으면 코드를 진행시킨다.

    if(window.confirm('삭제하시겠습니까?')){ 
              const _contents = Array.from(this.state.contents);
              for(let i=0; i<_contents.length; i++){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
              }
              this.setState({
                mode : 'welcome',
                contents : _contents
              })
            }
    주의) 대화 상자가 닫힐 때까지 다른 모든 인터페이스에 접근할 수 없기 때문에 모달창은 남발하지 않는다.