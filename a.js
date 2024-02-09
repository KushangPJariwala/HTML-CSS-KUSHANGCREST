// import {Pagination} from 'antd';

const p = document.querySelector ('.pagi');
console.log ('p', p);
let html = '<p>My new paragraph.</p>';
p.insertAdjacentHTML ('afterend', html);

const myButton = document.createElement ('button');
myButton.innerHTML = 'Primary Button';
myButton.classList.add ('ant-btn', 'ant-btn-primary');

document.body.appendChild (myButton);

document.addEventListener ('DOMContentLoaded', function () {
  const paginationContainer = document.getElementById ('pagination-container');

  if (window.antd && window.antd.Pagination) {
    const pagination = new window.antd.Pagination ({
      total: 50,
      pageSize: 10,
      onChange: (page, pageSize) => {
        console.log (`Page changed to ${page}, pageSize: ${pageSize}`);
      },
    });

    paginationContainer.appendChild (pagination.render ());
  } else {
    console.error (
      'Ant Design or Pagination component not found. Check your paths/URLs.'
    );
  }
});
