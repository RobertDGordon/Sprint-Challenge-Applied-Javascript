// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabLocation = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        // console.log (response)
        response.data.topics.forEach(item=>{
            // console.log (item)
            tabLocation.append(createTab(item))
        })
    })

function createTab(topic){
    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = topic;

    tab.addEventListener('click', ()=>{
        const cardType = document.querySelectorAll('.card');
        // console.log (cardType, topic);
        if (topic === 'node.js'){
            topic = 'node';
        }
        for (let i = 0; i < cardType.length; i++){
            if (cardType[i].dataset.type === topic){
                cardType[i].style.display = 'inherit';
            }else{
                cardType[i].style.display = 'none';
            }
        }
    })

    return tab;
}