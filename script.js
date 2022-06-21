let url = 'http://localhost:3001/users'

function react() {
    axios.get(url)
        .then(res => {
            reload(res.data)
        })
        .catch(err => console.log(err))
}

react()

function reload(arr) {
    let boxes1 = document.querySelector('.boxes')
    let boxes2 = document.querySelector('.boxes2')
    let boxes3 = document.querySelector('.boxes3')

    boxes1.innerHTML = ''
    boxes2.innerHTML = ''
    boxes3.innerHTML = ''
    for(let item of arr) {
        if(item.year >= 2009) {
            boxes1.innerHTML += `
            <div class="item" id="${item.id_}">
                <h3>${item.manufacturer}</h3>
                <div class="age">
                    <span>
                        Vin: ${item.vin}
                    </span>
                    <span>
                        Year: ${item.year}
                    </span>
                </div>
                <button>Подробнее</button>
            </div>
            `
            let data = boxes1.childNodes
            let arr = []
            data.forEach((elem,index) => {
                if(index % 2 !== 0){
                    arr.push(elem)
                }
            });
            arr.forEach(element => {
                element.style.display = 'none' 
            });
            arr.splice(0,6).forEach(element => { 
                element.style.display = 'block'
                element.style.display = 'flex'
            });
            let to25 = document.querySelector('.href_show1')
            to25.onclick = () => {
                arr.forEach(element => { 
                    element.style.display = 'block'
                    element.style.display = 'flex'
                });
            }
            
        }else if(item.year <= 2009 && item.year >= 2002) {
            boxes2.innerHTML += `
            <div class="item" id="${item.id_}">
                <h3>${item.manufacturer}</h3>
                <div class="age">
                    <span>
                        Vin: ${item.vin}
                    </span>
                    <span>
                        Year: ${item.year}
                    </span>
                </div>
                <button>Подробнее</button>
            </div>
            `
            let data = boxes2.childNodes
            let arr = []
            data.forEach((elem,index) => {
                if(index % 2 !== 0){
                    arr.push(elem)
                }
            });
            arr.forEach(element => {
                element.style.display = 'none' 
            });
            arr.splice(0,6).forEach(element => { 
                element.style.display = 'block'
                element.style.display = 'flex'
            });

            let to50 = document.querySelector('.href_show2')
            to50.onclick = () => {
                arr.forEach(element => { 
                    element.style.display = 'block'
                    element.style.display = 'flex'
                });
            }
        }else if(item.year < 2002) {
            boxes3.innerHTML += `
            <div class="item" id="${item.id}">
                <h3>${item.manufacturer}</h3>
                <div class="age">
                    <span>
                        Vin: ${item.vin}
                    </span>
                    <span>
                        Year: ${item.year}
                    </span>
                </div>
                <button>Подробнее</button>
            </div>
            `
            let data = boxes3.childNodes
            let arr = []
            data.forEach((elem,index) => {
                if(index % 2 !== 0){
                    arr.push(elem)
                }
            });
            arr.forEach(element => {
                element.style.display = 'none' 
            });
            arr.splice(0,6).forEach(element => { 
                element.style.display = 'block'
                element.style.display = 'flex'
            });

            let from50 = document.querySelector('.href_show3')
            from50.onclick = () => {
                arr.forEach(element => { 
                    element.style.display = 'block'
                    element.style.display = 'flex'
                });
            }
        }
        
    }   
}