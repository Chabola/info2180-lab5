window.onload = function() {
    let btn = document.getElementById("lookup");
    let btn1 = document.getElementById("lookup1");
    let text = document.getElementById("country");
    let result = document.getElementById("result");
    btn.addEventListener('click', function(element) {
        element.preventDefault();
        fetch("world.php?query="+text.value+"&context=")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => console.log('There was an error: ' + error));
        
    });
    btn1.addEventListener('click', function(element) {
        element.preventDefault();
        fetch("world.php?query="+text.value+"&context=cities")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => console.log('There was an error: ' + error));
        
    });
}