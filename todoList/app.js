var i=0;
document.getElementById('submit').addEventListener('click',function(){
    i++;
    event.preventDefault();
    let input = document.getElementById('input').value;
    //getting ID's so that we can implement in index.html
    let id = '#';
    
    
    var list = document.getElementById('list');
    // console.log(item);
    // console.log(list);
    
    
    //creting li element and adding ID's and class
    let item = document.createElement('li');
    let link = document.createElement('a');


    item.className = 'list-group-item';
    item.style.marginTop = '10px';
    item.id = 'listItems';
    id += item.id;
    link.className = 'pull-right';
    
    link.setAttribute('href',id);
    id = item.id;
    link.innerHTML = '<i class="icon-remove textdecoration-none"></i>';


    item.appendChild(document.createTextNode(input));
    item.appendChild(link);

    console.log(link);
    list.appendChild(item);


    let remove = document.querySelectorAll('a');
    for(let i=0;i<remove.length;i++)
    {
        remove[i].addEventListener('click',function(event){
           //remove[i].parentElement.remove();
           remove[i].parentElement.style.textDecoration = 'Line-through';
        });
    }
    input='';
});





var ul = document.getElementsByTagName('li');
document.getElementById('clear').addEventListener('click',function(event){
    var surity;
    if(ul.length!=0)
        {    
            surity = confirm('Are you sure you have completed all your work...');
            if(surity == true)
                document.getElementById("list").innerHTML = '';
        }
    i=0;
});


