# 생활코딩 -CRUD- "Class" component React! 

Learn
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

4. Class component의 lifeCycle(생명 주기)
    shouldComponentUpdate()는 render전에 호출이 되며,
    return 값이 false이면 render함수는 호출되지 않는다.

5. 리팩토링 팁
   []를 이용하여 중복 없애기
   inputFormHandler(e){
     this.setState({[e.target.name]:e.target.value});
   }
   해당 태그에 name속성을 넣으면 적용이 된다.