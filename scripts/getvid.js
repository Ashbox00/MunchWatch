let vidurl = "  http://www.youtube.com/watch?v="    

fetch("https://api.cgwe.st/recommended",{
    method: "GET"
})
.then((res) => { return res.json(); })
.then((json) => { 
    const table = document.getElementById("table");
    for (let vid of json) {
        let id = vid[0];
        let count = vid[1];
        let title = vid[2];
        let image = vid[3];
       

        const row = table.insertRow();
        const urlEl = row.insertCell();
        var div = document.createElement('div');
        var imgdiv = document.createElement('img');
        imgdiv.src = image
        imgdiv.width = 150;
        imgdiv.height  = 100;
        var txtdiv = document.createElement('div');
        div.appendChild(imgdiv);
        
        
        div.appendChild(txtdiv);
        txtdiv.innerHTML = `<a href="#">${title}</a>`;
        


        urlEl.appendChild(div);
        //urlEl.innerHTML = `<a href="#">${title}</a>`;
        urlEl.onclick = () => {
            window.open(vidurl + id, '_blank').focus();
        };
        const countEl = row.insertCell();
        countEl.textContent = count;    
      
     
        console.log(id, count,title,image);

    }
 });
