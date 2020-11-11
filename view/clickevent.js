let a_element = document.getElementsByTagName('a');
console.log(a_element)
for (let i = 0; i < a_element.length; i++) {
    a_element[i].addEventListener('click', () => {
        const formData = new FormData();
        console.log(a_element[i].getAttribute("href"))

        formData.append('url', a_element[i].getAttribute("href"));
        fetch('http://127.0.01:8000/api/click', {
          method: 'POST',
          body: formData,
        })
    })
};


