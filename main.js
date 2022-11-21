/*
1. footer의 마트 추가버튼으로 텍스트를 불러와서 데이터리스트에서 어느 마트인지 고르거나 입력
2. 마트 추가버튼과 쇼핑리스트 입력란이 같이 불러와진다.
3. 입력란에 쇼핑 아이템을 입력하고 플러스 버튼으로 추가
4. 추가된 쇼핑 아이템 옆에는 휴지통아이콘으로 삭제 가능
5. 입력란은 추가된 아이템 밑에 자동 생성
*/

const items = document.querySelector('.items'); //부모
const input = document.querySelector('.input__item');
const plusBtn = document.querySelector('.item__plus');


function onAdd() {
    //1. 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    //2. 새로운 아이템을 만듦( 텍스트 + 삭제 버튼)
    const item = createItem(text);
    //3. items 컨테이너안에 새로만든 아이를 추가
    items.appendChild(item);
    //4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});
    //5. 인풋을 초기화한다.
    input.value = '';
    input.focus();
}

let id = 0; //UUID
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="fa fa-trash-o"></i>
            </button>
        </div>
        <div class="item__divider"></div>`;
    id++;
    return itemRow;
}



plusBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keyup', (event) => {
    // keydown일때
    // if (event.isComposing){return;}
    
    if(event.key === 'Enter'){
        onAdd();
    }
});

//delete
items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});

// sidebar 
const toggleBtn = document.querySelector('.sidebar__toggleBtn');
const closeBtn = document.querySelector('.close__btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () =>  {
sidebar.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
sidebar.classList.remove('open');
});




const container = document.getElementById('input-cont');
const martList = document.querySelector('.mart__list');

// Call addInput() function on button click
function addInput(){
    const input = document.createElement('input');
    // input.placeholder = 'Type something';
    container.appendChild(input);
    const place = createPlace(text);
    martList.appendChild(place);

}




