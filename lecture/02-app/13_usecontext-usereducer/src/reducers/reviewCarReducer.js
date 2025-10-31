/*
1) 상태(state)를 먼저 정의하기

“앱에서 관리해야 하는 데이터가 뭐지?”부터 생각.

👉 장바구니라면 관리해야 할 건 상품 목록(items)
상품에는 id, name, price, quantity가 포함될 수 있음.
*/
const initialState = {
  items: []  // 상품 목록
}

/**
 2) 상태를 바꿀 함수(reducer)를 만든다
“이 상태를 어떻게 바꾸는 상황들이 있을까?”를 떠올림.
즉, ‘장바구니에서 일어날 수 있는 일(행동)’들을 생각.
이런 걸 액션(action) 이라고 부름.

장바구니추가기능 - 수량만 추가할 경우 / 신규 추가할 경우 
장바구니의 아이템 삭제 
장바구니아이템 수량 추가
장바구니아이템 수량 감소
장바구니전체삭제
 */
function reviewCarReducer(state, action) {
  switch(action.type){
    case 'ADD-ITEM':

    // 0)장바구니에 이미 존재하는 상품이 있는지 찾아서 existingItem에 저장”
    const existingItem = state.items.find((item) => item.id === action.payload.id )

    if(existingItem) {
      return{
        ...state, //기존 상태를 그대로 복사 
            // state.items → 현재 장바구니 안에 들어있는 상품 배열
                        // .map() → 배열의 각 요소(item)를 하나씩 순회하면서 새 배열을 만드는 함수
        items: state.items.map((item) =>
                          //payload = action에 담긴 데이터 
                          // payload 자체가 “이 액션이 동작할 대상”**을 담고 있는 값
          item.id === action.payload ? {...item, quantity: item.quantity +1}
                                     : item
        )
      }
    }else {
        return {
          ...state, //리듀서에서 항상 새 상태 객체를 반환, 기존 상태의 **모든 속성(예: items, totalPrice, user 등)**을 그대로 복사
          items: [ //새 상태 객체 안에서 items라는 속성을 새 배열로 바꾸겠다는 의미
            ...state.itmes, //기존 배열을 “풀어서 새 배열 안에 넣는다”
            {...action.payload, quantity:1}
          ]
        }
      }

    //액션2) 장바구니안에 있는 아이템 삭제 
    //삭제버튼 클릭스 그 아이템만 삭제되어야함 => filter 그 아이템만 제외한 나머지를 남겨야함 => 제외. 삭제효과
    case 'DELETE-ITEM':
      return {
        ...state,
        items: state.item.fliter((item) => item.id !== action.payload.id )
      }

    //액션3) 장바구니 아이템 수량 증가
    //사고)   플러스버튼을 클릭하면 해당 아이템의 숫자가 증가됌 . 장바구니안에있는 기존 아이템가지고 작업 => 배열 돌아야지 => map생각, 
    // 해당 id가 맞는지 안맞는지도 생각 => 삼항연산자
    case 'PLUS-ITEM':
      return{
        ...state,         
                        //map 돌면서, id가 일치하는 상품만 수량 증가 / 그게 아니라면 그대로 두기
        items: state.items.map((item) => 
          item.id === action.payload ? {...item, quantity: item.quantity +1} //...item, :기존 속성(id, name)은 그대로 두고, quantity: item.quantity +1 quantity만 새 값으로 덮어쓰기
                                      : item
        )
      }

      // 액션4) 장바구니 아이템 수량 감소 (필요한 데이터: 수량 감소할 아이템 id)
      //사고 ) 마이너스 클릭시 해당 아이템 숫자 감소 
    case 'MINUS-ITEM':
      return {
        ...state,   //@해당하는 아이템에서만 -버튼을 누르는건데 map 이걸 왜씀?

        items: state.items.map((item) => 
          item.id === action.payload ? {...item, quantity: Math.max(item.quantity -1, 1)} // * `.max()` → 전달한 값들 중 **가장 큰 값** 반환
                                    : item
        
        )
      }

       //액션5) 장바구니 전체 삭제
    case 'ALL-DELETE':
      return initialState;

      //현재상태
      default:
        return state;
      
  }
}

export {initialState, reviewCarReducer}

/**
 * ...state → 기존 상태 객체 복사

이유: 리듀서에서는 상태 객체 전체를 새로 반환해야 하는데,
장바구니에는 items 외에도 다른 상태가 있을 수 있음 (예: user, totalPrice 등)

...state 없으면 다른 속성은 날아감 → 기존 상태를 유지하기 위해 필요
 */